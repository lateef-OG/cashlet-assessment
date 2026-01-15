import { StyleSheet, View } from 'react-native';
import { HomeHeader } from '../components/HomeHeader';
import { Goals } from '../components/Goals';
import { colors } from '@/theme/colors';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Goals />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBlue,
    flex: 1,
  },
});
