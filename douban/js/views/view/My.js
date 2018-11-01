import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, WebView } from 'react-native'

export default class Love extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <WebView
                source={{
                    uri: 'https://homobulla.site'
                }}
                style={{ marginTop: 0 }}
                startInLoadingState={true}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFF3F5'
    }
})
