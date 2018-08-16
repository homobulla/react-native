import React, { PureComponent } from 'react'
import { View } from 'react-native'
import Foot from '../component/Footer'
import Search from '../component/Search'
export default class Index extends PureComponent {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Search />
				<Foot />
			</View>
		)
	}
}
