import React, { useEffect} from "react";

import { StyleSheet, Image, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as Animatable from 'react-native-animatable'
import Skates from "../skates";

export default function BoasVindas(){

    const navigation = useNavigation();

    useEffect(() => { //aplica o tempo para carregamento do app e chama a próxima tela
        const timer = setTimeout(() => {
            navigation.navigate('Skates')
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation='fadeInDownBig'
                    source={require('../../assets/img/logoPreto.png')}
                    style={{ width: '70%' }}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View 
            delay={600} 
            animation={'zoomInDown'} 
            />
        </View>
    )
}


const styles = StyleSheet.create({ 
    container: {
        flex: 1, 
        backgroundColor: '#B126E8'
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    

})

