'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  readTodos: function readTodos() {

    return JSON.parse(window.localStorage.getItem('todo_key') || '[]');
  },
  saveTodos: function saveTodos(todos) {
    window.localStorage.setItem('todo_key', (0, _stringify2.default)(todos));
  }
};
//# sourceMappingURL=storageUtil.js.map