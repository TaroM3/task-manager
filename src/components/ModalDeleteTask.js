import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import { colors } from '../globals/colors.js';

const ModalDeleteTask = ({
  taskSelected,
  deleteTask,
  onHandlerModaDelete,
  modalVisible,
}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      onRequestClose={() => onHandlerModaDelete({})}
      style={styles.container}
    >
      <View style={styles.modal}>
        <Text style={styles.text}>
          Are you sure you want to delete this task: " {taskSelected.title} " ?
        </Text>
        <Button style={styles.button} title="YES" onPress={deleteTask} />
        <Button
          style={styles.button}
          title="NO"
          onPress={() => onHandlerModaDelete({})}
        />
      </View>
    </Modal>
  );
};

export default ModalDeleteTask;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  modal: {
    backgroundColor: '#111',
  },
  text: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#D7F9FF',
    color: colors.white,
  },
});
