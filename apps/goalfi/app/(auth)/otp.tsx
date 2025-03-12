import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import {useLoginWithEmail} from '@privy-io/expo';


export default function OTPScreen() {
  const [code, setCode] = useState('');
  const {loginWithCode} = useLoginWithEmail();

  async function handleLogin() {
    try {
      console.log('Logging in with code', code);
      console.log('Code type', typeof code);
      const result = await loginWithCode({code: code, email: 'sharathxc@gmail.com'});
      console.log('Logged in', result);
    } catch (error) {
      console.error('Error logging in', error);
    }
  }

  return (
    <View className="flex-1 bg-white p-6">
      <Text>Enter the code sent to your email</Text>

      <TextInput value={code} onChangeText={setCode} placeholder="Code" inputMode="numeric" />
      <TouchableOpacity onPress={handleLogin} className="bg-blue p-2 rounded-md w-full">
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
} 