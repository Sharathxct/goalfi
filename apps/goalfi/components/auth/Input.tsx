import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle, TextStyle, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helper?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  errorStyle?: TextStyle;
  helperStyle?: TextStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helper,
  containerStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  helperStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      ) : null}
      
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          error && styles.inputError,
          inputStyle,
        ]}
        placeholderTextColor="#9CA3AF"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      
      {error ? (
        <Text style={[styles.error, errorStyle]}>{error}</Text>
      ) : helper ? (
        <Text style={[styles.helper, helperStyle]}>{helper}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#1F2937',
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1F2937',
  },
  inputFocused: {
    borderColor: '#FF7D26',
    backgroundColor: '#FFFFFF',
  },
  inputError: {
    borderColor: '#EF4444',
  },
  error: {
    color: '#EF4444',
    fontSize: 14,
    marginTop: 4,
  },
  helper: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 4,
  },
}); 