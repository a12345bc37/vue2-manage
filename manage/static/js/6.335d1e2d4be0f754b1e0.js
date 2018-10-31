webpackJsonp([6],{

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(507)

var Component = __webpack_require__(84)(
  /* script */
  __webpack_require__(390),
  /* template */
  __webpack_require__(530),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(51);

var _extends3 = _interopRequireDefault(_extends2);

var _getData = __webpack_require__(85);

var _env = __webpack_require__(86);

var _vuex = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			baseImgPath: _env.baseImgPath
		};
	},
	created: function created() {
		if (!this.adminInfo.id) {
			this.getAdminData();
		}
	},

	computed: (0, _extends3.default)({}, (0, _vuex.mapState)(['adminInfo'])),
	methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['getAdminData']), {
		handleCommand: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(command) {
				var res;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!(command == 'home')) {
									_context.next = 4;
									break;
								}

								this.$router.push('/manage');
								_context.next = 9;
								break;

							case 4:
								if (!(command == 'singout')) {
									_context.next = 9;
									break;
								}

								_context.next = 7;
								return (0, _getData.signout)();

							case 7:
								res = _context.sent;

								if (res.status == 1) {
									this.$message({
										type: 'success',
										message: '退出成功'
									});
									this.$router.push('/');
								} else {
									this.$message({
										type: 'error',
										message: res.message
									});
								}

							case 9:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function handleCommand(_x) {
				return _ref.apply(this, arguments);
			}

			return handleCommand;
		}()
	})
};

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(187)(false);
// imports


// module
exports.push([module.i, ".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}", ""]);

// exports


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(188)("019239ba", content, true);

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(218)

var Component = __webpack_require__(84)(
  /* script */
  __webpack_require__(216),
  /* template */
  __webpack_require__(220),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header_container"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": {
        path: '/manage'
      }
    }
  }, [_vm._v("首页")]), _vm._v(" "), _vm._l((_vm.$route.meta), function(item, index) {
    return _c('el-breadcrumb-item', {
      key: index
    }, [_vm._v(_vm._s(item))])
  })], 2), _vm._v(" "), _c('el-dropdown', {
    attrs: {
      "menu-align": "start"
    },
    on: {
      "command": _vm.handleCommand
    }
  }, [_c('img', {
    staticClass: "avator",
    attrs: {
      "src": _vm.baseImgPath + _vm.adminInfo.avatar
    }
  }), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    attrs: {
      "command": "home"
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('el-dropdown-item', {
    attrs: {
      "command": "singout"
    }
  }, [_vm._v("退出")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _headTop = __webpack_require__(219);

var _headTop2 = _interopRequireDefault(_headTop);

var _getData = __webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            tableData: [{
                registe_time: '2016-05-02',
                username: '王小虎',
                city: '上海市普陀区金沙江路 1518 弄'
            }, {
                registe_time: '2016-05-04',
                username: '王小虎',
                city: '上海市普陀区金沙江路 1517 弄'
            }, {
                registe_time: '2016-05-01',
                username: '王小虎',
                city: '上海市普陀区金沙江路 1519 弄'
            }, {
                registe_time: '2016-05-03',
                username: '王小虎',
                city: '上海市普陀区金沙江路 1516 弄'
            }],
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 0,
            currentPage: 1
        };
    },

    components: {
        headTop: _headTop2.default
    },
    created: function created() {
        this.initData();
    },

    methods: {
        initData: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var countData;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return (0, _getData.getUserCount)();

                            case 3:
                                countData = _context.sent;

                                if (!(countData.status == 1)) {
                                    _context.next = 8;
                                    break;
                                }

                                this.count = countData.count;
                                _context.next = 9;
                                break;

                            case 8:
                                throw new Error('获取数据失败');

                            case 9:
                                this.getUsers();
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](0);

                                console.log('获取数据失败', _context.t0);

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 12]]);
            }));

            function initData() {
                return _ref.apply(this, arguments);
            }

            return initData;
        }(),
        handleSizeChange: function handleSizeChange(val) {
            console.log('\u6BCF\u9875 ' + val + ' \u6761');
        },
        handleCurrentChange: function handleCurrentChange(val) {
            this.currentPage = val;
            this.offset = (val - 1) * this.limit;
            this.getUsers();
        },
        getUsers: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                var _this = this;

                var Users;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _getData.getUserList)({ offset: this.offset, limit: this.limit });

                            case 2:
                                Users = _context2.sent;

                                this.tableData = [];
                                Users.forEach(function (item) {
                                    var tableData = {};
                                    tableData.username = item.username;
                                    tableData.registe_time = item.registe_time;
                                    tableData.city = item.city;
                                    _this.tableData.push(tableData);
                                });

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getUsers() {
                return _ref2.apply(this, arguments);
            }

            return getUsers;
        }()
    }
};

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(187)(false);
// imports


// module
exports.push([module.i, ".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.table_container{padding:20px}", ""]);

// exports


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(417);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(188)("1d07821e", content, true);

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fillcontain"
  }, [_c('head-top'), _vm._v(" "), _c('div', {
    staticClass: "table_container"
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "property": "registe_time",
      "label": "注册日期",
      "width": "220"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "property": "username",
      "label": "用户姓名",
      "width": "220"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "property": "city",
      "label": "注册地址"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "Pagination",
    staticStyle: {
      "text-align": "left",
      "margin-top": "10px"
    }
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-size": 20,
      "layout": "total, prev, pager, next",
      "total": _vm.count
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

});