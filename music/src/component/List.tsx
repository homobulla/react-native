import * as React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Alert } from 'react-native'
import Swiper from 'react-native-swiper'
import screen from '../utils/screen'
import { TJMUSIC } from '../request/API'
import axios from 'axios'
import { IconMenu } from '../component/IconMenu'
import color from '../utils/color'

export class List extends React.PureComponent<props> {
    state = {
        result: []
    }
    _getData(): void {
        const { props } = this

        axios(TJMUSIC)
            .then(res => {
                this.setState({ result: res.data.result.splice(0, 6) })
            })
            .catch(err => {
                alert(err)
            })
    }
    componentDidMount() {
        this._getData()
    }
    render() {
        const { state, props } = this
        return (
            <View style={list_style.contain}>
                <View style={list_style.title}>
                    <Text style={list_style.leftLine} />
                    <Text style={list_style.titleWord}>推荐音乐11 ></Text>
                </View>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >
                    {state.result.map((i, v) => {
                        return (
                            <View
                                style={{
                                    width: (screen.width - 20 - 10) / 3,
                                    justifyContent: 'center'
                                }}
                                key={i.id}
                            >
                                <Image
                                    source={{ uri: i.picUrl }}
                                    style={{
                                        width: '100%',
                                        height: 110,
                                        borderRadius: 5
                                    }}
                                />
                                <Text style={list_style.name}>{i.name}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
}
const list_style = StyleSheet.create({
    contain: {
        padding: 10
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleWord: {
        paddingLeft: 5
    },
    leftLine: {
        width: 5,
        height: 13,
        backgroundColor: color.backgroundColor
    },
    list: {},
    name: {
        fontSize: 11,
        height: 40,
        paddingTop: 5
    }
})
