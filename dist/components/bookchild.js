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

var BookChild = function (_wepy$component) {
  _inherits(BookChild, _wepy$component);

  function BookChild() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BookChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BookChild.__proto__ || Object.getPrototypeOf(BookChild)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      bookList: []
    }, _this.components = {}, _this.methods = {
      tap: function tap(item) {
        // this.$emit('childFn',this.item);
        var obj = JSON.stringify(item);
        _wepy2.default.navigateTo({ url: '/pages/question?item=' + obj });

        // this.$parent.$navigate({
        //   url: '/pages/exam_books',
        //   params: [{ 'item': obj }]
        // });
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BookChild, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return BookChild;
}(_wepy2.default.component);

exports.default = BookChild;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tjaGlsZC5qcyJdLCJuYW1lcyI6WyJCb29rQ2hpbGQiLCJwcm9wcyIsImRhdGEiLCJib29rTGlzdCIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwidGFwIiwiaXRlbSIsIm9iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVEsRSxRQUVSQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLLFFBSVBDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVTtBQUNOQyxTQURNLGVBQ0ZDLElBREUsRUFDSTtBQUNWO0FBQ0EsWUFBSUMsTUFBTUMsS0FBS0MsU0FBTCxDQUFlSCxJQUFmLENBQVY7QUFDQUksdUJBQUtDLFVBQUwsQ0FBZ0IsRUFBRUMsS0FBSywwQkFBMEJMLEdBQWpDLEVBQWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFWTyxLLFFBYVZNLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7Ozs2QkFFRixDQUFFOzs7NkJBRUYsQ0FBRTs7OztFQTlCMEJMLGVBQUtNLFM7O2tCQUF2QmpCLFMiLCJmaWxlIjoiYm9va2NoaWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rQ2hpbGQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7fTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGJvb2tMaXN0OiBbXVxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgICAgdGFwKGl0ZW0pIHtcclxuICAgICAgLy8gdGhpcy4kZW1pdCgnY2hpbGRGbicsdGhpcy5pdGVtKTtcclxuICAgICAgdmFyIG9iaiA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oeyB1cmw6ICcvcGFnZXMvcXVlc3Rpb24/aXRlbT0nICsgb2JqIH0pO1xyXG5cclxuICAgICAgLy8gdGhpcy4kcGFyZW50LiRuYXZpZ2F0ZSh7XHJcbiAgICAgIC8vICAgdXJsOiAnL3BhZ2VzL2V4YW1fYm9va3MnLFxyXG4gICAgICAvLyAgIHBhcmFtczogW3sgJ2l0ZW0nOiBvYmogfV1cclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZXZlbnRzID0ge307XHJcblxyXG4gIHdhdGNoID0ge307XHJcblxyXG4gIGNvbXB1dGVkID0ge307XHJcblxyXG4gIG9uTG9hZCgpIHt9XHJcblxyXG4gIG9uU2hvdygpIHt9XHJcbn1cclxuIl19