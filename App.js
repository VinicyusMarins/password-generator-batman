import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import Home from "./src/screens/home/index.tsx"

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d4d4d',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});