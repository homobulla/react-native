/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Recommend from './src/recommend/index'
import { Account } from './src/account/index'
import { Friend } from './src/friend/index'
import { MyMusic } from './src/myMusic/index'
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
    createTabNavigator,
    createMaterialTopTabNavigator
    // createMaterialBottomTabNavigator
} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const RouterBo = createMaterialBottomTabNavigator(
    {
        Recommend: {
            screen: Recommend,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '发现音乐',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        focused={focused}
                        tintColor={tintColor}
                        name="ios-disc-outline"
                        size={30}
                        color={tintColor}
                    />
                )
            })
        },
        MyMusic: {
            screen: MyMusic,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的音乐',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        focused={focused}
                        tintColor={tintColor}
                        name="ios-musical-notes-outline"
                        size={30}
                        color={tintColor}
                    />
                )
            })
        },
        Friend: {
            screen: Friend,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '朋友',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        focused={focused}
                        tintColor={tintColor}
                        name="ios-contacts-outline"
                        size={30}
                        color={tintColor}
                    />
                )
            })
        },
        Account: {
            screen: Account,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '账户',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Icon
                        focused={focused}
                        tintColor={tintColor}
                        name="ios-person-outline"
                        size={30}
                        color={tintColor}
                    />
                )
            })
        }
    },
    {
        initialRouteName: 'Recommend',
        navigationOptions: {
            tabBarColor: 'black'
        }
    }
)

// const Root = createMaterialTopTabNavigator({
//     App: RouterBo
// })
export default RouterBo
