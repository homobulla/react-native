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

export class Demo extends React.PureComponent<props> {
    constructor(props) {
        super(props)
    }

    render() {
        return <View>{this.props.word}</View>
    }
}
