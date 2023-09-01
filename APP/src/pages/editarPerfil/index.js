import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { StyleSheet, View, Text, KeyboardAvoidingView, ScrollView } from "react-native";

import Header2 from '../../components/header2';
import Input1 from "../../components/input1";
import InputSenha from "../../components/inputSenha";
import Botao from "../../components/botao";

export default function EditarPerfil() {
    const navigation = useNavigation();
    const onpress = () => navigation.navigate('Cadastro2')
    const back = () => navigation.navigate('Login')


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');



    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <ScrollView style={styles.posicao}>

                <Header2 style={styles.logo}
                    back={back}
                />

<Text style={styles.titulo}>
    Editar as informações do perfil
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
                            labelbutton={'Atualizar'}
                            onpress={onpress}

                        />



                    </View>
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

    titulo:{
        color:'white',
fontSize:24,
fontWeight:'bold',
marginLeft:'auto',
marginRight:'auto',
marginTop:'10%'
    },

    logo: {
backgroundColor:'blue'
       
    },

    posicao: {
        flex: 3
    }
    

})