(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8bc1f92"],{"064b":function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"3e36":function(e,t,n){var r=n("72b1");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("85cb").default;i("31ff683d",r,!0,{sourceMap:!1,shadowMode:!1})},"6a61":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(A){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),o=new j(r||[]);return a._invoke=R(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(A){return{type:"throw",arg:A}}}e.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function v(){}function g(){}function y(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(U([])));L&&L!==n&&r.call(L,a)&&(b=L);var x=y.prototype=v.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,a,o,s){var c=l(e[i],e,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var i;function a(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function R(e,t,n){var r=h;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw a;return B()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var s=E(o,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function U(e){if(e){var n=e[a];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:B}}function B(){return{value:t,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(S.prototype),S.prototype[o]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new S(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(x),c(x,s,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=U,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:U(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},"70de":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"containers"},[n("div",{ref:"canvas",staticClass:"canvas"}),n("ul",{staticClass:"buttons"},[n("li",[n("a",{attrs:{href:"javascript:"},on:{click:function(t){return e.$refs.refFile.click()}}},[e._v("加载本地BPMN文件")]),n("input",{ref:"refFile",staticStyle:{display:"none"},attrs:{type:"file",id:"files"},on:{change:e.loadXML}})]),n("li",[n("a",{attrs:{href:"javascript:",title:"保存为bpmn"},on:{click:e.saveXML}},[e._v("保存为BPMN文件")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"保存为svg"},on:{click:e.saveSVG}},[e._v("保存为SVG图片")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"撤销操作"},on:{click:e.handlerUndo}},[e._v("撤销")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"恢复操作"},on:{click:e.handlerRedo}},[e._v("恢复")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"放大"},on:{click:function(t){return e.handlerZoom(.1)}}},[e._v("放大")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"缩小"},on:{click:function(t){return e.handlerZoom(-.1)}}},[e._v("缩小")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"还原"},on:{click:function(t){return e.handlerZoom(0)}}},[e._v("还原")])])])])},i=[],a=(n("053b"),n("e18c"),n("96db"),n("af86"),n("f1a9"),n("6a61"),n("cf7f")),o=n("c11b"),s=n("db64"),c={name:"ops-coffee",mounted:function(){this.init()},data:function(){return{bpmnModeler:null,container:null,canvas:null,xmlStr:s["a"]}},methods:{init:function(){var e=this.$refs.canvas;this.bpmnModeler=new o["a"]({container:e}),this.createNewDiagram()},createNewDiagram:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.bpmnModeler.importXML(e.xmlStr);case 3:n=t.sent,r=n.warnings,console.log(r),e.success(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.message,t.t0.warnings);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},success:function(){this.addModelerListener(),this.addEventBusListener()},loadXML:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,r=e.$refs.refFile.files[0],i=new FileReader,i.readAsText(r),i.onload=function(){n.xmlStr=this.result,n.createNewDiagram()};case 5:case"end":return t.stop()}}),t)})))()},saveXML:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.bpmnModeler.saveXML({format:!0});case 3:n=t.sent,r=n.xml,i=new Blob([r],{type:"application/bpmn20-xml;charset=UTF-8,"}),a=document.createElement("a"),a.download="ops-coffee-bpmn.bpmn",a.innerHTML="Get BPMN SVG",a.href=window.URL.createObjectURL(i),a.onclick=function(e){document.body.removeChild(e.target)},a.style.visibility="hidden",document.body.appendChild(a),a.click(),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},saveSVG:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.bpmnModeler.saveSVG();case 3:n=t.sent,r=n.svg,i=new Blob([r],{type:"image/svg+xml"}),a=document.createElement("a"),a.download="ops-coffee-bpmn.svg",a.innerHTML="Get BPMN SVG",a.href=window.URL.createObjectURL(i),a.onclick=function(e){document.body.removeChild(e.target)},a.style.visibility="hidden",document.body.appendChild(a),a.click(),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},handlerRedo:function(){this.bpmnModeler.get("commandStack").redo()},handlerUndo:function(){this.bpmnModeler.get("commandStack").undo()},handlerZoom:function(e){var t=e?this.scale+e:1;this.bpmnModeler.get("canvas").zoom(t),this.scale=t},addModelerListener:function(){var e=this;e.bpmnModeler.on("element.click",(function(e){console.log("modelerListener",e)}))},addEventBusListener:function(){var e=this,t=this.bpmnModeler.get("eventBus");t.on("element.click",(function(t){e.elementClick(t)}))},elementClick:function(e){var t=this.bpmnModeler.get("modeling");"bpmn:UserTask"===e.element.businessObject.$type&&(console.log("这是一个用户节点",e.element.businessObject.id,e.element.businessObject.$type,e.element.businessObject.name),t.updateProperties(e.element,{name:"ops-coffee.cn"}))}}},u=c,l=(n("ec5b"),n("9ca4")),h=Object(l["a"])(u,r,i,!1,null,"46781825",null);t["default"]=h.exports},"72b1":function(e,t,n){var r=n("a1a8");t=r(!1),t.push([e.i,".containers[data-v-46781825]{width:100%;height:calc(100vh - 82px)}.canvas[data-v-46781825]{width:100%;height:100%}.buttons[data-v-46781825]{position:absolute;left:20px;bottom:20px}.buttons li[data-v-46781825]{display:inline-block;margin:5px}.buttons li a[data-v-46781825]{color:#333;background:#fff;cursor:pointer;padding:8px;border:1px solid #ccc;text-decoration:none}",""]),e.exports=t},"96db":function(e,t,n){"use strict";var r=n("f62c").charAt,i=n("b702"),a=n("99ee"),o="String Iterator",s=i.set,c=i.getterFor(o);a(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=c(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"9d71":function(e,t,n){var r=n("efe2"),i=n("90fb"),a=n("9b9d"),o=i("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),a&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},af86:function(e,t,n){var r=n("d890"),i=n("064b"),a=n("a133"),o=n("0fc1"),s=n("90fb"),c=s("iterator"),u=s("toStringTag"),l=a.values;for(var h in i){var f=r[h],p=f&&f.prototype;if(p){if(p[c]!==l)try{o(p,c,l)}catch(m){p[c]=l}if(p[u]||o(p,u,h),i[h])for(var d in a)if(p[d]!==a[d])try{o(p,d,a[d])}catch(m){p[d]=a[d]}}}},c370:function(e,t,n){"use strict";n("a133");var r=n("1c8b"),i=n("6d7a"),a=n("9d71"),o=n("1944"),s=n("99ab"),c=n("27b5"),u=n("69fa"),l=n("b702"),h=n("c4e4"),f=n("faa8"),p=n("e349"),d=n("2a91"),m=n("857c"),v=n("a719"),g=n("6d60"),y=n("38b9"),b=n("d027"),w=n("b60f"),L=n("90fb"),x=i("fetch"),k=i("Headers"),S=L("iterator"),R="URLSearchParams",E=R+"Iterator",M=l.set,P=l.getterFor(R),j=l.getterFor(E),U=/\+/g,B=Array(4),A=function(e){return B[e-1]||(B[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},_=function(e){try{return decodeURIComponent(e)}catch(t){return e}},N=function(e){var t=e.replace(U," "),n=4;try{return decodeURIComponent(t)}catch(r){while(n)t=t.replace(A(n--),_);return t}},O=/[!'()~]|%20/g,T={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},F=function(e){return T[e]},C=function(e){return encodeURIComponent(e).replace(O,F)},q=function(e,t){if(t){var n,r,i=t.split("&"),a=0;while(a<i.length)n=i[a++],n.length&&(r=n.split("="),e.push({key:N(r.shift()),value:N(r.join("="))}))}},D=function(e){this.entries.length=0,q(this.entries,e)},G=function(e,t){if(e<t)throw TypeError("Not enough arguments")},I=u((function(e,t){M(this,{type:E,iterator:b(P(e).entries),kind:t})}),"Iterator",(function(){var e=j(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n})),V=function(){h(this,V,R);var e,t,n,r,i,a,o,s,c,u=arguments.length>0?arguments[0]:void 0,l=this,p=[];if(M(l,{type:R,entries:p,updateURL:function(){},updateSearchParams:D}),void 0!==u)if(v(u))if(e=w(u),"function"===typeof e){t=e.call(u),n=t.next;while(!(r=n.call(t)).done){if(i=b(m(r.value)),a=i.next,(o=a.call(i)).done||(s=a.call(i)).done||!a.call(i).done)throw TypeError("Expected sequence with length 2");p.push({key:o.value+"",value:s.value+""})}}else for(c in u)f(u,c)&&p.push({key:c,value:u[c]+""});else q(p,"string"===typeof u?"?"===u.charAt(0)?u.slice(1):u:u+"")},$=V.prototype;s($,{append:function(e,t){G(arguments.length,2);var n=P(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){G(arguments.length,1);var t=P(this),n=t.entries,r=e+"",i=0;while(i<n.length)n[i].key===r?n.splice(i,1):i++;t.updateURL()},get:function(e){G(arguments.length,1);for(var t=P(this).entries,n=e+"",r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){G(arguments.length,1);for(var t=P(this).entries,n=e+"",r=[],i=0;i<t.length;i++)t[i].key===n&&r.push(t[i].value);return r},has:function(e){G(arguments.length,1);var t=P(this).entries,n=e+"",r=0;while(r<t.length)if(t[r++].key===n)return!0;return!1},set:function(e,t){G(arguments.length,1);for(var n,r=P(this),i=r.entries,a=!1,o=e+"",s=t+"",c=0;c<i.length;c++)n=i[c],n.key===o&&(a?i.splice(c--,1):(a=!0,n.value=s));a||i.push({key:o,value:s}),r.updateURL()},sort:function(){var e,t,n,r=P(this),i=r.entries,a=i.slice();for(i.length=0,n=0;n<a.length;n++){for(e=a[n],t=0;t<n;t++)if(i[t].key>e.key){i.splice(t,0,e);break}t===n&&i.push(e)}r.updateURL()},forEach:function(e){var t,n=P(this).entries,r=p(e,arguments.length>1?arguments[1]:void 0,3),i=0;while(i<n.length)t=n[i++],r(t.value,t.key,this)},keys:function(){return new I(this,"keys")},values:function(){return new I(this,"values")},entries:function(){return new I(this,"entries")}},{enumerable:!0}),o($,S,$.entries),o($,"toString",(function(){var e,t=P(this).entries,n=[],r=0;while(r<t.length)e=t[r++],n.push(C(e.key)+"="+C(e.value));return n.join("&")}),{enumerable:!0}),c(V,R),r({global:!0,forced:!a},{URLSearchParams:V}),a||"function"!=typeof x||"function"!=typeof k||r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,n,r,i=[e];return arguments.length>1&&(t=arguments[1],v(t)&&(n=t.body,d(n)===R&&(r=t.headers?new k(t.headers):new k,r.has("content-type")||r.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=g(t,{body:y(0,String(n)),headers:y(0,r)}))),i.push(t)),x.apply(this,i)}}),e.exports={URLSearchParams:V,getState:P}},cf7f:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("e18c");function r(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function s(e){r(o,i,a,s,c,"next",e)}function c(e){r(o,i,a,s,c,"throw",e)}s(void 0)}))}}},d027:function(e,t,n){var r=n("857c"),i=n("b60f");e.exports=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},d812:function(e,t,n){"use strict";var r=2147483647,i=36,a=1,o=26,s=38,c=700,u=72,l=128,h="-",f=/[^\0-\u007E]/,p=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",m=i-a,v=Math.floor,g=String.fromCharCode,y=function(e){var t=[],n=0,r=e.length;while(n<r){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);56320==(64512&a)?t.push(((1023&i)<<10)+(1023&a)+65536):(t.push(i),n--)}else t.push(i)}return t},b=function(e){return e+22+75*(e<26)},w=function(e,t,n){var r=0;for(e=n?v(e/c):e>>1,e+=v(e/t);e>m*o>>1;r+=i)e=v(e/m);return v(r+(m+1)*e/(e+s))},L=function(e){var t=[];e=y(e);var n,s,c=e.length,f=l,p=0,m=u;for(n=0;n<e.length;n++)s=e[n],s<128&&t.push(g(s));var L=t.length,x=L;L&&t.push(h);while(x<c){var k=r;for(n=0;n<e.length;n++)s=e[n],s>=f&&s<k&&(k=s);var S=x+1;if(k-f>v((r-p)/S))throw RangeError(d);for(p+=(k-f)*S,f=k,n=0;n<e.length;n++){if(s=e[n],s<f&&++p>r)throw RangeError(d);if(s==f){for(var R=p,E=i;;E+=i){var M=E<=m?a:E>=m+o?o:E-m;if(R<M)break;var P=R-M,j=i-M;t.push(g(b(M+P%j))),R=v(P/j)}t.push(g(b(R))),m=w(p,S,x==L),p=0,++x}}++p,++f}return t.join("")};e.exports=function(e){var t,n,r=[],i=e.toLowerCase().replace(p,".").split(".");for(t=0;t<i.length;t++)n=i[t],r.push(f.test(n)?"xn--"+L(n):n);return r.join(".")}},db64:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r='<?xml version="1.0" encoding="UTF-8"?>\n<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">\n  <process id="Process_1" isExecutable="false">\n    <startEvent id="StartEvent_1y45yut" name="开始">\n      <outgoing>Flow_0jfbnmb</outgoing>\n    </startEvent>\n    <userTask id="Activity_1w1vj9r">\n      <incoming>Flow_0jfbnmb</incoming>\n    </userTask>\n    <sequenceFlow id="Flow_0jfbnmb" sourceRef="StartEvent_1y45yut" targetRef="Activity_1w1vj9r" />\n  </process>\n  <bpmndi:BPMNDiagram id="BpmnDiagram_1">\n    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">\n      <bpmndi:BPMNEdge id="Flow_0jfbnmb_di" bpmnElement="Flow_0jfbnmb">\n        <omgdi:waypoint x="188" y="120" />\n        <omgdi:waypoint x="300" y="120" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">\n        <omgdc:Bounds x="152" y="102" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <omgdc:Bounds x="160" y="145" width="22" height="14" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Activity_1w1vj9r_di" bpmnElement="Activity_1w1vj9r">\n        <omgdc:Bounds x="300" y="80" width="100" height="80" />\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</definitions>'},e62b:function(e,t,n){"use strict";var r=n("e349"),i=n("3553"),a=n("69c5"),o=n("98a9"),s=n("d88d"),c=n("1bbd"),u=n("b60f");e.exports=function(e){var t,n,l,h,f,p,d=i(e),m="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,y=void 0!==g,b=u(d),w=0;if(y&&(g=r(g,v>2?arguments[2]:void 0,2)),void 0==b||m==Array&&o(b))for(t=s(d.length),n=new m(t);t>w;w++)p=y?g(d[w],w):d[w],c(n,w,p);else for(h=b.call(d),f=h.next,n=new m;!(l=f.call(h)).done;w++)p=y?a(h,g,[l.value,w],!0):l.value,c(n,w,p);return n.length=w,n}},ec5b:function(e,t,n){"use strict";var r=n("3e36"),i=n.n(r);i.a},f1a9:function(e,t,n){"use strict";n("96db");var r,i=n("1c8b"),a=n("1e2c"),o=n("9d71"),s=n("d890"),c=n("dbe8"),u=n("1944"),l=n("c4e4"),h=n("faa8"),f=n("d8fc"),p=n("e62b"),d=n("f62c").codeAt,m=n("d812"),v=n("27b5"),g=n("c370"),y=n("b702"),b=s.URL,w=g.URLSearchParams,L=g.getState,x=y.set,k=y.getterFor("URL"),S=Math.floor,R=Math.pow,E="Invalid authority",M="Invalid scheme",P="Invalid host",j="Invalid port",U=/[A-Za-z]/,B=/[\d+-.A-Za-z]/,A=/\d/,_=/^(0x|0X)/,N=/^[0-7]+$/,O=/^\d+$/,T=/^[\dA-Fa-f]+$/,F=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,C=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,q=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,D=/[\u0009\u000A\u000D]/g,G=function(e,t){var n,r,i;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return P;if(n=V(t.slice(1,-1)),!n)return P;e.host=n}else if(Q(e)){if(t=m(t),F.test(t))return P;if(n=I(t),null===n)return P;e.host=n}else{if(C.test(t))return P;for(n="",r=p(t),i=0;i<r.length;i++)n+=Y(r[i],H);e.host=n}},I=function(e){var t,n,r,i,a,o,s,c=e.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),t=c.length,t>4)return e;for(n=[],r=0;r<t;r++){if(i=c[r],""==i)return e;if(a=10,i.length>1&&"0"==i.charAt(0)&&(a=_.test(i)?16:8,i=i.slice(8==a?1:2)),""===i)o=0;else{if(!(10==a?O:8==a?N:T).test(i))return e;o=parseInt(i,a)}n.push(o)}for(r=0;r<t;r++)if(o=n[r],r==t-1){if(o>=R(256,5-t))return null}else if(o>255)return null;for(s=n.pop(),r=0;r<n.length;r++)s+=n[r]*R(256,3-r);return s},V=function(e){var t,n,r,i,a,o,s,c=[0,0,0,0,0,0,0,0],u=0,l=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,u++,l=u}while(f()){if(8==u)return;if(":"!=f()){t=n=0;while(n<4&&T.test(f()))t=16*t+parseInt(f(),16),h++,n++;if("."==f()){if(0==n)return;if(h-=n,u>6)return;r=0;while(f()){if(i=null,r>0){if(!("."==f()&&r<4))return;h++}if(!A.test(f()))return;while(A.test(f())){if(a=parseInt(f(),10),null===i)i=a;else{if(0==i)return;i=10*i+a}if(i>255)return;h++}c[u]=256*c[u]+i,r++,2!=r&&4!=r||u++}if(4!=r)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;c[u++]=t}else{if(null!==l)return;h++,u++,l=u}}if(null!==l){o=u-l,u=7;while(0!=u&&o>0)s=c[u],c[u--]=c[l+o-1],c[l+--o]=s}else if(8!=u)return;return c},$=function(e){for(var t=null,n=1,r=null,i=0,a=0;a<8;a++)0!==e[a]?(i>n&&(t=r,n=i),r=null,i=0):(null===r&&(r=a),++i);return i>n&&(t=r,n=i),t},X=function(e){var t,n,r,i;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=S(e/256);return t.join(".")}if("object"==typeof e){for(t="",r=$(e),n=0;n<8;n++)i&&0===e[n]||(i&&(i=!1),r===n?(t+=n?":":"::",i=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},H={},Z=f({},H,{" ":1,'"':1,"<":1,">":1,"`":1}),J=f({},Z,{"#":1,"?":1,"{":1,"}":1}),z=f({},J,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Y=function(e,t){var n=d(e,0);return n>32&&n<127&&!h(t,e)?e:encodeURIComponent(e)},K={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Q=function(e){return h(K,e.scheme)},W=function(e){return""!=e.username||""!=e.password},ee=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},te=function(e,t){var n;return 2==e.length&&U.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},ne=function(e){var t;return e.length>1&&te(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},re=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&te(t[0],!0)||t.pop()},ie=function(e){return"."===e||"%2e"===e.toLowerCase()},ae=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},oe={},se={},ce={},ue={},le={},he={},fe={},pe={},de={},me={},ve={},ge={},ye={},be={},we={},Le={},xe={},ke={},Se={},Re={},Ee={},Me=function(e,t,n,i){var a,o,s,c,u=n||oe,l=0,f="",d=!1,m=!1,v=!1;n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(q,"")),t=t.replace(D,""),a=p(t);while(l<=a.length){switch(o=a[l],u){case oe:if(!o||!U.test(o)){if(n)return M;u=ce;continue}f+=o.toLowerCase(),u=se;break;case se:if(o&&(B.test(o)||"+"==o||"-"==o||"."==o))f+=o.toLowerCase();else{if(":"!=o){if(n)return M;f="",u=ce,l=0;continue}if(n&&(Q(e)!=h(K,f)||"file"==f&&(W(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,n)return void(Q(e)&&K[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?u=be:Q(e)&&i&&i.scheme==e.scheme?u=ue:Q(e)?u=pe:"/"==a[l+1]?(u=le,l++):(e.cannotBeABaseURL=!0,e.path.push(""),u=Se)}break;case ce:if(!i||i.cannotBeABaseURL&&"#"!=o)return M;if(i.cannotBeABaseURL&&"#"==o){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,u=Ee;break}u="file"==i.scheme?be:he;continue;case ue:if("/"!=o||"/"!=a[l+1]){u=he;continue}u=de,l++;break;case le:if("/"==o){u=me;break}u=ke;continue;case he:if(e.scheme=i.scheme,o==r)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query;else if("/"==o||"\\"==o&&Q(e))u=fe;else if("?"==o)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",u=Re;else{if("#"!=o){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),u=ke;continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",u=Ee}break;case fe:if(!Q(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,u=ke;continue}u=me}else u=de;break;case pe:if(u=de,"/"!=o||"/"!=f.charAt(l+1))continue;l++;break;case de:if("/"!=o&&"\\"!=o){u=me;continue}break;case me:if("@"==o){d&&(f="%40"+f),d=!0,s=p(f);for(var g=0;g<s.length;g++){var y=s[g];if(":"!=y||v){var b=Y(y,z);v?e.password+=b:e.username+=b}else v=!0}f=""}else if(o==r||"/"==o||"?"==o||"#"==o||"\\"==o&&Q(e)){if(d&&""==f)return E;l-=p(f).length+1,f="",u=ve}else f+=o;break;case ve:case ge:if(n&&"file"==e.scheme){u=Le;continue}if(":"!=o||m){if(o==r||"/"==o||"?"==o||"#"==o||"\\"==o&&Q(e)){if(Q(e)&&""==f)return P;if(n&&""==f&&(W(e)||null!==e.port))return;if(c=G(e,f),c)return c;if(f="",u=xe,n)return;continue}"["==o?m=!0:"]"==o&&(m=!1),f+=o}else{if(""==f)return P;if(c=G(e,f),c)return c;if(f="",u=ye,n==ge)return}break;case ye:if(!A.test(o)){if(o==r||"/"==o||"?"==o||"#"==o||"\\"==o&&Q(e)||n){if(""!=f){var w=parseInt(f,10);if(w>65535)return j;e.port=Q(e)&&w===K[e.scheme]?null:w,f=""}if(n)return;u=xe;continue}return j}f+=o;break;case be:if(e.scheme="file","/"==o||"\\"==o)u=we;else{if(!i||"file"!=i.scheme){u=ke;continue}if(o==r)e.host=i.host,e.path=i.path.slice(),e.query=i.query;else if("?"==o)e.host=i.host,e.path=i.path.slice(),e.query="",u=Re;else{if("#"!=o){ne(a.slice(l).join(""))||(e.host=i.host,e.path=i.path.slice(),re(e)),u=ke;continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",u=Ee}}break;case we:if("/"==o||"\\"==o){u=Le;break}i&&"file"==i.scheme&&!ne(a.slice(l).join(""))&&(te(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),u=ke;continue;case Le:if(o==r||"/"==o||"\\"==o||"?"==o||"#"==o){if(!n&&te(f))u=ke;else if(""==f){if(e.host="",n)return;u=xe}else{if(c=G(e,f),c)return c;if("localhost"==e.host&&(e.host=""),n)return;f="",u=xe}continue}f+=o;break;case xe:if(Q(e)){if(u=ke,"/"!=o&&"\\"!=o)continue}else if(n||"?"!=o)if(n||"#"!=o){if(o!=r&&(u=ke,"/"!=o))continue}else e.fragment="",u=Ee;else e.query="",u=Re;break;case ke:if(o==r||"/"==o||"\\"==o&&Q(e)||!n&&("?"==o||"#"==o)){if(ae(f)?(re(e),"/"==o||"\\"==o&&Q(e)||e.path.push("")):ie(f)?"/"==o||"\\"==o&&Q(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&te(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(o==r||"?"==o||"#"==o))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==o?(e.query="",u=Re):"#"==o&&(e.fragment="",u=Ee)}else f+=Y(o,J);break;case Se:"?"==o?(e.query="",u=Re):"#"==o?(e.fragment="",u=Ee):o!=r&&(e.path[0]+=Y(o,H));break;case Re:n||"#"!=o?o!=r&&("'"==o&&Q(e)?e.query+="%27":e.query+="#"==o?"%23":Y(o,H)):(e.fragment="",u=Ee);break;case Ee:o!=r&&(e.fragment+=Y(o,Z));break}l++}},Pe=function(e){var t,n,r=l(this,Pe,"URL"),i=arguments.length>1?arguments[1]:void 0,o=String(e),s=x(r,{type:"URL"});if(void 0!==i)if(i instanceof Pe)t=k(i);else if(n=Me(t={},String(i)),n)throw TypeError(n);if(n=Me(s,o,null,t),n)throw TypeError(n);var c=s.searchParams=new w,u=L(c);u.updateSearchParams(s.query),u.updateURL=function(){s.query=String(c)||null},a||(r.href=Ue.call(r),r.origin=Be.call(r),r.protocol=Ae.call(r),r.username=_e.call(r),r.password=Ne.call(r),r.host=Oe.call(r),r.hostname=Te.call(r),r.port=Fe.call(r),r.pathname=Ce.call(r),r.search=qe.call(r),r.searchParams=De.call(r),r.hash=Ge.call(r))},je=Pe.prototype,Ue=function(){var e=k(this),t=e.scheme,n=e.username,r=e.password,i=e.host,a=e.port,o=e.path,s=e.query,c=e.fragment,u=t+":";return null!==i?(u+="//",W(e)&&(u+=n+(r?":"+r:"")+"@"),u+=X(i),null!==a&&(u+=":"+a)):"file"==t&&(u+="//"),u+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(u+="?"+s),null!==c&&(u+="#"+c),u},Be=function(){var e=k(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(r){return"null"}return"file"!=t&&Q(e)?t+"://"+X(e.host)+(null!==n?":"+n:""):"null"},Ae=function(){return k(this).scheme+":"},_e=function(){return k(this).username},Ne=function(){return k(this).password},Oe=function(){var e=k(this),t=e.host,n=e.port;return null===t?"":null===n?X(t):X(t)+":"+n},Te=function(){var e=k(this).host;return null===e?"":X(e)},Fe=function(){var e=k(this).port;return null===e?"":String(e)},Ce=function(){var e=k(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},qe=function(){var e=k(this).query;return e?"?"+e:""},De=function(){return k(this).searchParams},Ge=function(){var e=k(this).fragment;return e?"#"+e:""},Ie=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(a&&c(je,{href:Ie(Ue,(function(e){var t=k(this),n=String(e),r=Me(t,n);if(r)throw TypeError(r);L(t.searchParams).updateSearchParams(t.query)})),origin:Ie(Be),protocol:Ie(Ae,(function(e){var t=k(this);Me(t,String(e)+":",oe)})),username:Ie(_e,(function(e){var t=k(this),n=p(String(e));if(!ee(t)){t.username="";for(var r=0;r<n.length;r++)t.username+=Y(n[r],z)}})),password:Ie(Ne,(function(e){var t=k(this),n=p(String(e));if(!ee(t)){t.password="";for(var r=0;r<n.length;r++)t.password+=Y(n[r],z)}})),host:Ie(Oe,(function(e){var t=k(this);t.cannotBeABaseURL||Me(t,String(e),ve)})),hostname:Ie(Te,(function(e){var t=k(this);t.cannotBeABaseURL||Me(t,String(e),ge)})),port:Ie(Fe,(function(e){var t=k(this);ee(t)||(e=String(e),""==e?t.port=null:Me(t,e,ye))})),pathname:Ie(Ce,(function(e){var t=k(this);t.cannotBeABaseURL||(t.path=[],Me(t,e+"",xe))})),search:Ie(qe,(function(e){var t=k(this);e=String(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Me(t,e,Re)),L(t.searchParams).updateSearchParams(t.query)})),searchParams:Ie(De),hash:Ie(Ge,(function(e){var t=k(this);e=String(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Me(t,e,Ee)):t.fragment=null}))}),u(je,"toJSON",(function(){return Ue.call(this)}),{enumerable:!0}),u(je,"toString",(function(){return Ue.call(this)}),{enumerable:!0}),b){var Ve=b.createObjectURL,$e=b.revokeObjectURL;Ve&&u(Pe,"createObjectURL",(function(e){return Ve.apply(b,arguments)})),$e&&u(Pe,"revokeObjectURL",(function(e){return $e.apply(b,arguments)}))}v(Pe,"URL"),i({global:!0,forced:!o,sham:!a},{URL:Pe})}}]);
//# sourceMappingURL=chunk-f8bc1f92.ea160e9a.js.map