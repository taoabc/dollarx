# dollarx

[简体中文](README-CHS.md)

[![Build Status](https://travis-ci.org/taoabc/dollarx.svg?branch=master)](https://travis-ci.org/taoabc/dollarx)

Npm port for dollar gesture 1, N and P

Offical site: [http://depts.washington.edu/madlab/proj/dollar/index.html](http://depts.washington.edu/madlab/proj/dollar/index.html)

## Attention

1. Only support dollar 1 yet.

## Install

`npm install dollarx`

## Usage

### 1. Recognize with builtIn gestures

```javascript
const dollarx = require('dollarx') // Require it!
const points = [{x: 307, y: 216}, {x: 333, y: 186}, {x: 356, y: 215}, {x: 375, y: 186}, {x: 399, y: 216}, {x: 418, y: 186}] // Get points
// Use dollar 1 to recognize it, with built in gestures
console.log(dollarx.dollarRecognize(points)) // { name: 'zig-zag', score: 0.9988244237768706 }
```

### 2. Recognize with user define gesture

```javascript
const dollarx = require('dollarx')
const dollar = dollarx.createDollar() // Class for dollar 1
const points = [{ x: 1, y: 1 }, ...]
dollar.addGesture('test', points) // Add user define points
dollar.recognize(points) // Recognize!
dollar.deleteUserGestures() // Remove all user gestures
```

## API

### 1. createDollar

Create dollar 1 recognizer

#### 1.1 recoginize

#### 1.2 addGesture

#### 1.3 deleteUserGestures

### 2. dollarRecognize

Recognize with built in gestures for dollar 1

## Release

### 0.2.0

1. Support dollar 1 recognize

## License

[Apache-2.0](https://opensource.org/licenses/Apache-2.0)

Copyright (c) 2018-present, Tyler Hu
