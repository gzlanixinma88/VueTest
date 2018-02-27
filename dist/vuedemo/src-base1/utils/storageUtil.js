'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  readComments: function readComments() {
    return JSON.parse(window.localStorage.getItem('comm_key') || '[]');
  },
  saveComments: function saveComments(comments) {
    window.localStorage.setItem('comm_key', (0, _stringify2.default)(comments));
  }
};
//# sourceMappingURL=storageUtil.js.map