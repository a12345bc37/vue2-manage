webpackJsonp([18],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {};

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = __webpack_require__(18);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(52);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(119);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(120);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _env = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'fetch';
    var dataStr, requestConfig, response, responseJson;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    type = type.toUpperCase();
                    url = _env.baseUrl + url;

                    if (type == 'GET') {
                        dataStr = '';

                        (0, _keys2.default)(data).forEach(function (key) {
                            dataStr += key + '=' + data[key] + '&';
                        });

                        if (dataStr !== '') {
                            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                            url = url + '?' + dataStr;
                        }
                    }

                    if (!(window.fetch && method == 'fetch')) {
                        _context.next = 21;
                        break;
                    }

                    requestConfig = {
                        credentials: 'include',
                        method: type,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'x-nideshop-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1Mzk5NDM5NDl9.jIeyhuXPOMoKTX3scqKPIE3PAPSWvbKTeveKF2GZP_0'
                        },
                        mode: "cors",
                        cache: "force-cache"
                    };


                    if (type == 'POST') {
                        Object.defineProperty(requestConfig, 'body', {
                            value: (0, _stringify2.default)(data)
                        });
                    }

                    _context.prev = 6;
                    _context.next = 9;
                    return fetch(url, requestConfig);

                case 9:
                    response = _context.sent;
                    _context.next = 12;
                    return response.json();

                case 12:
                    responseJson = _context.sent;
                    return _context.abrupt('return', responseJson);

                case 16:
                    _context.prev = 16;
                    _context.t0 = _context['catch'](6);
                    throw new Error(_context.t0);

                case 19:
                    _context.next = 22;
                    break;

                case 21:
                    return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                        var requestObj = void 0;
                        if (window.XMLHttpRequest) {
                            requestObj = new XMLHttpRequest();
                        } else {
                            requestObj = new ActiveXObject();
                        }

                        var sendData = '';
                        if (type == 'POST') {
                            sendData = (0, _stringify2.default)(data);
                        }

                        requestObj.open(type, url, true);
                        requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        requestObj.send(sendData);

                        requestObj.onreadystatechange = function () {
                            if (requestObj.readyState == 4) {
                                if (requestObj.status == 200) {
                                    var obj = requestObj.response;
                                    if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object') {
                                        obj = JSON.parse(obj);
                                    }
                                    resolve(obj);
                                } else {
                                    reject(requestObj);
                                }
                            }
                        };
                    }));

                case 22:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined, [[6, 16]]);
}));

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(83);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(79);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(80);

var _store2 = _interopRequireDefault(_store);

var _elementUi = __webpack_require__(81);

var _elementUi2 = _interopRequireDefault(_elementUi);

__webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

_vue2.default.use(_elementUi2.default);
_vue2.default.prototype.HOST = '/admin';
new _vue2.default({
    el: '#app',
    router: _router2.default,
    store: _store2.default,
    template: '<App/>',
    components: { App: _App2.default }
});

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fillcontain",
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(185);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var login = function login(r) {
    return __webpack_require__.e/* require.ensure */(16).then((function () {
        return r(__webpack_require__(196));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var manage = function manage(r) {
    return __webpack_require__.e/* require.ensure */(15).then((function () {
        return r(__webpack_require__(197));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var home = function home(r) {
    return __webpack_require__.e/* require.ensure */(0).then((function () {
        return r(__webpack_require__(195));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var addShop = function addShop(r) {
    return __webpack_require__.e/* require.ensure */(5).then((function () {
        return r(__webpack_require__(190));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var addGoods = function addGoods(r) {
    return __webpack_require__.e/* require.ensure */(4).then((function () {
        return r(__webpack_require__(189));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var userList = function userList(r) {
    return __webpack_require__.e/* require.ensure */(6).then((function () {
        return r(__webpack_require__(203));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var shopList = function shopList(r) {
    return __webpack_require__.e/* require.ensure */(7).then((function () {
        return r(__webpack_require__(201));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var foodList = function foodList(r) {
    return __webpack_require__.e/* require.ensure */(3).then((function () {
        return r(__webpack_require__(194));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var orderList = function orderList(r) {
    return __webpack_require__.e/* require.ensure */(8).then((function () {
        return r(__webpack_require__(199));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var adminList = function adminList(r) {
    return __webpack_require__.e/* require.ensure */(11).then((function () {
        return r(__webpack_require__(191));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var visitor = function visitor(r) {
    return __webpack_require__.e/* require.ensure */(1).then((function () {
        return r(__webpack_require__(204));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var newMember = function newMember(r) {
    return __webpack_require__.e/* require.ensure */(14).then((function () {
        return r(__webpack_require__(198));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var uploadImg = function uploadImg(r) {
    return __webpack_require__.e/* require.ensure */(12).then((function () {
        return r(__webpack_require__(202));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var vueEdit = function vueEdit(r) {
    return __webpack_require__.e/* require.ensure */(2).then((function () {
        return r(__webpack_require__(205));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var adminSet = function adminSet(r) {
    return __webpack_require__.e/* require.ensure */(10).then((function () {
        return r(__webpack_require__(192));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var sendMessage = function sendMessage(r) {
    return __webpack_require__.e/* require.ensure */(13).then((function () {
        return r(__webpack_require__(200));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var explain = function explain(r) {
    return __webpack_require__.e/* require.ensure */(9).then((function () {
        return r(__webpack_require__(193));
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var routes = [{
    path: '/',
    component: login
}, {
    path: '/manage',
    component: manage,
    name: '',
    children: [{
        path: '',
        component: home,
        meta: []
    }, {
        path: '/addShop',
        component: addShop,
        meta: ['添加数据', '添加商铺']
    }, {
        path: '/addGoods',
        component: addGoods,
        meta: ['添加数据', '添加商品']
    }, {
        path: '/userList',
        component: userList,
        meta: ['数据管理', '用户列表']
    }, {
        path: '/shopList',
        component: shopList,
        meta: ['数据管理', '商家列表']
    }, {
        path: '/foodList',
        component: foodList,
        meta: ['数据管理', '食品列表']
    }, {
        path: '/orderList',
        component: orderList,
        meta: ['数据管理', '订单列表']
    }, {
        path: '/adminList',
        component: adminList,
        meta: ['数据管理', '管理员列表']
    }, {
        path: '/visitor',
        component: visitor,
        meta: ['图表', '用户分布']
    }, {
        path: '/newMember',
        component: newMember,
        meta: ['图表', '用户数据']
    }, {
        path: '/uploadImg',
        component: uploadImg,
        meta: ['文本编辑', 'MarkDown']
    }, {
        path: '/vueEdit',
        component: vueEdit,
        meta: ['编辑', '文本编辑']
    }, {
        path: '/adminSet',
        component: adminSet,
        meta: ['设置', '管理员设置']
    }, {
        path: '/sendMessage',
        component: sendMessage,
        meta: ['设置', '发送通知']
    }, {
        path: '/explain',
        component: explain,
        meta: ['说明', '说明']
    }]
}];

exports.default = new _vueRouter2.default({
    routes: routes,
    strict: "production" !== 'production'
});

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _vue = __webpack_require__(3);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(87);

var _vuex2 = _interopRequireDefault(_vuex);

var _getData = __webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
	adminInfo: {
		avatar: 'default.jpg'
	}
};

var mutations = {
	saveAdminInfo: function saveAdminInfo(state, adminInfo) {
		state.adminInfo = adminInfo;
	}
};

var actions = {
	getAdminData: function () {
		var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
			var commit = _ref.commit;
			var res;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return (0, _getData.getAdminInfo)();

						case 3:
							res = _context.sent;

							if (!(res.status == 1)) {
								_context.next = 8;
								break;
							}

							commit('saveAdminInfo', res.data);
							_context.next = 9;
							break;

						case 8:
							throw new Error(res);

						case 9:
							_context.next = 14;
							break;

						case 11:
							_context.prev = 11;
							_context.t0 = _context['catch'](0);

							console.log('您尚未登陆或者session失效');

						case 14:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[0, 11]]);
		}));

		function getAdminData(_x) {
			return _ref2.apply(this, arguments);
		}

		return getAdminData;
	}()
};

exports.default = new _vuex2.default.Store({
	state: state,
	actions: actions,
	mutations: mutations
});

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(180)

var Component = __webpack_require__(84)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(184),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserCity = exports.getAddressById = exports.getUserInfo = exports.getOrderCount = exports.getOrderList = exports.getUserCount = exports.getUserList = exports.deleteFood = exports.updateFood = exports.getMenuById = exports.getMenu = exports.getFoodsCount = exports.getFoods = exports.deleteResturant = exports.updateResturant = exports.getResturantsCount = exports.getResturantDetail = exports.getResturants = exports.foodCategory = exports.addCategory = exports.getCategory = exports.searchplace = exports.addShop = exports.cityGuess = exports.adminCount = exports.adminList = exports.adminDayCount = exports.orderCount = exports.userCount = exports.apiAllRecord = exports.apiAllCount = exports.apiCount = exports.getAdminInfo = exports.signout = exports.getTopicCount = exports.topicInfo = exports.deletetTopic = exports.getTopic = exports.addFood = exports.addTopicCategory = exports.topicCategoryInfo = exports.getCategoryList = exports.login = undefined;

var _fetch = __webpack_require__(117);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(data) {
  return (0, _fetch2.default)('/auth/login', data, 'POST');
};

var getCategoryList = exports.getCategoryList = function getCategoryList() {
  return (0, _fetch2.default)('/topiccategory/category');
};
var topicCategoryInfo = exports.topicCategoryInfo = function topicCategoryInfo(data) {
  return (0, _fetch2.default)('/topiccategory/info', data);
};
var addTopicCategory = exports.addTopicCategory = function addTopicCategory(data) {
  return (0, _fetch2.default)('/topiccategory/storeCategory', data, 'POST');
};

var addFood = exports.addFood = function addFood(data) {
  return (0, _fetch2.default)('/topic/store', data, 'POST');
};

var getTopic = exports.getTopic = function getTopic(data) {
  return (0, _fetch2.default)('/topic/index', data);
};

var deletetTopic = exports.deletetTopic = function deletetTopic(data) {
  return (0, _fetch2.default)('/topic/destory', data);
};

var topicInfo = exports.topicInfo = function topicInfo(data) {
  return (0, _fetch2.default)('/topic/info', data);
};

var getTopicCount = exports.getTopicCount = function getTopicCount() {
  return (0, _fetch2.default)('/topic/count');
};

var signout = exports.signout = function signout() {
  return (0, _fetch2.default)('/admin/singout');
};

var getAdminInfo = exports.getAdminInfo = function getAdminInfo() {
  return (0, _fetch2.default)('/admin/info');
};

var apiCount = exports.apiCount = function apiCount(date) {
  return (0, _fetch2.default)('/statis/api/' + date + '/count');
};

var apiAllCount = exports.apiAllCount = function apiAllCount() {
  return (0, _fetch2.default)('/statis/api/count');
};

var apiAllRecord = exports.apiAllRecord = function apiAllRecord() {
  return (0, _fetch2.default)('/statis/api/all');
};

var userCount = exports.userCount = function userCount(date) {
  return (0, _fetch2.default)('/statis/user/' + date + '/count');
};

var orderCount = exports.orderCount = function orderCount(date) {
  return (0, _fetch2.default)('/statis/order/' + date + '/count');
};

var adminDayCount = exports.adminDayCount = function adminDayCount(date) {
  return (0, _fetch2.default)('/statis/admin/' + date + '/count');
};

var adminList = exports.adminList = function adminList(data) {
  return (0, _fetch2.default)('/admin/all', data);
};

var adminCount = exports.adminCount = function adminCount() {
  return (0, _fetch2.default)('/admin/count');
};

var cityGuess = exports.cityGuess = function cityGuess() {
  return (0, _fetch2.default)('/v1/cities', {
    type: 'guess'
  });
};

var addShop = exports.addShop = function addShop(data) {
  return (0, _fetch2.default)('/shopping/addShop', data, 'POST');
};

var searchplace = exports.searchplace = function searchplace(cityid, value) {
  return (0, _fetch2.default)('/v1/pois', {
    type: 'search',
    city_id: cityid,
    keyword: value
  });
};

var getCategory = exports.getCategory = function getCategory(restaurant_id) {
  return (0, _fetch2.default)('/shopping/getcategory/' + restaurant_id);
};

var addCategory = exports.addCategory = function addCategory(data) {
  return (0, _fetch2.default)('/shopping/addcategory', data, 'POST');
};

var foodCategory = exports.foodCategory = function foodCategory(latitude, longitude) {
  return (0, _fetch2.default)('/shopping/v2/restaurant/category');
};

var getResturants = exports.getResturants = function getResturants(data) {
  return (0, _fetch2.default)('/shopping/restaurants', data);
};

var getResturantDetail = exports.getResturantDetail = function getResturantDetail(restaurant_id) {
  return (0, _fetch2.default)('/shopping/restaurant/' + restaurant_id);
};

var getResturantsCount = exports.getResturantsCount = function getResturantsCount() {
  return (0, _fetch2.default)('/shopping/restaurants/count');
};

var updateResturant = exports.updateResturant = function updateResturant(data) {
  return (0, _fetch2.default)('/shopping/updateshop', data, 'POST');
};

var deleteResturant = exports.deleteResturant = function deleteResturant(restaurant_id) {
  return (0, _fetch2.default)('/shopping/restaurant/' + restaurant_id, {}, 'DELETE');
};

var getFoods = exports.getFoods = function getFoods(data) {
  return (0, _fetch2.default)('/shopping/v2/foods', data);
};

var getFoodsCount = exports.getFoodsCount = function getFoodsCount(data) {
  return (0, _fetch2.default)('/shopping/v2/foods/count', data);
};

var getMenu = exports.getMenu = function getMenu(data) {
  return (0, _fetch2.default)('/shopping/v2/menu', data);
};

var getMenuById = exports.getMenuById = function getMenuById(category_id) {
  return (0, _fetch2.default)('/shopping/v2/menu/' + category_id);
};

var updateFood = exports.updateFood = function updateFood(data) {
  return (0, _fetch2.default)('/shopping/v2/updatefood', data, 'POST');
};

var deleteFood = exports.deleteFood = function deleteFood(food_id) {
  return (0, _fetch2.default)('/shopping/v2/food/' + food_id, {}, 'DELETE');
};

var getUserList = exports.getUserList = function getUserList(data) {
  return (0, _fetch2.default)('/v1/users/list', data);
};

var getUserCount = exports.getUserCount = function getUserCount(data) {
  return (0, _fetch2.default)('/v1/users/count', data);
};

var getOrderList = exports.getOrderList = function getOrderList(data) {
  return (0, _fetch2.default)('/bos/orders', data);
};

var getOrderCount = exports.getOrderCount = function getOrderCount(data) {
  return (0, _fetch2.default)('/bos/orders/count', data);
};

var getUserInfo = exports.getUserInfo = function getUserInfo(user_id) {
  return (0, _fetch2.default)('/v1/user/' + user_id);
};

var getAddressById = exports.getAddressById = function getAddressById(address_id) {
  return (0, _fetch2.default)('/v1/addresse/' + address_id);
};

var getUserCity = exports.getUserCity = function getUserCity() {
  return (0, _fetch2.default)('/v1/user/city/count');
};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var baseUrl = 'https://www.wl521.cn/admin';
var routerMode = 'hash';
var baseImgPath = void 0;

if (false) {
    exports.baseUrl = baseUrl = 'https://www.wl521.cn/admin';
    exports.baseImgPath = baseImgPath = '/img/';
} else {
    exports.baseUrl = baseUrl = 'https://www.wl521.cn/admin';
    exports.baseImgPath = baseImgPath = 'https://www.wl521.cn/img/';
}

exports.baseUrl = baseUrl;
exports.routerMode = routerMode;
exports.baseImgPath = baseImgPath;

/***/ })

},[118]);