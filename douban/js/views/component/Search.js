import React, { Component } from 'react'
import { AppRegistry, Text, TextInput, View, ToastAndroid } from 'react-native'
import $ from '../../service/axios'

export default class Search extends Component {
	constructor(props) {
		super(props)
		this.state = { text: '' }
	}

	renderDate = (e) => {
		$.search(this.state.text)
	}

	render() {
		return (
			<View style={{ padding: 10 }}>
				<TextInput
					style={{ height: 40 }}
					placeholder="请输入关键字来检索"
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
				/>
				<Text
					style={{ padding: 10, fontSize: 42 }}
					onPress={(_) => {
						this.renderDate()
					}}
				>
					{this.state.text
						.split(' ')
						.map((word) => word && '🍕')
						.join(' ')}
				</Text>
			</View>
		)
	}
}
