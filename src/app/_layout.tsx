import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LoaderProvider } from '@context/loader';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <LoaderProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </LoaderProvider>
    </SafeAreaProvider>
  );
}
