# css-feature-test
a convenience function to test css property.

[![npm](https://img.shields.io/npm/v/@thisguchris/css-feature-test.svg?style=flat)](https://github.com/ayosdev/react-i18n-map/)

## Getting Started
Given two arguments: 1) property and 2) value.  It returns the applicable css property.

### Basic Usage

Requiring:
```js
npm install @thisguychris/css-feature-test
```

In your JS:
```javascript
featureTest = require('@thisguychris/css-feature-test')

// now you can use it for testing
featureTest('postion', 'sticky')  // returns "position: sticky;" or the prefixed "position: -webkit-sticky;"  depending the browser
```
