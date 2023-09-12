import React from "react";

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

import { View, Image, StyleSheet } from "react-native";

export default function Header2({back}) {

    const navigation = useNavigation();
    return (

        <View style={styles.containerHeader}>

            <View style={styles.volta}>
            <Ionicons
             name="arrow-back-circle-sharp" 
            size={50} 
            color="black" 
            onPress={back}
            />


            </View>
            <Image
                source={require('../../assets/img/logoPreto.png')}
                style={styles.headerImage}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    containerHeader: {
        flex: 0.3,
        backgroundColor:'#B126E8',
        flexDirection: 'row'
        
    

    },

    headerImage: {
        marginTop:'25%',
        width: 155,
        height: 130,
        marginLeft: '17.5%',
        marginRight: 'auto',
       
        
    },
    volta: {
        width: 60,
        height: 80,
        marginTop: 50,
        paddingLeft:5
    }
    
})