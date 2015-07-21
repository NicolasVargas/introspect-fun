'use strict';

var debug = require('debug')('introspect');

function introspect(fn) {
  if (typeof fn === 'function') {
    var argumentsRegExp = /\((.+)\)/;
    var noiseRegExp = /\s|\/\*[\s\S]*\*\/|^\(|\)$/g;

    debug('function  : ' + fn.toString());
    var res = argumentsRegExp.exec(fn.toString());
    return res ? res[0].trim().replace(noiseRegExp, '').split(',') : [];
  } else {
    throw new Error('NOT_A_FUNCTION');
  }
}

module.exports = introspect;
