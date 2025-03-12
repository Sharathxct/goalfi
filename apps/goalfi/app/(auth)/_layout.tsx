import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView } from 'react-native';

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
        <Stack>
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
          <Stack.Screen name="email" options={{ headerShown: false }} />
          <Stack.Screen name="otp" options={{ headerShown: false }} />
          <Stack.Screen name="name" options={{ headerShown: false }} />
          <Stack.Screen name="photo" options={{ headerShown: false }} />
        </Stack>
  );
} 