import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class BookWebView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>跳转页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#f5f5f5'
    }
})
