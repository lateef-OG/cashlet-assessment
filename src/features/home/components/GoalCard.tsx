import { colors } from '@/theme/colors';
import ChevronRight from '@/assets/icons/ChevronRight.svg';
import { StyleSheet, Text, View } from 'react-native';

export const GoalCard = ({
  goal,
}: {
  goal: { name: string; amount: string };
}) => {
  return (
    <View style={styles.goalCard}>
      <View style={styles.goalDetails}>
        <View>
          <Text style={styles.goalTitle}>{goal.name}</Text>
          <Text style={styles.goalAmount}>{goal.amount}</Text>
        </View>
        <View style={styles.finishGoalButton}>
          <Text style={styles.finishGoalButtonText}>Finish Goal</Text>
        </View>
      </View>
      <View style={styles.goalArrowContainer}>
        <ChevronRight width={20} height={20} color={colors.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  finishGoalButton: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  finishGoalButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600',
  },
  goalAmount: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 2,
  },
  goalArrowContainer: {
    alignItems: 'center',
    borderLeftColor: colors.textSecondary,
    borderLeftWidth: 0.5,
    justifyContent: 'center',
    width: 35,
  },
  goalCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    marginBottom: 16,
    marginHorizontal: 4,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  goalDetails: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  goalTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
});
