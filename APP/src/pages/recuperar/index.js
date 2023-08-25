import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { KeyboardAvoidingView, ScrollView, View, StyleSheet, Text } from "react-native"

import Header2 from "../../components/header2";
import Input1 from "../../components/input1";
import Botao from "../../components/botao";


export default function Recuperar() {
    const navigation = useNavigation('BoasVindas');
    const back = () => navigation.navigate('Login')


    const [email, setEmail] = useState('');


    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <ScrollView style={styles.conteudo}>
                <View style={styles.Header}>
                    <Header2
                        back={back}
                    />
                </View>
                <View style={styles.texto1}>
                    <Text style={styles.titulo1}>
                        Recupere sua senha
                    </Text>
                </View>

                <View style={styles.texto2}>
                    <Text style={styles.titulo2}>
                        informe seu e-mail cadastrado

                    </Text>

                </View>

               
                    <Input1
                        texto={'E-mail'}
                        teclado={'default'}
                        valor={email}
                        altera={setEmail}
                    />
                     <Botao
                    labelButton={'Próximo'}
                    onpress={''}
            />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B126E8'
    },
    texto1: {

        height: '40%',
        alignItems: 'center'

    },

    titulo1: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: '10%'
    },

    texto2: {
        height: '10%',
        alignItems: 'center'
    },

    titulo2: {
        fontSize: 16,
        color: 'white',
        paddingTop: '2%',

    },
    
    organizarBotao:{
        backgroundColor:'blue',
        height:'50%',
        alignItems:'center',
    },
   
})