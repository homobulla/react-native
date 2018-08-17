import React from 'react'
import { WebView } from 'react-native'

const BookWebView = props => {
    const { id } = props.match.params
    console.warn(id)
    return <WebView source={{ uri: 'https://book.douban.com/subject/' + id }} />
}

export default BookWebView
