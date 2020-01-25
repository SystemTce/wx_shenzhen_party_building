'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: [
      // 'pages/index',
      'pages/exam', 'pages/exam_books', 'pages/question', 'pages/info', 'pages/doc', 'pages/user'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WePY With TCB',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#7A7E83',
        selectedColor: '#3cc51f',
        borderStyle: 'black',
        backgroundColor: '#ffffff',
        // position:'3',
        list: [{
          pagePath: 'pages/exam',
          iconPath: 'image/icon.png',
          selectedIconPath: 'image/icon.png',
          text: '练习' //显示的文本，超过 3 个字符则显示成“…”,
        }, {
          pagePath: 'pages/info',
          iconPath: 'image/icon.png',
          selectedIconPath: 'image/icon.png',
          text: '资讯' //显示的文本，超过 3 个字符则显示成“…”,
        }, {
          pagePath: 'pages/doc',
          iconPath: 'image/icon.png',
          selectedIconPath: 'image/icon.png',
          text: '文档'
        }, {
          pagePath: 'pages/user',
          iconPath: 'image/icon.png',
          selectedIconPath: 'image/icon.png',
          text: '我的'
        }]
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'onLaunch',
    value: function onLaunch() {
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力');
      } else {
        wx.cloud.init({
          traceUser: true
        });
      }
    }
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInRleHQiLCJ3eCIsImNsb3VkIiwiY29uc29sZSIsImVycm9yIiwiaW5pdCIsInRyYWNlVXNlciIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTztBQUNMO0FBQ0Esa0JBRkssRUFHTCxrQkFISyxFQUlMLGdCQUpLLEVBS0wsWUFMSyxFQU1MLFdBTkssRUFPTCxZQVBLLENBREE7QUFZUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLGVBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQVpEO0FBa0JQQyxjQUFRO0FBQ05DLGVBQU8sU0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHFCQUFhLE9BSFA7QUFJTkMseUJBQWlCLFNBSlg7QUFLTjtBQUNBQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsWUFEWjtBQUVFQyxvQkFBVSxnQkFGWjtBQUdFQyw0QkFBa0IsZ0JBSHBCO0FBSUVDLGdCQUFNLElBSlIsQ0FJYTtBQUpiLFNBREksRUFPSjtBQUNFSCxvQkFBVSxZQURaO0FBRUVDLG9CQUFVLGdCQUZaO0FBR0VDLDRCQUFrQixnQkFIcEI7QUFJRUMsZ0JBQU0sSUFKUixDQUlhO0FBSmIsU0FQSSxFQWFKO0FBQ0VILG9CQUFVLFdBRFo7QUFFRUMsb0JBQVUsZ0JBRlo7QUFHRUMsNEJBQWtCLGdCQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBYkksRUFtQko7QUFDRUgsb0JBQVUsWUFEWjtBQUVFQyxvQkFBVSxnQkFGWjtBQUdFQyw0QkFBa0IsZ0JBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0FuQkk7QUFOQTtBQWxCRCxLOzs7OzsrQkFxREU7QUFDVCxVQUFJLENBQUNDLEdBQUdDLEtBQVIsRUFBZTtBQUNiQyxnQkFBUUMsS0FBUixDQUFjLHlCQUFkO0FBQ0QsT0FGRCxNQUVPO0FBQ0xILFdBQUdDLEtBQUgsQ0FBU0csSUFBVCxDQUFjO0FBQ1pDLHFCQUFXO0FBREMsU0FBZDtBQUdEO0FBQ0Y7Ozs7RUE5RDBCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgIC8vICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvZXhhbScsXG4gICAgICAncGFnZXMvZXhhbV9ib29rcycsXG4gICAgICAncGFnZXMvcXVlc3Rpb24nLFxuICAgICAgJ3BhZ2VzL2luZm8nLFxuICAgICAgJ3BhZ2VzL2RvYycsXG4gICAgICAncGFnZXMvdXNlcicsXG4gICAgICAvLyAncGFnZXMvcXVlc3Rpb24nLFxuICAgICAgLy8gJ3BhZ2VzL3NlYXJjaCcsXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VQWSBXaXRoIFRDQicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnIzdBN0U4MycsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzNjYzUxZicsXG4gICAgICBib3JkZXJTdHlsZTogJ2JsYWNrJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgLy8gcG9zaXRpb246JzMnLFxuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9leGFtJyxcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlL2ljb24ucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2UvaWNvbi5wbmcnLFxuICAgICAgICAgIHRleHQ6ICfnu4PkuaAnIC8v5pi+56S655qE5paH5pys77yM6LaF6L+HIDMg5Liq5a2X56ym5YiZ5pi+56S65oiQ4oCc4oCm4oCdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmZvJyxcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlL2ljb24ucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2UvaWNvbi5wbmcnLFxuICAgICAgICAgIHRleHQ6ICfotYTorq8nIC8v5pi+56S655qE5paH5pys77yM6LaF6L+HIDMg5Liq5a2X56ym5YiZ5pi+56S65oiQ4oCc4oCm4oCdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9kb2MnLFxuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2UvaWNvbi5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZS9pY29uLnBuZycsXG4gICAgICAgICAgdGV4dDogJ+aWh+ahoydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdXNlcicsXG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZS9pY29uLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlL2ljb24ucG5nJyxcbiAgICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9O1xuXG4gIG9uTGF1bmNoKCkge1xuICAgIGlmICghd3guY2xvdWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ivt+S9v+eUqCAyLjIuMyDmiJbku6XkuIrnmoTln7rnoYDlupPku6Xkvb/nlKjkupHog73lipsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3guY2xvdWQuaW5pdCh7XG4gICAgICAgIHRyYWNlVXNlcjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=