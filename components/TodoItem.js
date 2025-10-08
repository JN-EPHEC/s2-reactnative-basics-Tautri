import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TodoItem({ text }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: { fontSize: 16, color: '#333' },
});