import React from 'react'
import { View } from 'react-native'
import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    TabNavigator
} from 'react-navigation'
import TabBarItem from '../views/component/TabBarItem.js'
import Home from '../views/view/Index'
import Love from '../views/view/Love'
import My from '../views/view/My'
import BookWebView from '../views/component/Webview'
import Search from '../views/view/Search'

const TabStack = TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused={focused}
                        tintColor={tintColor}
                        icon={require('../asset/img/index.png')}
                        selectedIcon={require('../asset/img/index_sele.png')}
                    />
                )
            }
        },
        Love: {
            screen: Love,
            navigationOptions: {
                tabBarLabel: '喜爱',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused={focused}
                        tintColor={tintColor}
                        icon={require('../asset/img/middle.png')}
                        selectedIcon={require('../asset/img/middle.png')}
                    />
                )
            }
        },
        My: {
            screen: My,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        focused={focused}
                        tintColor={tintColor}
                        icon={require('../asset/img/right.png')}
                        selectedIcon={require('../asset/img/right.png')}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#4758B8',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#353535',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: 'powderblue',
                paddingBottom: 2,
                borderTopWidth: 0.2,
                paddingTop: 2,
                borderTopColor: '#ccc'
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 14,
                margin: 2
            },
            tabStyle: {
                height: 45
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: { height: 0 }
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        tabBarVisible: false,
        //是否允许滑动切换tab页
        swipeEnabled: false,
        //是否在切换tab页时使用动画
        animationEnabled: true,
        //是否懒加载
        lazy: false,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
        initialRouteName: 'Home'
    }
)

// 路由部分

const AppStack = createStackNavigator(
    {
        Tab: {
            screen: TabStack,
            navigationOptions: {
                header: null
            }
        },

        Search: {
            screen: Search,
            navigationOptions: ({ navigation }) => ({
                title: 'Search'
            })
        },
        BookWebView: {
            screen: BookWebView,
            navigationOptions: ({ navigation }) => ({
                title: '详情页'
            })
        }
        // Love: { screen: Love },
        // My: { screen: My }
    },
    {
        // 跨页面共享通用的navigationOptions 头部统一样式
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'powderblue'
                // borderBottomWidth: 0,
                // elevation: 0,
                // alignSelf: 'center'
            },
            // headerRight: <View />,
            headerTintColor: '#fff'
        }
    }
)

const Root = createSwitchNavigator({
    App: AppStack
})

export default Root
