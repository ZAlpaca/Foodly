import "./globals.css";

import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';

import {
  useFonts,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Configure Reanimated to suppress "Reading from value during component render" warnings
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });

  // Force-hide splash after 3 seconds even if fonts haven't loaded
  // Prevents white screen of death when Google Fonts CDN is slow/unreachable
  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Hide splash when fonts are ready (cancels the timeout since component re-renders)
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Show loading indicator instead of null to prevent blank screen
  if (!fontsLoaded && !fontError) {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <Text className="text-on-surface font-sans text-base">Loading...</Text>
      </View>
    );
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <View className="flex-1">
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            animationDuration: 400,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="(main)" />
        </Stack>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
