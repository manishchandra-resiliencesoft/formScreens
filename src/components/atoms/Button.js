import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <LinearGradient
          colors={['#4da6ff', '#8080ff']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.LinearGradient}>
          <Text style={styles.txt2}>{text}</Text>
          <Icon name="angle-right" size={20} color="white" />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    marginVertical: 30,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 30,
    flexDirection: 'row',
  },
  txt2: {
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  LinearGradient: {
    width: 280,
    height: 50,
    borderRadius: 15,
  },
});
