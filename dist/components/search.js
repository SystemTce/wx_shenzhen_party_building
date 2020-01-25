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

var Search = function (_wepy$component) {
  _inherits(Search, _wepy$component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      exam: {},
      questions: [],
      inputValue: ''
    }, _this.components = {}, _this.methods = {
      bindKeyInput: function bindKeyInput(e) {
        this.inputValue = e.detail.value;
      },
      tap: function tap() {
        if (this.inputValue.length > 0) {
          this.searchQuestion();
        }
      },
      clear: function clear() {
        this.inputValue = '';
        this.questions = [];
        this.$apply();
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'searchQuestion',
    value: function searchQuestion() {
      var self = this;
      _wepy2.default.showLoading({
        title: 'Loading...', //提示的内容,
        mask: true //显示透明蒙层，防止触摸穿透,
      });
      wx.cloud.callFunction({
        name: 'searchQuestion',
        data: {
          exam_id: self.exam['exam_id'],
          key: self.inputValue
        }
      }).then(function (res) {
        var titleMsg = '查询成功';
        if (res.result.data.length == 0) {
          titleMsg = res.result.errMsg;
        }

        _wepy2.default.showToast({
          title: titleMsg, //提示的内容,
          icon: 'none', //图标,
          duration: 500, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: function success(r) {
            self.questions = res.result.data;
            // self.total = res.result.total;
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
    value: function onShow() {}
  }]);

  return Search;
}(_wepy2.default.component);

exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJwcm9wcyIsImRhdGEiLCJleGFtIiwicXVlc3Rpb25zIiwiaW5wdXRWYWx1ZSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiYmluZEtleUlucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwidGFwIiwibGVuZ3RoIiwic2VhcmNoUXVlc3Rpb24iLCJjbGVhciIsIiRhcHBseSIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJzZWxmIiwid2VweSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwid3giLCJjbG91ZCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJleGFtX2lkIiwia2V5IiwidGhlbiIsInRpdGxlTXNnIiwicmVzIiwicmVzdWx0IiwiZXJyTXNnIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic3VjY2VzcyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUSxFLFFBRVJDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsaUJBQVcsRUFGTjtBQUdMQyxrQkFBWTtBQUhQLEssUUFNUEMsVSxHQUFhLEUsUUFFYkMsTyxHQUFVO0FBQ1JDLGtCQURRLHdCQUNLQyxDQURMLEVBQ1E7QUFDZCxhQUFLSixVQUFMLEdBQWtCSSxFQUFFQyxNQUFGLENBQVNDLEtBQTNCO0FBQ0QsT0FITztBQUlSQyxTQUpRLGlCQUlGO0FBQ0osWUFBSSxLQUFLUCxVQUFMLENBQWdCUSxNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUM5QixlQUFLQyxjQUFMO0FBQ0Q7QUFDRixPQVJPO0FBU1JDLFdBVFEsbUJBU0E7QUFDTixhQUFLVixVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsYUFBS0QsU0FBTCxHQUFpQixFQUFqQjtBQUNBLGFBQUtZLE1BQUw7QUFDRDtBQWJPLEssUUFnQlZDLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7OztxQ0FFTTtBQUNmLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLFlBRFEsRUFDTTtBQUNyQkMsY0FBTSxJQUZTLENBRUg7QUFGRyxPQUFqQjtBQUlBQyxTQUFHQyxLQUFILENBQ0dDLFlBREgsQ0FDZ0I7QUFDWkMsY0FBTSxnQkFETTtBQUVaMUIsY0FBTTtBQUNKMkIsbUJBQVNULEtBQUtqQixJQUFMLENBQVUsU0FBVixDQURMO0FBRUoyQixlQUFLVixLQUFLZjtBQUZOO0FBRk0sT0FEaEIsRUFRRzBCLElBUkgsQ0FRUSxlQUFPO0FBQ1gsWUFBSUMsV0FBVyxNQUFmO0FBQ0EsWUFBSUMsSUFBSUMsTUFBSixDQUFXaEMsSUFBWCxDQUFnQlcsTUFBaEIsSUFBMEIsQ0FBOUIsRUFBaUM7QUFDL0JtQixxQkFBV0MsSUFBSUMsTUFBSixDQUFXQyxNQUF0QjtBQUNEOztBQUVEZCx1QkFBS2UsU0FBTCxDQUFlO0FBQ2JiLGlCQUFPUyxRQURNLEVBQ0k7QUFDakJLLGdCQUFNLE1BRk8sRUFFQztBQUNkQyxvQkFBVSxHQUhHLEVBR0U7QUFDZmQsZ0JBQU0sSUFKTyxFQUlEO0FBQ1plLG1CQUFTLG9CQUFLO0FBQ1puQixpQkFBS2hCLFNBQUwsR0FBaUI2QixJQUFJQyxNQUFKLENBQVdoQyxJQUE1QjtBQUNBO0FBQ0FrQixpQkFBS0osTUFBTDtBQUNEO0FBVFksU0FBZjtBQVdELE9BekJIO0FBMEJEOzs7NkJBQ1EsQ0FBRTs7OzZCQUVGLENBQUU7Ozs7RUFwRXVCSyxlQUFLbUIsUzs7a0JBQXBCeEMsTSIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHt9O1xyXG5cclxuICBkYXRhID0ge1xyXG4gICAgZXhhbToge30sXHJcbiAgICBxdWVzdGlvbnM6IFtdLFxyXG4gICAgaW5wdXRWYWx1ZTogJydcclxuICB9O1xyXG5cclxuICBjb21wb25lbnRzID0ge307XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBiaW5kS2V5SW5wdXQoZSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICB0YXAoKSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoUXVlc3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgICAgdGhpcy5xdWVzdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBldmVudHMgPSB7fTtcclxuXHJcbiAgd2F0Y2ggPSB7fTtcclxuXHJcbiAgY29tcHV0ZWQgPSB7fTtcclxuXHJcbiAgc2VhcmNoUXVlc3Rpb24oKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgfSk7XHJcbiAgICB3eC5jbG91ZFxyXG4gICAgICAuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICBuYW1lOiAnc2VhcmNoUXVlc3Rpb24nLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGV4YW1faWQ6IHNlbGYuZXhhbVsnZXhhbV9pZCddLFxyXG4gICAgICAgICAga2V5OiBzZWxmLmlucHV0VmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgbGV0IHRpdGxlTXNnID0gJ+afpeivouaIkOWKnyc7XHJcbiAgICAgICAgaWYgKHJlcy5yZXN1bHQuZGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgdGl0bGVNc2cgPSByZXMucmVzdWx0LmVyck1zZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiB0aXRsZU1zZywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgICAgICBpY29uOiAnbm9uZScsIC8v5Zu+5qCHLFxyXG4gICAgICAgICAgZHVyYXRpb246IDUwMCwgLy/lu7bov5/ml7bpl7QsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlLCAvL+aYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAjyxcclxuICAgICAgICAgIHN1Y2Nlc3M6IHIgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnF1ZXN0aW9ucyA9IHJlcy5yZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgLy8gc2VsZi50b3RhbCA9IHJlcy5yZXN1bHQudG90YWw7XHJcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBvbkxvYWQoKSB7fVxyXG5cclxuICBvblNob3coKSB7fVxyXG59XHJcbiJdfQ==