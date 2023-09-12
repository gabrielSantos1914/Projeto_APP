import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Footer() {

     const navigation = useNavigation();
     const perfil = () => navigation.navigate('EditarPerfil')
     const skate = () => navigation.navigate('Skates')

    return (
        <View style={styles.container}>
            <View style={styles.footer}>
                <TouchableOpacity onPress={perfil}>
                <Image
                    style={styles.icon}
                    source={require("../../assets/icons/user.png")}
                    
                
                    
                />
                </TouchableOpacity>

                <TouchableOpacity onPress={skate}>

                <Image
                    style={styles.icon}
                    source={require("../../assets/icons/skateboard.png")}
                    onPress={skate}
                />
                </TouchableOpacity>

                <Image
                    style={styles.icon}
                    source={require("../../assets/icons/accessory.png")}
                />

                <Image
                    style={styles.icon}
                    source={require("../../assets/icons/shoppingcart.png")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        paddingVertical: 7,
    },

    icon: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    }
});
