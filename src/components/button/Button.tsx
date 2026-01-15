import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '@/theme/colors';

export const Button = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          transform: [{ scale: pressed ? 0.99 : 1 }],
        },
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
    borderRadius: 22,
    marginHorizontal: 16,
    paddingVertical: 14,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    fontWeight: '600',
  },
});
