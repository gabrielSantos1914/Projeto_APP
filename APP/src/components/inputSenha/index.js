import React, {useState} from "react";

import {  View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function InputSenha(valor, senha, altera, teclado){
    const [showPassword, setShowPassword] = useState(false); 

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
      
        <View style={styles.InputSenha}>
            <TextInput
                style={styles.senha}
                placeholder={'Senha'}
                placeholderTextColor={'#000000'}
                value={valor}
                onChangeText={altera}
                keyboardType={teclado}
                secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.olho}>
                <Ionicons
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={25}
                    color="#B126E8" 
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
InputSenha:{
    marginTop: 25,
    backgroundColor: '#D0D0D0',
    width: '80%',
    height:45,
    fontSize:20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius:12,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 25,
    paddingVertical: 9,
    borderRadius:12 
    
},
    senha:{
        fontSize:20
    },

olho: {
    paddingVertical: 1
}


})