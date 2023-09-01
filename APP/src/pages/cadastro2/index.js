import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { StyleSheet, View, Text, KeyboardAvoidingView, ScrollView } from "react-native";

import Header2 from '../../components/header2';
import Input1 from "../../components/input1";
import Botao from "../../components/botao";

export default function Cadastro2() {
    const navigation = useNavigation();
    const onpress = () => navigation.navigate('')
    const back = () => navigation.navigate('Cadastro1')


    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');


    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.posicao}>
                <Header2
                    back={back}
                />


                <Text style={styles.titulo}>
                    Faça seu cadastro
                </Text>

                <View style={styles.organizar}>
                    <Input1
                        texto={'Endereco'}
                        teclado={'default'}
                        altera={setEndereco}
                        valor={endereco}
                    />
                    <Input1
                        texto={'Bairro'}
                        teclado={'default'}
                        altera={setBairro}
                        valor={bairro}
                    />

                    <Input1
                        texto={'Cidade'}
                        teclado={'default'}
                        altera={setCidade}
                        valor={cidade}


                    />

                    <Input1
                        texto={'Cep'}
                        teclado={'numeric'}
                        valor={cep}
                        altera={setCep}
                    />
                    <Input1
                        texto={'Complemento'}
                        teclado={'default'}
                        valor={complemento}
                        altera={setComplemento}

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

    titulo: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '15%'
    },


})