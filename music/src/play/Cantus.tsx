import * as React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import screen from '../utils/screen'
import color from '../utils/color'
import axios from 'axios'
import { GDXQ } from '../request/API'
interface props {
    item: Object
    num: number
}
class List extends React.PureComponent<props> {
    render() {
        const { props } = this

        return (
            <View style={range.warp}>
                <Text style={{ width: 30, color: '#999' }}>
                    {props.num + 1}
                </Text>
                <View style={range.right}>
                    <View style={range.name}>
                        <Text>{props.item.name}</Text>
                        <Text
                            style={{
                                color: '#999',
                                fontSize: 11,
                                paddingTop: 4
                            }}
                        >
                            {props.item.al.name}
                        </Text>
                    </View>

                    <Icon
                        name="md-more"
                        style={{
                            fontSize: 30,
                            color: '#999',
                            paddingRight: 20
                        }}
                    />
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
        justifyContent: 'space-between',

        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d6d0d0'
    },
    name: {},
    number: {
        color: '#999',
        fontSize: 11
    }
})
export class Cantus extends React.PureComponent {
    state = {
        result: {
            name: '',
            coverImgUrl: '',
            creator: { avatarUrl: '', nickname: '' },
            tracks: []
        }
    }
    _getData(id) {
        axios(GDXQ + id)
            .then(res => {
                this.setState({ result: res.data.playlist })
            })
            .catch(err => {
                alert(err)
            })
    }
    componentDidMount() {
        const { navigation } = this.props
        const id = navigation.getParam('id')
        this._getData(id)
    }
    render() {
        const { state } = this

        return (
            <ScrollView>
                <View style={header.warp}>
                    <View style={header.head}>
                        <Icon
                            name="md-arrow-back"
                            style={{ fontSize: 30, color: color.white }}
                            onPress={_ => {
                                this.props.navigation.goBack(null)
                            }}
                        />
                        <Text style={{ marginLeft: 9, color: color.white }}>
                            歌单
                        </Text>
                    </View>
                    <View style={header.content}>
                        <Image
                            source={{ uri: state.result.coverImgUrl }}
                            style={{
                                width: 110,
                                height: 110,
                                borderRadius: 5,
                                marginRight: 20
                            }}
                        />
                        <View>
                            <Text
                                style={{
                                    color: color.white,
                                    fontSize: 20,
                                    fontWeight: '600',
                                    marginBottom: 15,
                                    paddingRight: 10,
                                    width: screen.width * 0.6
                                }}
                            >
                                {state.result.name}
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <Image
                                    source={{
                                        uri: state.result.creator.avatarUrl
                                    }}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: 17,
                                        marginRight: 10
                                    }}
                                />
                                <Text style={{ color: color.white }}>
                                    {state.result.creator.nickname}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={header.bottom}>
                        <View>
                            <Icon
                                name="md-options"
                                style={{ fontSize: 30, color: color.white }}
                            />
                            <Text style={header.text}>518</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-share"
                                style={{ fontSize: 30, color: color.white }}
                            />
                            <Text style={header.text}>34</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-download"
                                style={{ fontSize: 30, color: color.white }}
                            />
                            <Text style={header.text}>101</Text>
                        </View>
                        <View>
                            <Icon
                                name="md-checkbox-outline"
                                style={{ fontSize: 30, color: color.white }}
                            />
                            <Text style={header.text}>更多</Text>
                        </View>
                    </View>
                </View>
                {state.result.tracks.map((v, i) => {
                    return <List item={v} num={i} key={v.id} />
                })}
            </ScrollView>
        )
    }
}
const header = StyleSheet.create({
    warp: {
        paddingTop: 35,
        paddingLeft: 15,
        width: screen.width,
        height: 300,
        backgroundColor: '#bbdbf0'
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flexDirection: 'row',
        marginTop: 20
    },
    bottom: {
        paddingTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: color.white
    }
})
