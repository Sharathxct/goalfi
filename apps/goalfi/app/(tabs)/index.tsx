import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">

    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView className="flex-1">
        <View className="p-6">
          <Text className="text-3xl font-bold mb-2">Welcome to Goalfi</Text>
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
      </ScrollView>
    </View>
    </SafeAreaView>

  );
}
