var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

var images = [_defineProperty({ src: 'path/to/image-1.jpg' }, 'src', 'path/to/image-2.jpg')];

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Component);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Component.__proto__ || Object.getPrototypeOf(Component)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { modalIsOpen: false }, _this.toggleModal = function () {
      _this.setState(function (state) {
        return { modalIsOpen: !state.modalIsOpen };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Component, [{
    key: 'render',
    value: function render() {
      var modalIsOpen = this.state.modalIsOpen;


      return React.createElement(
        ModalGateway,
        null,
        modalIsOpen ? React.createElement(
          Modal,
          { onClose: this.toggleModal },
          React.createElement(Carousel, { views: images })
        ) : null
      );
    }
  }]);

  return Component;
}(React.Component);