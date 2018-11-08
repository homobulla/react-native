import * as React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import color from '../utils/color'
import axios from 'axios'
import screen from '../utils/screen'
import { TJDT } from '../request/API'
class List extends React.PureComponent<props> {
    state = {
        result: []
    }
    _getData(): void {
        const { props } = this

        axios(TJDT)
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
                    <Text style={list_style.titleWord}>{props.title} </Text>
                </View>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}
                >
                    {state.result.map((i, v) => {
                        return (
                            <View
                                style={{
                                    width: (screen.width - 20 - 10) / 3
                                }}
                                key={i.id}
                            >
                                <Image
                                    source={{
                                        uri: i.picUrl
                                            ? i.picUrl
                                            : i.song.album.picUrl
                                    }}
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
        height: 50,
        paddingTop: 5
    }
})
export class Station extends React.Component {
    render() {
        return (
            <ScrollView>
                <List title="热门电台推荐" />
            </ScrollView>
        )
    }
}
