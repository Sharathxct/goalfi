import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const TestScreen = () => {
  return (
<SafeAreaView className="flex-1 bg-gray-50">

<ScrollView className="flex-1 bg-gray-50">
      <View className="p-5 pt-15 bg-white">
        <Text className="text-2xl font-bold text-gray-900">Test</Text>
      </View>

    </ScrollView>
    </SafeAreaView>

  );
};

export default TestScreen; 