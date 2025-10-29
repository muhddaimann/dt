import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { ModalHost } from '@/components/molecule/modal';
import { ToastHost } from '@/components/molecule/toast';
import { AlertHost } from '@/components/molecule/alertDialog';
import { OverlayProvider } from '@/contexts/overlayContext';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <OverlayProvider>
      <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <Stack screenOptions={{ headerShown: false }} />
        <PortalHost />
        <AlertHost />
        <ToastHost />
        <ModalHost />
      </ThemeProvider>
    </OverlayProvider>
  );
}
