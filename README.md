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
function withNestedFunc (arg1) {
    function myNested (nestedArg) {}
};

var res1 = introspect(noArgs); // res1 = []
var res2 = introspect(withArgs); // res2 = ['arg1', 'arg2', 'hello']
var res3 = introspect(withArgsBis); // res3 = ['arg1', 'arg2', 'arg3']
var res4 = introspect(function(arg1){}); // res4 = arg['arg1']
var res5 = introspect(withNestedFunc); // res5 = arg['arg1']
```
### ES6 Generator functions an arrow functions
Generator functions and arrows won't be a problem under ```--harmony``` flag
```javascript
var introspect = require('introspect-fun');
var gen = function*(arg1, arg2) {};

var resGen = introspect(gen); // resGen = ['arg1', 'arg2']
var resArrow = introspect(arg1 => arg1+1); // resArrow = ['arg1']
```
## Support
TODO

## Contributing
TODO
