import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import { uuid } from 'uuidv4';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export default function App() {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' }
  ]);

  const deleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id != id));
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Please enter item name');
    } else {
      setItems([{ id: uuid(), text }, ...items]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List"></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem}></ListItem>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});
