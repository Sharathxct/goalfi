import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Container, Header, Button } from '../../components/auth';

export default function PhotoScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const handleContinue = () => {
    setLoading(true);
    
    // Simulate API call to upload image
    setTimeout(() => {
      setLoading(false);
      router.push('/(tabs)');
    }, 1000);
  };

  return (
    <Container>
      <Header 
        title="Add a photo"
        subtitle="Add a profile picture to help others recognize you"
      />
      
      <View style={styles.content}>
        <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={styles.image}
            />
          ) : (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderText}>Tap to add</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      
      <Button
        title={image ? "Continue" : "Skip for now"}
        onPress={handleContinue}
        loading={loading}
        fullWidth
        size="lg"
        variant={image ? "primary" : "outline"}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 32,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  placeholderContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
  },
  placeholderText: {
    color: '#6B7280',
    fontSize: 14,
  },
}); 