import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testText}>
        Open up App.js to start working on your app!
      </Text>
      <Button title="test" />
      <View style={styles.testText}>
        <Text>Test 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testText: {
    color: 'red',
    borderWidth: '1px',
    borderColor: '#9b9b9b',
    borderRadius: '25px',
    padding: 5,
  },
});
