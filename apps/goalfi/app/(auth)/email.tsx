import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';
import { router } from 'expo-router';
import { useLoginWithEmail } from '@privy-io/expo';
import { Container, Header, Input, Button } from '../../components/auth';

export default function EmailScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { sendCode } = useLoginWithEmail();

  async function handleSendCode() {
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
        router.push(`/otp?email=${encodeURIComponent(email)}`);
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
  }

  return (
    <Container scrollable={false}>
      <Header 
        title="What's your email?"
        showBackButton={false}
      />
      
      <View style={{ flex: 1 }}>
        <Input
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (error) setError('');
          }}
          placeholder="Email"
          inputMode="email"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          error={error}
          helper="Enter your email to receive a verification code."
        />
      </View>
      
      <Button
        title="Continue"
        onPress={handleSendCode}
        loading={loading}
        fullWidth
        size="lg"
      />
    </Container>
  );
}