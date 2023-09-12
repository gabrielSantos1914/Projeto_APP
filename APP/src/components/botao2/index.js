import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Botao2() {
    return (
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        paddingVertical: 14,
        borderRadius: 15,
        width: "30%",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
    },
});
