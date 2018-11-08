### note 1

[PixelRatio 的使用（像素密度、最细边框、合适的图片尺寸）](http://www.hangge.com/blog/cache/detail_1581.html)

### note 2 react-native-vector-icons 库的安装

[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)的地址。

```js
import Icon from 'react-native-vector-icons/Ionicons' // 编辑器报错‘未找到模块’不需要管
// 假如报错
unable to load script from assets 'index.android.bundle'
在命令行 或者重新安装。
$ mkdir android/app/src/main/assets
$ react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

$ react-native run-android
```

### 路由组件嵌套问题

`react-navigation`的多个组件需要嵌套使用，比如`createMaterialBottomTabNavigator`一旦使用作为底部导航栏，则自定义头部无法显示（date:2018/11/06)

Text居中：

```css
 textAlignVertical: 'center',
 textAlign: 'center'
```

