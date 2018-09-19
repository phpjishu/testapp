require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([7],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _App = __webpack_require__(5);var _App2 = _interopRequireDefault(_App);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;

_vue2.default.config.productionTip = false;

_App2.default.mpType = 'app';

var app = new _vue2.default(_extends({},
_App2.default));

app.$mount();

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);
function injectStyle (ssrContext) {
  __webpack_require__(6)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_plugins_uniapp_lib_uni_loader_js_D_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =
{
	onLaunch: function onLaunch() {
		console.log('App Launch');
		uni.getProvider({
			service: 'push',
			success: function success(res) {
				console.log(res.provider);

				// 个推的名称为 igexin
				if (~res.provider.indexOf('igexin')) {
					uni.subscribePush({
						provider: 'igexin',
						success: function success(res) {
							console.log('success:' + JSON.stringify(res));

						},
						complete: function complete(res) {
							console.log('complete:' + JSON.stringify(res));
						} });

					uni.onPush({
						provider: 'igexin',
						success: function success() {
							console.log('监听透传成功');
						},
						callback: function callback(data) {
							console.log("接收到透传数据：" + JSON.stringify(data));
						} });

				}
			} });

	},
	onShow: function onShow() {
		console.log('App Show');
	},
	onHide: function onHide() {
		console.log('App Hide');
	} };

/***/ })
],[3]);