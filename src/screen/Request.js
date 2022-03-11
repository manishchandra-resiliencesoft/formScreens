import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import {NavigationContainer} from '@react-navigation/native';
import ExtendedTextInput from '../components/molecules/ExtendedTextInput';
import Button from '../components/atoms/Button';
import * as Yup from 'yup';
import { NativeScreenNavigationContainer } from 'react-native-screens';

const validationSchema = Yup.object({
  Source: Yup.string().required('*Required'),
  Destination: Yup.string().required('*Required'),
  Date: Yup.string().required('*Required'),
  addDuration: Yup.string().required('*Required'),
  selectGender: Yup.string().required('*Required'),
  Reason: Yup.string().required('*Required'),
});

const Request = ({navigation}) => {
  return (
    <ScrollView style={styles.head}>
      <View style={styles.icon}>
        <View style={styles.arrow}>
          <Icon 
          onPress={() => navigation.goBack()}
          
          name="angle-left" size={30} color="white" />
        </View>
        <Text style={styles.title}>Request</Text>
      </View>
      <View style={styles.body}>
        <Formik
          initialValues={{
            Source: '',
            Destination: '',
            Date: '',
            addDuration: '',
            selectGender: '',
            Reason: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => navigation.navigate('Consultation')}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <ExtendedTextInput
                title="Source"
                onChangeText={handleChange('Source')}
                onBlur={handleBlur('Source')}
                value={values.Source}
                placeholder="Start Point"
                icon="map-marker"
              />
              {errors.Source && touched.Source ? (
                <Text style={styles.error}>{errors.Source}</Text>
              ) : null}
              <ExtendedTextInput
                title="Destination"
                onChangeText={handleChange('Destination')}
                onBlur={handleBlur('Destination')}
                value={values.Destination}
                placeholder="End Point"
                icon="map-marker"
              />
              {errors.Destination && touched.Destination ? (
                <Text style={styles.error}>{errors.Destination}</Text>
              ) : null}
              <ExtendedTextInput
                title="Date"
                onChangeText={handleChange('Date')}
                onBlur={handleBlur('Date')}
                value={values.Date}
                placeholder="dd-mm-yyyy"
                fonticon="date"
              />
              {errors.Date && touched.Date ? (
                <Text style={styles.error}>{errors.Date}</Text>
              ) : null}
              <ExtendedTextInput
                title="Add Duration"
                onChangeText={handleChange('addDuration')}
                onBlur={handleBlur('addDuration')}
                value={values.addDuration}
                placeholder="No. of Hours"
                ionicIcons="time-outline"
              />
              {errors.addDuration && touched.addDuration ? (
                <Text style={styles.error}>{errors.addDuration}</Text>
              ) : null}
              <ExtendedTextInput
                title="Choose with whom you want to Travel"
                onChangeText={handleChange('selectGender')}
                onBlur={handleBlur('selectGender')}
                value={values.selectGender}
                placeholder="Select Gender"
                icon="angle-down"
              />
              {errors.selectGender && touched.selectGender ? (
                <Text style={styles.error}>{errors.selectGender}</Text>
              ) : null}

              <ExtendedTextInput
                title="Purpose of Travel"
                onChangeText={handleChange('Reason')}
                onBlur={handleBlur('Reason')}
                value={values.Reason}
                placeholder="Reason"
              />
              {errors.Reason && touched.Reason ? (
                <Text style={styles.error}>{errors.Reason}</Text>
              ) : null}
              <Button onPress={handleSubmit} text="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Request;

const styles = StyleSheet.create({
  head: {
    flex: 1,
    backgroundColor: 'white',
  },
  icon: {
    flexDirection: 'row',
    backgroundColor: '#2E67F8',
    paddingVertical: 20,
  },
  title: {
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
    margin: 15,
  },
  arrow: {
    marginLeft: 25,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  body: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 50,
    justifyContent: 'center',
  },
  txt_input: {
    color: 'black',
    margin: 30,
  },
  txt1: {
    marginTop: 25,
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  txt: {
    fontSize: 15,
  },
  img1: {
    marginTop: 30,
    marginHorizontal: 125,
  },
  error: {
    color: 'red',
    marginLeft: 230,
  },
});
