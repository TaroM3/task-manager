import { StyleSheet, TextInput, View } from 'react-native';
import ButtonPrimary from './ButtonPrimary';

const TaskForm = ({ task, onHandlerTask, addTask }) => {
  return (
    <View style={styles.container}>
      <TextInput
        name="title"
        style={styles.input}
        value={task['title']}
        onChangeText={(data) => onHandlerTask('title', data)}
        placeholder="Title"
        placeholderTextColor="#aaa"
        maxLength={18}
      />
      <TextInput
        name="description"
        style={styles.input}
        onChangeText={(data) => onHandlerTask('description', data)}
        value={task['description']}
        placeholder="Description"
        placeholderTextColor="#aaa"
      />
      <View style={styles.buttonContainer}>
        <ButtonPrimary title="add task" onPress={addTask} />
      </View>
    </View>
  );
};

export default TaskForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    color: 'white',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    borderRadius: 5,
    marginHorizontal: 7,
    marginVertical: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
});
