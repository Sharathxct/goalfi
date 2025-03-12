import React, { ReactNode } from 'react';
import { 
  View, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  StyleSheet, 
  ViewStyle, 
  SafeAreaView,
  StatusBar
} from 'react-native';

interface ContainerProps {
  children: ReactNode;
  scrollable?: boolean;
  keyboardAvoiding?: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  safeArea?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  scrollable = true,
  keyboardAvoiding = true,
  style,
  contentContainerStyle,
  safeArea = true,
}) => {
  const content = (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      {scrollable ? (
        <ScrollView
          style={[styles.scrollView, style]}
          contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.container, style]}>
          {children}
        </View>
      )}
    </>
  );

  if (keyboardAvoiding) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        {safeArea ? (
          <SafeAreaView style={styles.safeArea}>{content}</SafeAreaView>
        ) : (
          content
        )}
      </KeyboardAvoidingView>
    );
  }

  return safeArea ? (
    <SafeAreaView style={styles.safeArea}>{content}</SafeAreaView>
  ) : (
    content
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 20,
    flexGrow: 1,
  },
}); 