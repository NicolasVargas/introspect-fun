# introspect-fun

Node module that enables the introspection of a function to return its parameters' name in an array.

## Installation

```sh
npm install --save introspect-fun
```

## API
### Basic usge
```javascript
var introspect = require('introspect-fun');
var noArgs = function() {};
var withArgs = function(arg1, arg2, hello) {};
function withArgsBis (arg1, arg2, arg3) {};
function withNestedFunc (notNestedArg) {
    function myNested (nestedArg) {}
};

var res1 = introspect(noArgs);
// res1 = []

var res2 = introspect(withArgs);
// res2 = ['arg1', 'arg2', 'hello']

var res3 = introspect(withArgsBis);
// res3 = ['arg1', 'arg2', 'arg3']

var res4 = introspect(function(arg1){});
// res4 = ['arg1']

var res5 = introspect(withNestedFunc);
// res5 = ['notNestedArg']
```
### ES6 Generator functions an arrow functions
[Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) functions and [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) won't be a problem under ```--harmony``` flag
```javascript
var introspect = require('introspect-fun');

var gen = function*(arg1, arg2) {};

var resGen = introspect(gen);
// resGen = ['arg1', 'arg2']

var resArrow = introspect(arg1 => arg1+1);
// resArrow = ['arg1']
```

## Motivation

Inspired from
* [Jack Allan](http://stackoverflow.com/users/315017/jack-allan)'s answer on [stackoverflow](http://stackoverflow.com/a/9924463)
* [Killianc](https://github.com/kilianc)'s node module : [node-introspect](https://github.com/kilianc/node-introspect)

## Run test
```sh
npm test
```
