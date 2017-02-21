# css-feature-test
a convenience function to test css property.

[![npm](https://img.shields.io/npm/v/@thisguychris/css-feature-test.svg)](https://npm.im/@thisguychris/css-feature-test)

## Getting Started
Given two arguments: 

1. property 
2. value

It returns the applicable css property.

### Basic Usage

Requiring:
```js
npm install @thisguychris/css-feature-test
```

In your JS:
```javascript
var featureTest = require('@thisguychris/css-feature-test')

// now you can use it for testing
featureTest('postion', 'sticky')  // returns "position: sticky;" or the prefixed version depending upon what browser.
```
