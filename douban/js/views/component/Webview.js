import React, { Component } from 'react'
import { WebView, Text } from 'react-native'
class BookWebView extends Component {
    render() {
        const { navigation } = this.props
        const uri = navigation.getParam('alt', 'NO-ID')
        return (
            <WebView
                source={{ uri }}
                style={{ marginTop: 0 }}
                startInLoadingState={true}
            />
        )
    }
}
export default BookWebView
