// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Video: https://www.youtube.com/watch?v=_ivIUCSOZ78&t=5s
// Repo: https://github.com/adrianhajdin/react-native-nft-marketplace
// Stopped at 18:00

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <StatusBar style='auto' /> */}
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
});
