import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

export default function SearchInput() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/icons/search-icon.png")}
                style={styles.icon}
            />
            <TextInput
                placeholder="Pesquisar produto"
                style={styles.input}
                placeholderTextColor="#696663"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        width: "60%",
        height: 55,
        borderWidth: 2,
        borderColor: "black",
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#696663",
        height: "100%",
        
    },
});
