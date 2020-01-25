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

var Question = function (_wepy$page) {
  _inherits(Question, _wepy$page);

  function Question() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Question);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Question.__proto__ || Object.getPrototypeOf(Question)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '考题'
    }, _this.data = {
      book: {},
      questions: []
    }, _this.components = {}, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Question, [{
    key: 'queryQuestion',
    value: function queryQuestion() {
      var self = this;
      _wepy2.default.showLoading({
        title: 'Loading...', //提示的内容,
        mask: true //显示透明蒙层，防止触摸穿透,
      });
      wx.cloud.callFunction({
        name: 'queryQuestionsByBId',
        data: {
          b_id: self.book['b_id']
        }
      }).then(function (res) {
        _wepy2.default.showToast({
          title: '查询成功', //提示的内容,
          icon: 'none', //图标,
          duration: 500, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: function success(r) {
            self.questions = res.result.data;
            self.total = res.result.total;
            self.$apply();
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var obj = JSON.parse(options.item);
      this.book = obj;
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      if (this.questions.length == 0) {
        this.queryQuestion();
      }
    }
  }]);

  return Question;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Question , 'pages/question'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLmpzIl0sIm5hbWVzIjpbIlF1ZXN0aW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJib29rIiwicXVlc3Rpb25zIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwic2VsZiIsIndlcHkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInd4IiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwiYl9pZCIsInRoZW4iLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJzdWNjZXNzIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCIkYXBwbHkiLCJvcHRpb25zIiwib2JqIiwiSlNPTiIsInBhcnNlIiwiaXRlbSIsImxlbmd0aCIsInF1ZXJ5UXVlc3Rpb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsaUJBQVc7QUFGTixLLFFBS1BDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVSxFLFFBRVZDLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7OztvQ0FFSztBQUNkLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLFlBRFEsRUFDTTtBQUNyQkMsY0FBTSxJQUZTLENBRUo7QUFGSSxPQUFqQjtBQUlBQyxTQUFHQyxLQUFILENBQ0dDLFlBREgsQ0FDZ0I7QUFDWkMsY0FBTSxxQkFETTtBQUVaaEIsY0FBTTtBQUNKaUIsZ0JBQU1ULEtBQUtQLElBQUwsQ0FBVSxNQUFWO0FBREY7QUFGTSxPQURoQixFQU9HaUIsSUFQSCxDQU9RLGVBQU87QUFDWFQsdUJBQUtVLFNBQUwsQ0FBZTtBQUNiUixpQkFBTyxNQURNLEVBQ0U7QUFDZlMsZ0JBQU0sTUFGTyxFQUVDO0FBQ2RDLG9CQUFVLEdBSEcsRUFHRTtBQUNmVCxnQkFBTSxJQUpPLEVBSUQ7QUFDWlUsbUJBQVMsb0JBQUs7QUFDWmQsaUJBQUtOLFNBQUwsR0FBaUJxQixJQUFJQyxNQUFKLENBQVd4QixJQUE1QjtBQUNBUSxpQkFBS2lCLEtBQUwsR0FBYUYsSUFBSUMsTUFBSixDQUFXQyxLQUF4QjtBQUNBakIsaUJBQUtrQixNQUFMO0FBQ0Q7QUFUWSxTQUFmO0FBV0QsT0FuQkg7QUFvQkQ7OzsyQkFFTUMsTyxFQUFTO0FBQ2QsVUFBSUMsTUFBTUMsS0FBS0MsS0FBTCxDQUFXSCxRQUFRSSxJQUFuQixDQUFWO0FBQ0EsV0FBSzlCLElBQUwsR0FBWTJCLEdBQVo7QUFDQSxXQUFLRixNQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUksS0FBS3hCLFNBQUwsQ0FBZThCLE1BQWYsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsYUFBS0MsYUFBTDtBQUNEO0FBQ0Y7Ozs7RUExRG1DeEIsZUFBS3lCLEk7O2tCQUF0QnJDLFEiLCJmaWxlIjoicXVlc3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ICD6aKYJ1xyXG4gIH07XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBib29rOiB7fSxcclxuICAgIHF1ZXN0aW9uczogW11cclxuICB9O1xyXG5cclxuICBjb21wb25lbnRzID0ge307XHJcblxyXG4gIG1ldGhvZHMgPSB7fTtcclxuXHJcbiAgZXZlbnRzID0ge307XHJcblxyXG4gIHdhdGNoID0ge307XHJcblxyXG4gIGNvbXB1dGVkID0ge307XHJcblxyXG4gIHF1ZXJ5UXVlc3Rpb24oKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgIG1hc2s6IHRydWUgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICB9KTtcclxuICAgIHd4LmNsb3VkXHJcbiAgICAgIC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgIG5hbWU6ICdxdWVyeVF1ZXN0aW9uc0J5QklkJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBiX2lkOiBzZWxmLmJvb2tbJ2JfaWQnXVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+afpeivouaIkOWKnycsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsIC8v5bu26L+f5pe26Ze0LFxyXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICBzdWNjZXNzOiByID0+IHtcclxuICAgICAgICAgICAgc2VsZi5xdWVzdGlvbnMgPSByZXMucmVzdWx0LmRhdGE7XHJcbiAgICAgICAgICAgIHNlbGYudG90YWwgPSByZXMucmVzdWx0LnRvdGFsO1xyXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICB2YXIgb2JqID0gSlNPTi5wYXJzZShvcHRpb25zLml0ZW0pO1xyXG4gICAgdGhpcy5ib29rID0gb2JqO1xyXG4gICAgdGhpcy4kYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIG9uU2hvdygpIHtcclxuICAgIGlmICh0aGlzLnF1ZXN0aW9ucy5sZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLnF1ZXJ5UXVlc3Rpb24oKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19