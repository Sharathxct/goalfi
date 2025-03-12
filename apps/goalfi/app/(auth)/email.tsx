import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function EmailScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (email.trim()) {
      router.push('/otp');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold mb-2">What's your email?</Text>
        <Text className="text-gray-600 mb-8">
          We'll use this to keep you updated on your goals
        </Text>
        
        <TextInput
          className="bg-gray-100 rounded-lg px-4 py-3 mb-6"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />

        <TouchableOpacity
          onPress={handleContinue}
          className={`rounded-full py-4 ${
            email.trim() ? 'bg-blue-500' : 'bg-gray-300'
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