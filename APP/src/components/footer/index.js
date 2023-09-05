import React from "react";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


import { StyleSheet, View } from "react-native";

export default function Footer() {

    return (
        <View style={styles.container}>
            <View style={styles.footer}>

                <Feather style={styles.users}
                    name="user"
                    size={54}
                    color="black" />


                <MaterialCommunityIcons style={styles.skate} name="skateboard"
                    size={60}
                    color="black" />

                    <AntDesign style={styles.carrinho}
                    name="shoppingcart"
                     size={60} 
                     color="black" />



            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    footer: {
        flexDirection: 'row'
    },
    users: {
        marginTop: 100
    },
    skate: {
        marginTop: 100
    },
    carrinho:{
        marginTop:100
    }



}
)


