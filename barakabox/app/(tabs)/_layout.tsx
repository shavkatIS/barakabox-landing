import React from 'react';
import { Tabs } from 'expo-router';
import { theme } from 'src/theme';
import { useCartStore } from 'src/store/cart';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  const count = useCartStore((s) => s.getCount());
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: { height: 60, paddingBottom: 8, paddingTop: 6 },
        headerTitleStyle: { fontFamily: theme.fonts.semibold },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarBadge: count > 0 ? count : undefined,
          tabBarIcon: ({ color, size }) => <Ionicons name="cart-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}