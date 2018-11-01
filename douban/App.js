import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { EventProvider } from './js/utils'
import { NativeRouter } from 'react-router-native'
import Root from './js/routes'
export default class App extends Component {
    render() {
        return (
            <NativeRouter>
                <EventProvider>
                    <View style={styles.container}>
                        <Root />
                    </View>
                </EventProvider>
            </NativeRouter>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF3F5',
        flexDirection: 'column'
    }
})
