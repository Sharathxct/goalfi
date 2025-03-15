import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { usePrivy } from '@privy-io/expo';

const WalletScreen = () => {
  const { user } = usePrivy();

  return (
<SafeAreaView className="flex-1 bg-gray-50">

<ScrollView className="flex-1 bg-gray-50">
      <View className="p-5 pt-15 bg-white">
        <Text className="text-2xl font-bold text-gray-900">Wallet</Text>
      </View>

      <View className="mt-5 p-5">
        <Text className="text-lg font-semibold text-gray-700 mb-3">Balance</Text>
        <View className="bg-white rounded-lg p-5 shadow-sm">
          <Text className="text-sm text-gray-500 mb-1">Available</Text>
          <Text className="text-4xl font-bold text-gray-900">0.00 USDC</Text>
        </View>
      </View>

      <View className="mt-5 p-5">
        <Text className="text-lg font-semibold text-gray-700 mb-3">Recent Transactions</Text>
        <View className="bg-white rounded-lg p-10 items-center justify-center shadow-sm">
          <Text className="text-base text-gray-400">No transactions yet</Text>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>

  );
};

export default WalletScreen; 