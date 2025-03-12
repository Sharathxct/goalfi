import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function NameScreen() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (name.trim()) {
      router.push('/photo');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold mb-2">What's your name?</Text>
        <Text className="text-gray-600 mb-8">
          This is how other users will see you
        </Text>
        
        <TextInput
          className="bg-gray-100 rounded-lg px-4 py-3 mb-6"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          autoComplete="name"
        />

        <TouchableOpacity
          onPress={handleContinue}
          className={`rounded-full py-4 ${
            name.trim() ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
} 