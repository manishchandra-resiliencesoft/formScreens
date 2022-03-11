import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import ExtendedTextInput from '../components/molecules/ExtendedTextInput';
import Textarea from '../components/molecules/Textarea';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Button from '../components/atoms/Button';
import * as Yup from 'yup';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const validationSchema = Yup.object().shape({
  date: Yup.string().required('*Required'),
});

var data = [
  {label: 'Assult', value: 0},
  {label: 'Chain Snatching', value: 1},
  {label: 'Domestic Violence', value: 2},
  {label: 'Eve Teasing', value: 3},
  {label: 'Sexual Harassment', value: 4},
];

const Consultation = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Icon 
          onPress={() => navigation.goBack()}
          
          name="angle-left" size={30} color="white" />
        </View>
        <Text style={styles.title}>Consultation</Text>
      </View>
      <View style={styles.formik}>
        <Formik
          initialValues={{
            startPoint: '',
            reason: '',
            date: '',
          }}
          validationSchema={validationSchema}
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
              <View style={styles.radiobutton}>
                <Text style={styles.text}>Select Type of Incidence </Text>
                <RadioForm
                  style={styles.radio}
                  radio_props={data}
                  initial={1}
                  onPress={value => {}}
                  buttonSize={5}
                  buttonOuterSize={20}
                  buttonColor={'grey'}
                />
              </View>
              {errors.startPoint && touched.startPoint ? (
                <Text style={styles.error}>{errors.startPoint}</Text>
              ) : null}
              <Textarea
                title={'Tell us more About it'}
                placeholder="Please describe your incident in details. This information is not shared with anyone"
                onChangeText={handleChange('reason')}
                onBlur={handleBlur('reason')}
                value={values.reason}
              />
              {errors.reason && touched.reason ? (
                <Text style={styles.error}>{errors.reason}</Text>
              ) : null}
              <ExtendedTextInput
                title={'Select a Date for Consultation'}
                placeholder="dd-mm-yyyy"
                onChangeText={handleChange('date')}
                onBlur={handleBlur('date')}
                value={values.date}
                FontistoIcon="date"
              />
              {errors.date && touched.date ? (
                <Text style={styles.error}>{errors.date}</Text>
              ) : null}
              <Button
                style={styles.bttn}
                onPress={handleSubmit}
                text="Book An Appointment"
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Consultation;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#2E67F8',
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
  radiobutton: {
    marginVertical: 15,
  },
  radio: {
    margin: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 10,
    color: 'black',
  },
});
