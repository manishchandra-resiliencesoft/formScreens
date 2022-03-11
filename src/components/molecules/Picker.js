import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const [selectedLanguage, setSelectedLanguage] = useState();

const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}
const Picker = ({
  title,
  onChangeText,
  onBlur,
  value,
  placeholder,
  icon,
  fonticon,
  ionicIcons,
  selectedGender,
  label,
  value,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputcontainer}>
        <Picker
          ref={pickerRef}
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          placeholderTextColor={'lightgrey'}
          selectedValue={selectedGender}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label={label} value={value} />
          <Picker.Item label={label} value={value} />
        </Picker>
        <FontAwesomeIcon name={icon} size={30} color="black" />
        <FontistoIcon name={fonticon} size={30} color="black" />
        <IoniconsIcon name={ionicIcons} size={30} color="black" />
      </View>
    </View>
  );
};

export default Picker;

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
    flex: 1,
    height: 50,
    color: 'black',
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 10,
    color: 'black',
  },
});
