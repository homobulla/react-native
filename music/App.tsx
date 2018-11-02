/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Demo } from './src/recommend/index'

type Props = {}
export default class App extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Demo word="hello" />
                <Text style={styles.instructions}>恭喜ts引入成功！</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
})
