import React, { PureComponent, Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
// import Foot from '../component/Footer'
// import Search from './Search'
import Article from '../component/Article'
import { EventConsumer } from '../../utils'
class LogoTitle extends Component {
    static navigationOptions = {}

    render() {}
}
export default class Index extends PureComponent {
    static navigationOptions = {
        // headerTitle instead of title
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.view}>
                    <Text style={styles.title} />

                    <Text style={styles.title}>one is all</Text>
                    <Text
                        style={styles.search}
                        onPress={() => this.props.navigation.navigate('Search')}
                    >
                        Search
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        height: 50,
        backgroundColor: 'powderblue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 14
    },
    search: {
        paddingRight: 13
    }
})
