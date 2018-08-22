import React, { PureComponent } from 'react'
import { View } from 'react-native'
import Foot from '../component/Footer'
import Search from '../component/Search'
import Article from '../component/Article'
import { EventConsumer } from '../../utils'

export default class Index extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <EventConsumer>
                    {ctx => (
                        <View>
                            <Search eventBus={ctx} />
                            <Article data={ctx.articleList} />
                        </View>
                    )}
                </EventConsumer>
            </View>
        )
    }
}
