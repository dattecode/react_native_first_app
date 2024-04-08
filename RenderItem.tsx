import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import styles from "./Styles"
import {Task} from "./contract"

interface ItemProps {
  item : Task,
  markDone: (task:Task) => void,
  deleteFunc: (task:Task) => void
}

const RenderItem = ({item, markDone, deleteFunc} : ItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => markDone(item)}>
        <Text style={item.done ? styles.textDone : styles.text}>
          {item.title}
        </Text>
        <Text style={item.done ? styles.textDone : styles.text}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {item.done && (
        <TouchableOpacity style={styles.removeBtn} onPress={() => deleteFunc(item)}>
          <Text style={styles.whiteText}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default RenderItem