import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';

const Consulation = ( {navigation}) => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.head}>
       <Icon name="chevron-back" size={28} color="black" /> 
      <Text style={styles.title}> Consulation </Text>
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
            <Text style={styles.txt}> Select Type of Incident </Text>
            <View style={styles.inputcontainer}>
              <TextInput
                style={styles.input}
                placeholder="Start Point"
                onChangeText={handleChange('Source')}
                onBlur={handleBlur('Source')}
                value={values.Source}
              />
            </View>
            <View style={styles.heading}>
            <Text style={styles.txt}> Tell us more About it </Text>

            <View style={styles.reasonBox}>
              <TextInput
                style={styles.reasonInput}
                placeholder="Please describe your incident in details. This 
                information is not shared with anyone"
                onChangeText={handleChange('Destination')}
                onBlur={handleBlur('Destination')}
                value={values.Destination}
              />
            </View>
            </View>
            <View style={styles.heading}>
            <Text style={styles.txt}> Select a date for Consulation </Text>

            <View style={styles.inputcontainer}>
              <TextInput
                style={styles.input}
                placeholder="dd-mm-yyyy"
                onChangeText={handleChange('Date')}
                onBlur={handleBlur('Date')}
                value={values.Date}
              />
            </View>
            </View>
            

           
            <TouchableOpacity
            onPress={() => navigation.navigate('Form')}
             style={styles.button}>
                <Text style={styles.buttonInput}> Book An Appointment </Text>
            </TouchableOpacity>

            {/* <Button style={styles.button} title="Submit"  onPress={handleSubmit} /> */}
          </View>
        )}
      </Formik>
    </View>
  </View>
  )
}

export default Consulation

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
        marginLeft: 40,
      },
      heading: {
        marginTop: 40
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
      button : {
          marginTop : 40,
          borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        width: 250,
        height: 40,
        backgroundColor: 'purple',

    
      },
      reasonBox : {
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
        height: 150,

      },
      reasonInput: {
          marginTop: 10
      },
      buttonInput: {
          marginLeft: 25,
          marginTop: 6,
          color: 'white'
          
      }
})