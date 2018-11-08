import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import color from '../utils/color'
interface props {
    icon: string
    title: string
    num?: number
}
class Range extends React.PureComponent<props> {
    render() {
        const { props } = this
        return (
            <View style={range.warp}>
                <Icon name={props.icon} style={range.icon} />
                <View style={range.right}>
                    <Text>{props.title}</Text>
                    {props.num ? (
                        <Text style={range.number}> ({props.num})</Text>
                    ) : (
                        <Text />
                    )}
                </View>
            </View>
        )
    }
}
const range = StyleSheet.create({
    warp: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 13
    },
    icon: {
        flex: 1,
        fontSize: 25,
        color: color.theme
    },
    right: {
        flex: 11,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',

        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d6d0d0'
    },
    number: {
        color: '#999',
        fontSize: 11
    }
})
export class MyMusic extends React.Component {
    render() {
        return (
            <View>
                <Range
                    icon="ios-musical-notes-outline"
                    title="本地音乐"
                    num={100}
                />
                <Range icon="md-play" title="最近播放" num={110} />
                <Range icon="md-arrow-down" title="下载管理" num={10} />
                <Range icon="ios-radio" title="我的电台" num={19} />
                <Range icon="ios-star-outline" title="我的收藏" num={2} />
                <Range icon="logo-designernews" title="Sati空间" />
            </View>
        )
    }
}
