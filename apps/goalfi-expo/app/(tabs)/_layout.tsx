import { Redirect, Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import FullScreenLoader from '@/components/common/FullScreenLoader';
import useIsLoadingStore from '@/zustand/useIsLoading.store';
import {AuthBoundary} from '@privy-io/expo';

export default function TabsLayout() {
  const isLoading = useIsLoadingStore((state) => state.isLoading);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <AuthBoundary
      loading={<FullScreenLoader />}
      error={(error) => <FullScreenLoader error={error.message} />}
      unauthenticated={<Redirect href="/(auth)/email" />}
    >
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="credit-card" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
    </AuthBoundary>
  );
}
