import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import screen from '../utils/screen'
import color from '../utils/color'
import { Leaderboard } from './Leaderboard'
import { Personality } from './Personality'
import { SongList } from './SongList'
import { Station } from './Station'

import { createMaterialTopTabNavigator } from 'react-navigation'
// 语法：interface接口：一个类型检查器，会检查props对象是否含有一个string类型的word属性。
interface props {
    word: string
    age?: number // 可选属性
}
const Route = createMaterialTopTabNavigator(
    {
        个性推荐: Personality,
        歌单: SongList,
        主播电台: Station,
        排行榜: Leaderboard
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
                color: color.theme
            },
            indicatorStyle: {
                backgroundColor: color.backgroundColor
            },
            style: {
                backgroundColor: color.white
            }
        }
    }
)

export default Route
