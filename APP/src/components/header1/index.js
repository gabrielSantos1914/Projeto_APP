import React from "react";

import { useNavigation } from "@react-navigation/native";

import { View, Image, StyleSheet } from "react-native";

export default function Header1() {

    const navigation = useNavigation();
    return (

        <View style={styles.containerHeader}>
            <Image
                source={require('../../assets/img/logoPreto.png')}
                style={styles.headerImage}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    containerHeader: {
        flex: 0.5,
        backgroundColor:''
        
    

    },

    headerImage: {
        marginTop:'25%',
        width: 150,
        height: 120,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})