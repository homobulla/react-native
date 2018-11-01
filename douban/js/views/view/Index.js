import React, { PureComponent, Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    ToastAndroid
} from 'react-native'

import $ from '../../service/axios'
const { width } = Dimensions.get('window')
import Swiper from 'react-native-swiper'

export default class Index extends PureComponent {
    state = {
        ret: []
    }
    constructor(props) {
        super(props)
        $.theaters().then(data => {
            this.setState({ ret: data.subjects })
        })
    }

    _renderCarouselItem() {
        const banner = this.state.ret
        return banner.map((item, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() =>
                        this.props.navigation.navigate('BookWebView', {
                            alt: item.alt
                        })
                    }
                >
                    <Image
                        style={styles.bannerImage}
                        resizeMode="stretch"
                        source={{ uri: item.images.large }}
                    />
                </TouchableOpacity>
            )
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.view}>
                    <Text style={styles.title}>豆瓣</Text>
                    <Text
                        style={styles.search}
                        onPress={() => this.props.navigation.navigate('Search')}
                    >
                        Search
                    </Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        <View style={styles.banner}>
                            {this.state.ret.length == 0 ? (
                                <ActivityIndicator
                                    size="large"
                                    color="#EFF3F5"
                                />
                            ) : (
                                <Swiper
                                    key={this.state.ret.length}
                                    removeClippedSubviews={false}
                                    autoplay={true}
                                    loop
                                    horizontal={true}
                                    showsPagination={false}
                                >
                                    {this._renderCarouselItem()}
                                </Swiper>
                            )}
                        </View>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                margin: 15
                            }}
                            onPress={() => {
                                ToastAndroid.show(
                                    ' 那一年我21岁,在我一生的黄金年代,我有好多奢望,我想吃,想爱,还想在这一瞬间变成天上半明半暗的云。',
                                    ToastAndroid.LONG
                                )
                            }}
                        >
                            长安城里的一切已经结束。一切都在无可挽回地走向庸俗。
                        </Text>
                        <Toshow navigate={this.props.navigation.navigate} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

class Toshow extends Component {
    state = {
        data: []
    }
    constructor(props) {
        super(props)
        $.search('王小波').then(data => {
            this.setState({ data: data.books })
        })
    }
    _goDetails() {
        this.props.navigation.navigate('BookWebView', {
            alt: item.alt
        })
    }
    render() {
        const { data } = this.state
        const { navigate } = this.props
        return data.map((item, index) => {
            return (
                <View style={toshow.view} key={index}>
                    <View style={toshow.cover}>
                        <Image
                            style={{ width: 70, height: 100 }}
                            source={{
                                uri: item.image
                            }}
                        />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>
                            {item.title}
                        </Text>
                        <Text
                            style={toshow.Introduction}
                            onPress={() =>
                                navigate('BookWebView', {
                                    alt: item.alt,
                                    name: item.title
                                })
                            }
                        >
                            {'简介：' + item.summary.slice(0, 35) + '...'}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <Text style={toshow.author}>{item.author}</Text>
                            {/* <Text style={toshow.type}>分类</Text> */}
                        </View>
                    </View>
                </View>
            )
        })
    }
}
const styles = StyleSheet.create({
    view: {
        height: 50,
        backgroundColor: '#EFF3F5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 14
    },
    search: {
        position: 'absolute',
        right: 10,
        paddingRight: 13
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    banner: {
        width: width,
        height: 250
    },
    bannerImage: {
        width: width,
        height: 250
    }
})

const toshow = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        margin: 5
    },
    cover: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    author: {
        color: '#999',
        marginTop: 10
    },
    Introduction: {
        marginTop: 10
    },
    type: {
        position: 'absolute',
        right: 50
    }
})
