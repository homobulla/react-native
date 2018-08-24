import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class Love extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        backgroundColor: 'red'
                    }}
                >
                    this is love page
                </Text>
                <Text
                    style={{
                        backgroundColor: 'red'
                    }}
                >
                    this is love page
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue'
    }
})
