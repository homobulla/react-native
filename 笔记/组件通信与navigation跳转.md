### react-native 的学习

react-native-swiper 自动轮播无效 ->

```js
<Swiper
    key={this.state.ret.length} // 添加key值
    removeClippedSubviews={false}
    autoplay={true}
    loop
    horizontal={true}
    showsPagination={false}
>
    {this._renderCarouselItem()}
</Swiper>
```
