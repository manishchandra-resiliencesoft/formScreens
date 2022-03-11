import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const Textarea = ({
  title,
  onChangeText,
  onBlur,
  value,
  placeholder,
  icon,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          placeholderTextColor={'lightgrey'}
        />
      </View>
    </View>
  );
};

export default Textarea;

const styles = StyleSheet.create({
  inputcontainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
    height: 110,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  input: {
    flex:1,
    height: 50,
    color: 'black',
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 10,
    color: 'black'
  },
});
