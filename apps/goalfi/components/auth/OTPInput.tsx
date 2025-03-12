import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Keyboard, ViewStyle, TextStyle } from 'react-native';

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  autoFocus?: boolean;
}

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  value,
  onChange,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  autoFocus = true,
}) => {
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = Array(length).fill(null);
  }, [length]);

  // Auto focus first input on mount
  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [autoFocus]);

  const handleChange = (text: string, index: number) => {
    const newValue = value.split('');
    
    // Only accept digits
    if (/^\d*$/.test(text)) {
      newValue[index] = text.slice(-1);
      
      // Move to next input if a digit was entered
      if (text && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
      
      onChange(newValue.join(''));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.nativeEvent.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  // Handle paste
  const handlePaste = (text: string) => {
    // Extract only digits
    const digits = text.replace(/\D/g, '').slice(0, length);
    
    if (digits.length > 0) {
      onChange(digits.padEnd(value.length, value.slice(digits.length)));
      
      // Focus the next empty input or the last one
      const nextIndex = Math.min(digits.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <View
            key={index}
            style={[
              styles.inputContainer,
              focusedIndex === index && styles.inputContainerFocused,
              inputContainerStyle,
            ]}
          >
            <TextInput
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={[styles.input, inputStyle]}
              value={value[index] || ''}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              keyboardType="numeric"
              maxLength={1}
              selectTextOnFocus
            />
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputContainer: {
    width: 50,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  inputContainerFocused: {
    borderColor: '#FF7D26',
    backgroundColor: '#FFFFFF',
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    width: '100%',
    height: '100%',
  },
}); 