import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Index from './js/views/view/Index'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Index />
			</View>
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
