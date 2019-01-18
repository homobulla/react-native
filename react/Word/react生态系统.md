##  react生态系统

react是一个专注于`View`的`JavaScript`的函式库。

### ReactJS

`ReactJS`的定位是在`View`的范畴。

### JSX

`JSX`不是一种全新的语言，而是一种语法糖，类似于`XML`的`ECMAScript`语法扩充。在`JSX`中`HTML`和组建这些元素的标签的程式码有紧密的关系。

### NMP

`NMP`,`Node.js`下的主流包管理工具。

### ES6+

指`ES6(ES2015)`和`ES7`以上的联集。

### Babel

`ES6`语法在浏览器上的兼容性导致必须经过`babel`这个`JavaScript`解释器（翻译机）。

### Javascript模块化开发

1. `CDN-Baed`:即`<script>`标签导入
2. `AMD`：非同步载入模组规范，其在宣告模组时即需定义依赖的模组，例如`RequireJS`
3. `CommonJS`：同步模组载入规范，使用`require`进行模组同步导入，并透过`exports,module.exports`来输出模组。主要实现为`Node.js`伺服务器端的同步载入和浏览器的`Browserify`
4. CMD`：类似`AMD`，保持和`CommonJS`的兼容性。依赖就近，延迟执行。
5. `UMD`：为了要兼容 CommonJS 和 AMD 所设计的规范
6. `ES6 Module`

### Webpack/Browserify + Gulp

前端构建打包工具

### ESLint

代码检查工具，主流为`Airbnb`的[ [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)].

### React Router

`Routing`函式库，`SPA`通常用到。

### Flux/Redux

[Flux](https://facebook.github.io/flux/) 是一个实现单向流的应用程式资料架构（architecture），`Redux`是主流搭配`React`的状态管理工具。

### ImmutableJS

[ImmutableJS](https://facebook.github.io/immutable-js/)，是一个能让开发者建立不可变资料结构的函式库。建立不可变（immutable）资料结构不仅可以让状态可预测性更高，也可以提升程式的效能。

### Isomorphic JavaScript

前后端共同相同部分的程式码，让`js`应用可以同时执行在浏览器端和伺服务端。

### React 测试

