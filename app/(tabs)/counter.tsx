import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen() {
  // Initialize state for the counter with an initial value of 0.
  const [count, setCount] = useState(0);

  // Increment & Decrement
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Add or Subtract custom values
  const addValue = (value: number) => setCount(count + value);
  const subtractValue = (value: number) => setCount(count - value);

  // Reset
  const reset = () => setCount(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Advanced Counter</Text>

      {/* Display current count */}
      <Text style={styles.countText}>Count: {count}</Text>

      {/* Basic +1 / -1 */}
      <View style={styles.row}>
        <View style={styles.button}>
          <Button title="-1" onPress={decrement} color="#ff3b30" />
        </View>
        <View style={styles.button}>
          <Button title="+1" onPress={increment} color="#007AFF" />
        </View>
      </View>

      {/* Bigger increments */}
      <View style={styles.row}>
        {[10, 20, 50, 100].map((val) => (
          <View style={styles.button} key={val}>
            <Button title={`+${val}`} onPress={() => addValue(val)} color="#34C759" />
          </View>
        ))}
      </View>

      {/* Bigger decrements */}
      <View style={styles.row}>
        {[10, 20, 50, 100].map((val) => (
          <View style={styles.button} key={`-${val}`}>
            <Button title={`-${val}`} onPress={() => subtractValue(val)} color="#FF9500" />
          </View>
        ))}
      </View>

      {/* Reset */}
      <View style={styles.resetButton}>
        <Button title="Reset" onPress={reset} color="#8E8E93" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  countText: {
    fontSize: 48,
    fontWeight: "600",
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
    flexWrap: "wrap",
  },
  button: {
    marginHorizontal: 5,
    marginVertical: 5,
    minWidth: 80,
  },
  resetButton: {
    marginTop: 25,
    width: 120,
  },
});