import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Products1() {
    // const navigation = useNavigation();

    // const navigateToProdutos = () => {
    //     navigation.navigate("Produtos");
    // };
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={navigateToProdutos}> */}
            <View style={styles.productContainer}>
                <Image
                    source={require("../../assets/img/product1.png")}
                    style={styles.productImage}
                />
                <Text style={styles.productDescription}>
                SKATE MONTADO INICIANTE HONDAR
                </Text>
                <Text style={styles.productPrice}>R$ 99,99</Text>
            </View>
            {/* </TouchableOpacity> */}

            <View style={styles.productContainer}>
                <Image
                    source={require("../../assets/img/product2.png")}
                    style={styles.productImage}
                />
                <Text style={styles.productDescription}>
                SKATE MONTADO INTERMEDIÁRIO HONDAR
                </Text>
                <Text style={styles.productPrice}>R$ 129,99</Text>
            </View>

            <View style={styles.productContainer}>
                <Image
                    source={require("../../assets/img/product3.png")}
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
        paddingTop: 15
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
