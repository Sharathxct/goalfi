import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      opacity: disabled ? 0.6 : 1,
    };

    // Size styles
    switch (size) {
      case 'sm':
        baseStyle.paddingVertical = 8;
        baseStyle.paddingHorizontal = 16;
        break;
      case 'lg':
        baseStyle.paddingVertical = 16;
        baseStyle.paddingHorizontal = 24;
        break;
      default: // md
        baseStyle.paddingVertical = 12;
        baseStyle.paddingHorizontal = 20;
    }

    // Variant styles
    switch (variant) {
      case 'primary':
        baseStyle.backgroundColor = '#FF7D26'; // Orange color
        break;
      case 'secondary':
        baseStyle.backgroundColor = '#3B82F6'; // Blue color
        break;
      case 'outline':
        baseStyle.backgroundColor = 'transparent';
        baseStyle.borderWidth = 1;
        baseStyle.borderColor = '#FF7D26';
        break;
      case 'ghost':
        baseStyle.backgroundColor = 'transparent';
        break;
    }

    if (fullWidth) {
      baseStyle.width = '100%';
    }

    return baseStyle;
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontWeight: '600',
    };

    // Size styles
    switch (size) {
      case 'sm':
        baseStyle.fontSize = 14;
        break;
      case 'lg':
        baseStyle.fontSize = 18;
        break;
      default: // md
        baseStyle.fontSize = 16;
    }

    // Variant styles
    switch (variant) {
      case 'primary':
      case 'secondary':
        baseStyle.color = 'white';
        break;
      case 'outline':
        baseStyle.color = '#FF7D26';
        break;
      case 'ghost':
        baseStyle.color = '#FF7D26';
        break;
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[getButtonStyle(), style]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'primary' || variant === 'secondary' ? 'white' : '#FF7D26'} 
          style={{ marginRight: 8 }}
        />
      ) : null}
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}; 