import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

export default function WalletScreen() {
  return (
<ScrollView style={styles.flexContainer}>

<SafeAreaView style={styles.container}>

    <View style={styles.container}>
      <StatusBar style="dark" />
        <View style={styles.paddingContainer}>
          <Text style={styles.title}>Wallet</Text>
          <Text style={styles.subtitle}>
            Manage your stakes and rewards
          </Text>

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>$0.00</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.addButton}>
                <FontAwesome name="plus" size={16} color="white" style={styles.icon} />
                <Text style={styles.addButtonText}>Add Money</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.withdrawButton}>
                <FontAwesome name="arrow-right" size={16} color="#3B82F6" style={styles.icon} />
                <Text style={styles.withdrawButtonText}>Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.transactionHistoryContainer}>
            <Text style={styles.transactionHistoryTitle}>Transaction History</Text>
            <View style={styles.transactionHistoryBox}>
              <Text style={styles.transactionHistoryText}>
                No transactions yet
              </Text>
            </View>
          </View>

          <View style={styles.quickActionsContainer}>
            <Text style={styles.quickActionsTitle}>Quick Actions</Text>
            <View style={styles.quickActionsRow}>
              <TouchableOpacity style={styles.quickActionItem}>
                <View style={styles.quickActionIconContainerBlue}>
                  <FontAwesome name="credit-card" size={20} color="#3B82F6" />
                </View>
                <Text style={styles.quickActionText}>Add Card</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickActionItem}>
                <View style={styles.quickActionIconContainerGreen}>
                  <FontAwesome name="bank" size={20} color="#10B981" />
                </View>
                <Text style={styles.quickActionText}>Bank</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quickActionItem}>
                <View style={styles.quickActionIconContainerPurple}>
                  <FontAwesome name="history" size={20} color="#8B5CF6" />
                </View>
                <Text style={styles.quickActionText}>History</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#9CA3AF',
    marginBottom: 32,
  },
  balanceContainer: {
    backgroundColor: '#ebf8ff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
  },
  balanceLabel: {
    color: '#9CA3AF',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  addButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 9999,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  withdrawButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#3b82f6',
    borderRadius: 9999,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  withdrawButtonText: {
    color: '#3b82f6',
    fontWeight: '600',
  },
  transactionHistoryContainer: {
    marginBottom: 24,
  },
  transactionHistoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  transactionHistoryBox: {
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 16,
    marginBottom: 8,
  },
  transactionHistoryText: {
    color: '#9CA3AF',
    textAlign: 'center',
  },
  quickActionsContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 24,
  },
  quickActionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionItem: {
    alignItems: 'center',
  },
  quickActionIconContainerBlue: {
    width: 48,
    height: 48,
    backgroundColor: '#ebf8ff',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickActionIconContainerGreen: {
    width: 48,
    height: 48,
    backgroundColor: '#d1fae5',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickActionIconContainerPurple: {
    width: 48,
    height: 48,
    backgroundColor: '#ede9fe',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    color: '#9CA3AF',
  },
  icon: {
    marginRight: 8,
  },
});

