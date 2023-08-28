import React from "react";

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

import { Feather } from '@expo/vector-icons';

import { View, Image, StyleSheet } from "react-native";

export default function Header3({ back }) {

    const navigation = useNavigation();
    return (

        <View style={styles.containerHeader}>

            <View style={styles.volta}>
                <Ionicons style={styles.iconeVoltar}
                    name="arrow-back-circle-sharp"
                    size={50}
                    color="black"
                    onPress={back}
                />


            </View>
            <Image

                source={require('../../assets/img/iconesite.png')}
                style={styles.headerImage}
            />

            <Feather 
            name="search"
             size={24} 
             color="black" 
             style={styles.headerBusca}
             />
        </View>
    )

}

const styles = StyleSheet.create({
    containerHeader: {
        flex: 0.3,

        flexDirection: 'row'



    },

    headerImage: {
        marginTop: '15%',
        width: '20%',
        height: '44%',
        marginLeft: '20%',
        marginRight: 'auto',


    },
    volta: {
        width: '20%',
        height: '40%',
        marginTop: 50,
        paddingLeft: 5,
        backgroundColor: 'blue',
        paddingTop: 10
    },

    iconeVoltar: {
        paddingLeft: 10
    },

    headerBusca:{
        width:'20%',
        marginTop:'20%'
    }

})