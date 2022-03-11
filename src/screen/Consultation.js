import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import ExtendedTextInput from '../components/molecules/ExtendedTextInput';
import Button from '../components/atoms/Button';


const Consulation = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.head}>
        <Icon 
         onPress={() => navigation.goBack()}
        
        name="chevron-back" size={28} color="white" />
        <Text style={styles.title}> Consulation </Text>
      </View>
      <View style={styles.formik}>
        <Formik
          initialValues={{
            startPoint: '',
            Reason: '',
            Date: '',
          }}
          onSubmit={values => navigation.navigate('Incident')}>
          {({
            handleChange,
            handleSubmit,
            values,
            handleBlur,
            errors,
            touched,
          }) => (
            <View style={styles.heading}>
              <ExtendedTextInput
                title={'Select Type of Incident '}
                placeholder="Start Point"
                onChangeText={handleChange('startPoint')}
                onBlur={handleBlur('startPoint')}
                value={values.startPoint}
              />

              <ExtendedTextInput
                title={'Tell us more About it'}
                
                placeholder="Please describe your incident in details. This 
                information is not shared with anyone"
                onChangeText={handleChange('Reason')}
                onBlur={handleBlur('Reason')}
                value={values.Reason}
              />
              
              <ExtendedTextInput
                title={'Date'}
                placeholder="dd-mm-yyyy"
                onChangeText={handleChange('Date')}
                onBlur={handleBlur('Date')}
                value={values.Date}
              />

              <Button
                style={styles.bttn}
                onPress={handleSubmit}
                text="Submit"
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Consulation;

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
});
