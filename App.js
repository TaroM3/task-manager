import { Dimensions, StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import React from 'react';

const App = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <Home screenWidth={screenWidth} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'black',
    flex: 1,
  },
});
