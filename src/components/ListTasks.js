import { StyleSheet, View, FlatList } from 'react-native';
import CardTask from './CardTask';

const ListTasks = ({
  tasks,
  onHandlerModalDelete,
  screenWidth,
  updateTaskCompleted,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardTask
            item={item}
            onHandlerModalDelete={onHandlerModalDelete}
            screenWidth={screenWidth}
            updateTaskCompleted={updateTaskCompleted}
          />
        )}
      />
    </View>
  );
};

export default ListTasks;

const styles = StyleSheet.create({
  container: { padding: 10, justifyContent: 'center', alignItems: 'center' },
});
