import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ExtendedTextInput from '../components/molecules/ExtendedTextInput';
import Button from '../components/atoms/Button';

const validationSchema = Yup.object().shape({
  incident: Yup.string().required('*Required'),
  address: Yup.string().required('*Required'),
  vehicle_no: Yup.string().required('*Required'),
  details: Yup.string().required('*Required'),
  evidence: Yup.string().required('*Required'),
});

const Incident = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Icon
            onPress={() => navigation.goBack()}
            name="angle-left"
            size={30}
            color="white"
          />
        </View>
        <Text style={styles.title}>Report Incident</Text>
      </View>
      <View style={styles.formik}>
        <Formik
          initialValues={{
            incident: '',
            address: '',
            vehicle_no: '',
            details: '',
            evidence: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => navigation.navigate('Request')}>
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
                title="Incident"
                onChangeText={handleChange('incident')}
                onBlur={handleBlur('incident')}
                value={values.incident}
                placeholder="Type of Incident"
              />
              {errors.incident && touched.incident ? (
                <Text style={styles.error}>{errors.incident}</Text>
              ) : null}
              <ExtendedTextInput
                title="Address"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                placeholder="Search for Address"
                icon="map-marker"
              />
              {errors.address && touched.address ? (
                <Text style={styles.error}>{errors.address}</Text>
              ) : null}
              <ExtendedTextInput
                title="Vehicle Number"
                onChangeText={handleChange('vehicle_no')}
                onBlur={handleBlur('vehicle_no')}
                value={values.vehicle_no}
                placeholder="Enter here"
              />
              {errors.vehicle_no && touched.vehicle_no ? (
                <Text style={styles.error}>{errors.vehicle_no}</Text>
              ) : null}
              <ExtendedTextInput
                title="Prepetarator Details"
                onChangeText={handleChange('details')}
                onBlur={handleBlur('details')}
                value={values.details}
                placeholder="Enter Details"
              />
              {errors.details && touched.details ? (
                <Text style={styles.error}>{errors.details}</Text>
              ) : null}
              <ExtendedTextInput
                title="Upload Your Evidence here"
                onChangeText={handleChange('evidence')}
                onBlur={handleBlur('evidence')}
                value={values.evidence}
                placeholder="Select File"
                icon="upload"
              />
              {errors.evidence && touched.evidence ? (
                <Text style={styles.error}>{errors.evidence}</Text>
              ) : null}
              <Button onPress={handleSubmit} text="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Incident;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#80bfff',
    paddingVertical: 20,
  },
  icon: {
    marginLeft: 25,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
    margin: 15,
  },
  formik: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 50,
    justifyContent: 'center',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'right',
  },
});
