import React, { Component } from 'react'
import { WebView } from 'react-native'

const BookWebView = ({ uri }) => (
    <WebView source={{ uri }} style={{ marginTop: 20 }} />
)

export default BookWebView
