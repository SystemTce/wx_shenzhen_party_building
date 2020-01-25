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

var ExamChild = function (_wepy$component) {
  _inherits(ExamChild, _wepy$component);

  function ExamChild() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ExamChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExamChild.__proto__ || Object.getPrototypeOf(ExamChild)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      examlist: []
    }, _this.components = {}, _this.methods = {
      tap: function tap(item) {
        // this.$emit('childFn',this.item);
        var obj = JSON.stringify(item);
        _wepy2.default.navigateTo({ url: '/pages/exam_books?item=' + obj });

        // this.$parent.$navigate({
        //   url: '/pages/exam_books',
        //   params: [{ 'item': obj }]
        // });
      }
      // tap(item, evt) {
      //   var obj = JSON.stringify(item);
      //   this.$navigate({ url: '/pages/exam_books', params: { item: obj } });
      // }
      // toJson(item) {
      //   var obj = Json.stringify(item);
      //   return obj;
      // }

    }, _this.events = {}, _this.watch = {
      // examlist(newValue) {
      //   ('----new ' + newValue);
      // }
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ExamChild, [{
    key: 'onLoad',
    value: function onLoad() {
      // var obj = JSON.stringify(this.item);
      // this.item = obj;
      // this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return ExamChild;
}(_wepy2.default.component);

exports.default = ExamChild;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1jaGlsZC5qcyJdLCJuYW1lcyI6WyJFeGFtQ2hpbGQiLCJwcm9wcyIsImRhdGEiLCJleGFtbGlzdCIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwidGFwIiwiaXRlbSIsIm9iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVEsRSxRQUVSQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLLFFBSVBDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVTtBQUNSQyxTQURRLGVBQ0pDLElBREksRUFDRTtBQUNSO0FBQ0EsWUFBSUMsTUFBTUMsS0FBS0MsU0FBTCxDQUFlSCxJQUFmLENBQVY7QUFDQUksdUJBQUtDLFVBQUwsQ0FBZ0IsRUFBRUMsS0FBSyw0QkFBNEJMLEdBQW5DLEVBQWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWxCUSxLLFFBcUJWTSxNLEdBQVMsRSxRQUVUQyxLLEdBQVE7QUFDTjtBQUNBO0FBQ0E7QUFITSxLLFFBTVJDLFEsR0FBVyxFOzs7Ozs2QkFFRjtBQUNQO0FBQ0E7QUFDQTtBQUNEOzs7NkJBRVEsQ0FBRTs7OztFQTlDMEJMLGVBQUtNLFM7O2tCQUF2QmpCLFMiLCJmaWxlIjoiZXhhbWNoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbUNoaWxkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge307XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBleGFtbGlzdDogW11cclxuICB9O1xyXG5cclxuICBjb21wb25lbnRzID0ge307XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YXAoaXRlbSkge1xyXG4gICAgICAvLyB0aGlzLiRlbWl0KCdjaGlsZEZuJyx0aGlzLml0ZW0pO1xyXG4gICAgICB2YXIgb2JqID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJy9wYWdlcy9leGFtX2Jvb2tzP2l0ZW09JyArIG9iaiB9KTtcclxuXHJcbiAgICAgIC8vIHRoaXMuJHBhcmVudC4kbmF2aWdhdGUoe1xyXG4gICAgICAvLyAgIHVybDogJy9wYWdlcy9leGFtX2Jvb2tzJyxcclxuICAgICAgLy8gICBwYXJhbXM6IFt7ICdpdGVtJzogb2JqIH1dXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gdGFwKGl0ZW0sIGV2dCkge1xyXG4gICAgLy8gICB2YXIgb2JqID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XHJcbiAgICAvLyAgIHRoaXMuJG5hdmlnYXRlKHsgdXJsOiAnL3BhZ2VzL2V4YW1fYm9va3MnLCBwYXJhbXM6IHsgaXRlbTogb2JqIH0gfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyB0b0pzb24oaXRlbSkge1xyXG4gICAgLy8gICB2YXIgb2JqID0gSnNvbi5zdHJpbmdpZnkoaXRlbSk7XHJcbiAgICAvLyAgIHJldHVybiBvYmo7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxuXHJcbiAgZXZlbnRzID0ge307XHJcblxyXG4gIHdhdGNoID0ge1xyXG4gICAgLy8gZXhhbWxpc3QobmV3VmFsdWUpIHtcclxuICAgIC8vICAgKCctLS0tbmV3ICcgKyBuZXdWYWx1ZSk7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxuXHJcbiAgY29tcHV0ZWQgPSB7fTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gdmFyIG9iaiA9IEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbSk7XHJcbiAgICAvLyB0aGlzLml0ZW0gPSBvYmo7XHJcbiAgICAvLyB0aGlzLiRhcHBseSgpO1xyXG4gIH1cclxuXHJcbiAgb25TaG93KCkge31cclxufVxyXG4iXX0=