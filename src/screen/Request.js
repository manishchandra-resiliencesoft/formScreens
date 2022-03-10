import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
//import Icon from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';
import {NavigationContainer} from '@react-navigation/native';
import ExtentedTextInput from '../components/molecules/ExtentedTextInput';

const Request = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.head}>
        {/* <Icon name="chevron-back" size={28} color="black" /> */}
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

          
              <Text style={styles.txt}> Date </Text>

              <View style={styles.inputcontainer}>
                <TextInput
                  style={styles.input}
                  placeholder="dd-mm-yyyy"
                  onChangeText={handleChange('Date')}
                  onBlur={handleBlur('Date')}
                  value={values.Date}
                />
              </View>
              <Text style={styles.txt}> Add Duration </Text>

              <View style={styles.inputcontainer}>
                <TextInput
                  style={styles.input}
                  placeholder="No of Hours"
                  onChangeText={handleChange('addDuration')}
                  onBlur={handleBlur('addDuration')}
                  value={values.addDuration}
                />
              </View>

              <Text style={styles.txt}>
                {' '}
                Choose with whom you want to Travel{' '}
              </Text>

              <View style={styles.inputcontainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Select Gender"
                  onChangeText={handleChange('selectGender')}
                  onBlur={handleBlur('selectGender')}
                  value={values.selectGender}
                />
              </View>
              <Text style={styles.txt}> Purpose of Travel </Text>

              <View style={styles.inputcontainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Reason"
                  onChangeText={handleChange('Reason')}
                  onBlur={handleBlur('Reason')}
                  value={values.Reason}
                />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Consulation')}>
                <Text> Submit </Text>
              </TouchableOpacity>

              {/* <Button style={styles.button} title="Submit"  onPress={handleSubmit} /> */}
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: 'blue',
  },
  title: {
    color: 'white',
    //fontWeight: 'bold',
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
    backgroundColor: 'blue',
  },
  txt: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
  },
  button: {
    marginTop: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    width: 250,
    height: 40,
    backgroundColor: 'purple',
  },
  buttonInput: {
    marginLeft: 25,
    marginTop: 6,
    color: 'white',
  },
});
