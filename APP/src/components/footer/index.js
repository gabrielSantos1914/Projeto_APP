import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Footer() {

    return (
        <View style={styles.container}>
            <View style={styles.footer}>
                <Image
                    style={styles.icon}
                    source={require("../../assets/icons/user.png")}
                />

                <Image
                    style={styles.icon}
                    source={require("../../assets/icons/skateboard.png")}
                />

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
        // backgroundColor: 'lightgray',
        paddingVertical: 7,
    },

    icon: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    }
});
