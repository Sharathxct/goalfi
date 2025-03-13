import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { SplashScreen, useRouter } from 'expo-router';
import { verifyInstallation } from 'nativewind';

// Demo authentication function
// const demoAuth = () => {
//   // Simulate an authentication process
//   console.log("User authenticated (demo)");
//   // Here you can add logic to set user state or navigate to the onboarding page
// };

export default function HomeScreen() {
  verifyInstallation();
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true); // State to manage loading

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     demoAuth(); // Call demo auth
  //     setIsLoading(false); // Set loading to false after delay
  //     router.replace('/(auth)/onboarding'); // Redirect to email screen
  //   }, 2000); // Show splash screen for 2 seconds

  //   return () => clearTimeout(timer); // Cleanup timer on unmount
  // }, []); // Empty dependency array to run once on mount

  // if (isLoading) {
  //   return (
  //     <View className="flex-1 justify-center items-center">
  //       <ActivityIndicator size="large" color="#3B82F6" />
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <StatusBar style="dark" />
        <View className="p-6">
          <Text className="text-3xl font-bold mb-2">Welcome to Goalfi!</Text>
          <Text className="text-gray-600 mb-8">
            Start setting and achieving your goals today
          </Text>

          <View className="bg-blue-50 rounded-xl p-6 mb-8">
            <Text className="text-lg font-semibold mb-2">No active goals</Text>
            <Text className="text-gray-600 mb-4">
              Create your first goal and start your journey to success
            </Text>
            <TouchableOpacity className="bg-blue-500 rounded-full py-3 px-6 flex-row items-center justify-center">
              <FontAwesome name="plus" size={16} color="white" className="mr-2" />
              <Text className="text-white font-semibold ml-2">Create Goal</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-gray-50 rounded-xl p-6">
            <Text className="text-lg font-semibold mb-4">Quick Stats</Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-2xl font-bold text-blue-500">$0</Text>
                <Text className="text-gray-600">Staked</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-500">0</Text>
                <Text className="text-gray-600">Completed</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-purple-500">0</Text>
                <Text className="text-gray-600">In Progress</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
