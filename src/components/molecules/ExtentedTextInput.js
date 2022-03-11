import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';

const ExtentedTextInput = ({
  title,
  onChangeText,
  onBlur,
  value,
  placeholder,
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
        />
      </View>
    </View>
  );
};

export default ExtentedTextInput;

const styles = StyleSheet.create({
  inputcontainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  input: {
    flex:1,
    height: 50,
    color: 'black',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
