import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { router, useRouter } from 'expo-router';
import {useLoginWithEmail} from '@privy-io/expo';

export default function EmailScreen() {
  const [email, setEmail] = useState('');

  const {sendCode} = useLoginWithEmail();

  async function handleSendCode() {
    console.log('Sending code to', email);
    try {
      const result = await sendCode({email});
      if ( result.success) {
        console.log('Code sent to', email);
        router.push('/otp');
      } else {
        console.error('Error sending code', result);
      }
    } catch (error) {
      console.error('Error sending code', error);
    }
  }

  return (
    <View className="flex-1 bg-white p-6">
    <Text className="text-2xl font-bold mb-4">Login to access</Text>

    <TextInput value={email} onChangeText={setEmail} placeholder="Email" inputMode="email" className="border border-gray-300 rounded-md p-2" />

    <TouchableOpacity onPress={handleSendCode} className="bg-blue-500 p-2 rounded-md w-full">
      <Text>Send Code</Text>
    </TouchableOpacity>
  </View> 
  );
}