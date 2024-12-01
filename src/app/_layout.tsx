import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  ThemeProvider,
  DefaultTheme as DefaultNavigationTheme,
} from '@react-navigation/native';

import { LoaderProvider } from '@context/loader';

import { LightTheme } from '@components';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={LightTheme}>
        <ThemeProvider
          value={{
            dark: false,
            colors: {
              ...DefaultNavigationTheme.colors,
              primary: LightTheme.colors.primary,
            },
            fonts: DefaultNavigationTheme.fonts,
          }}
        >
          <LoaderProvider>
            <Stack />
          </LoaderProvider>
        </ThemeProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
