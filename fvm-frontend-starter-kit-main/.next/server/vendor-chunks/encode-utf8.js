"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/encode-utf8";
exports.ids = ["vendor-chunks/encode-utf8"];
exports.modules = {

/***/ "(ssr)/./node_modules/encode-utf8/index.js":
/*!*******************************************!*\
  !*** ./node_modules/encode-utf8/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function encodeUtf8 (input) {\n  var result = []\n  var size = input.length\n\n  for (var index = 0; index < size; index++) {\n    var point = input.charCodeAt(index)\n\n    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {\n      var second = input.charCodeAt(index + 1)\n\n      if (second >= 0xDC00 && second <= 0xDFFF) {\n        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae\n        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000\n        index += 1\n      }\n    }\n\n    // US-ASCII\n    if (point < 0x80) {\n      result.push(point)\n      continue\n    }\n\n    // 2-byte UTF-8\n    if (point < 0x800) {\n      result.push((point >> 6) | 192)\n      result.push((point & 63) | 128)\n      continue\n    }\n\n    // 3-byte UTF-8\n    if (point < 0xD800 || (point >= 0xE000 && point < 0x10000)) {\n      result.push((point >> 12) | 224)\n      result.push(((point >> 6) & 63) | 128)\n      result.push((point & 63) | 128)\n      continue\n    }\n\n    // 4-byte UTF-8\n    if (point >= 0x10000 && point <= 0x10FFFF) {\n      result.push((point >> 18) | 240)\n      result.push(((point >> 12) & 63) | 128)\n      result.push(((point >> 6) & 63) | 128)\n      result.push((point & 63) | 128)\n      continue\n    }\n\n    // Invalid character\n    result.push(0xEF, 0xBF, 0xBD)\n  }\n\n  return new Uint8Array(result).buffer\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5jb2RlLXV0ZjgvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixjQUFjO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdm0tZnJvbnRlbmQtc3RhcnRlci1raXQvLi9ub2RlX21vZHVsZXMvZW5jb2RlLXV0ZjgvaW5kZXguanM/YzJhMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmNvZGVVdGY4IChpbnB1dCkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIHNpemUgPSBpbnB1dC5sZW5ndGhcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc2l6ZTsgaW5kZXgrKykge1xuICAgIHZhciBwb2ludCA9IGlucHV0LmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAocG9pbnQgPj0gMHhEODAwICYmIHBvaW50IDw9IDB4REJGRiAmJiBzaXplID4gaW5kZXggKyAxKSB7XG4gICAgICB2YXIgc2Vjb25kID0gaW5wdXQuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICAgIGlmIChzZWNvbmQgPj0gMHhEQzAwICYmIHNlY29uZCA8PSAweERGRkYpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgIHBvaW50ID0gKHBvaW50IC0gMHhEODAwKSAqIDB4NDAwICsgc2Vjb25kIC0gMHhEQzAwICsgMHgxMDAwMFxuICAgICAgICBpbmRleCArPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVVMtQVNDSUlcbiAgICBpZiAocG9pbnQgPCAweDgwKSB7XG4gICAgICByZXN1bHQucHVzaChwb2ludClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gMi1ieXRlIFVURi04XG4gICAgaWYgKHBvaW50IDwgMHg4MDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCA+PiA2KSB8IDE5MilcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCAmIDYzKSB8IDEyOClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gMy1ieXRlIFVURi04XG4gICAgaWYgKHBvaW50IDwgMHhEODAwIHx8IChwb2ludCA+PSAweEUwMDAgJiYgcG9pbnQgPCAweDEwMDAwKSkge1xuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ID4+IDEyKSB8IDIyNClcbiAgICAgIHJlc3VsdC5wdXNoKCgocG9pbnQgPj4gNikgJiA2MykgfCAxMjgpXG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgJiA2MykgfCAxMjgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIDQtYnl0ZSBVVEYtOFxuICAgIGlmIChwb2ludCA+PSAweDEwMDAwICYmIHBvaW50IDw9IDB4MTBGRkZGKSB7XG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgPj4gMTgpIHwgMjQwKVxuICAgICAgcmVzdWx0LnB1c2goKChwb2ludCA+PiAxMikgJiA2MykgfCAxMjgpXG4gICAgICByZXN1bHQucHVzaCgoKHBvaW50ID4+IDYpICYgNjMpIHwgMTI4KVxuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ICYgNjMpIHwgMTI4KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBJbnZhbGlkIGNoYXJhY3RlclxuICAgIHJlc3VsdC5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gIH1cblxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5idWZmZXJcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/encode-utf8/index.js\n");

/***/ })

};
;