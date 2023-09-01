import React from "react";

import { TextInput, StyleSheet } from "react-native";
import { View } from "react-native-animatable";

export default function Input1({texto,valor, altera, teclado}){

    return (


    <TextInput
    style={styles.input}
    placeholder={texto}
    placeholderTextColor={'#000000'}
    value={valor}
    onChangeText={altera}
    keyboardType={teclado}
    
    
    />
   
    )
}

const styles = StyleSheet.create({
input:{

    marginTop: 25,
    backgroundColor: '#D0D0D0',
    width: '80%',
    height:45,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20, 
    paddingHorizontal: 25,
    paddingVertical: 9,
    borderRadius:18 
},


})