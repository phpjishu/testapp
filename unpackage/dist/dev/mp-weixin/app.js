require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([8],[,,,function(e,o,n){"use strict";var t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u=i(n(1)),s=i(n(5));function i(e){return e&&e.__esModule?e:{default:e}}n(0).default;u.default.config.productionTip=!1,s.default.mpType="app",new u.default(t({},s.default)).$mount()},,function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(8),u=n.n(t),s=!1;var i=function(e){s||n(6)},c=n(2)(u.a,null,i,null,null);c.options.__file="E:\\qiudt\\文档\\HBuilderProjects\\testuni\\App.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.default=c.exports},function(e,o){},,function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=n(0).default;o.default={onLaunch:function(){console.log("App Launch"),t.getProvider({service:"push",success:function(e){console.log(e.provider),~e.provider.indexOf("igexin")&&(t.subscribePush({provider:"igexin",success:function(e){console.log("success:"+JSON.stringify(e))},complete:function(e){console.log("complete:"+JSON.stringify(e))}}),t.onPush({provider:"igexin",success:function(){console.log("监听透传成功")},callback:function(e){console.log("接收到透传数据："+JSON.stringify(e))}}))}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}}],[3]);
//# sourceMappingURL=.sourcemap/app.js.map