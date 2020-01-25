'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'WePY With TCB'
    }, _this.methods = {
      getOpenID: function getOpenID() {
        wx.cloud.callFunction({
          name: 'getOpenID'
        }).then(function (res) {
          _wepy2.default.showToast({
            title: 'openID\u4E3A ' + res.result.openid,
            icon: 'none'
          });
        });
      },
      createRecord: function createRecord() {
        var database = wx.cloud.database();
        var test = database.collection('user');
        test.add({
          data: {
            key: 'this is value'
          }
        }).then(function (res) {
          _wepy2.default.showToast({
            title: '\u65B0\u589E\u6570\u636EID\u4E3A ' + res._id,
            icon: 'none'
          });
        });
      },
      uploadImage: function uploadImage() {
        wx.chooseImage({
          number: 1,
          success: function success(res) {
            wx.cloud.uploadFile({
              cloudPath: 'tempFile',
              filePath: res.tempFilePaths[0]
            }).then(function (res) {
              _wepy2.default.showToast({
                title: '\u6587\u4EF6ID\u4E3A ' + res.fileID,
                icon: 'none'
              });
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm1ldGhvZHMiLCJnZXRPcGVuSUQiLCJ3eCIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInRoZW4iLCJ3ZXB5Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJyZXMiLCJyZXN1bHQiLCJvcGVuaWQiLCJpY29uIiwiY3JlYXRlUmVjb3JkIiwiZGF0YWJhc2UiLCJ0ZXN0IiwiY29sbGVjdGlvbiIsImFkZCIsImRhdGEiLCJrZXkiLCJfaWQiLCJ1cGxvYWRJbWFnZSIsImNob29zZUltYWdlIiwibnVtYmVyIiwic3VjY2VzcyIsInVwbG9hZEZpbGUiLCJjbG91ZFBhdGgiLCJmaWxlUGF0aCIsInRlbXBGaWxlUGF0aHMiLCJmaWxlSUQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBS1RDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNLO0FBQ1hDLFdBQUdDLEtBQUgsQ0FBU0MsWUFBVCxDQUFzQjtBQUNwQkMsZ0JBQU07QUFEYyxTQUF0QixFQUVHQyxJQUZILENBRVEsZUFBTztBQUNiQyx5QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLHFDQUFrQkMsSUFBSUMsTUFBSixDQUFXQyxNQURoQjtBQUViQyxrQkFBTTtBQUZPLFdBQWY7QUFJRCxTQVBEO0FBUUQsT0FWTztBQVdSQyxrQkFYUSwwQkFXUTtBQUNkLFlBQU1DLFdBQVdiLEdBQUdDLEtBQUgsQ0FBU1ksUUFBVCxFQUFqQjtBQUNBLFlBQU1DLE9BQU9ELFNBQVNFLFVBQVQsQ0FBb0IsTUFBcEIsQ0FBYjtBQUNBRCxhQUFLRSxHQUFMLENBQVM7QUFDUEMsZ0JBQU07QUFDSkMsaUJBQUs7QUFERDtBQURDLFNBQVQsRUFJR2QsSUFKSCxDQUlRLGVBQU87QUFDYkMseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyx5REFBa0JDLElBQUlXLEdBRFQ7QUFFYlIsa0JBQU07QUFGTyxXQUFmO0FBSUQsU0FURDtBQVVELE9BeEJPO0FBeUJSUyxpQkF6QlEseUJBeUJPO0FBQ2JwQixXQUFHcUIsV0FBSCxDQUFlO0FBQ2JDLGtCQUFRLENBREs7QUFFYkMsbUJBQVMsc0JBQU87QUFDZHZCLGVBQUdDLEtBQUgsQ0FBU3VCLFVBQVQsQ0FBb0I7QUFDbEJDLHlCQUFXLFVBRE87QUFFbEJDLHdCQUFVbEIsSUFBSW1CLGFBQUosQ0FBa0IsQ0FBbEI7QUFGUSxhQUFwQixFQUdHdkIsSUFISCxDQUdRLGVBQU87QUFDYkMsNkJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxpREFBZ0JDLElBQUlvQixNQURQO0FBRWJqQixzQkFBTTtBQUZPLGVBQWY7QUFJRCxhQVJEO0FBU0Q7QUFaWSxTQUFmO0FBY0Q7QUF4Q08sSzs7Ozs7NkJBRkQsQ0FDUjs7OztFQUxnQ04sZUFBS3dCLEk7O2tCQUFuQmxDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlUFkgV2l0aCBUQ0InXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdldE9wZW5JRCAoKSB7XG4gICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XG4gICAgICAgICAgbmFtZTogJ2dldE9wZW5JRCdcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiBgb3BlbklE5Li6ICR7cmVzLnJlc3VsdC5vcGVuaWR9YCxcbiAgICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgY3JlYXRlUmVjb3JkICgpIHtcbiAgICAgICAgY29uc3QgZGF0YWJhc2UgPSB3eC5jbG91ZC5kYXRhYmFzZSgpXG4gICAgICAgIGNvbnN0IHRlc3QgPSBkYXRhYmFzZS5jb2xsZWN0aW9uKCd1c2VyJylcbiAgICAgICAgdGVzdC5hZGQoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGtleTogJ3RoaXMgaXMgdmFsdWUnXG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IGDmlrDlop7mlbDmja5JROS4uiAke3Jlcy5faWR9YCxcbiAgICAgICAgICAgIGljb246ICdub25lJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdXBsb2FkSW1hZ2UgKCkge1xuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgbnVtYmVyOiAxLFxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICB3eC5jbG91ZC51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgY2xvdWRQYXRoOiAndGVtcEZpbGUnLFxuICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBg5paH5Lu2SUTkuLogJHtyZXMuZmlsZUlEfWAsXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==