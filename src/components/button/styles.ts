import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
