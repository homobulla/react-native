import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native'

export default class Buttons extends PureComponent {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<TouchableNativeFeedback
				onPress={this._onPressButton}
				background={TouchableNativeFeedback.SelectableBackground()}
			>
				<View style={styles.bottom}>
					<Text>{this.props.name}</Text>
				</View>
			</TouchableNativeFeedback>
		)
	}
}

const styles = StyleSheet.create({
	bottom: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		backgroundColor: 'skyblue'
	}
})
