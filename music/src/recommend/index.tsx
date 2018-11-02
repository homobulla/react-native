import * as React from 'react'
import {
    View,
    FlatList,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'
// 语法：interface接口：一个类型检查器，会检查props对象是否含有一个string类型的word属性。
interface props {
    word: string
    age?: number // 可选属性
}

export class Demo extends React.PureComponent<props> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>{this.props.word}</Text>
            </View>
        )
    }
}
