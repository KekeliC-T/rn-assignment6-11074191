import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const transactions = [
  { id: '1', name: 'Apple Store', category: 'Entertainment', amount: '- $5,99' },
  { id: '2', name: 'Spotify', category: 'Music', amount: '- $12,99' },
  { id: '3', name: 'Money Transfer', category: 'Transaction', amount: '$300' },
  { id: '4', name: 'Grocery', category: 'Grocery', amount: '- $88' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
        <Text style={styles.cardName}>AR Jonson</Text>
        <Text style={styles.cardDetails}>Expiry Date: 24/2000   CVV: 6986</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: '#2d2d2d',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardNumber: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  cardName: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  cardDetails: {
    color: 'white',
    fontSize: 14,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default HomeScreen;
