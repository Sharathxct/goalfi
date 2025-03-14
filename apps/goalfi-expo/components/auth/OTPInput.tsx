import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { OtpInput } from "react-native-otp-entry";

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
  return (
    <View style={[styles.container, containerStyle]}>
      <OtpInput
        numberOfDigits={length}
        onTextChange={onChange}
        autoFocus={autoFocus}
        focusColor="orange"
        hideStick={true}
        blurOnFilled={true}
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={1000}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        
      />
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
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    color: '#A1A1A1', // Customize placeholder color if needed
  },
}); 