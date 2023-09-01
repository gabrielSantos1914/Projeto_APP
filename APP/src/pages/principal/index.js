import React from "react";

import { useNavigation } from "@react-navigation/native";

import { ScrollView, View, StyleSheet } from "react-native";

import Header3 from "../../components/header3";

export default function Principal() {

    const navigation = useNavigation();
    const onpress = () => navigation.navigate('Cadastro2')

    return (

        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Header3 />
            </View>
<View style={styles.conteudo}>




</View>






        </ScrollView>
    )
}

const styles = StyleSheet.create({

container:{
    flex:1,
}



})