import { StyleSheet, Text, View, Switch } from 'react-native';
import ButtonPrimary from './ButtonPrimary';

const CardTask = ({
  item,
  onHandlerModalDelete,
  screenWidth,
  updateTaskCompleted,
}) => {
  return (
    <View style={[styles.container, { width: screenWidth - 60 }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>Description: {item.description}</Text>
      <View>
        <Switch
          style={styles.completedContainer}
          value={item.completed}
          onValueChange={() => updateTaskCompleted(item.id)}
        />
        <Text style={styles.textCompleted}>
          {item.completed ? 'Done' : 'To do'}
        </Text>
      </View>

      <ButtonPrimary
        title="delete"
        onPress={() => onHandlerModalDelete(item)}
      />
    </View>
  );
};

export default CardTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    padding: 21,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'flex-start',
    borderRadius: 5,
    gap: 25,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '100%',
    color: 'white',
    fontSize: 18,
  },
  text: {
    width: '100%',
    color: '#999',
    fontSize: 15,
  },
  completedContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 15,
  },
  textCompleted: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
