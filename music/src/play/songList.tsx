import * as React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import screen from '../utils/screen'
import color from '../utils/color'

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
    }
})
export class Cantus extends React.PureComponent {
    render() {
        return (
            <View>
                <View style={header.warp}>
                    <View style={header.head}>
                        <Icon
                            name="md-arrow-back"
                            style={{ fontSize: 30, color: color.white }}
                        />
                        <Text style={{ marginLeft: 9, color: color.white }}>
                            歌单
                        </Text>
                    </View>
                    <View style={header.content}>
                        <Image
                            source={require('../asset/img/banner4.png')}
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
                                    fontWeight: '600'
                                }}
                            >
                                人间不值得
                            </Text>
                            <Text style={{ color: color.white }}>ddddsss</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
