import React, { PureComponent, Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'

import $ from '../../service/axios'
const { width } = Dimensions.get('window')
import Swiper from 'react-native-swiper'
// class MusicList extends PureComponent {
//     state = {
//         ret: []
//     }
//     constructor(props) {
//         super(props)
//         $.theaters().then(data => {
//             this.setState({ ret: data.subjects })
//         })
//     }

//     _renderCarouselItem() {
//         const banner = this.state.ret
//         const navigation = this.props.navigation
//         console.warn(navigation)
//         return banner.map((item, index) => {
//             return (
//                 <TouchableOpacity
//                 // onPress={() =>
//                 //     navigation.navigate('BookWebView', {
//                 //         alt: item.alt
//                 //     })
//                 // }
//                 >
//                     <Image
//                         style={styles.bannerImage}
//                         resizeMode="stretch"
//                         resizeMethod="resize"
//                         key={index}
//                         source={{ uri: item.images.large }}
//                     />
//                 </TouchableOpacity>
//             )
//         })
//     }
//     render() {
//         return (
//             <View style={styles.banner}>
//                 <Swiper
//                     removeClippedSubviews={false}
//                     autoplay={true}
//                     loop
//                     horizontal={true}
//                     showsPagination={false}
//                 >
//                     {this._renderCarouselItem()}
//                 </Swiper>
//             </View>
//         )
//     }
// }
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
                    onPress={() =>
                        this.props.navigation.navigate('BookWebView', {
                            alt: item.alt
                        })
                    }
                >
                    <Image
                        style={styles.bannerImage}
                        resizeMode="stretch"
                        resizeMethod="resize"
                        key={index}
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
                <View>
                    {/* <MusicList /> */}

                    <View style={styles.banner}>
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
                    </View>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        height: 50,
        backgroundColor: 'powderblue',
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
        height: 220
    },
    bannerImage: {
        width: width,
        height: 220
    }
})
