var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardHeader = function (_React$Component) {
  _inherits(CardHeader, _React$Component);

  function CardHeader() {
    _classCallCheck(this, CardHeader);

    return _possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
  }

  _createClass(CardHeader, [{
    key: 'render',
    value: function render() {
      var image = this.props.image;

      var style = {
        backgroundImage: 'url(' + image + ')'
      };
      return React.createElement(
        'header',
        { style: style, id: image, className: 'card-header' },
        React.createElement(
          'h4',
          { className: 'card-header--title' },
          'Rutgers Course Sniper'
        )
      );
    }
  }]);

  return CardHeader;
}(React.Component);

function goToURL(url) {
  window.location.href = url;
}

var Button = function (_React$Component2) {
  _inherits(Button, _React$Component2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'button',
        { className: 'button button-primary', onClick: function onClick() {
            return goToURL(_this3.props.url);
          } },
        React.createElement('i', { className: 'fa fa-chevron-right' }),
        ' Find out more'
      );
    }
  }]);

  return Button;
}(React.Component);

var CardBody = function (_React$Component3) {
  _inherits(CardBody, _React$Component3);

  function CardBody() {
    _classCallCheck(this, CardBody);

    return _possibleConstructorReturn(this, (CardBody.__proto__ || Object.getPrototypeOf(CardBody)).apply(this, arguments));
  }

  _createClass(CardBody, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'card-body' },
        React.createElement(
          'h2',
          null,
          this.props.title
        ),
        React.createElement(
          'p',
          { className: 'body-content' },
          this.props.text
        ),
        React.createElement(Button, { url: this.props.url })
      );
    }
  }]);

  return CardBody;
}(React.Component);

var Card = function (_React$Component4) {
  _inherits(Card, _React$Component4);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'article',
        { className: 'card' },
        React.createElement(CardHeader, { image: this.props.image, title: this.props.name }),
        React.createElement(CardBody, { title: this.props.header, text: this.props.description, url: this.props.codeURL })
      );
    }
  }]);

  return Card;
}(React.Component);

ReactDOM.render(React.createElement(Card, {
  name: 'big brain timerrr',
  description: 'ayaks crowd Three Sisteayaks crowd Three Sisteayaks crowd Three Sisteayaks crowd Three Siste',
  image: 'https://source.unsplash.com/user/erondu/600x400',
  header: 'JavaScript+ Node.js+ AWS EC2',
  codeURL: 'https://github.com/n00rsy/Rutgers-Auto-Course-Register'
}), document.getElementById('app'));