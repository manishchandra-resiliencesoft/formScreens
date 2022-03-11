import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0,y: 0 }}
        end= {{x:1,y:0}}
        colors={['#3e89c2', '#b06ab3']}
        style={styles.button}>
        
          <Text style={styles.txt2}>{text}</Text>
          <Icon style={styles.nextArrow} name="chevron-forward-outline" size={28} color="white" />
      </LinearGradient>
      
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 50,
    height: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    marginTop: 40,
    flexDirection: 'row'
  
  },
  txt2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  nextArrow: {
    marginLeft: '70%',
    
    
  }
});
