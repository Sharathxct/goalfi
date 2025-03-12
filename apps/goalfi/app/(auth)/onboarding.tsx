import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Button } from '../../components/auth';

const { width } = Dimensions.get('window');

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

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace('/email');
    }
  };

  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Placeholder for image */}
        <View style={styles.imageContainer}>
          {/* <Image
            source={slides[currentSlide].image}
            style={styles.image}
            resizeMode="contain"
          /> */}
        </View>
        
        <Text style={styles.title}>
          {slides[currentSlide].title}
        </Text>
        
        <Text style={styles.description}>
          {slides[currentSlide].description}
        </Text>
        
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentSlide && styles.activeDot
              ]}
            />
          ))}
        </View>
      </View>
      
      <Button
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={goToNextSlide}
        variant="primary"
        size="lg"
        fullWidth
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: width * 0.7,
    height: width * 0.7,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#1F2937',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#6B7280',
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF7D26',
    width: 20,
  },
}); 