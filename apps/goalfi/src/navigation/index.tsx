import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinkingOptions } from '@react-navigation/native';
import { Platform } from 'react-native';
import { usePrivy } from '@privy-io/expo';
import { FontAwesome } from '@expo/vector-icons';

// Auth Screens
import Welcome from '../screens/welcome/welcome';
import EmailScreen from '../screens/auth/Email';
import OtpScreen from '../screens/auth/otp';

// Main App Screens
import Home from "../screens/Home";
import ProfileScreen from '../screens/Profile/index';
import WalletScreen from '../screens/Wallet/index';
import TestScreen from '../screens/test';

// Define the type for our root stack param list
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

// Define the type for our auth stack param list
export type AuthStackParamList = {
  Welcome: undefined;
  EmailScreen: { email?: string };
  OtpScreen: { email?: string };
};

// Define the type for our main tab navigator
export type MainTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Profile: undefined;
  Test: undefined;
};

// Create the navigators
const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

// Configure deep linking
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    // Add your app's deep link prefixes here
    'goalfi://',
    'https://goalfi.app',
    'https://*.goalfi.app',
  ],
  config: {
    screens: {
      Auth: {
        screens: {
          Welcome: 'welcome',
          EmailScreen: 'email',
          OtpScreen: 'otp',
        },
      },
      Main: {
        screens: {
          Home: 'home',
          Wallet: 'wallet',
          Profile: 'profile',
        },
      },
    },
  },
};

// Auth Navigator
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="EmailScreen" component={EmailScreen} />
      <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
    </AuthStack.Navigator>
  );
};

// Main Tab Navigator
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF7D26',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          height: Platform.OS === 'ios' ? 90 : 70,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="credit-card" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Root Navigator
const AppNavigation = () => {
  const { user, isReady } = usePrivy();
  const isAuthenticated = !!user;

  if (!isReady) {
    // You could return a loading screen here
    return null;
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
