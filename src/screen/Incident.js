import React from 'react'
import { 
  StyleSheet,
  Text, 
  TextInput, 
  View,
  Image,
  TouchableOpacity,
 } from 'react-native'
 import Icon from 'react-native-vector-icons/AntDesign';
 import { Formik } from 'formik';
 import ExtendedTextInput from '../components/molecules/ExtendedTextInput';
import Button from '../components/atoms/Button';

const Form = () => {
  return (
    <View style={styles.head}>
        <View style={styles.icon}>
            <Icon name="leftsquareo" size={40} color='white'/>
            <Text style={styles.title}>Report Incident</Text>
        </View>
      <View style={styles.body}>
      <Formik
          initialValues={{ email: '', password: '' }}
        //   validationSchema={validationSchema}
          onSubmit={values => console.log('values', values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <ExtendedTextInput
                title='Incident'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Type of Incident'
              />
              {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null} 
              <ExtendedTextInput
                title='Address'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder='Search for Address'
              />
              {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
              <ExtendedTextInput
                title='Vehicle Number'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Enter here'
              />
              {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null}
              <ExtendedTextInput
                title='Prepetarator Details'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Enter Details'
              />
              {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null}
              <ExtendedTextInput
                title='Upload Your Evidence here'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Select File'
              />
              {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null}
              <Button onPress={handleSubmit} text='Submit' />
            </View>
          )}
        </Formik>
      </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  head:{
    flex:1,
    backgroundColor: 'white'
  },
  icon: {
      flexDirection: 'row',
      backgroundColor: '#80bfff',
  },
  title:{
    color: 'white',
    fontWeight: '400',
    fontSize: 22,
    margin: 15,
  },
  arrow: {
    color: 'black',
    weight: 20,
    height: 20,
  },
  body:{
    flex:1,
    marginHorizontal: 40,
    justifyContent: 'center',
  },
  txt_input:{
    color: 'black',
    margin: 30,
  },
  txt1:{
    marginTop: 25,
    fontSize: 22,
    textAlign: 'center', 
    color: 'black',
    fontWeight: 'bold'
  },
  txt:{
    fontSize: 15,
  },
  img1:{
    marginTop: 30,
    marginHorizontal: 125,
  },
  
})
