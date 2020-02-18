import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ListItem = ({ item, deleteItem }) => (
  <TouchableOpacity style={styles.listItem}>
    <View style={styles.listItemView}>
      <Text style={styles.listItemText}>{item.text}</Text>
      <MaterialCommunityIcons
        name="delete-sweep"
        size={20}
        onPress={() => deleteItem(item.id)}
      ></MaterialCommunityIcons>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
export default ListItem;
