import React, { Component, PureComponent } from 'react'
import { FlatList, Text, TextInput, View, Image } from 'react-native'
import $ from '../../service/axios'

export default class Search extends PureComponent {
    state = {
        text: ''
    }

    renderDate = e => {
        const { props, state } = this
        $.search(state.text).then(data => {
            props.eventBus.set({ articleList: data.books })
        })
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="请输入关键字来检索"
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                />
                <Text
                    style={{ padding: 10, fontSize: 42 }}
                    onPress={_ => {
                        this.renderDate()
                    }}
                >
                    {this.state.text
                        .split(' ')
                        .map(word => word && '🍕')
                        .join(' ')}
                </Text>
            </View>
        )
    }
}
