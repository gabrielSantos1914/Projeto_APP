import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Header3 from "../../components/header3";
import SearchInput from "../../components/searchInput";
import Botao2 from "../../components/botao2";
import ButtonSkate from "../../components/buttonSkate";
import Products1 from "../../components/products1";
import Products2 from "../../components/products2";
import Products3 from "../../components/products3";
import Footer from "../../components/footer";

export default function Skates() {
    return (
        <View style={{flex: 1}}> 
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Header3 />
                </View>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <SearchInput />
                        <Botao2 />
                    </View>
                    <ButtonSkate />
                    <Products1 />
                    <Products2 />
                    <Products3 />
                </View>

            </ScrollView>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 3,
    },
    header: {},
    content: {
        padding: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
