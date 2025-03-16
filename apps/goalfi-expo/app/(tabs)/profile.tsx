import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import {usePrivy} from '@privy-io/expo';
import { Pedometer } from 'expo-sensors';

export default function ProfileScreen() {
  const {logout} = usePrivy();
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    subscription.then(sub => {
      return () => sub && sub.remove();
    });
  }, []);
  return(
    <ScrollView style={styles.flexContainer}>

    <SafeAreaView style={styles.container}>

    <View style={styles.container}>
      <StatusBar style="dark" />
        <View style={styles.paddingContainer}>
          <View style={styles.centeredContainer}>
            <View style={styles.avatarContainer}>
              <FontAwesome name="user" size={40} color="#9CA3AF" />
            </View>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>john@example.com</Text>
          </View>

          <View style={styles.statisticsContainer}>
            <Text style={styles.statisticsTitle}>Statistics</Text>
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <Text style={styles.stakedAmount}>$0</Text>
                <Text style={styles.statsLabel}>Total Staked</Text>
              </View>
              <View style={styles.statsItem}>
                <Text style={styles.successRate}>0%</Text>
                <Text style={styles.statsLabel}>Success Rate</Text>
              </View>
              <View style={styles.statsItem}>
                <Text style={styles.goalsSet}>0</Text>
                <Text style={styles.statsLabel}>Goals Set</Text>
              </View>
            </View>
          </View>

          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionItem}>
              <FontAwesome name="bell" size={20} color="#4B5563" style={styles.icon} />
              <Text style={styles.optionText}>Notifications</Text>
              <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <FontAwesome name="lock" size={20} color="#4B5563" style={styles.icon} />
              <Text style={styles.optionText}>Privacy</Text>
              <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <FontAwesome name="question-circle" size={20} color="#4B5563" style={styles.icon} />
              <Text style={styles.optionText}>Help & Support</Text>
              <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.signOutItem} onPress={logout}>
              <FontAwesome name="sign-out" size={20} color="#EF4444" style={styles.icon} />
              <Text style={styles.signOutText}>Sign Out</Text>
              <FontAwesome name="chevron-right" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paddingContainer}>
          <Text style={styles.pedometerTitle}>Pedometer availability { isPedometerAvailable }</Text>
          <Text style={styles.pedometerText}>Current Step Count: {currentStepCount}</Text>
          <Text style={styles.pedometerText}>Past Step Count: {pastStepCount}</Text>
        </View>
    </View>
    </SafeAreaView>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  paddingContainer: {
    padding: 24,
  },
  centeredContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#E5E7EB',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    color: '#9CA3AF',
  },
  statisticsContainer: {
    backgroundColor: '#ebf8ff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
  },
  statisticsTitle: {
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
  successRate: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#10b981',
  },
  goalsSet: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8b5cf6',
  },
  statsLabel: {
    color: '#9CA3AF',
  },
  optionsContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  icon: {
    width: 32,
  },
  optionText: {
    flex: 1,
    color: '#1F2937',
  },
  signOutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  signOutText: {
    flex: 1,
    color: '#EF4444',
  },
  pedometerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  pedometerText: {
    color: '#9CA3AF',
  },
});
