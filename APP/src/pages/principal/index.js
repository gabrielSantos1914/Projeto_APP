import React from "react";

import { useNavigation } from "@react-navigation/native";

import { ScrollView, View, StyleSheet, Image } from "react-native";

import Header3 from "../../components/header3";
import Footer from "../../components/footer";

export default function Principal() {

    const navigation = useNavigation();
    const onpress = () => navigation.navigate('Cadastro2')

    return (

        <View style={{flex: 1}}>
            <ScrollView style={styles.container}>

                <View style={styles.header}>
                    <Header3 />
                </View>
                <View style={styles.conteudo}>
                    <View style={styles.cima}>
                        <Image
                            source={require('../../assets/img/Skate01.png')}
                            style={styles.img1}
                            resizeMode='cover'
                        />
                    </View>
                    <View style={styles.meio}>
                        <Image
                            source={require('../../assets/img/Skate2.png')}
                            style={styles.img2}
                            resizeMode='cover'
                        />
                        <Image
                            source={require('../../assets/img/Skate.png')}
                            style={styles.img3}
                            resizeMode='cover'
                        />

                    </View>

                </View>

            </ScrollView>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    header: {
        marginTop: 30
    },
    img1: {
        width: '100%',
        height: 190,
        borderWidth: 3,
        borderColor: "gray",
        marginBottom: 10
    },
    meio: {
        flexDirection: 'row',
        // backgroundColor:'red'
        marginLeft: 10

    },
    img2: {
        width: 180,
        height: 300,
        borderWidth: 3,
        borderColor: "gray",
    },
    img3: {

        marginLeft: 10,
        width: 180,
        height: 300,
        borderWidth: 3,
        borderColor: "gray",
    }




})