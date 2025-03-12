import React, { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import { Container, Header, Input, Button } from '../../components/auth';

export default function NameScreen() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      router.push('/photo');
    }, 500);
  };

  return (
    <Container>
      <Header 
        title="What's your name?"
        subtitle="This is how other users will see you"
      />
      
      <View style={{ flex: 1 }}>
        <Input
          value={name}
          onChangeText={(text) => {
            setName(text);
            if (error) setError('');
          }}
          placeholder="Enter your name"
          autoCapitalize="words"
          autoComplete="name"
          error={error}
        />
      </View>
      
      <Button
        title="Continue"
        onPress={handleContinue}
        loading={loading}
        fullWidth
        size="lg"
        disabled={!name.trim()}
      />
    </Container>
  );
} 