import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { StyleSheet, View, Text, KeyboardAvoidingView, ScrollView } from "react-native";

import Header2 from '../../components/header2';
import Input1 from "../../components/input1";
import InputSenha from "../../components/inputSenha";
import Botao from "../../components/botao";


export default function Cadastro1({ navigation }) {
    // const navigation = useNavigation();
    const back = () => navigation.navigate('Login')

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');

    const avancar = () => {
        if ( nome === '' || email === '' || senha === '' || telefone === '' || cpf === ''){
            Alert.alert('Preencha as informações corretamente.')
            return;
        }
        navigation.navigate('Cadastro2', {
            nome,
            email,
            senha,
            telefone,
            cpf
        }
        ), console.log(nome)
        console.log(email)
        console.log(senha)
        console.log(telefone)
        console.log(cpf)

    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <ScrollView style={styles.posicao}>

                <Header2
                    back={back}
                />


                <Text style={styles.titulo}>
                    Faça seu cadastro
                </Text>


                <View style={styles.organizar}>
                    <Input1
                        texto={'Nome'}
                        teclado={'default'}
                        altera={setNome}
                        valor={nome}
                    />
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

                    <Input1
                        texto={'Telefone'}
                        teclado={'default'}
                        valor={telefone}
                        altera={setTelefone}
                    />
                    <Input1
                        texto={'CPF'}
                        teclado={'numeric'}
                        valor={cpf}
                        altera={setCpf}

                    />

                    <Botao
                        labelbutton={'Próximo'}
                        onpress={onpress}

                    />



                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B126E8'
    },

    organizar: {

        paddingTop: '10%'
    },

    posicao: {
        flex: 3
    },

    titulo:{
        color:'white',
fontSize:24,
fontWeight:'bold',
marginLeft:'auto',
marginRight:'auto',
paddingTop:'15%'
    },


})