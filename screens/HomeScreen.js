import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.titleText}>
                    Hello Word
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
        marginLeft:180,
        marginTop:200,
        justifyContent:"center"
    },
})