import React from 'react';
import { View, ActivityIndicator, StyleSheet, ViewStyle, Text } from 'react-native';

interface FullScreenLoaderProps {
  containerStyle?: ViewStyle;
  error?: string;
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ containerStyle, error }) => {
  if (error) {
    return (
      <View style={[styles.loaderContainer, containerStyle]}>
        <Text>{error}</Text>
      </View>
    );
  }
  return (
    <View style={[styles.loaderContainer, containerStyle]}>
      <ActivityIndicator size="large" color="#FF7D26" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: semi-transparent background
    zIndex: 1000, // Ensure it appears above other components, including bottom tabs
  },
});

export default FullScreenLoader;
