require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([8],{

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(9);var _vue2 = _interopRequireDefault(_vue);\nvar _App = __webpack_require__(55);var _App2 = _interopRequireDefault(_App);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(1).default;\n\n_vue2.default.config.productionTip = false;\n\n_App2.default.mpType = 'app';\n\nvar app = new _vue2.default(_extends({},\n_App2.default));\n\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// E:/qiudt/文档/HBuilderProjects/testuni/main.js\n// module id = 54\n// module chunks = 8\n\n//# sourceURL=uni-app:///main.js?d075");

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(58);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(56)\n}\nvar normalizeComponent = __webpack_require__(10)\n/* script */\n\n/* template */\nvar __vue_template__ = null\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,\n  __vue_template__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"E:\\\\qiudt\\\\文档\\\\HBuilderProjects\\\\testuni\\\\App.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-8967d236\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-8967d236\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// E:/qiudt/文档/HBuilderProjects/testuni/App.vue\n// module id = 55\n// module chunks = 8\n\n");

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-8967d236\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!E:/qiudt/文档/HBuilderProjects/testuni/App.vue\n// module id = 56\n// module chunks = 8\n\n");

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var uni = __webpack_require__(1).default;exports.default =\n{\n\tonLaunch: function onLaunch() {\n\t\tconsole.log('App Launch');\n\t\tuni.getProvider({\n\t\t\tservice: 'push',\n\t\t\tsuccess: function success(res) {\n\t\t\t\tconsole.log(res.provider);\n\n\t\t\t\t// 个推的名称为 igexin\n\t\t\t\tif (~res.provider.indexOf('igexin')) {\n\t\t\t\t\tuni.subscribePush({\n\t\t\t\t\t\tprovider: 'igexin',\n\t\t\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\t\t\tconsole.log('success:' + JSON.stringify(res));\n\n\t\t\t\t\t\t},\n\t\t\t\t\t\tcomplete: function complete(res) {\n\t\t\t\t\t\t\tconsole.log('complete:' + JSON.stringify(res));\n\t\t\t\t\t\t} });\n\n\t\t\t\t\tuni.onPush({\n\t\t\t\t\t\tprovider: 'igexin',\n\t\t\t\t\t\tsuccess: function success() {\n\t\t\t\t\t\t\tconsole.log('监听透传成功');\n\t\t\t\t\t\t},\n\t\t\t\t\t\tcallback: function callback(data) {\n\t\t\t\t\t\t\tconsole.log(\"接收到透传数据：\" + JSON.stringify(data));\n\t\t\t\t\t\t} });\n\n\t\t\t\t}\n\t\t\t} });\n\n\t},\n\tonShow: function onShow() {\n\t\tconsole.log('App Show');\n\t},\n\tonHide: function onHide() {\n\t\tconsole.log('App Hide');\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!E:/qiudt/文档/HBuilderProjects/testuni/App.vue\n// module id = 58\n// module chunks = 8\n\n//# sourceURL=uni-app:///App.vue?3c4a");

/***/ })

},[54]);