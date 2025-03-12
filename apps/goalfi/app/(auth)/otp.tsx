import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function OTPScreen() {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (otp.length === 6) {
      router.push('/name');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-bold mb-2">Enter verification code</Text>
        <Text className="text-gray-600 mb-8">
          We've sent a 6-digit code to your email
        </Text>
        
        <TextInput
          className="bg-gray-100 rounded-lg px-4 py-3 mb-6 text-center text-2xl tracking-widest"
          placeholder="000000"
          value={otp}
          onChangeText={text => setOtp(text.replace(/[^0-9]/g, '').slice(0, 6))}
          keyboardType="number-pad"
          maxLength={6}
        />

        <TouchableOpacity
          onPress={handleContinue}
          className={`rounded-full py-4 ${
            otp.length === 6 ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Verify
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-4">
          <Text className="text-blue-500 text-center">Resend Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
} 