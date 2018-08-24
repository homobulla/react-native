import React, { PureComponent, Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
// import Foot from '../component/Footer'
import Search from '../component/Search'
import Article from '../component/Article'
import { EventConsumer } from '../../utils'
class LogoTitle extends Component {
    static navigationOptions = {}

    render() {}
}
export default class Index extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <EventConsumer>
                    {ctx => (
                        <View>
                            <Search eventBus={ctx} />
                            <Article
                                navigation={this.props.navigation}
                                data={ctx.articleList}
                            />
                        </View>
                    )}
                </EventConsumer>
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
