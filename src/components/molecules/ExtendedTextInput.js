import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const ExtentedTextInput = ({
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
        <Icon name={icon} size={30} color='black'/>
      </View>
    </View>
  );
};

export default ExtentedTextInput;

const styles = StyleSheet.create({
  inputcontainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 5,
    marginBottom: 15,
    paddingRight: 15,
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
