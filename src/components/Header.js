import { View, Text, StyleSheet } from 'react-native';
import colors from '../globals/colors.js';

const Header = ({ title = 'Task Manager' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
