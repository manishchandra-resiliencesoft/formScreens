import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.bttn}>
        <LinearGradient
          colors={['#4da6ff', '#8080ff']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.LinearGradient}>
          <Text style={styles.txt2}>{text}</Text>
          <View style={styles.icon} >
            <Icon name="angle-right" size={25} color="#fff" />
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  txt2: {
    color: 'white',
    paddingVertical: 15,
  },
  LinearGradient: {
    marginVertical: 10,
    width: 265,
    height: 50,
    justifyContent: 'space-between',
    borderRadius: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical : 50,
    
  },
  icon: {
  },
  bttn : {
    alignItems: 'center'
  }
});
