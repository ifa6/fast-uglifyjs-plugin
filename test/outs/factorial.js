!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(module,exports){eval("/* WEBPACK VAR INJECTION */(function(global) {function factorial(num) {\n    var result = 1;\n    if (num == 0 || num == 1) {\n        result = num;\n    } else {\n        result = num * factorial(num - 1);\n    }\n    return result;\n}\n\nmodule.exports = global.factorial = factorial;\n/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))\n\n//////////////////\n// WEBPACK FOOTER\n// ./test/cases/factorial.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./test/cases/factorial.js?")}]);