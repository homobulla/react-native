import React, { PureComponent } from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableNativeFeedback,
    ToastAndroid
} from 'react-native'
import Buttons from '../component/Button'

export default class Foot extends PureComponent {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // window.addEventListener('resize', this.resize)
    }
    componentWillMount() {
        // window.removeEventListener('resize', this.resize)
    }
    resize() {
        ToastAndroid.show('aaa', 2000)
    }
    render() {
        return (
            <View style={styles.footer}>
                <Buttons name="首页" />
                <Buttons name="分类" />
                <Buttons name="我的" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: 'skyblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})
