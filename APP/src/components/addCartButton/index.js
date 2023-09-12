import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function AddCartButton() {
    return (
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Adicionar no carrinho</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        paddingVertical: 14,
        borderRadius: 15,
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#FFFFFF", 
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
    }
});
