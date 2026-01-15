import { Button } from '@/components/button/Button';
import { colors } from '@/theme/colors';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { GoalCard } from './GoalCard';
import { Snackbar } from '@/components/snackbar.tsx/SnackBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Goals = () => {
  const { bottom } = useSafeAreaInsets();

  const data = [
    { name: 'Goal 1', amount: 'KES 12,000' },
    { name: 'Goal 2', amount: 'KES 13,000' },
  ];

  const showSnackbar = () => {
    Snackbar.show({
      text: 'This is an in-app notification snackbar to show the user when they perform an action. Clicking it should change the text.',
      action: () => 'User click snackbar',
    });
  };

  return (
    <View
      style={[styles.goalsContainer, { paddingBottom: Math.max(bottom || 24) }]}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <GoalCard goal={item} />}
        ListHeaderComponent={<Text style={styles.goalsTitle}>Your Goals</Text>}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      <Button label="Show Snackbar" onPress={showSnackbar} />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
    paddingBottom: 24,
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  goalsTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 12,
    marginLeft: 20,
  },
});
