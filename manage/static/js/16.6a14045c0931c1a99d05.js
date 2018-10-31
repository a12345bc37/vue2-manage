webpackJsonp([16],{

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(499)

var Component = __webpack_require__(84)(
  /* script */
  __webpack_require__(383),
  /* template */
  __webpack_require__(523),
  /* scopeId */
  "data-v-63a4466a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 383:
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

var _vuex = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			loginForm: {
				username: '',
				password: ''
			},
			rules: {
				username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
			},
			showLogin: false
		};
	},
	mounted: function mounted() {
		this.showLogin = true;
		if (!this.adminInfo.id) {
			this.getAdminData();
		}
	},

	computed: (0, _extends3.default)({}, (0, _vuex.mapState)(['adminInfo'])),
	methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['getAdminData']), {
		submitForm: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(formName) {
				var _this = this;

				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								this.$refs[formName].validate(function () {
									var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(valid) {
										var res;
										return _regenerator2.default.wrap(function _callee$(_context) {
											while (1) {
												switch (_context.prev = _context.next) {
													case 0:
														if (!valid) {
															_context.next = 7;
															break;
														}

														_context.next = 3;
														return (0, _getData.login)({ username: _this.loginForm.username, password: _this.loginForm.password });

													case 3:
														res = _context.sent;

														if (res.errno == 0) {
															_this.$message({
																type: 'success',
																message: '登录成功'
															});
															_this.$router.push('manage');
														} else {
															_this.$message({
																type: 'error',
																message: res.message
															});
														}
														_context.next = 9;
														break;

													case 7:
														_this.$notify.error({
															title: '错误',
															message: '请输入正确的用户名密码',
															offset: 100
														});
														return _context.abrupt('return', false);

													case 9:
													case 'end':
														return _context.stop();
												}
											}
										}, _callee, _this);
									}));

									return function (_x2) {
										return _ref2.apply(this, arguments);
									};
								}());

							case 1:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function submitForm(_x) {
				return _ref.apply(this, arguments);
			}

			return submitForm;
		}()
	}),
	watch: {
		adminInfo: function adminInfo(newValue) {
			if (newValue.id) {
				this.$message({
					type: 'success',
					message: '检测到您之前登录过，将自动登录'
				});
				this.$router.push('manage');
			}
		}
	}
};

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(187)(false);
// imports


// module
exports.push([module.i, ".allcover[data-v-63a4466a]{position:absolute;top:0;right:0}.ctt[data-v-63a4466a]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.tb[data-v-63a4466a]{position:absolute;top:50%;transform:translateY(-50%)}.lr[data-v-63a4466a]{position:absolute;left:50%;transform:translateX(-50%)}.login_page[data-v-63a4466a]{background-color:#324057}.manage_tip[data-v-63a4466a]{position:absolute;width:100%;top:-100px;left:0}.manage_tip p[data-v-63a4466a]{font-size:34px;color:#fff}.form_contianer[data-v-63a4466a]{width:320px;height:210px;position:absolute;top:50%;left:50%;margin-top:-105px;margin-left:-160px;padding:25px;border-radius:5px;text-align:center;background-color:#fff}.form_contianer .submit_btn[data-v-63a4466a]{width:100%;font-size:16px}.tip[data-v-63a4466a]{font-size:12px;color:red}.form-fade-enter-active[data-v-63a4466a],.form-fade-leave-active[data-v-63a4466a]{transition:all 1s}.form-fade-enter[data-v-63a4466a],.form-fade-leave-active[data-v-63a4466a]{transform:translate3d(0,-50px,0);opacity:0}", ""]);

// exports


/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(409);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(188)("ceb1f9c8", content, true);

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login_page fillcontain"
  }, [_c('transition', {
    attrs: {
      "name": "form-fade",
      "mode": "in-out"
    }
  }, [_c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showLogin),
      expression: "showLogin"
    }],
    staticClass: "form_contianer"
  }, [_c('div', {
    staticClass: "manage_tip"
  }, [_c('p', [_vm._v("elm后台管理系统")])]), _vm._v(" "), _c('el-form', {
    ref: "loginForm",
    attrs: {
      "model": _vm.loginForm,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": "username"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "用户名"
    },
    model: {
      value: (_vm.loginForm.username),
      callback: function($$v) {
        _vm.$set(_vm.loginForm, "username", $$v)
      },
      expression: "loginForm.username"
    }
  }, [_c('span', [_vm._v("dsfsf")])])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "placeholder": "密码"
    },
    model: {
      value: (_vm.loginForm.password),
      callback: function($$v) {
        _vm.$set(_vm.loginForm, "password", $$v)
      },
      expression: "loginForm.password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticClass: "submit_btn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('loginForm')
      }
    }
  }, [_vm._v("登陆")])], 1)], 1), _vm._v(" "), _c('p', {
    staticClass: "tip"
  }, [_vm._v("温馨提示：")]), _vm._v(" "), _c('p', {
    staticClass: "tip"
  }, [_vm._v("未登录过的新用户，自动注册")]), _vm._v(" "), _c('p', {
    staticClass: "tip"
  }, [_vm._v("注册过的用户可凭账号密码登录")])], 1)])], 1)
},staticRenderFns: []}

/***/ })

});