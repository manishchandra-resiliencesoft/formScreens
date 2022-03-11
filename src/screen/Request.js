import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import {NavigationContainer} from '@react-navigation/native';
import ExtentedTextInput from '../components/molecules/ExtentedTextInput';
import Button from '../components/atoms/Button';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useState} from 'react';

const Request = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.head}>
        <Icon style={styles.arrow} name="chevron-back" size={28} color="white" />
        <Text style={styles.title}>Request</Text>
      </View>

      <View style={styles.formik}>
        <Formik
          initialValues={{
            Source: '',
            Destination: '',
            Date: '',
            addDuration: '',
            selectGender: '',
            Reason: '',
          }}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleSubmit,
            values,
            handleBlur,
            errors,
            touched,
          }) => (
            <View style={styles.heading}>
              <ExtentedTextInput
                title={'Source'}
                placeholder="Start Point"
                onChangeText={handleChange('Source')}
                onBlur={handleBlur('Source')}
                value={values.Source}
                
              />


              <ExtentedTextInput
                title={'Destination'}
                placeholder="End-Point"
                onChangeText={handleChange('Destination')}
                onBlur={handleBlur('Destination')}
                value={values.Destination}
              />

              <ExtentedTextInput
                title={'Date'}
                placeholder="dd-mm-yyyy"
                onChangeText={handleChange('Date')}
                onBlur={handleBlur('Date')}
                value={values.Date}
              />

              <ExtentedTextInput
                title={'Add Duration'}
                placeholder="No of Hours"
                onChangeText={handleChange('addDuration')}
                onBlur={handleBlur('addDuration')}
                value={values.addDuration}
              />

              {/* <Picker
                title={' Choose with whom you want to Travel'}
                placeholder="Select Gender"
                onChangeText={handleChange('selectGender')}
                onBlur={handleBlur('selectGender')}
                value={values.selectGender}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker> */}

              <ExtentedTextInput
                title={' Purpose of Travel'}
                placeholder="Reason"
                onChangeText={handleChange('Reason')}
                onBlur={handleBlur('Reason')}
                value={values.Reason}
              />

              <Button
                style={styles.bttn}
                onPress={handleSubmit}
                text="Submit"
                        
              />
            </View>
          )}
        </Formik>
        {/* <Button title="Show Date Picker" onPress={showDatePicker} />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              /> */}
      </View>
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 60,
    marginLeft: 30,
  },
  inputcontainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,

    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 20,
    backgroundColor: '#fff',
    width: 300,
    height: 40,
  },
  input: {
    height: 50,
    color: 'black',
  },
  formik: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  heading: {
    marginTop: 30,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  head: {
    flexDirection: 'row',
    backgroundColor: '#2E67F8',
    flex: 0.2,
  },
  txt: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
  },
  arrow: {
    marginLeft: 25,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 7,
    borderRadius: 10,
    marginTop: 30,
    paddingVertical: 7,
  },
});
