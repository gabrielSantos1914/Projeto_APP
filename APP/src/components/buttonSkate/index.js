import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ButtonSkate() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, styles.skateMontadoButton]}
                onPress={() => {

                }}
            >
                <Text style={styles.buttonText}>SKATE MONTADO</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.shapesButton]}
                onPress={() => {

                }}
            >
                <Text style={[styles.buttonText, styles.blackText]}>SHAPES</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.rodasButton]}
                onPress={() => {

                }}
            >
                <Text style={[styles.buttonText, styles.blackText]}>RODAS</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        paddingVertical: 8,
        marginTop: 20,
        borderRadius: 15,
        flex: 1,
        borderWidth: 2,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    skateMontadoButton: {
        backgroundColor: "#B126E8",
    },
    shapesButton: {
        backgroundColor: "#FFFFFF",
    },
    rodasButton: {
        backgroundColor: "#FFFFFF",
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: 'center'
    },
    blackText: {
        color: "#000000",
    },
});
