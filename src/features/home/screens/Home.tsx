import { View } from 'react-native';
import { styles } from './Home.styles';
import { HomeHeader } from '../components/HomeHeader';
import { Goals } from '../components/Goals';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Goals />
    </View>
  );
};
