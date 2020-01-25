'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _bookchild = require('./../components/bookchild.js');

var _bookchild2 = _interopRequireDefault(_bookchild);

var _practice = require('./../components/practice.js');

var _practice2 = _interopRequireDefault(_practice);

var _search = require('./../components/search.js');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExamBooks = function (_wepy$page) {
  _inherits(ExamBooks, _wepy$page);

  function ExamBooks() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ExamBooks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExamBooks.__proto__ || Object.getPrototypeOf(ExamBooks)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '考点'
    }, _this.data = {
      color1: '#ffa500',
      color2: '#d8d8d8',
      color3: '#d8d8d8',
      width1: '3rpx',
      width2: '1rpx',
      width3: '1rpx',
      pageCount: 0,
      bookList: [],
      exam: {},
      total: 0
    }, _this.$repeat = {}, _this.$props = { "child": { "xmlns:v-bind": "", "v-bind:bookList.sync": "bookList" }, "search": { "v-bind:exam.sync": "exam" } }, _this.$events = {}, _this.components = {
      child: _bookchild2.default,
      practice: _practice2.default,
      search: _search2.default
    }, _this.methods = {
      titletap: function titletap(index) {
        this.pageCount = index;
        this.$apply();
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ExamBooks, [{
    key: 'queryExamBooks',
    value: function queryExamBooks() {
      var self = this;
      _wepy2.default.showLoading({
        title: 'Loading...', //提示的内容,
        mask: true //显示透明蒙层，防止触摸穿透,
      });
      wx.cloud.callFunction({
        name: 'queryExamBooks',
        data: {
          exam_id: self.exam['exam_id']
        }
      }).then(function (res) {
        _wepy2.default.showToast({
          title: '查询成功', //提示的内容,
          icon: 'none', //图标,
          duration: 500, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: function success(r) {
            self.bookList = res.result.data;
            self.total = res.result.total;
            self.$apply();
            res.result;
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      // 调试传入的 options 传递进来的是string 类型，
      // var obj = JSON.stringify(options);
      var obj = JSON.parse(options.item);
      this.exam = obj;
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      if (this.bookList.length == 0) {
        this.queryExamBooks();
      }
    }
  }]);

  return ExamBooks;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ExamBooks , 'pages/exam_books'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1fYm9va3MuanMiXSwibmFtZXMiOlsiRXhhbUJvb2tzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJ3aWR0aDEiLCJ3aWR0aDIiLCJ3aWR0aDMiLCJwYWdlQ291bnQiLCJib29rTGlzdCIsImV4YW0iLCJ0b3RhbCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNoaWxkIiwiQm9va0NoaWxkIiwicHJhY3RpY2UiLCJQcmFjdGljZSIsInNlYXJjaCIsIlNlYXJjaCIsIm1ldGhvZHMiLCJ0aXRsZXRhcCIsImluZGV4IiwiJGFwcGx5IiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsInNlbGYiLCJ3ZXB5Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJ3eCIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsImV4YW1faWQiLCJ0aGVuIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic3VjY2VzcyIsInJlcyIsInJlc3VsdCIsIm9wdGlvbnMiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJpdGVtIiwibGVuZ3RoIiwicXVlcnlFeGFtQm9va3MiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxjQUFRLFNBREg7QUFFTEMsY0FBUSxTQUZIO0FBR0xDLGNBQVEsU0FISDtBQUlMQyxjQUFRLE1BSkg7QUFLTEMsY0FBUSxNQUxIO0FBTUxDLGNBQVEsTUFOSDtBQU9MQyxpQkFBVyxDQVBOO0FBUUxDLGdCQUFVLEVBUkw7QUFTTEMsWUFBTSxFQVREO0FBVUxDLGFBQU87QUFWRixLLFFBYVJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsVUFBMUMsRUFBVCxFQUErRCxVQUFTLEVBQUMsb0JBQW1CLE1BQXBCLEVBQXhFLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLGFBQU9DLG1CQURHO0FBRVZDLGdCQUFVQyxrQkFGQTtBQUdWQyxjQUFRQztBQUhFLEssUUFNWkMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0NDLEtBREQsRUFDUTtBQUNkLGFBQUtoQixTQUFMLEdBQWlCZ0IsS0FBakI7QUFDQSxhQUFLQyxNQUFMO0FBQ0Q7QUFKTyxLLFFBT1ZDLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7OztxQ0FFTTtBQUNmLFVBQUlDLE9BQU8sSUFBWDtBQUNBQyxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxlQUFPLFlBRFEsRUFDTTtBQUNyQkMsY0FBTSxJQUZTLENBRUo7QUFGSSxPQUFqQjtBQUlBQyxTQUFHQyxLQUFILENBQ0dDLFlBREgsQ0FDZ0I7QUFDWkMsY0FBTSxnQkFETTtBQUVacEMsY0FBTTtBQUNKcUMsbUJBQVNULEtBQUtuQixJQUFMLENBQVUsU0FBVjtBQURMO0FBRk0sT0FEaEIsRUFPRzZCLElBUEgsQ0FPUSxlQUFPO0FBQ1hULHVCQUFLVSxTQUFMLENBQWU7QUFDYlIsaUJBQU8sTUFETSxFQUNFO0FBQ2ZTLGdCQUFNLE1BRk8sRUFFQztBQUNkQyxvQkFBVSxHQUhHLEVBR0U7QUFDZlQsZ0JBQU0sSUFKTyxFQUlEO0FBQ1pVLG1CQUFTLG9CQUFLO0FBQ1pkLGlCQUFLcEIsUUFBTCxHQUFnQm1DLElBQUlDLE1BQUosQ0FBVzVDLElBQTNCO0FBQ0E0QixpQkFBS2xCLEtBQUwsR0FBYWlDLElBQUlDLE1BQUosQ0FBV2xDLEtBQXhCO0FBQ0FrQixpQkFBS0osTUFBTDtBQUNDbUIsZ0JBQUlDLE1BQUw7QUFDRDtBQVZZLFNBQWY7QUFZRCxPQXBCSDtBQXFCRDs7OzJCQUVNQyxPLEVBQVM7QUFDZDtBQUNBO0FBQ0EsVUFBSUMsTUFBTUMsS0FBS0MsS0FBTCxDQUFXSCxRQUFRSSxJQUFuQixDQUFWO0FBQ0EsV0FBS3hDLElBQUwsR0FBWXFDLEdBQVo7QUFDQSxXQUFLdEIsTUFBTDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJLEtBQUtoQixRQUFMLENBQWMwQyxNQUFkLElBQXdCLENBQTVCLEVBQStCO0FBQzdCLGFBQUtDLGNBQUw7QUFDRDtBQUNGOzs7O0VBakZvQ3RCLGVBQUt1QixJOztrQkFBdkJ2RCxTIiwiZmlsZSI6ImV4YW1fYm9va3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBCb29rQ2hpbGQgZnJvbSAnLi4vY29tcG9uZW50cy9ib29rY2hpbGQnO1xyXG5pbXBvcnQgUHJhY3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9wcmFjdGljZSc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2gnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtQm9va3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogIPngrknXHJcbiAgfTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGNvbG9yMTogJyNmZmE1MDAnLFxyXG4gICAgY29sb3IyOiAnI2Q4ZDhkOCcsXHJcbiAgICBjb2xvcjM6ICcjZDhkOGQ4JyxcclxuICAgIHdpZHRoMTogJzNycHgnLFxyXG4gICAgd2lkdGgyOiAnMXJweCcsXHJcbiAgICB3aWR0aDM6ICcxcnB4JyxcclxuICAgIHBhZ2VDb3VudDogMCxcclxuICAgIGJvb2tMaXN0OiBbXSxcclxuICAgIGV4YW06IHt9LFxyXG4gICAgdG90YWw6IDBcclxuICB9O1xyXG5cclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY2hpbGRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmJvb2tMaXN0LnN5bmNcIjpcImJvb2tMaXN0XCJ9LFwic2VhcmNoXCI6e1widi1iaW5kOmV4YW0uc3luY1wiOlwiZXhhbVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBjaGlsZDogQm9va0NoaWxkLFxyXG4gICAgcHJhY3RpY2U6IFByYWN0aWNlLFxyXG4gICAgc2VhcmNoOiBTZWFyY2hcclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgdGl0bGV0YXAoaW5kZXgpIHtcclxuICAgICAgdGhpcy5wYWdlQ291bnQgPSBpbmRleDtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBldmVudHMgPSB7fTtcclxuXHJcbiAgd2F0Y2ggPSB7fTtcclxuXHJcbiAgY29tcHV0ZWQgPSB7fTtcclxuXHJcbiAgcXVlcnlFeGFtQm9va3MoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICdMb2FkaW5nLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXHJcbiAgICAgIG1hc2s6IHRydWUgLy/mmL7npLrpgI/mmI7okpnlsYLvvIzpmLLmraLop6bmkbjnqb/pgI8sXHJcbiAgICB9KTtcclxuICAgIHd4LmNsb3VkXHJcbiAgICAgIC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgIG5hbWU6ICdxdWVyeUV4YW1Cb29rcycsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgZXhhbV9pZDogc2VsZi5leGFtWydleGFtX2lkJ11cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmn6Xor6LmiJDlip8nLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXHJcbiAgICAgICAgICBkdXJhdGlvbjogNTAwLCAvL+W7tui/n+aXtumXtCxcclxuICAgICAgICAgIG1hc2s6IHRydWUsIC8v5pi+56S66YCP5piO6JKZ5bGC77yM6Ziy5q2i6Kem5pG456m/6YCPLFxyXG4gICAgICAgICAgc3VjY2VzczogciA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuYm9va0xpc3QgPSByZXMucmVzdWx0LmRhdGE7XHJcbiAgICAgICAgICAgIHNlbGYudG90YWwgPSByZXMucmVzdWx0LnRvdGFsO1xyXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAocmVzLnJlc3VsdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIC8vIOiwg+ivleS8oOWFpeeahCBvcHRpb25zIOS8oOmAkui/m+adpeeahOaYr3N0cmluZyDnsbvlnovvvIxcclxuICAgIC8vIHZhciBvYmogPSBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcclxuICAgIHZhciBvYmogPSBKU09OLnBhcnNlKG9wdGlvbnMuaXRlbSk7XHJcbiAgICB0aGlzLmV4YW0gPSBvYmo7XHJcbiAgICB0aGlzLiRhcHBseSgpO1xyXG4gIH1cclxuXHJcbiAgb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuYm9va0xpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5xdWVyeUV4YW1Cb29rcygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=