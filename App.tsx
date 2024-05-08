import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import Navigation from 'src/navigation/Navigation';

import { Provider } from 'react-redux';
import { store } from 'src/app/store';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import { AuthProvider } from 'src/context/AuthProvider';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
      console.log(fontError);
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider
      onLayout={onLayoutRootView}
      initialMetrics={initialWindowMetrics}
    >
      <Provider store={store}>
        <AuthProvider>
          <StatusBar style="auto" />
          <Navigation />
        </AuthProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
