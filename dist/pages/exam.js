'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _examchild = require('./../components/examchild.js');

var _examchild2 = _interopRequireDefault(_examchild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Exam = function (_wepy$page) {
  _inherits(Exam, _wepy$page);

  function Exam() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Exam);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Exam.__proto__ || Object.getPrototypeOf(Exam)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '考试列表'
    }, _this.data = {
      examlist: []
    }, _this.$repeat = {}, _this.$props = { "child": { "xmlns:v-bind": "", "v-bind:examlist.sync": "examlist" } }, _this.$events = {}, _this.components = {
      child: _examchild2.default
    }, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Exam, [{
    key: 'queryExams',
    value: function queryExams() {
      _wepy2.default.showLoading({
        title: 'Loading...', //提示的内容,
        mask: true //显示透明蒙层，防止触摸穿透,
      });

      var self = this;
      wx.cloud.callFunction({
        name: 'queryExams'
      }).then(function (res) {
        _wepy2.default.showToast({
          title: '查询成功', //提示的内容,
          icon: 'success', //图标,
          duration: 500, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: function success(r) {
            self.examlist = res.result.data;
            self.$apply();
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      if (this.examlist.length == 0) {
        this.queryExams();
      }
    }
  }]);

  return Exam;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Exam , 'pages/exam'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0uanMiXSwibmFtZXMiOlsiRXhhbSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiZXhhbWxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjaGlsZCIsIkV4YW1DaGlsZCIsIm1ldGhvZHMiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwid2VweSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwic2VsZiIsInd4IiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwidGhlbiIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInN1Y2Nlc3MiLCJyZXMiLCJyZXN1bHQiLCIkYXBwbHkiLCJsZW5ndGgiLCJxdWVyeUV4YW1zIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUVuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQURMLEssUUFJUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHdCQUF1QixVQUExQyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLGFBQU9DO0FBREcsSyxRQUlaQyxPLEdBQVUsRSxRQTJCVkMsTSxHQUFTLEUsUUFFVEMsSyxHQUFRLEUsUUFFUkMsUSxHQUFXLEU7Ozs7O2lDQTdCRTtBQUNYQyxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLFlBRFEsRUFDTTtBQUNyQkMsY0FBTSxJQUZTLENBRUg7QUFGRyxPQUFqQjs7QUFLQSxVQUFJQyxPQUFPLElBQVg7QUFDQUMsU0FBR0MsS0FBSCxDQUNHQyxZQURILENBQ2dCO0FBQ1pDLGNBQU07QUFETSxPQURoQixFQUlHQyxJQUpILENBSVEsZUFBTztBQUNYVCx1QkFBS1UsU0FBTCxDQUFlO0FBQ2JSLGlCQUFPLE1BRE0sRUFDRTtBQUNmUyxnQkFBTSxTQUZPLEVBRUk7QUFDakJDLG9CQUFTLEdBSEksRUFHQztBQUNkVCxnQkFBTSxJQUpPLEVBSUQ7QUFDWlUsbUJBQVMsb0JBQUs7QUFDWlQsaUJBQUtmLFFBQUwsR0FBZ0J5QixJQUFJQyxNQUFKLENBQVczQixJQUEzQjtBQUNBZ0IsaUJBQUtZLE1BQUw7QUFDRDtBQVJZLFNBQWY7QUFVRCxPQWZIO0FBZ0JEOzs7NkJBUVEsQ0FBRTs7OzZCQUVGO0FBQ1AsVUFBSSxLQUFLM0IsUUFBTCxDQUFjNEIsTUFBZCxJQUF3QixDQUE1QixFQUErQjtBQUM3QixhQUFLQyxVQUFMO0FBQ0Q7QUFDRjs7OztFQXhEK0JsQixlQUFLbUIsSTs7a0JBQWxCbEMsSSIsImZpbGUiOiJleGFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgRXhhbUNoaWxkIGZyb20gJy4uL2NvbXBvbmVudHMvZXhhbWNoaWxkJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbSBleHRlbmRzIHdlcHkucGFnZSB7IFxyXG4gIFxyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogIPor5XliJfooagnXHJcbiAgfTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGV4YW1saXN0OiBbXVxyXG4gIH07XHJcblxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjaGlsZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZXhhbWxpc3Quc3luY1wiOlwiZXhhbWxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgY2hpbGQ6IEV4YW1DaGlsZFxyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7fTtcclxuXHJcbiAgcXVlcnlFeGFtcygpIHtcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ0xvYWRpbmcuLi4nLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgd3guY2xvdWRcclxuICAgICAgLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgbmFtZTogJ3F1ZXJ5RXhhbXMnXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmn6Xor6LmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgIGljb246ICdzdWNjZXNzJywgLy/lm77moIcsXHJcbiAgICAgICAgICBkdXJhdGlvbjo1MDAsIC8v5bu26L+f5pe26Ze0LFxyXG4gICAgICAgICAgbWFzazogdHJ1ZSwgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICAgICAgICBzdWNjZXNzOiByID0+IHtcclxuICAgICAgICAgICAgc2VsZi5leGFtbGlzdCA9IHJlcy5yZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7fTtcclxuXHJcbiAgd2F0Y2ggPSB7fTtcclxuXHJcbiAgY29tcHV0ZWQgPSB7fTtcclxuXHJcbiAgb25Mb2FkKCkge31cclxuXHJcbiAgb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuZXhhbWxpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5xdWVyeUV4YW1zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==