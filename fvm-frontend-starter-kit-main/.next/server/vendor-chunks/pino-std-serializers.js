"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pino-std-serializers";
exports.ids = ["vendor-chunks/pino-std-serializers"];
exports.modules = {

/***/ "(ssr)/./node_modules/pino-std-serializers/index.js":
/*!****************************************************!*\
  !*** ./node_modules/pino-std-serializers/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst errSerializer = __webpack_require__(/*! ./lib/err */ \"(ssr)/./node_modules/pino-std-serializers/lib/err.js\")\nconst reqSerializers = __webpack_require__(/*! ./lib/req */ \"(ssr)/./node_modules/pino-std-serializers/lib/req.js\")\nconst resSerializers = __webpack_require__(/*! ./lib/res */ \"(ssr)/./node_modules/pino-std-serializers/lib/res.js\")\n\nmodule.exports = {\n  err: errSerializer,\n  mapHttpRequest: reqSerializers.mapHttpRequest,\n  mapHttpResponse: resSerializers.mapHttpResponse,\n  req: reqSerializers.reqSerializer,\n  res: resSerializers.resSerializer,\n\n  wrapErrorSerializer: function wrapErrorSerializer (customSerializer) {\n    if (customSerializer === errSerializer) return customSerializer\n    return function wrapErrSerializer (err) {\n      return customSerializer(errSerializer(err))\n    }\n  },\n\n  wrapRequestSerializer: function wrapRequestSerializer (customSerializer) {\n    if (customSerializer === reqSerializers.reqSerializer) return customSerializer\n    return function wrappedReqSerializer (req) {\n      return customSerializer(reqSerializers.reqSerializer(req))\n    }\n  },\n\n  wrapResponseSerializer: function wrapResponseSerializer (customSerializer) {\n    if (customSerializer === resSerializers.resSerializer) return customSerializer\n    return function wrappedResSerializer (res) {\n      return customSerializer(resSerializers.resSerializer(res))\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosc0JBQXNCLG1CQUFPLENBQUMsdUVBQVc7QUFDekMsdUJBQXVCLG1CQUFPLENBQUMsdUVBQVc7QUFDMUMsdUJBQXVCLG1CQUFPLENBQUMsdUVBQVc7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z2bS1mcm9udGVuZC1zdGFydGVyLWtpdC8uL25vZGVfbW9kdWxlcy9waW5vLXN0ZC1zZXJpYWxpemVycy9pbmRleC5qcz9mZjM1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBlcnJTZXJpYWxpemVyID0gcmVxdWlyZSgnLi9saWIvZXJyJylcbmNvbnN0IHJlcVNlcmlhbGl6ZXJzID0gcmVxdWlyZSgnLi9saWIvcmVxJylcbmNvbnN0IHJlc1NlcmlhbGl6ZXJzID0gcmVxdWlyZSgnLi9saWIvcmVzJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVycjogZXJyU2VyaWFsaXplcixcbiAgbWFwSHR0cFJlcXVlc3Q6IHJlcVNlcmlhbGl6ZXJzLm1hcEh0dHBSZXF1ZXN0LFxuICBtYXBIdHRwUmVzcG9uc2U6IHJlc1NlcmlhbGl6ZXJzLm1hcEh0dHBSZXNwb25zZSxcbiAgcmVxOiByZXFTZXJpYWxpemVycy5yZXFTZXJpYWxpemVyLFxuICByZXM6IHJlc1NlcmlhbGl6ZXJzLnJlc1NlcmlhbGl6ZXIsXG5cbiAgd3JhcEVycm9yU2VyaWFsaXplcjogZnVuY3Rpb24gd3JhcEVycm9yU2VyaWFsaXplciAoY3VzdG9tU2VyaWFsaXplcikge1xuICAgIGlmIChjdXN0b21TZXJpYWxpemVyID09PSBlcnJTZXJpYWxpemVyKSByZXR1cm4gY3VzdG9tU2VyaWFsaXplclxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwRXJyU2VyaWFsaXplciAoZXJyKSB7XG4gICAgICByZXR1cm4gY3VzdG9tU2VyaWFsaXplcihlcnJTZXJpYWxpemVyKGVycikpXG4gICAgfVxuICB9LFxuXG4gIHdyYXBSZXF1ZXN0U2VyaWFsaXplcjogZnVuY3Rpb24gd3JhcFJlcXVlc3RTZXJpYWxpemVyIChjdXN0b21TZXJpYWxpemVyKSB7XG4gICAgaWYgKGN1c3RvbVNlcmlhbGl6ZXIgPT09IHJlcVNlcmlhbGl6ZXJzLnJlcVNlcmlhbGl6ZXIpIHJldHVybiBjdXN0b21TZXJpYWxpemVyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBwZWRSZXFTZXJpYWxpemVyIChyZXEpIHtcbiAgICAgIHJldHVybiBjdXN0b21TZXJpYWxpemVyKHJlcVNlcmlhbGl6ZXJzLnJlcVNlcmlhbGl6ZXIocmVxKSlcbiAgICB9XG4gIH0sXG5cbiAgd3JhcFJlc3BvbnNlU2VyaWFsaXplcjogZnVuY3Rpb24gd3JhcFJlc3BvbnNlU2VyaWFsaXplciAoY3VzdG9tU2VyaWFsaXplcikge1xuICAgIGlmIChjdXN0b21TZXJpYWxpemVyID09PSByZXNTZXJpYWxpemVycy5yZXNTZXJpYWxpemVyKSByZXR1cm4gY3VzdG9tU2VyaWFsaXplclxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVkUmVzU2VyaWFsaXplciAocmVzKSB7XG4gICAgICByZXR1cm4gY3VzdG9tU2VyaWFsaXplcihyZXNTZXJpYWxpemVycy5yZXNTZXJpYWxpemVyKHJlcykpXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/pino-std-serializers/lib/err.js":
/*!******************************************************!*\
  !*** ./node_modules/pino-std-serializers/lib/err.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = errSerializer\n\nconst { toString } = Object.prototype\nconst seen = Symbol('circular-ref-tag')\nconst rawSymbol = Symbol('pino-raw-err-ref')\nconst pinoErrProto = Object.create({}, {\n  type: {\n    enumerable: true,\n    writable: true,\n    value: undefined\n  },\n  message: {\n    enumerable: true,\n    writable: true,\n    value: undefined\n  },\n  stack: {\n    enumerable: true,\n    writable: true,\n    value: undefined\n  },\n  raw: {\n    enumerable: false,\n    get: function () {\n      return this[rawSymbol]\n    },\n    set: function (val) {\n      this[rawSymbol] = val\n    }\n  }\n})\nObject.defineProperty(pinoErrProto, rawSymbol, {\n  writable: true,\n  value: {}\n})\n\nfunction errSerializer (err) {\n  if (!(err instanceof Error)) {\n    return err\n  }\n\n  err[seen] = undefined // tag to prevent re-looking at this\n  const _err = Object.create(pinoErrProto)\n  _err.type = toString.call(err.constructor) === '[object Function]'\n    ? err.constructor.name\n    : err.name\n  _err.message = err.message\n  _err.stack = err.stack\n  for (const key in err) {\n    if (_err[key] === undefined) {\n      const val = err[key]\n      if (val instanceof Error) {\n        /* eslint-disable no-prototype-builtins */\n        if (!val.hasOwnProperty(seen)) {\n          _err[key] = errSerializer(val)\n        }\n      } else {\n        _err[key] = val\n      }\n    }\n  }\n\n  delete err[seen] // clean up tag in case err is serialized again later\n  _err.raw = err\n  return _err\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL2Vyci5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjs7QUFFQSxRQUFRLFdBQVc7QUFDbkI7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z2bS1mcm9udGVuZC1zdGFydGVyLWtpdC8uL25vZGVfbW9kdWxlcy9waW5vLXN0ZC1zZXJpYWxpemVycy9saWIvZXJyLmpzPzcxNjAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZXJyU2VyaWFsaXplclxuXG5jb25zdCB7IHRvU3RyaW5nIH0gPSBPYmplY3QucHJvdG90eXBlXG5jb25zdCBzZWVuID0gU3ltYm9sKCdjaXJjdWxhci1yZWYtdGFnJylcbmNvbnN0IHJhd1N5bWJvbCA9IFN5bWJvbCgncGluby1yYXctZXJyLXJlZicpXG5jb25zdCBwaW5vRXJyUHJvdG8gPSBPYmplY3QuY3JlYXRlKHt9LCB7XG4gIHR5cGU6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgfSxcbiAgbWVzc2FnZToge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IHVuZGVmaW5lZFxuICB9LFxuICBzdGFjazoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IHVuZGVmaW5lZFxuICB9LFxuICByYXc6IHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzW3Jhd1N5bWJvbF1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgdGhpc1tyYXdTeW1ib2xdID0gdmFsXG4gICAgfVxuICB9XG59KVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHBpbm9FcnJQcm90bywgcmF3U3ltYm9sLCB7XG4gIHdyaXRhYmxlOiB0cnVlLFxuICB2YWx1ZToge31cbn0pXG5cbmZ1bmN0aW9uIGVyclNlcmlhbGl6ZXIgKGVycikge1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICByZXR1cm4gZXJyXG4gIH1cblxuICBlcnJbc2Vlbl0gPSB1bmRlZmluZWQgLy8gdGFnIHRvIHByZXZlbnQgcmUtbG9va2luZyBhdCB0aGlzXG4gIGNvbnN0IF9lcnIgPSBPYmplY3QuY3JlYXRlKHBpbm9FcnJQcm90bylcbiAgX2Vyci50eXBlID0gdG9TdHJpbmcuY2FsbChlcnIuY29uc3RydWN0b3IpID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICAgPyBlcnIuY29uc3RydWN0b3IubmFtZVxuICAgIDogZXJyLm5hbWVcbiAgX2Vyci5tZXNzYWdlID0gZXJyLm1lc3NhZ2VcbiAgX2Vyci5zdGFjayA9IGVyci5zdGFja1xuICBmb3IgKGNvbnN0IGtleSBpbiBlcnIpIHtcbiAgICBpZiAoX2VycltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGVycltrZXldXG4gICAgICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG4gICAgICAgIGlmICghdmFsLmhhc093blByb3BlcnR5KHNlZW4pKSB7XG4gICAgICAgICAgX2VycltrZXldID0gZXJyU2VyaWFsaXplcih2YWwpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9lcnJba2V5XSA9IHZhbFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZSBlcnJbc2Vlbl0gLy8gY2xlYW4gdXAgdGFnIGluIGNhc2UgZXJyIGlzIHNlcmlhbGl6ZWQgYWdhaW4gbGF0ZXJcbiAgX2Vyci5yYXcgPSBlcnJcbiAgcmV0dXJuIF9lcnJcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/lib/err.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/pino-std-serializers/lib/req.js":
/*!******************************************************!*\
  !*** ./node_modules/pino-std-serializers/lib/req.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = {\n  mapHttpRequest,\n  reqSerializer\n}\n\nconst rawSymbol = Symbol('pino-raw-req-ref')\nconst pinoReqProto = Object.create({}, {\n  id: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  method: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  url: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  query: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  params: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  headers: {\n    enumerable: true,\n    writable: true,\n    value: {}\n  },\n  remoteAddress: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  remotePort: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  raw: {\n    enumerable: false,\n    get: function () {\n      return this[rawSymbol]\n    },\n    set: function (val) {\n      this[rawSymbol] = val\n    }\n  }\n})\nObject.defineProperty(pinoReqProto, rawSymbol, {\n  writable: true,\n  value: {}\n})\n\nfunction reqSerializer (req) {\n  // req.info is for hapi compat.\n  const connection = req.info || req.socket\n  const _req = Object.create(pinoReqProto)\n  _req.id = (typeof req.id === 'function' ? req.id() : (req.id || (req.info ? req.info.id : undefined)))\n  _req.method = req.method\n  // req.originalUrl is for expressjs compat.\n  if (req.originalUrl) {\n    _req.url = req.originalUrl\n    _req.query = req.query\n    _req.params = req.params\n  } else {\n    // req.url.path is  for hapi compat.\n    _req.url = req.path || (req.url ? (req.url.path || req.url) : undefined)\n  }\n  _req.headers = req.headers\n  _req.remoteAddress = connection && connection.remoteAddress\n  _req.remotePort = connection && connection.remotePort\n  // req.raw is  for hapi compat/equivalence\n  _req.raw = req.raw || req\n  return _req\n}\n\nfunction mapHttpRequest (req) {\n  return {\n    req: reqSerializer(req)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL3JlcS5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Z2bS1mcm9udGVuZC1zdGFydGVyLWtpdC8uL25vZGVfbW9kdWxlcy9waW5vLXN0ZC1zZXJpYWxpemVycy9saWIvcmVxLmpzP2E1MzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtYXBIdHRwUmVxdWVzdCxcbiAgcmVxU2VyaWFsaXplclxufVxuXG5jb25zdCByYXdTeW1ib2wgPSBTeW1ib2woJ3Bpbm8tcmF3LXJlcS1yZWYnKVxuY29uc3QgcGlub1JlcVByb3RvID0gT2JqZWN0LmNyZWF0ZSh7fSwge1xuICBpZDoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6ICcnXG4gIH0sXG4gIG1ldGhvZDoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6ICcnXG4gIH0sXG4gIHVybDoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6ICcnXG4gIH0sXG4gIHF1ZXJ5OiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogJydcbiAgfSxcbiAgcGFyYW1zOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogJydcbiAgfSxcbiAgaGVhZGVyczoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IHt9XG4gIH0sXG4gIHJlbW90ZUFkZHJlc3M6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAnJ1xuICB9LFxuICByZW1vdGVQb3J0OiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogJydcbiAgfSxcbiAgcmF3OiB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpc1tyYXdTeW1ib2xdXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHRoaXNbcmF3U3ltYm9sXSA9IHZhbFxuICAgIH1cbiAgfVxufSlcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwaW5vUmVxUHJvdG8sIHJhd1N5bWJvbCwge1xuICB3cml0YWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHt9XG59KVxuXG5mdW5jdGlvbiByZXFTZXJpYWxpemVyIChyZXEpIHtcbiAgLy8gcmVxLmluZm8gaXMgZm9yIGhhcGkgY29tcGF0LlxuICBjb25zdCBjb25uZWN0aW9uID0gcmVxLmluZm8gfHwgcmVxLnNvY2tldFxuICBjb25zdCBfcmVxID0gT2JqZWN0LmNyZWF0ZShwaW5vUmVxUHJvdG8pXG4gIF9yZXEuaWQgPSAodHlwZW9mIHJlcS5pZCA9PT0gJ2Z1bmN0aW9uJyA/IHJlcS5pZCgpIDogKHJlcS5pZCB8fCAocmVxLmluZm8gPyByZXEuaW5mby5pZCA6IHVuZGVmaW5lZCkpKVxuICBfcmVxLm1ldGhvZCA9IHJlcS5tZXRob2RcbiAgLy8gcmVxLm9yaWdpbmFsVXJsIGlzIGZvciBleHByZXNzanMgY29tcGF0LlxuICBpZiAocmVxLm9yaWdpbmFsVXJsKSB7XG4gICAgX3JlcS51cmwgPSByZXEub3JpZ2luYWxVcmxcbiAgICBfcmVxLnF1ZXJ5ID0gcmVxLnF1ZXJ5XG4gICAgX3JlcS5wYXJhbXMgPSByZXEucGFyYW1zXG4gIH0gZWxzZSB7XG4gICAgLy8gcmVxLnVybC5wYXRoIGlzICBmb3IgaGFwaSBjb21wYXQuXG4gICAgX3JlcS51cmwgPSByZXEucGF0aCB8fCAocmVxLnVybCA/IChyZXEudXJsLnBhdGggfHwgcmVxLnVybCkgOiB1bmRlZmluZWQpXG4gIH1cbiAgX3JlcS5oZWFkZXJzID0gcmVxLmhlYWRlcnNcbiAgX3JlcS5yZW1vdGVBZGRyZXNzID0gY29ubmVjdGlvbiAmJiBjb25uZWN0aW9uLnJlbW90ZUFkZHJlc3NcbiAgX3JlcS5yZW1vdGVQb3J0ID0gY29ubmVjdGlvbiAmJiBjb25uZWN0aW9uLnJlbW90ZVBvcnRcbiAgLy8gcmVxLnJhdyBpcyAgZm9yIGhhcGkgY29tcGF0L2VxdWl2YWxlbmNlXG4gIF9yZXEucmF3ID0gcmVxLnJhdyB8fCByZXFcbiAgcmV0dXJuIF9yZXFcbn1cblxuZnVuY3Rpb24gbWFwSHR0cFJlcXVlc3QgKHJlcSkge1xuICByZXR1cm4ge1xuICAgIHJlcTogcmVxU2VyaWFsaXplcihyZXEpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/lib/req.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/pino-std-serializers/lib/res.js":
/*!******************************************************!*\
  !*** ./node_modules/pino-std-serializers/lib/res.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = {\n  mapHttpResponse,\n  resSerializer\n}\n\nconst rawSymbol = Symbol('pino-raw-res-ref')\nconst pinoResProto = Object.create({}, {\n  statusCode: {\n    enumerable: true,\n    writable: true,\n    value: 0\n  },\n  headers: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  raw: {\n    enumerable: false,\n    get: function () {\n      return this[rawSymbol]\n    },\n    set: function (val) {\n      this[rawSymbol] = val\n    }\n  }\n})\nObject.defineProperty(pinoResProto, rawSymbol, {\n  writable: true,\n  value: {}\n})\n\nfunction resSerializer (res) {\n  const _res = Object.create(pinoResProto)\n  _res.statusCode = res.statusCode\n  _res.headers = res.getHeaders ? res.getHeaders() : res._headers\n  _res.raw = res\n  return _res\n}\n\nfunction mapHttpResponse (res) {\n  return {\n    res: resSerializer(res)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL3Jlcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdm0tZnJvbnRlbmQtc3RhcnRlci1raXQvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL3Jlcy5qcz9kNTY2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWFwSHR0cFJlc3BvbnNlLFxuICByZXNTZXJpYWxpemVyXG59XG5cbmNvbnN0IHJhd1N5bWJvbCA9IFN5bWJvbCgncGluby1yYXctcmVzLXJlZicpXG5jb25zdCBwaW5vUmVzUHJvdG8gPSBPYmplY3QuY3JlYXRlKHt9LCB7XG4gIHN0YXR1c0NvZGU6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAwXG4gIH0sXG4gIGhlYWRlcnM6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAnJ1xuICB9LFxuICByYXc6IHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzW3Jhd1N5bWJvbF1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgdGhpc1tyYXdTeW1ib2xdID0gdmFsXG4gICAgfVxuICB9XG59KVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHBpbm9SZXNQcm90bywgcmF3U3ltYm9sLCB7XG4gIHdyaXRhYmxlOiB0cnVlLFxuICB2YWx1ZToge31cbn0pXG5cbmZ1bmN0aW9uIHJlc1NlcmlhbGl6ZXIgKHJlcykge1xuICBjb25zdCBfcmVzID0gT2JqZWN0LmNyZWF0ZShwaW5vUmVzUHJvdG8pXG4gIF9yZXMuc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlXG4gIF9yZXMuaGVhZGVycyA9IHJlcy5nZXRIZWFkZXJzID8gcmVzLmdldEhlYWRlcnMoKSA6IHJlcy5faGVhZGVyc1xuICBfcmVzLnJhdyA9IHJlc1xuICByZXR1cm4gX3Jlc1xufVxuXG5mdW5jdGlvbiBtYXBIdHRwUmVzcG9uc2UgKHJlcykge1xuICByZXR1cm4ge1xuICAgIHJlczogcmVzU2VyaWFsaXplcihyZXMpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/lib/res.js\n");

/***/ })

};
;