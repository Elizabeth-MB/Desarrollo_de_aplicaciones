import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Usuario from './src/components/Usuario';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola, Coder!</Text>
      <Text>This is my first native app</Text>
      <Usuario usuario="Elizabeth"></Usuario>
      <Usuario usuario="Alitzel"></Usuario>
      <Usuario usuario="Larissa"></Usuario>
      <Usuario usuario="Nancy"></Usuario>
      <Usuario usuario="Alma"></Usuario>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
