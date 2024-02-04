import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../globals/colors.js';
const ButtonPrimary = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D7F9FF',
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  text: {
    color: '#222',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
