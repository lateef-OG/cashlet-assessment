import { colors } from '@/theme/colors';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: Math.max(30, top) }]}>
      <Text style={styles.greetingText}>Afternoon Jo</Text>
      <Text style={styles.subText}>Here&apos;s the latest</Text>
      <Text style={styles.totalFundsAmount}>KES 42,000</Text>
      <Text style={styles.subText}>Total funds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingText: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '600',
  },
  header: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  subText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '400',
  },
  totalFundsAmount: {
    color: colors.primaryGreen,
    fontSize: 30,
    fontWeight: '700',
    marginTop: 8,
  },
});
