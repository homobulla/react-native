import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Index from './js/views/view/Index'
import { EventProvider } from './js/utils'
import { NativeRouter } from 'react-router-native'
import Routes from './js/routes'
export default class App extends Component {
    render() {
        return (
            <NativeRouter>
                <EventProvider>
                    <View style={styles.container}>
                        <Routes />
                    </View>
                </EventProvider>
            </NativeRouter>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
        paddingTop: 30,
        flexDirection: 'column'
    }
})
