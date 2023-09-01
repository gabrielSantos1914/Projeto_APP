import React from "react";

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";



import { View, Image, StyleSheet } from "react-native";

export default function Header3({ back }) {

    const navigation = useNavigation();
    return (

        <View style={styles.containerHeader}>

            <View style={styles.volta}>
                <Ionicons style={styles.iconeVoltar}
                    name="arrow-back-circle-sharp"
                    size={70}
                    color="black"
                    onPress={back}
                />


            </View>
            <Image

                source={require('../../assets/img/iconesite.png')}
                style={styles.headerImage}
            />

        
        </View>
    )

}

const styles = StyleSheet.create({
    containerHeader: {
        height:200,
        flexDirection: 'row'
    },

    headerImage: {
        marginTop: '15%',
        width: 80,
        height: 110,
        marginLeft: '20%',
        marginRight: 'auto',


    },
    volta: {
        marginTop: 50,
        paddingLeft: 5,
        paddingTop: 10,
        
    },

    iconeVoltar: {


    },
})