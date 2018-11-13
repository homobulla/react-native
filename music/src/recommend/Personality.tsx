import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import screen from '../utils/screen'
import { TJMUSIC, TJMV, ZXYY } from '../request/API'
import axios from 'axios'
import { IconMenu } from '../component/IconMenu'
import color from '../utils/color'
const MySwiper = () => (
    <View style={{ height: 140 }}>
        <Swiper autoplay={true} loop horizontal={true} height={140}>
            <Image
                source={require('../asset/img/banner3.png')}
                style={{ width: screen.width, height: 140 }}
            />
            <Image
                source={require('../asset/img/banner4.png')}
                style={{ width: screen.width, height: 140 }}
            />
            <Image
                source={require('../asset/img/banner5.png')}
                style={{ width: screen.width, height: 140 }}
            />
        </Swiper>
    </View>
)

class List extends React.Component<props> {
    state = {
        result: []
    }
    constructor(props) {
        super(props)
    }
    _getData(): void {
        const { props } = this

        axios(props.apiType)
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
                    <Text style={list_style.titleWord}>{props.title} ></Text>
                </View>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}
                >
                    {state.result.map(i => {
                        return (
                            <View
                                style={{
                                    width: (screen.width - 20 - 10) / 3
                                }}
                                key={i.id}
                            >
                                <TouchableOpacity
                                    onPress={_ => {
                                        props.title === '推荐音乐'
                                            ? this.props.navigation.navigate(
                                                  'SongList',
                                                  {
                                                      id: i.id
                                                  }
                                              )
                                            : this.props.navigation.navigate(
                                                  'MvPlay',
                                                  {
                                                      id: i.id
                                                  }
                                              )
                                    }}
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
export class Personality extends React.Component {
    render() {
        return (
            <ScrollView>
                <MySwiper />
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        height: screen.width / 4
                    }}
                >
                    <IconMenu icon="md-radio" title="私人FM" />
                    <IconMenu icon="md-calendar" title="每日歌曲推荐" />
                    <IconMenu icon="md-stats" title="云音乐热歌榜" />
                </View>
                <List
                    title="推荐音乐"
                    apiType={TJMUSIC}
                    navigation={this.props.navigation}
                />

                <List
                    title="推荐MV"
                    apiType={TJMV}
                    navigation={this.props.navigation}
                />
            </ScrollView>
        )
    }
}
