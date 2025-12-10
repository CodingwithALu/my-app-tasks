// import useScheme from '@/hooks/use-theme';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Tabs } from 'expo-router';
import React from 'react';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'bule',
        tabBarInactiveTintColor: 'red',
        tabBarStyle: {
          backgroundColor: 'yellow',
          borderTopWidth: 1,
          borderTopColor: 'green',
          height: 90,
          paddingTop: 10,
          paddingBottom: 30
        },
        tabBarLabelStyle: {
          fontWeight: 600,
          fontSize: 14
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Todos',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
