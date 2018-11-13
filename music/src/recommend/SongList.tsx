import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import color from '../utils/color'
import Icon from 'react-native-vector-icons/Ionicons'
import screen from '../utils/screen'
import { SONGTYPE } from '../request/API'
import axios from 'axios'
const SongHeader = _ => (
    <View style={ShStyle.heade}>
        <View style={ShStyle.left}>
            <Image
                source={require('../asset/img/xk.jpg')}
                style={{ width: '100%', height: 120 }}
            />
        </View>
        <View style={ShStyle.right}>
            <Text style={{ fontSize: 16, color: color.theme }}>
                <Icon
                    name="ios-paw"
                    style={{ fontSize: 18, paddingRight: 3 }}
                />
                精品歌单
            </Text>
            <Text style={{ paddingBottom: 10, paddingTop: 7 }}>
                星轨旋律揽下整个星空的纯音乐
            </Text>
            <Text style={{ fontSize: 8 }}>嘿，一起在音乐里赏星星吧。</Text>
        </View>
    </View>
)
const ShStyle = StyleSheet.create({
    heade: {
        height: 140,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#999',
        alignItems: 'center'
    },
    left: {
        flex: 1,
        padding: 10
    },
    right: {
        flex: 2
    }
})

class List extends React.PureComponent<props> {
    state = {
        result: []
    }
    _getData(param = ''): void {
        const { props } = this

        axios(SONGTYPE + param)
            .then(res => {
                this.setState({ result: res.data.playlists })
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
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingBottom: 5
                    }}
                >
                    <View style={list_style.title}>
                        <Text style={list_style.leftLine} />
                        <Text style={list_style.titleWord}>
                            {props.title} >
                        </Text>
                    </View>
                    <View style={list_style.type}>
                        <Text
                            onPress={_ => {
                                this._getData('华语')
                            }}
                        >
                            华语
                        </Text>
                        <Text
                            style={{ paddingLeft: 10, paddingRight: 10 }}
                            onPress={_ => {
                                this._getData('民谣')
                            }}
                        >
                            民谣
                        </Text>
                        <Text
                            onPress={_ => {
                                this._getData('欧美')
                            }}
                        >
                            欧美
                        </Text>
                    </View>
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
                                    width: (screen.width - 20 - 10) / 2
                                }}
                                key={i.id}
                            >
                                <TouchableOpacity
                                    onPress={_ => {
                                        this.props.navigation.navigate(
                                            'SongList',
                                            {
                                                id: i.id
                                            }
                                        )
                                    }}
                                >
                                    <Image
                                        source={{
                                            uri: i.coverImgUrl
                                        }}
                                        style={{
                                            width: '100%',
                                            height: 150,
                                            borderRadius: 3
                                        }}
                                    />
                                </TouchableOpacity>
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
    type: {
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
export class SongList extends React.Component {
    render() {
        return (
            <ScrollView>
                <SongHeader />
                <List title="精品歌单" navigation={this.props.navigation} />
            </ScrollView>
        )
    }
}
