import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import Header3 from "../../components/header3";
import AddCartButton from "../../components/addCartButton";
import Footer from "../../components/footer";

export default function Produtos() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Header3 />
            </View>
            <View style={styles.content}>
                <Image
                    source={require("../../assets/img/product1.png")}
                    style={styles.image}
                />
                <Text style={styles.productTitle}>
                    SKATE MONTADO INICIANTE HONDAR
                </Text>
                <Text style={styles.productDescription}>
                    Skate Montado Chaze Skateboards
                    {"\n\n"}
                    - Ideal para iniciantes
                    {"\n"}
                    - Shape Fabricado em 7 lâminas
                    {"\n"}
                    - Maple 8.0
                    {"\n"}
                    - Truck em Aluminio
                    {"\n"}
                    - Roda em poliuretano 53 mm
                    {"\n"}
                    - Peso aproximado 2.500kg
                    {"\n"}
                    - Indicado para uso até 80kg
                    {"\n"}
                    - Possui Lixa
                    {"\n"}
                    - Modalidade Street
                    {"\n\n"}
                    As cores das peças podem variar de acordo com a disponibilidade em estoque.
                    {"\n\n"}
                    Possui garantia contra defeito de fabricação, em casa danos causados pelo mal uso, a garantia não será válida.
                </Text>
                <Text style={styles.contact}>
                    - Tire suas dúvidas pelo nosso WhatsApp (47) 3332-6625, será um prazer atendê-lo.
                </Text>
                <AddCartButton />
            </View>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    header: {},
    content: {
        padding: 10,
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    productTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center",
    },
    productDescription: {
        fontSize: 16,
        marginTop: 20,
        textAlign: "left",
    },
    contact: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
    }
});
