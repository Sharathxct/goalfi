import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { usePrivy } from '@privy-io/expo';

const ProfileScreen = () => {
  const { user, logout } = usePrivy();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
<SafeAreaView className="flex-1 bg-gray-50">

<ScrollView className="flex-1 bg-gray-50">
      <View className="p-5 pt-15 bg-white">
        <Text className="text-2xl font-bold text-gray-900">Profile</Text>
      </View>

      <View className="mt-5 p-5">
        <Text className="text-lg font-semibold text-gray-700 mb-3">Account</Text>
        <View className="bg-white rounded-lg p-4 mb-3 shadow-sm">
          <Text className="text-sm text-gray-500 mb-1">User ID</Text>
          <Text className="text-base text-gray-900 font-medium">{user?.id || 'Not available'}</Text>
        </View>
      </View>

      <View className="mt-5 p-5">
        <TouchableOpacity className="bg-red-100 p-4 rounded-lg items-center mt-5" onPress={handleLogout}>
          <Text className="text-red-500 font-semibold text-base">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>

  );
};

export default ProfileScreen; 