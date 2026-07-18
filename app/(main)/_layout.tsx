import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)/explore',
};

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 400,
      }}
    >
      {/* Tab screens — no animation between tab switches */}
      <Stack.Screen name="(tabs)" options={{ animation: 'none' }} />

      {/* Detail screens — push from right */}
      <Stack.Screen name="restaurant/[id]" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="dish/[id]" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="checkout" options={{ animation: 'slide_from_right' }} />

      {/* Cart — slide up from bottom (modal) */}
      <Stack.Screen
        name="cart"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
    </Stack>
  );
}
