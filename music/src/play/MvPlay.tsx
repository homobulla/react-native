import * as React from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import axios from 'axios'
import { LEADER } from '../request/API'
import Video from 'react-native-video'
import Slider from 'react-native-slider'
import color from '../utils/color'
import screen from '../utils/screen'
import Icon from 'react-native-vector-icons/Ionicons'
import { MVXQ } from '../request/API'

export class MvPlay extends React.PureComponent {
    state = { pause: true, icon: 'md-play', value: 0, result: { brs: {} } }
    _changeState() {
        const { state } = this
        this.setState({
            pause: state.pause ? false : true,
            icon: state.icon === 'md-pause' ? 'md-play' : 'md-pause'
        })
        // alert(state.pause)
    }
    setTime = time => {
        // 获取进度条长度
        this.setState({ value: time.currentTime / time.seekableDuration })
    }
    videoError = err => {
        console.warn(err)
    }
    sliderChange = value => {
        // 当前矩形长度值
    }
    _getData(id) {
        axios(MVXQ + id)
            .then(res => {
                this.setState({ result: res.data.data })
            })
            .catch(err => {
                alert(err)
            })
    }
    componentDidMount() {
        const { navigation } = this.props
        const id = navigation.getParam('id')
        console.warn(id)
        this._getData(id)
    }
    render() {
        const { state } = this
        return (
            <View
                style={{
                    width: screen.width,
                    height: screen.height
                }}
            >
                <Video
                    source={{
                        uri: state.result.brs['240']
                    }} // 视频的URL地址，或者本地地址，都可以.
                    // source={require('./music.mp3')} // 还可以播放音频，和视频一样
                    //source={{uri:'http://......'}}
                    ref="player"
                    // rate={this.state.isPlay ? 1 : 0} // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                    volume={2.0} // 声音的放声音的放大倍数大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                    muted={false} // true代表静音，默认为false.
                    paused={false} // true代表暂停，默认为false
                    resizeMode="contain" // 视频的自适应伸缩铺放行为，contain、stretch、cover
                    repeat={false} // 是否重复播放
                    playInBackground={false} // 当app转到后台运行的时候，播放是否暂停
                    playWhenInactive={false} // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                    // onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
                    // onLoad={this.setDuration} // 当视频加载完毕时的回调函数
                    onProgress={this.setTime} //  进度控制，每250ms调用一次，以获取视频播放的进度
                    // onEnd={this.onEnd} // 当视频播放完毕后的回调函数
                    onError={this.videoError} // 当视频不能加载，或出错后的回调函数
                    style={{ height: 200 }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    warp: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    thumb: {
        width: 20,
        height: 20,
        backgroundColor: color.theme,
        borderColor: color.white,
        borderWidth: 7,
        borderRadius: 10
    },
    slider: {
        width: screen.width - 100,
        justifyContent: 'center'
    },
    control: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        color: color.white,
        fontSize: 30,
        margin: 20
    }
})
