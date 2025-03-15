import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { usePrivy } from '@privy-io/expo';

const Home = () => {
  const { user } = usePrivy();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">

<ScrollView className="flex-1 bg-gray-50">
      <View className="p-5 pt-15 bg-white">
        <Text className="text-2xl font-bold text-gray-900 mb-2">Home</Text>
        <Text className="text-base text-gray-500">
          Hello, {user?.id ? user.id.substring(0, 8) : 'User'}!
        </Text>
      </View>

      <View className="mt-5 p-5">
        <Text className="text-lg font-semibold text-gray-700 mb-3">Your Goals</Text>
        <View className="bg-white rounded-lg p-6 items-center shadow-sm">
          <Text className="text-base text-gray-500 mb-4 text-center">
            You don't have any active goals yet.
          </Text>
          <TouchableOpacity className="bg-orange-500 py-3 px-6 rounded-md">
            <Text className="text-white font-semibold text-sm">Create a Goal</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-5 p-5">
        <Text className="text-lg font-semibold text-gray-700 mb-3">Trending Goals</Text>
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
          <Text className="text-base font-semibold text-gray-900 mb-2">Daily Workout Challenge</Text>
          <Text className="text-sm text-gray-500 mb-4 leading-5">
            Commit to working out for 30 minutes every day for 30 days.
          </Text>
          <View className="flex-row justify-between">
            <Text className="text-xs text-gray-700 font-medium">24 participants</Text>
            <Text className="text-xs text-gray-700 font-medium">$1,200 pool</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
