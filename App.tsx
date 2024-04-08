import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles';
import {Task} from './contract';
import RenderItem from './RenderItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [notes, setNotes] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  //almacenamiento
  const storeData = async (value:Task[]) => {
    try {
      await AsyncStorage.setItem('mytodo-tasks', JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('mytodo-tasks');
      if (value !== null) {
        const tasksLocal = JSON.parse(value)
        setTasks(tasksLocal)
      }
    } catch (e) {
      console.error(e);
    }
  };

  //logica

  const addTask = () => {
    const newTask = {
      title: notes,
      done: false,
      date: new Date()
    }
    setTasks([...tasks, newTask])
    storeData([...tasks, newTask])
    setNotes("")
  }
  const markDone = (task:Task) => {
    //me traigo los elementos
    const tmp = [...tasks]
    //indice del task con le mismo nombre
    const index = tmp.findIndex((item) => item.title === task.title)
    //saca el task por indice
    const todo = tmp[index]
    //cambia valor de done
    todo.done = !todo.done
    //se sube denuevo a los task
    setTasks(tmp)
    storeData(tmp)
    // otra forma de hacerlo
    /*const updatedTasks = tasks.map(item => {
      if (item.title === task.title) {
        // Creando un nuevo objeto con todas las propiedades de 'itemt', pero con 'done' invertido
        return {...item, done: !item.done};
      }
      return item;
    });
    setTasks(updatedTasks); */
  };
  
  const deleteFunc = (task:Task) => {
    const tmp = [...tasks].filter((item) => item.title !== task.title )
    setTasks(tmp)
    storeData(tmp)
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar una tarea"
          style={styles.textInput}
          placeholderTextColor="#888"
          onChangeText={(note: string) => {
            setNotes(note);
          }}
          value={notes}
        />
        <TouchableOpacity 
        style={styles.addButton}
        onPress={addTask}
        >
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({item}) => (
            <RenderItem
              item={item}
              deleteFunc={deleteFunc}
              markDone={markDone}
            />
          )}
          data={tasks}
        />
      </View>
    </View>
  );
};

export default App;
