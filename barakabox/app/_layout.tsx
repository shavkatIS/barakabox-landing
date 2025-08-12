import React from 'react';
import { Stack } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { colors } from 'src/theme/colors';
import { theme } from 'src/theme';
import { Text } from 'src/components/ui';

const queryClient = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_700Bold });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShadowVisible: false, headerTitleStyle: { fontFamily: theme.fonts.semibold } }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="product/[id]" options={{ title: 'Product' }} />
          <Stack.Screen name="checkout/index" options={{ title: 'Checkout' }} />
          <Stack.Screen name="orders/index" options={{ title: 'Orders' }} />
        </Stack>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}