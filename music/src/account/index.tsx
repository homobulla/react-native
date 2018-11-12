import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'

export class Account extends React.PureComponent<props> {
    render() {
        return (
            <ScrollView>
                <Text
                    onPress={_ => {
                        this.props.navigation.navigate('SongList')
                    }}
                >
                    this is account@!
                </Text>
            </ScrollView>
        )
    }
}
