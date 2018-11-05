import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import screen from '../utils/screen'
import color from '../utils/color'

// 语法：interface接口：一个类型检查器，会检查props对象是否含有一个string类型的word属性。
interface props {
    word: string
    age?: number // 可选属性
}
const styles = StyleSheet.create({
    searchBar: {
        borderRadius: 30,
        backgroundColor: '#ffffff',
        width: (screen.width / 3) * 2,
        height: screen.width / 12,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class Recommend extends React.Component<props> {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Icon name="ios-search-outline" size={15} color="#cccccc" />
                <Text style={{ color: '#cccccc' }}>搜索音乐、歌词、电台</Text>
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('myMusic', { title: '测试' })
                }
            >
                <Icon
                    name="ios-microphone-outline"
                    size={30}
                    color="#ffffff"
                    style={{ marginLeft: 20 }}
                />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Account', { title: '播放器' })
                }
            >
                <Icon
                    name="ios-stats-outline"
                    size={30}
                    color="#ffffff"
                    style={{ marginRight: 20 }}
                />
            </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: color.theme
        }
    })
    componentDidMount() {}
    render() {
        return (
            <View>
                <Text>title 为什么不显示</Text>
            </View>
        )
    }
}

export default Recommend
