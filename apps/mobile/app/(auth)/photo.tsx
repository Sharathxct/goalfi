import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoScreen() {
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleContinue = () => {
    router.push('/(tabs)');
  };

  return (
    <View className="flex-1 bg-white p-6">
      <StatusBar style="dark" />
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-bold mb-2">Add a photo</Text>
        <Text className="text-gray-600 mb-8 text-center">
          Add a profile picture to help others recognize you
        </Text>

        <TouchableOpacity onPress={pickImage} className="mb-8">
          {image ? (
            <Image
              source={{ uri: image }}
              className="w-32 h-32 rounded-full"
            />
          ) : (
            <View className="w-32 h-32 rounded-full bg-gray-200 items-center justify-center">
              <Text className="text-gray-500">Tap to add</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleContinue}
          className="bg-blue-500 rounded-full px-8 py-4 w-64"
        >
          <Text className="text-white text-center text-lg font-semibold">
            {image ? "Continue" : "Skip for now"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 