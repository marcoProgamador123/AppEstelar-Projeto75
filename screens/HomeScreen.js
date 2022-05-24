import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{justfyContent:"center", alignItems:"center"}}>
                <Text style={styles.titleText}>
                    Tela Inicial
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    titleText: {
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
        marginTop:200
    },
})