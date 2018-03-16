# dollarx

[English](README.md)

[![Build Status](https://travis-ci.org/taoabc/dollarx.svg?branch=master)](https://travis-ci.org/taoabc/dollarx)

$1, $N, $P算法的npm迁移版，用来做手势识别用，当然，这个是javascript版本

在官网内置图形里，加入信封的识别，:envelope:


$算法官网: [http://depts.washington.edu/madlab/proj/dollar/index.html](http://depts.washington.edu/madlab/proj/dollar/index.html)

## 需要注意

1. 目前只支持$1算法

## 安装

`npm install dollarx`

## 使用

### 1. 使用内置的手势识别

```javascript
const dollarx = require('dollarx') // 包含依赖
const points = [{x: 307, y: 216}, {x: 333, y: 186}, {x: 356, y: 215}, {x: 375, y: 186}, {x: 399, y: 216}, {x: 418, y: 186}] // 要识别的点
// 使用$1算法进行识别
console.log(dollarx.dollarRecognize(points)) // 结果：{ name: 'zig-zag', score: 0.9988244237768706 }
```

### 2. Recognize with user define gesture

```javascript
const dollarx = require('dollarx')
const dollar = dollarx.createDollar() // 创建$1识别类
const points = [{ x: 1, y: 1 }, ...]
dollar.addGesture('test', points) // 添加自定义手势
dollar.recognize(points) // 进行识别
dollar.deleteUserGestures() // 移除所有自定义手势
```

## 接口

### 1. createDollar

创建识别类

#### 1.1 recoginize

#### 1.2 addGesture

#### 1.3 deleteUserGestures

### 2. dollarRecognize

使用内置的手势进行识别

## Release

### 0.2.0

1. $1算法上线

## License

[Apache-2.0](https://opensource.org/licenses/Apache-2.0)

版权所有 (c) 2018-至今, 海涛
