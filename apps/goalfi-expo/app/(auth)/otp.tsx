import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router, useRouter, useLocalSearchParams } from 'expo-router';
import { useLoginWithEmail } from '@privy-io/expo';
import { Container, Header, OTPInput, Button } from '../../components/auth';

export default function OTPScreen() {
  const { email } = useLocalSearchParams();
  const emailString = Array.isArray(email) ? email[0] : email;
  console.log('Email from params:', emailString);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { loginWithCode } = useLoginWithEmail();

  async function handleLogin() {
    if (code.length !== 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('Logging in with code and email', code, emailString);
      const result = await loginWithCode({ code, email: emailString });
      
      if (result) {
        console.log('Logged in successfully');
        router.push('/name');
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
  }

  return (
    <Container scrollable={false}>
      <Header 
        title="Verification"
        subtitle="Enter the 6-digit code sent to your email"
      />
      
      <View style={styles.content}>
        <OTPInput
          value={code}
          onChange={(value) => {
            setCode(value);
            if (error) setError('');
          }}
          length={6}
        />
        
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : null}
        
        <Text style={styles.resendText}>
          Didn't receive the code? <Text style={styles.resendLink}>Resend</Text>
        </Text>
      </View>
      
      <Button
        title="Verify"
        onPress={handleLogin}
        loading={loading}
        fullWidth
        size="lg"
        disabled={code.length !== 6}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  errorText: {
    color: '#EF4444',
    marginTop: 16,
    fontSize: 14,
  },
  resendText: {
    marginTop: 24,
    fontSize: 14,
    color: '#6B7280',
  },
  resendLink: {
    color: '#FF7D26',
    fontWeight: '600',
  },
}); 