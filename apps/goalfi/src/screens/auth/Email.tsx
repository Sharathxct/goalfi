import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Keyboard, 
  SafeAreaView, 
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useLoginWithEmail } from '@privy-io/expo';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation';

const EmailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList, 'EmailScreen'>>();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { sendCode } = useLoginWithEmail();

  const handleSendCode = async () => {
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setLoading(true);
    Keyboard.dismiss();

    try {
      const result = await sendCode({ email });
      if (result.success) {
        console.log('Code sent to', email);
        navigation.navigate('OtpScreen', { email });
      } else {
        setError('Failed to send verification code. Please try again.');
        console.error('Error sending code', result);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error sending code', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      className="flex-1 bg-white"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <SafeAreaView className="flex-1">
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          className="p-5"
        >
          <View className="mt-15 mb-10">
            <Text className="text-2xl font-bold text-gray-900 mb-2">What's your email?</Text>
            <Text className="text-base text-gray-500 leading-6">Enter your email to receive a verification code.</Text>
          </View>

          <View className="mb-5">
            <TextInput
              className={`h-14 border ${error ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 text-base bg-gray-50 text-gray-900`}
              placeholder="Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (error) setError('');
              }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
            {error ? <Text className="text-red-500 mt-2 text-sm">{error}</Text> : null}
          </View>
        </ScrollView>

        <View className="p-5 border-t border-gray-100">
          <TouchableOpacity 
            className={`bg-orange-500 h-14 rounded-lg items-center justify-center ${loading ? 'bg-orange-200' : ''}`} 
            onPress={handleSendCode}
            disabled={loading}
          >
            <Text className="text-white text-base font-semibold">
              {loading ? 'Sending...' : 'Continue'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EmailScreen;
