import { Dimensions, PixelRatio } from 'react-native'

// recommend/note 1 PixelRatio
// 當前設備的像素密度
export default {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    onePixel: 1 / PixelRatio.get(),
    pageHeader: 50
}
