webpackJsonp([15],{

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(488)

var Component = __webpack_require__(84)(
  /* script */
  __webpack_require__(384),
  /* template */
  __webpack_require__(512),
  /* scopeId */
  "data-v-11f8311a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	computed: {
		defaultActive: function defaultActive() {
			return this.$route.path.replace('/', '');
		}
	}
};

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(187)(false);
// imports


// module
exports.push([module.i, ".allcover[data-v-11f8311a]{position:absolute;top:0;right:0}.ctt[data-v-11f8311a]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.tb[data-v-11f8311a]{position:absolute;top:50%;transform:translateY(-50%)}.lr[data-v-11f8311a]{position:absolute;left:50%;transform:translateX(-50%)}", ""]);

// exports


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(398);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(188)("2866448d", content, true);

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "manage_page fillcontain"
  }, [_c('el-row', {
    staticStyle: {
      "height": "100%"
    }
  }, [_c('el-col', {
    staticStyle: {
      "min-height": "100%",
      "background-color": "#324057"
    },
    attrs: {
      "span": 4
    }
  }, [_c('el-menu', {
    staticStyle: {
      "min-height": "100%"
    },
    attrs: {
      "default-active": _vm.defaultActive,
      "theme": "dark",
      "router": ""
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "manage"
    }
  }, [_c('i', {
    staticClass: "el-icon-menu"
  }), _vm._v("首页")]), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "2"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "el-icon-document"
  }), _vm._v("数据管理")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "foodList"
    }
  }, [_vm._v("文章列表")])], 2), _vm._v(" "), _c('el-submenu', {
    attrs: {
      "index": "3"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('i', {
    staticClass: "el-icon-plus"
  }), _vm._v("添加数据")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "addShop"
    }
  }, [_vm._v("添加类型")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "addGoods"
    }
  }, [_vm._v("添加文章")])], 2)], 1)], 1), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "height": "100%",
      "overflow": "auto"
    },
    attrs: {
      "span": 20
    }
  }, [_c('keep-alive', [_c('router-view')], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

});