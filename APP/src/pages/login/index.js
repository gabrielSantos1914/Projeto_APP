import React, { useState, useEffect } from 'react';

import { Text, StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header1 from '../../components/header1';
import Input1 from '../../components/input1';
import InputSenha from '../../components/inputSenha';
import Botao from '../../components/botao';


export default function Login({ navigation }) {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const clienteId = 1;

    const goNext = () => navigation.navigate('Skates', { clienteId })
    const atualizaPagina = () => navigation.replace('Login');
    const goSenha = () => navigation.navigate('Senha');
    const goCadastro = () => navigation.navigate('Cadastro1');
    


    useEffect(() => { //chama a função especificada a cada renderização da tela.
        fetchToken();
    }, [])

    const fetchToken = async () => {
        try {
            const token = await AsyncStorage.getItem('authToken')
        }
        catch (error) {
            console.error('Não foi possível obter o token do AsyncStorage.', error)
        }
    }

    const efetuaLogin = async () => {
        try {
            const resposta = await axios.post('http://192.168.49.45:3000/auth', {
                email: email,
                senha: senha
            },

                console.log(email),
                console.log(senha)
            )

            if (resposta.status === 200) {
                const token = resposta.data.token;
                await AsyncStorage.setItem('authToken', token)
                console.log(token)
                Alert.alert('Login efetuado com sucesso!')
                goNext('Skate');
                console.log(clienteId)
                setEmail('');
                setSenha('');
            }

        } catch (error) {
            console.error('Erro de autenticação: ', error),
                Alert.alert('Ocorreu um erro, email ou senha incorretos. Tente novamente.')
            atualizaPagina();
            setEmail('');
            setSenha('');

        }
    }


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
                    onPress={goSenha}

                >
                    Esqueci minha senha
                </Text>
                <View style={styles.itens}>
                    <Text style={styles.cadastro}>
                        Ainda não tem conta?
                    </Text>
                    <Text style={styles.cadastroLink}
                        onPress={goCadastro}
                    > Cadastre-se!</Text>
                </View>

                <Botao
                    labelbutton={'Login'}
                    onpress={efetuaLogin}
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

