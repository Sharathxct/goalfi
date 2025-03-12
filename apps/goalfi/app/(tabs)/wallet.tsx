import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

export default function WalletScreen() {
  return (
<ScrollView className='flex-1'>

<SafeAreaView className="flex-1 bg-white">

    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
        <View className="p-6">
          <Text className="text-3xl font-bold mb-2">Wallet</Text>
          <Text className="text-gray-600 mb-8">
            Manage your stakes and rewards
          </Text>

          <View className="bg-blue-50 rounded-xl p-6 mb-8">
            <Text className="text-gray-600 mb-2">Available Balance</Text>
            <Text className="text-4xl font-bold mb-4">$0.00</Text>
            <View className="flex-row">
              <TouchableOpacity className="bg-blue-500 rounded-full py-3 px-6 flex-row items-center mr-4">
                <FontAwesome name="plus" size={16} color="white" className="mr-2" />
                <Text className="text-white font-semibold">Add Money</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white border border-blue-500 rounded-full py-3 px-6 flex-row items-center">
                <FontAwesome name="arrow-right" size={16} color="#3B82F6" className="mr-2" />
                <Text className="text-blue-500 font-semibold">Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-lg font-semibold mb-4">Transaction History</Text>
            <View className="bg-gray-50 rounded-xl p-4 mb-2">
              <Text className="text-gray-400 text-center">
                No transactions yet
              </Text>
            </View>
          </View>

          <View className="bg-gray-50 rounded-xl p-6">
            <Text className="text-lg font-semibold mb-4">Quick Actions</Text>
            <View className="flex-row justify-between">
              <TouchableOpacity className="items-center">
                <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center mb-2">
                  <FontAwesome name="credit-card" size={20} color="#3B82F6" />
                </View>
                <Text className="text-gray-600">Add Card</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <View className="w-12 h-12 bg-green-100 rounded-full items-center justify-center mb-2">
                  <FontAwesome name="bank" size={20} color="#10B981" />
                </View>
                <Text className="text-gray-600">Bank</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center">
                <View className="w-12 h-12 bg-purple-100 rounded-full items-center justify-center mb-2">
                  <FontAwesome name="history" size={20} color="#8B5CF6" />
                </View>
                <Text className="text-gray-600">History</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

    </View>
    </SafeAreaView>
    </ScrollView>

  );
}

