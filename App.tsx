/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SnackbarProvider } from '@/components/snackbar.tsx/SnackBar';
import { HomeScreen } from '@/features/home/screens/Home';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SnackbarProvider />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return <HomeScreen />;
}

export default App;
