import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export const unstable_settings = {
  initialRouteName: 'explore',
};

export default function MainTabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#b3290f',
        tabBarInactiveTintColor: '#5a413b',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          fontFamily: Platform.select({
            ios: 'PlusJakartaSans-SemiBold',
            default: 'sans-serif-medium',
          }),
        },
        tabBarStyle: {
          backgroundColor: 'rgba(249, 249, 254, 0.85)',
          borderTopWidth: 0,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          height: Platform.OS === 'ios' ? 80 : 64,
          paddingBottom: Platform.OS === 'ios' ? 24 : 8,
          paddingTop: 8,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 0.05,
          shadowRadius: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
