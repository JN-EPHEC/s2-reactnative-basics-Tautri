// app/(tabs)/todo.tsx
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import TodoItem from '@/components/TodoItem'; // ou ../../components/TodoItem si @ n’est pas configuré

export default function TodoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <TodoItem text="Learn React Native" />
      <TodoItem text="Build a static UI" />
      <TodoItem text="Practice with StyleSheet" />
      <TodoItem text="Commit my final code" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
});
//bonjour
//Bonjour 
