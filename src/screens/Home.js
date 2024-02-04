import { View, StyleSheet, Keyboard } from 'react-native';
import Header from '../components/Header';
import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import uuid from 'react-native-uuid';
import ListTasks from '../components/ListTasks';
import ModalDeleteTask from '../components/ModalDeleteTask';

const Home = ({ screenWidth }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const [taskSelected, setTaskSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      completed: false,
      title: task.title,
      description: task.description,
    };

    setTasks([...tasks, newTask]);
    setTask({
      title: '',
      description: '',
    });

    Keyboard.dismiss();

    console.log(tasks);
  };

  const onHandlerTask = (name, data) => {
    setTask({ ...task, [name]: data });
    // console.log(task.title, task.description);
  };

  const onHandlerModalDelete = (task) => {
    setTaskSelected(task);
    setModalVisible(!modalVisible);
  };

  const deleteTask = () => {
    setTasks(tasks.filter((task) => task.id != taskSelected.id));
    setModalVisible(!modalVisible);
  };

  const updateTaskCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id)
          return { ...task, ...{ completed: !task.completed } };
        return task;
      })
    );
  };

  return (
    <View styles={styles.container}>
      <Header />
      <TaskForm onHandlerTask={onHandlerTask} task={task} addTask={addTask} />
      <ListTasks
        tasks={tasks}
        onHandlerModalDelete={onHandlerModalDelete}
        screenWidth={screenWidth}
        updateTaskCompleted={updateTaskCompleted}
      />
      <ModalDeleteTask
        modalVisible={modalVisible}
        taskSelected={taskSelected}
        deleteTask={deleteTask}
        onHandlerModaDelete={onHandlerModalDelete}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
