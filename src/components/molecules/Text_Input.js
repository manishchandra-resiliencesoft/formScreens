import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const Text_Input = ({onChangeText, onBlur, value, placeholder }) => {
  return (
    <View style={styles.input}>
        <TextInput 
            style={styles.text}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={'lightgrey'}
        />
    </View>
  )
}

export default Text_Input

const styles = StyleSheet.create({
    input:{
        flex: 1,
        marginTop: 30,
        backgroundColor: '$WHITE',
        borderRadius: 15,
        marginHorizontal: 20,
        flexDirection: 'row',
        height: 50,
    },
    img1:{
        marginTop: 5,
        marginHorizontal: 15,
    },
    text: {
        color: '$DARK',
        marginTop: 7,
        fontWeight: 'bold',
        fontSize: 14,
    },
})