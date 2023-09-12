import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Products2() {
    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>
                <Image
                    source={require("../../assets/img/product4.png")}
                    style={styles.productImage}
                />
                <Text style={styles.productDescription}>
                SKATE MONTADO INICIANTE HONDAR
                </Text>
                <Text style={styles.productPrice}>R$ 99,99</Text>
            </View>

            <View style={styles.productContainer}>
                <Image
                    source={require("../../assets/img/product5.png")}
                    style={styles.productImage}
                />
                <Text style={styles.productDescription}>
                SKATE MONTADO INTERMEDIÁRIO HONDAR
                </Text>
                <Text style={styles.productPrice}>R$ 129,99</Text>
            </View>

            <View style={styles.productContainer}>
                <Image
                    source={require("../../assets/img/product6.png")}
                    style={styles.productImage}
                />
                <Text style={styles.productDescription}>
                    SKATE DE TREINO INICIANTE HONDAR
                </Text>
                <Text style={styles.productPrice}>R$ 79,99</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap", // Quebrar a linha
    },
    productContainer: {
        width: "32%",
        marginBottom: 20,
        alignItems: "center",
    },
    productImage: {
        width: "100%",
        height: 120,
        resizeMode: "cover",
        borderRadius: 5,
    },
    productDescription: {
        color: "#000000",
        textAlign: "center",
        marginTop: 5,
    },
    productPrice: {
        color: "#B126E8",
        textAlign: "center",
        fontWeight: "bold",
    },
});
