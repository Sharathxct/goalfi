import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import useIsLoadingStore from '@/zustand/useIsLoading.store';

export default function HomeScreen() {
  // set isLoading to true
  function setIsLoading(isLoading: boolean) {
    useIsLoadingStore.setState({ isLoading });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.paddingContainer}>
          <Text style={styles.title}>Welcome to Goalfi!</Text>
          <Text style={styles.subtitle}>
            Start setting and achieving your goals today
          </Text>

          <View style={styles.goalContainer}>
            <Text style={styles.goalTitle}>No active goals</Text>
            <Text style={styles.goalSubtitle}>
              Create your first goal and start your journey to success
            </Text>
            <TouchableOpacity style={styles.createGoalButton}>
              <FontAwesome name="plus" size={16} color="white" style={styles.icon} />
              <Text style={styles.createGoalText}>Create Goal</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statsContainer}>
            <Text style={styles.statsTitle}>Quick Stats</Text>
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <Text style={styles.stakedAmount}>$0</Text>
                <Text style={styles.statsLabel}>Staked</Text>
              </View>
              <View style={styles.statsItem}>
                <Text style={styles.completedAmount}>0</Text>
                <Text style={styles.statsLabel}>Completed</Text>
              </View>
              <View style={styles.statsItem}>
                <Text style={styles.inProgressAmount}>0</Text>
                <Text style={styles.statsLabel}>In Progress</Text>
              </View>
            </View>
          </View>

          <View style={styles.testLoadingContainer}>
            <TouchableOpacity
              style={styles.testLoadingButton}
              onPress={() => setIsLoading(true)}
            >
              <Text style={styles.testLoadingText}>Test Loading</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  paddingContainer: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'gray',
    marginBottom: 32,
  },
  goalContainer: {
    backgroundColor: '#ebf8ff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  goalSubtitle: {
    color: 'gray',
    marginBottom: 16,
  },
  createGoalButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 9999,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
  },
  createGoalText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
  },
  statsContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 24,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsItem: {
    alignItems: 'center',
  },
  stakedAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  completedAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#10b981',
  },
  inProgressAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8b5cf6',
  },
  statsLabel: {
    color: 'gray',
  },
  testLoadingContainer: {
    width: '100%',
    marginTop: 80,
  },
  testLoadingButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 9999,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testLoadingText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
  },
});
