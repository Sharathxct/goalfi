import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import {usePrivy} from '@privy-io/expo';

export default function ProfileScreen() {
  const {logout} = usePrivy();

  return (
    <ScrollView className='flex-1'>

    <SafeAreaView className="flex-1 bg-white">

    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
        <View className="p-6">
          <View className="items-center mb-8">
            <View className="w-24 h-24 rounded-full bg-gray-200 mb-4 items-center justify-center">
              <FontAwesome name="user" size={40} color="#9CA3AF" />
            </View>
            <Text className="text-2xl font-bold mb-1">John Doe</Text>
            <Text className="text-gray-600">john@example.com</Text>
          </View>

          <View className="bg-blue-50 rounded-xl p-6 mb-8">
            <Text className="text-lg font-semibold mb-4">Statistics</Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-2xl font-bold text-blue-500">$0</Text>
                <Text className="text-gray-600">Total Staked</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-green-500">0%</Text>
                <Text className="text-gray-600">Success Rate</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold text-purple-500">0</Text>
                <Text className="text-gray-600">Goals Set</Text>
              </View>
            </View>
          </View>

          <View className="bg-gray-50 rounded-xl">
            <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200">
              <FontAwesome name="bell" size={20} color="#4B5563" className="w-8" />
              <Text className="flex-1 text-gray-800">Notifications</Text>
              <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200">
              <FontAwesome name="lock" size={20} color="#4B5563" className="w-8" />
              <Text className="flex-1 text-gray-800">Privacy</Text>
              <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200">
              <FontAwesome name="question-circle" size={20} color="#4B5563" className="w-8" />
              <Text className="flex-1 text-gray-800">Help & Support</Text>
              <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-4" onPress={logout}>
              <FontAwesome name="sign-out" size={20} color="#EF4444" className="w-8" />
              <Text className="flex-1 text-red-500">Sign Out</Text>
              <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>
    </View>
    </SafeAreaView>
    </ScrollView>

  );
}
