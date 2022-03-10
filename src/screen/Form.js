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
 import Text_Input from '../components/molecules/Text_Input';

const Form = () => {
  return (
    <View style={styles.head}>
        <View style={styles.icon}>
            <Icon name="leftcircleo" size={30} color="blue" />
            <Text style={styles.title}>Report Incident</Text>
        </View>
      <View style={styles.body}>
      <Formik
          initialValues={{ email: '', password: '' }}
        //   validationSchema={validationSchema}
          onSubmit={values => login(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <Text_Input 
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='E-mail'
              />
              {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null} 
              <Text_Input 
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder='Password'
              />
              {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.btn}>
                  <Text style={styles.txt1}>SUBMIT</Text>
                </View>
              </TouchableOpacity>
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
      backgroundColor: '#BB9981',
  },
  title:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 50,
  },
  body:{
    flex:1,
    backgroundColor: '#E9E9E9',
    justifyContent: 'center',
  },
  input:{
    marginTop: 15,
    marginHorizontal: 32,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10, 
    height: 50, 
  },
  img:{
    marginHorizontal: 15,
    marginTop: 5,
  },
  btn: {
    margin: 100,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    paddingBottom: 20,

  },
  txt1:{
    marginTop: 25,
    fontSize: 17,
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
