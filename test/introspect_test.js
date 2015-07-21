'use strict';

// require('babel/polyfill');
var assert = require('chai').assert;
var introspect = require('./../index.js');

describe('Will introspect function() with zero args', function() {
  function fn() {
    return;
  }
  var result;

  it('Sould have returned a result', function() {
    result = introspect(fn);
    assert.isDefined(result);
  });

  it('Sould have returned an array', function() {
    assert.instanceOf(result, Array);
  });

  it('Sould have returned an empty array', function() {
    assert.deepEqual(result, []);
  });
});

describe('Will introspect function(arg1, arg2, arg3)', function() {
  function fn(arg1, arg2, arg3) {
    return [arg1, arg2, arg3];
  }
  var result;

  it('Sould have returned a result', function() {
    result = introspect(fn);
    assert.isDefined(result);
  });

  it('Sould have returned an array', function() {
    assert.instanceOf(result, Array);
  });

  it('Sould have returned the results as : ["arg1", "arg2", "arg3"]',
    function() {
      assert.deepEqual(result, ['arg1', 'arg2', 'arg3']);
    });
});

describe(
  'Will introspect something different from a function and throw an error',
  function() {
    var fnWrong = [1, 'hello', {
      world: 'yes'
    }];

    function wrongCall() {
      introspect(fnWrong);
    }

    it('Sould throw a "NOT_A_FUNCTION" error', function() {
      assert.throw(wrongCall, /NOT_A_FUNCTION/);
    });
  });

describe('Will introspect function(arg1, /*comments*/ arg2, arg3)', function() {
  function fn(arg1, /*toto*/ arg2, arg3) {
    return [arg1, arg2, arg3];
  }
  var result;

  it('Sould have returned a result', function() {
    result = introspect(fn);
    assert.isDefined(result);
  });

  it('Sould have returned an array', function() {
    assert.instanceOf(result, Array);
  });

  it('Sould have returned the results as : ["arg1", "arg2", "arg3"]',
    function() {
      assert.deepEqual(result, ['arg1', 'arg2', 'arg3']);
    });
});

describe('Will introspect a function with nested functions', function() {

  var result;

  function fn(arg1, arg2) {
    var nested = function(nestedArg1, nestedArg2) {
      return [nestedArg1, nestedArg2];
    };
    return nested(arg1, arg2);
  }

  it('Sould have returned a result', function() {
    result = introspect(fn);
    assert.isDefined(result);
  });

  it('Sould have returned an array', function() {
    assert.instanceOf(result, Array);
  });

  it('Sould not have an array with values ["nestedArg1", "nestedArg2"]',
    function() {
      assert.notDeepEqual(result, ['nestedArg1', 'nestedArg2']);
    });

  it('Sould have returned the results as : ["arg1", "arg2"]', function() {
    assert.deepEqual(result, ['arg1', 'arg2']);
  });
});


describe('Will introspect a function declared with es6 arrows', function() {
  var result;

  it('Sould have returned a result', function() {
    result = introspect(myParam => myParam.toString());
    assert.isDefined(result);
  });

  it('Sould have returned an array', function() {
    assert.instanceOf(result, Array);
  });

  it('Sould have returned the results as : ["myParam"]', function() {
    assert.deepEqual(result, ['myParam']);
  });
});

describe('Will introspect a generator function', function() {
  var result;
  var myGen = function *(arg1) {
    return arg1;
  }
  
  it('Sould have returned a result', function() {
    result = introspect(myGen);
    assert.isDefined(result);
  });

  it('Sould have returned an array', function() {
    assert.instanceOf(result, Array);
  });

  it('Sould have returned the results as : ["arg1"]', function() {
    assert.deepEqual(result, ['arg1']);
  });
});
