webpackJsonp([7],{

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(501)

var Component = __webpack_require__(84)(
  /* script */
  __webpack_require__(388),
  /* template */
  __webpack_require__(525),
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

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(88);

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _headTop = __webpack_require__(219);

var _headTop2 = _interopRequireDefault(_headTop);

var _env = __webpack_require__(86);

var _getData = __webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            baseUrl: _env.baseUrl,
            baseImgPath: _env.baseImgPath,
            city: {},
            offset: 0,
            limit: 20,
            count: 0,
            tableData: [],
            currentPage: 1,
            selectTable: {},
            dialogFormVisible: false,
            categoryOptions: [],
            selectedCategory: [],
            address: {}
        };
    },
    created: function created() {
        this.initData();
    },

    components: {
        headTop: _headTop2.default
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
                                return (0, _getData.cityGuess)();

                            case 3:
                                this.city = _context.sent;
                                _context.next = 6;
                                return (0, _getData.getResturantsCount)();

                            case 6:
                                countData = _context.sent;

                                if (!(countData.status == 1)) {
                                    _context.next = 11;
                                    break;
                                }

                                this.count = countData.count;
                                _context.next = 12;
                                break;

                            case 11:
                                throw new Error('获取数据失败');

                            case 12:
                                this.getResturants();
                                _context.next = 18;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context['catch'](0);

                                console.log('获取数据失败', _context.t0);

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 15]]);
            }));

            function initData() {
                return _ref.apply(this, arguments);
            }

            return initData;
        }(),
        getCategory: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
                var _this = this;

                var categories;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return (0, _getData.foodCategory)();

                            case 3:
                                categories = _context2.sent;

                                categories.forEach(function (item) {
                                    if (item.sub_categories.length) {
                                        var addnew = {
                                            value: item.name,
                                            label: item.name,
                                            children: []
                                        };
                                        item.sub_categories.forEach(function (subitem, index) {
                                            if (index == 0) {
                                                return;
                                            }
                                            addnew.children.push({
                                                value: subitem.name,
                                                label: subitem.name
                                            });
                                        });
                                        _this.categoryOptions.push(addnew);
                                    }
                                });
                                _context2.next = 10;
                                break;

                            case 7:
                                _context2.prev = 7;
                                _context2.t0 = _context2['catch'](0);

                                console.log('获取商铺种类失败', _context2.t0);

                            case 10:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 7]]);
            }));

            function getCategory() {
                return _ref2.apply(this, arguments);
            }

            return getCategory;
        }(),
        getResturants: function () {
            var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                var _this2 = this;

                var _city, latitude, longitude, restaurants;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _city = this.city, latitude = _city.latitude, longitude = _city.longitude;
                                _context3.next = 3;
                                return (0, _getData.getResturants)({ latitude: latitude, longitude: longitude, offset: this.offset, limit: this.limit });

                            case 3:
                                restaurants = _context3.sent;

                                this.tableData = [];
                                restaurants.forEach(function (item) {
                                    var tableData = {};
                                    tableData.name = item.name;
                                    tableData.address = item.address;
                                    tableData.description = item.description;
                                    tableData.id = item.id;
                                    tableData.phone = item.phone;
                                    tableData.rating = item.rating;
                                    tableData.recent_order_num = item.recent_order_num;
                                    tableData.category = item.category;
                                    tableData.image_path = item.image_path;
                                    _this2.tableData.push(tableData);
                                });

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getResturants() {
                return _ref3.apply(this, arguments);
            }

            return getResturants;
        }(),
        handleSizeChange: function handleSizeChange(val) {
            console.log('\u6BCF\u9875 ' + val + ' \u6761');
        },
        handleCurrentChange: function handleCurrentChange(val) {
            this.currentPage = val;
            this.offset = (val - 1) * this.limit;
            this.getResturants();
        },
        handleEdit: function handleEdit(index, row) {
            this.selectTable = row;
            this.address.address = row.address;
            this.dialogFormVisible = true;
            this.selectedCategory = row.category.split('/');
            if (!this.categoryOptions.length) {
                this.getCategory();
            }
        },
        addFood: function addFood(index, row) {
            this.$router.push({ path: 'addGoods', query: { restaurant_id: row.id } });
        },
        handleDelete: function () {
            var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(index, row) {
                var res;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return (0, _getData.deleteResturant)(row.id);

                            case 3:
                                res = _context4.sent;

                                if (!(res.status == 1)) {
                                    _context4.next = 9;
                                    break;
                                }

                                this.$message({
                                    type: 'success',
                                    message: '删除店铺成功'
                                });
                                this.tableData.splice(index, 1);
                                _context4.next = 10;
                                break;

                            case 9:
                                throw new Error(res.message);

                            case 10:
                                _context4.next = 16;
                                break;

                            case 12:
                                _context4.prev = 12;
                                _context4.t0 = _context4['catch'](0);

                                this.$message({
                                    type: 'error',
                                    message: _context4.t0.message
                                });
                                console.log('删除店铺失败');

                            case 16:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 12]]);
            }));

            function handleDelete(_x, _x2) {
                return _ref4.apply(this, arguments);
            }

            return handleDelete;
        }(),
        querySearchAsync: function () {
            var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(queryString, cb) {
                var cityList;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                if (!queryString) {
                                    _context5.next = 11;
                                    break;
                                }

                                _context5.prev = 1;
                                _context5.next = 4;
                                return (0, _getData.searchplace)(this.city.id, queryString);

                            case 4:
                                cityList = _context5.sent;

                                if (cityList instanceof Array) {
                                    cityList.map(function (item) {
                                        item.value = item.address;
                                        return item;
                                    });
                                    cb(cityList);
                                }
                                _context5.next = 11;
                                break;

                            case 8:
                                _context5.prev = 8;
                                _context5.t0 = _context5['catch'](1);

                                console.log(_context5.t0);

                            case 11:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[1, 8]]);
            }));

            function querySearchAsync(_x3, _x4) {
                return _ref5.apply(this, arguments);
            }

            return querySearchAsync;
        }(),
        addressSelect: function addressSelect(vale) {
            var address = vale.address,
                latitude = vale.latitude,
                longitude = vale.longitude;

            this.address = { address: address, latitude: latitude, longitude: longitude };
        },
        handleServiceAvatarScucess: function handleServiceAvatarScucess(res, file) {
            if (res.status == 1) {
                this.selectTable.image_path = res.image_path;
            } else {
                this.$message.error('上传图片失败！');
            }
        },
        beforeAvatarUpload: function beforeAvatarUpload(file) {
            var isRightType = file.type === 'image/jpeg' || file.type === 'image/png';
            var isLt2M = file.size / 1024 / 1024 < 2;

            if (!isRightType) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isRightType && isLt2M;
        },
        updateShop: function () {
            var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
                var res;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                this.dialogFormVisible = false;
                                _context6.prev = 1;

                                (0, _assign2.default)(this.selectTable, this.address);
                                this.selectTable.category = this.selectedCategory.join('/');
                                _context6.next = 6;
                                return (0, _getData.updateResturant)(this.selectTable);

                            case 6:
                                res = _context6.sent;

                                if (res.status == 1) {
                                    this.$message({
                                        type: 'success',
                                        message: '更新店铺信息成功'
                                    });
                                    this.getResturants();
                                } else {
                                    this.$message({
                                        type: 'error',
                                        message: res.message
                                    });
                                }
                                _context6.next = 13;
                                break;

                            case 10:
                                _context6.prev = 10;
                                _context6.t0 = _context6['catch'](1);

                                console.log('更新餐馆信息失败', _context6.t0);

                            case 13:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this, [[1, 10]]);
            }));

            function updateShop() {
                return _ref6.apply(this, arguments);
            }

            return updateShop;
        }()
    }
};

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(187)(false);
// imports


// module
exports.push([module.i, ".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.demo-table-expand{font-size:0}.demo-table-expand label{width:90px;color:#99a9bf}.demo-table-expand .el-form-item{margin-right:0;margin-bottom:0;width:50%}.table_container{padding:20px}.Pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:8px}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#20a0ff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:120px;height:120px;line-height:120px;text-align:center}.avatar{width:120px;height:120px;display:block}", ""]);

// exports


/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(188)("f7da7120", content, true);

/***/ }),

/***/ 525:
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
      "data": _vm.tableData
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "expand"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('el-form', {
          staticClass: "demo-table-expand",
          attrs: {
            "label-position": "left",
            "inline": ""
          }
        }, [_c('el-form-item', {
          attrs: {
            "label": "店铺名称"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.name))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "店铺地址"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.address))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "店铺介绍"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.description))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "店铺 ID"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.id))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "联系电话"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.phone))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "评分"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.rating))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "销售量"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.recent_order_num))])]), _vm._v(" "), _c('el-form-item', {
          attrs: {
            "label": "分类"
          }
        }, [_c('span', [_vm._v(_vm._s(props.row.category))])])], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "店铺名称",
      "prop": "name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "店铺地址",
      "prop": "address"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "店铺介绍",
      "prop": "description"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "mini"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "mini",
            "type": "Success"
          },
          on: {
            "click": function($event) {
              _vm.addFood(scope.$index, scope.row)
            }
          }
        }, [_vm._v("添加食品")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "mini",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "Pagination"
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
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "修改店铺信息"
    },
    model: {
      value: (_vm.dialogFormVisible),
      callback: function($$v) {
        _vm.dialogFormVisible = $$v
      },
      expression: "dialogFormVisible"
    }
  }, [_c('el-form', {
    attrs: {
      "model": _vm.selectTable
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "店铺名称",
      "label-width": "100px"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.selectTable.name),
      callback: function($$v) {
        _vm.$set(_vm.selectTable, "name", $$v)
      },
      expression: "selectTable.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "详细地址",
      "label-width": "100px"
    }
  }, [_c('el-autocomplete', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "fetch-suggestions": _vm.querySearchAsync,
      "placeholder": "请输入地址"
    },
    on: {
      "select": _vm.addressSelect
    },
    model: {
      value: (_vm.address.address),
      callback: function($$v) {
        _vm.$set(_vm.address, "address", $$v)
      },
      expression: "address.address"
    }
  }), _vm._v(" "), _c('span', [_vm._v("当前城市：" + _vm._s(_vm.city.name))])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "店铺介绍",
      "label-width": "100px"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.selectTable.description),
      callback: function($$v) {
        _vm.$set(_vm.selectTable, "description", $$v)
      },
      expression: "selectTable.description"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系电话",
      "label-width": "100px"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.selectTable.phone),
      callback: function($$v) {
        _vm.$set(_vm.selectTable, "phone", $$v)
      },
      expression: "selectTable.phone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "店铺分类",
      "label-width": "100px"
    }
  }, [_c('el-cascader', {
    attrs: {
      "options": _vm.categoryOptions,
      "change-on-select": ""
    },
    model: {
      value: (_vm.selectedCategory),
      callback: function($$v) {
        _vm.selectedCategory = $$v
      },
      expression: "selectedCategory"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "商铺图片",
      "label-width": "100px"
    }
  }, [_c('el-upload', {
    staticClass: "avatar-uploader",
    attrs: {
      "action": _vm.baseUrl + '/v1/addimg/shop',
      "show-file-list": false,
      "on-success": _vm.handleServiceAvatarScucess,
      "before-upload": _vm.beforeAvatarUpload
    }
  }, [(_vm.selectTable.image_path) ? _c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.baseImgPath + _vm.selectTable.image_path
    }
  }) : _c('i', {
    staticClass: "el-icon-plus avatar-uploader-icon"
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.updateShop
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

});