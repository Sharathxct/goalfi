import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useLoginWithEmail } from '@privy-io/expo';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation';
import { OtpInput } from "react-native-otp-entry";

const OtpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList, 'OtpScreen'>>();
  const route = useRoute<RouteProp<AuthStackParamList, 'OtpScreen'>>();
  const { email } = route.params || {};
  
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { loginWithCode, sendCode } = useLoginWithEmail();

  const handleVerifyOtp = async () => {
    if (code.length !== 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('Logging in with code and email', code, email);
      const result = await loginWithCode({ code, email: email || '' });
      
      if (result) {
        console.log('Logged in successfully');
        // Navigate to the main app after successful login
        // The navigation will be handled by the root navigator based on auth state
      } else {
        setError('Invalid verification code. Please try again.');
        console.error('Login failed', result);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error logging in', error);
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      setError('Email is missing. Please go back and try again.');
      return;
    }

    try {
      const result = await sendCode({ email });
      if (result.success) {
        console.log('Code resent to', email);
      } else {
        setError('Failed to resend code. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error resending code', error);
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
            <Text className="text-2xl font-bold text-gray-900 mb-2">Verification</Text>
            <Text className="text-base text-gray-500 leading-6">Enter the 6-digit code sent to your email</Text>
          </View>

          <View className="items-center mt-5">
          <OtpInput
            numberOfDigits={6}
            onTextChange={setCode}
            autoFocus={true}
            focusColor="orange"
            hideStick={true}
            blurOnFilled={true}
            disabled={false}
            type="numeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={1000}
            textInputProps={{
                accessibilityLabel: "One-Time Password",
            }}
          />
            
            {error ? (
              <Text className="text-red-500 mt-4 text-sm">{error}</Text>
            ) : null}
            
            <TouchableOpacity onPress={handleResendCode}>
              <Text className="text-sm text-gray-500 mt-6">
                Didn't receive the code? <Text className="text-orange-500 font-semibold">Resend</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View className="p-5 border-t border-gray-100">
          <TouchableOpacity 
            className={`bg-orange-500 h-14 rounded-lg items-center justify-center ${loading || code.length !== 6 ? 'bg-orange-200' : ''}`} 
            onPress={handleVerifyOtp}
            disabled={loading || code.length !== 6}
          >
            <Text className="text-white text-base font-semibold">
              {loading ? 'Verifying...' : 'Verify'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;
