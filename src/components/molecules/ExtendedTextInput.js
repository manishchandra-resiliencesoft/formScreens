import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const ExtendedTextInput = ({
  title,
  onChangeText,
  onBlur,
  value,
  placeholder,
  icon,
  fonticon,
  ionicIcons,
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
        {icon ? <FontAwesomeIcon name={icon} size={25} color="black" /> : null}
        {fonticon ? (
          <FontistoIcon name={fonticon} size={25} color="black" />
        ) : null}
        {ionicIcons ? (
          <IoniconsIcon name={ionicIcons} size={25} color="black" />
        ) : null}
      </View>
    </View>
  );
};

export default ExtendedTextInput;

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
    paddingRight: 15,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 50,
    color: 'black',
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 10,
    color: 'black',
    marginTop: 15,
  },
});
