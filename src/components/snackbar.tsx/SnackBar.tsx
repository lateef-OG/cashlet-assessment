import { colors } from '@/theme/colors';
import React, { useCallback, useEffect, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import Close from '@/assets/icons/Close.svg';

type SnackbarOptions = {
  text: string;
  secondaryText?: string;
  duration?: number;
};

const LENGTH = 10000;

let showSnackbar: (options: SnackbarOptions) => void;
let hideSnackbar: () => void;

export const Snackbar = {
  LENGTH,

  show(options: SnackbarOptions) {
    showSnackbar?.(options);
  },

  dismiss() {
    hideSnackbar?.();
  },

  _register(showFn: typeof showSnackbar, hideFn: typeof hideSnackbar) {
    showSnackbar = showFn;
    hideSnackbar = hideFn;
  },
};

export const SnackbarProvider = () => {
  const [translateY] = useState(() => new Animated.Value(-120));

  const [options, setOptions] = useState<SnackbarOptions | null>(null);

  const hide = useCallback(() => {
    Animated.timing(translateY, {
      toValue: -120,
      duration: 250,
      useNativeDriver: true,
    }).start(() => setOptions(null));
  }, [translateY]);

  const show = useCallback(
    (opts: any) => {
      setOptions(opts);

      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setTimeout(hide, opts.duration || Snackbar.LENGTH);
    },
    [hide, translateY],
  );

  useEffect(() => {
    Snackbar._register(show, hide);
  }, [show, hide]);

  if (!options) return null;

  return (
    <Animated.View
      style={[styles.snackbarContainer, { transform: [{ translateY }] }]}
    >
      <Pressable
        style={styles.snackbarTextContainer}
        onPress={() =>
          setOptions(prev =>
            prev ? { ...prev, text: prev?.secondaryText || '' } : prev,
          )
        }
      >
        <Text style={styles.snackbarText}>{options.text}</Text>
      </Pressable>
      <Pressable onPress={hide}>
        <Close width={30} height={30} color={colors.white} />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  snackbarContainer: {
    alignItems: 'center',
    backgroundColor: colors.snackbarPink,
    borderRadius: 6,
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginTop: 6,
    paddingRight: 16,
    position: 'absolute',
    top: 0,
    zIndex: 999,
  },
  snackbarText: {
    color: colors.white,
    fontSize: 14,
  },
  snackbarTextContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
});
