import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add Item..."
        onChangeText={textValue => setText(textValue)}
      ></TextInput>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          console.log(text);
          addItem(text);
        }}
      >
        <Ionicons
          name="ios-add-circle-outline"
          size={20}
          style={{
            color: 'darkslateblue'
          }}
        ></Ionicons>
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
});
export default AddItem;
