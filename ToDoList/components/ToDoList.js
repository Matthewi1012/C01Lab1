import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask'

const ToDoList = ({ toDos }) => {
    const [tasks, setTasks] = useState(toDos.map((value) => ({ id: uuidv4(), task: value })));

    const addToDo = (newTitle) => {
        const newTask = { id: uuidv4(), task: newTitle };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    const removeToDo = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    }
    
    return (
      <View style={styles.todoListContainer}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.todoItem}>
            <Text>{task.task}</Text>
            <Button title="Remove" onPress={() => removeToDo(task.id)}/>
          </View>
        ))}
        <AddTask onAddTask={addToDo}/>
      </View>
    );
};

ToDoList.defaultProps = {
    toDos: [],
};
    
const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList