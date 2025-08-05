import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ProductDetailPage = () => {
    return(
        <ScrollView style = {styles.container}>
            <Text style={styles.title}>Ürün Detay Sayfası</Text>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});