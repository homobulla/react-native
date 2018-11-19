import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
    Image,
    ImageBackground,
    Animated,
    Easing
} from 'react-native'
import axios from 'axios'
import { LEADER, GQBF } from '../request/API'
import Video from 'react-native-video'
import Slider from 'react-native-slider'
import color from '../utils/color'
import screen from '../utils/screen'
import Icon from 'react-native-vector-icons/Ionicons'

export class Play extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            pause: true,
            icon: 'md-play',
            value: 0,
            src: '',
            img: '',
            name: '',
            animatedValue: new Animated.Value(0)
        }
        this.isGoing = false //为真旋转
        this.myAnimate = Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 20000,
            easing: Easing.inOut(Easing.linear)
        })
    }
    imgMoving = () => {
        if (this.isGoing) {
            this.state.animatedValue.setValue(0)
            this.myAnimate.start(() => {
                this.imgMoving()
            })
        }
    }
    circling = () => {
        this.state.animatedValue.setValue(0)
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 20000,
            easing: Easing.linear
        }).start(_ => {
            this.circling() // start回调自身，达到循环
        })
    }

    _changeState() {
        const { state } = this
        this.setState({
            pause: state.pause ? false : true,
            icon: state.icon === 'md-pause' ? 'md-play' : 'md-pause'
        })
        this.stop()
    }
    stop = () => {
        this.isGoing = !this.isGoing

        if (this.isGoing) {
            this.myAnimate.start(() => {
                this.myAnimate = Animated.timing(this.state.animatedValue, {
                    toValue: 1,
                    duration: 20000,
                    easing: Easing.inOut(Easing.linear)
                })
                this.imgMoving()
            })
        } else {
            this.state.animatedValue.stopAnimation(oneTimeRotate => {
                //计算角度比例
                this.myAnimate = Animated.timing(this.state.animatedValue, {
                    toValue: 1,
                    duration: (1 - oneTimeRotate) * 20000,
                    easing: Easing.inOut(Easing.linear)
                })
            })
        }
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
        axios(GQBF + id).then(res => {
            this.setState({
                src: res.data.data[0].url
            })
            // setTimeout(_ => {
            //     this._changeState()
            // }, 10000)
        })
    }
    componentDidMount() {
        const { navigation } = this.props
        if (navigation.getParam('obj')) {
            const { id, name } = navigation.getParam('obj')
            const { picUrl } = navigation.getParam('picUrl')
            this.setState({ img: picUrl, name: name })
            id && this._getData(id)
        }
    }
    render() {
        const { state } = this
        const interpolatedAnimation = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View
                style={{
                    backgroundColor: '#bbdbf0',
                    width: screen.width,
                    height: screen.height + 50
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        paddingLeft: 20
                    }}
                >
                    <Icon
                        name="md-arrow-back"
                        style={{
                            fontSize: 30,
                            color: 'black',
                            position: 'absolute',
                            left: 20,
                            top: 10
                        }}
                        onPress={_ => {
                            this.props.navigation.goBack(null)
                        }}
                    />
                    <View
                        style={{
                            width: screen.width - 40,
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 40
                        }}
                    >
                        <Text>{state.name}</Text>
                    </View>
                </View>
                <Video
                    source={{ uri: state.src }}
                    ref="player"
                    // rate={this.state.isPlay ? 1 : 0} // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                    volume={2.0} // 声音的放声音的放大倍数大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                    muted={false} // true代表静音，默认为false.
                    paused={state.pause} // true代表暂停，默认为false
                    resizeMode="contain" // 视频的自适应伸缩铺放行为，contain、stretch、cover
                    repeat={false} // 是否重复播放
                    playInBackground={false} // 当app转到后台运行的时候，播放是否暂停
                    playWhenInactive={false} // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                    // onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
                    // onLoad={this.setDuration} // 当视频加载完毕时的回调函数
                    onProgress={this.setTime} //  进度控制，每250ms调用一次，以获取视频播放的进度
                    // onEnd={this.onEnd} // 当视频播放完毕后的回调函数
                    onError={this.videoError} // 当视频不能加载，或出错后的回调函数
                    style={{ height: 0 }}
                />
                <View style={styles.animation}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 34,
                                width: screen.width,
                                alignItems: 'center',
                                zIndex: 18
                            }}
                        >
                            <Image
                                source={require('../asset/img/needle-ip6.png')}
                                style={{ width: 100, height: 140 }}
                            />
                        </View>
                        <ImageBackground
                            source={require('../asset/img/disc-ip6.png')}
                            style={{
                                width: screen.width - 40,
                                height: screen.width - 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 100
                            }}
                        >
                            <Animated.Image
                                source={{
                                    uri: state.img
                                }}
                                style={{
                                    width: screen.width - 152,
                                    height: screen.width - 152,
                                    borderRadius: (screen.width - 152) / 2,
                                    transform: [
                                        {
                                            rotate: interpolatedAnimation
                                        }
                                    ]
                                }}
                            />
                        </ImageBackground>
                    </View>
                </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 100,
                        justifyContent: 'center',
                        right: 0,
                        left: 0
                    }}
                >
                    <View style={styles.warp}>
                        <Slider
                            maximumTrackTintColor={color.white}
                            minimumTrackTintColor={color.theme}
                            thumbStyle={styles.thumb}
                            trackStyle={{ height: 2 }}
                            style={styles.slider}
                            value={state.value}
                            onValueChange={value => this.sliderChange(value)}
                        />
                    </View>
                    <View style={styles.control}>
                        <Icon name="ios-skip-backward" style={styles.icon} />
                        <Icon
                            name={state.icon}
                            style={styles.icon}
                            onPress={_ => {
                                this._changeState()
                            }}
                        />
                        <Icon
                            name="ios-skip-forward"
                            style={styles.icon}
                            onPress={_ => {
                                this.stop()
                            }}
                        />
                    </View>
                </View>
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
    },
    animation: {}
})
