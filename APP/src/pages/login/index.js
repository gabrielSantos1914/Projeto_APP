import React, { useState, useEffect } from "react";

import { Text, StyleSheet, View, KeyboardAvoidingView } from "react-native"

import { useNavigation } from '@react-navigation/native';
import Header1 from "../../components/header1";
import Input1 from "../../components/input1";
import InputSenha from "../../components/inputSenha";
import Botao from "../../components/botao";


export default function Login() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <Header1 />
            
            <View style={styles.organizar}>

                <Input1
                    texto={'E-mail'}
                    teclado={'default'}
                    altera={setEmail}
                    valor={email}
                />

                <InputSenha
                    teclado={'default'}
                    valor={senha}
                    altera={setSenha}

                />

                <Text
                    style={styles.esqueci}
                    onPress={() => navigation.navigate('Recuperar')}

                >
                    Esqueci minha senha
                </Text>
                <View style={styles.itens}>
                    <Text style={styles.cadastro}>
                        Ainda não tem conta?
                    </Text>
                    <Text style={styles.cadastroLink}
                        onPress={() => navigation.navigate('Cadastro1')}
                    > Cadastre-se!</Text>
                </View>

                <Botao
labelbutton={'Login'}
                />
            </View>
        </KeyboardAvoidingView >
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#B126E8'
    },
    esqueci: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: '52%'
    },

    organizar: {
        paddingTop: '55%'

    },
    itens: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    cadastro: {
        marginTop: 12,
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginLeft: '15%'
    },
    cadastroLink: {
        marginTop: 12,
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    

})

