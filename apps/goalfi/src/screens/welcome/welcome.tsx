import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  Dimensions, 
  SafeAreaView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: 1,
    title: "Set Your Goals",
    description: "Define your personal goals and commit to achieving them with financial stakes",
    // image: require('../../../assets/images/goals.png')
  },
  {
    id: 2,
    title: "Stay Accountable",
    description: "Put your money where your motivation is and compete with others",
    // image: require('../../../assets/images/accountability.png')
  },
  {
    id: 3,
    title: "Track Progress",
    description: "Monitor your progress and earn rewards for completing your goals",
    // image: require('../../../assets/images/progress.png')
  }
];

const Welcome = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList, 'Welcome'>>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigation.navigate('EmailScreen', {});
    }
  };

  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-5">
        {/* Placeholder for image */}
        <View className="w-7/10 h-7/10 bg-gray-100 rounded-2xl mb-10 justify-center items-center">
          {/* <Image
            source={slides[currentSlide].image}
            style={styles.image}
            resizeMode="contain"
          /> */}
        </View>
        
        <Text className="text-2xl font-bold text-center mb-4 text-gray-900">
          {slides[currentSlide].title}
        </Text>
        
        <Text className="text-base text-center mb-10 text-gray-500 px-5 leading-6">
          {slides[currentSlide].description}
        </Text>
        
        <View className="flex-row justify-center mb-10">
          {slides.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full bg-gray-300 mx-1 ${index === currentSlide ? 'bg-orange-500 w-5' : ''}`}
            />
          ))}
        </View>
      </View>
      
      <View className="p-5 border-t border-gray-100">
        <TouchableOpacity className="bg-orange-500 h-14 rounded-lg items-center justify-center" onPress={goToNextSlide}>
          <Text className="text-white text-lg font-semibold">
            {isLastSlide ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

