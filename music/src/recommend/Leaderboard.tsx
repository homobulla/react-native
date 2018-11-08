import * as React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'
import { LEADER } from '../request/API'
interface props {
    backgroundColor: string
    title: string
    type: string
}
class List extends React.PureComponent<props> {
    state = {
        result: []
    }
    _getData(): void {
        const { props } = this

        axios(LEADER + props.type)
            .then(res => {
                this.setState({ result: res.data.playlist.tracks.splice(0, 3) })
            })
            .catch(err => {
                alert(err)
            })
    }
    componentDidMount() {
        this._getData()
    }
    render() {
        const { props, state } = this
        return (
            <View style={style.item}>
                <View
                    style={{
                        width: 140,
                        height: 140,
                        borderRadius: 5,
                        marginRight: 15,
                        backgroundColor: props.backgroundColor,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={style.title}>{props.title}</Text>
                </View>
                <View style={style.item_right}>
                    {state.result.map((i, v) => {
                        return (
                            <Text style={style.list} key={i.id}>
                                {v + 1}.{i.name}-{i.ar[0].name}
                            </Text>
                        )
                    })}
                </View>
            </View>
        )
    }
}
export class Leaderboard extends React.Component {
    render() {
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text style={{ paddingTop: 10, fontSize: 15 }}>官方榜</Text>
                <List backgroundColor="#345654" title="新歌榜" type="0" />
                <List backgroundColor="#745534" title="飙升榜" type="3" />
                <List backgroundColor="#945534" title="电音榜" type="5" />
                <List backgroundColor="#309584" title="嘻哈榜" type="18" />
                <List backgroundColor="#845293" title="金曲榜" type="17" />
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    item: {
        flexDirection: 'row',
        paddingTop: 15
    },
    item_left: {},
    title: {
        color: 'white',
        fontSize: 20
    },
    item_right: {
        justifyContent: 'center'
    },
    list: {
        marginTop: 4,
        fontSize: 13
    }
})
