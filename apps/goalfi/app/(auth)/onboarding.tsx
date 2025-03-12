import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const slides = [
  {
    id: 1,
    title: "Set Your Goals",
    description: "Define your personal goals and commit to achieving them with financial stakes",
    // image: require('../../assets/images/goals.png')
  },
  {
    id: 2,
    title: "Stay Accountable",
    description: "Put your money where your motivation is and compete with others",
    // image: require('../../assets/images/accountability.png')
  },
  {
    id: 3,
    title: "Track Progress",
    description: "Monitor your progress and earn rewards for completing your goals",
    // image: require('../../assets/images/progress.png')
  }
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace('/email');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-4">
        {/* <Image
          source={slides[currentSlide].image}
          className="w-72 h-72 mb-8"
          resizeMode="contain"
        /> */}
        <Text className="text-3xl font-bold text-center mb-4">
          {slides[currentSlide].title}
        </Text>
        <Text className="text-lg text-gray-600 text-center mb-8 px-6">
          {slides[currentSlide].description}
        </Text>
        
        <View className="flex-row justify-center space-x-2 mb-8">
          {slides.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={goToNextSlide}
          className="bg-blue-500 rounded-full px-8 py-4 w-64"
        >
          <Text className="text-white text-center text-lg font-semibold">
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
} 