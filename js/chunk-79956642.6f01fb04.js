(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79956642"],{"064b":function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"12ff":function(e,t,r){var n=r("90ce");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("85cb").default;i("cfac9fa4",n,!0,{sourceMap:!1,shadowMode:!1})},"552c":function(e,t,r){"use strict";var n=r("12ff"),i=r.n(n);i.a},"6a61":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(A){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new M(n||[]);return a._invoke=R(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(A){return{type:"throw",arg:A}}}e.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function m(){}function g(){}function y(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,L=b&&b(b(j([])));L&&L!==r&&n.call(L,a)&&(w=L);var x=y.prototype=m.prototype=Object.create(w);function S(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(i,a,o,s){var c=l(e[i],e,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,s)}))}s(c.arg)}var i;function a(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function R(e,t,r){var n=h;return function(i,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw a;return B()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function U(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function j(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){while(++i<e.length)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:B}}function B(){return{value:t,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},S(k.prototype),k.prototype[o]=function(){return this},e.AsyncIterator=k,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new k(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},S(x),c(x,s,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(U),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),U(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;U(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"70de":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"containers"},[r("div",{ref:"canvas",staticClass:"canvas"}),r("ul",{staticClass:"buttons"},[r("li",[r("a",{attrs:{href:"javascript:"},on:{click:function(t){return e.$refs.refFile.click()}}},[e._v("加载本地BPMN文件")]),r("input",{ref:"refFile",staticStyle:{display:"none"},attrs:{type:"file",id:"files"},on:{change:e.loadXML}})]),r("li",[r("a",{attrs:{href:"javascript:",title:"保存为bpmn"},on:{click:e.saveXML}},[e._v("保存为BPMN文件")])]),r("li",[r("a",{attrs:{href:"javascript:",title:"保存为svg"},on:{click:e.saveSVG}},[e._v("保存为SVG图片")])]),r("li",[r("a",{attrs:{href:"javascript:",title:"撤销操作"},on:{click:e.handlerUndo}},[e._v("撤销")])]),r("li",[r("a",{attrs:{href:"javascript:",title:"恢复操作"},on:{click:e.handlerRedo}},[e._v("恢复")])]),r("li",[r("a",{attrs:{href:"javascript:",title:"放大"},on:{click:function(t){return e.handlerZoom(.1)}}},[e._v("放大")])]),r("li",[r("a",{attrs:{href:"javascript:",title:"缩小"},on:{click:function(t){return e.handlerZoom(-.1)}}},[e._v("缩小")])]),r("li",[r("a",{attrs:{href:"javascript:",title:"还原"},on:{click:function(t){return e.handlerZoom(0)}}},[e._v("还原")])])])])},i=[],a=(r("e18c"),r("96db"),r("af86"),r("f1a9"),r("6a61"),r("cf7f")),o=r("c11b"),s=r("db64"),c={name:"ops-coffee",mounted:function(){this.init()},data:function(){return{bpmnModeler:null,container:null,canvas:null,xmlStr:s["a"]}},methods:{init:function(){var e=this.$refs.canvas;this.bpmnModeler=new o["a"]({container:e}),this.createNewDiagram()},createNewDiagram:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.bpmnModeler.importXML(e.xmlStr);case 3:r=t.sent,n=r.warnings,console.log(n),e.success(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.message,t.t0.warnings);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},success:function(){this.addBpmnListener()},loadXML:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,n=e.$refs.refFile.files[0],i=new FileReader,i.readAsText(n),i.onload=function(){r.xmlStr=this.result,r.createNewDiagram()};case 5:case"end":return t.stop()}}),t)})))()},saveXML:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.bpmnModeler.saveXML({format:!0});case 3:r=t.sent,n=r.xml,i=new Blob([n],{type:"application/bpmn20-xml;charset=UTF-8,"}),a=document.createElement("a"),a.download="ops-coffee-bpmn.bpmn",a.innerHTML="Get BPMN SVG",a.href=window.URL.createObjectURL(i),a.onclick=function(e){document.body.removeChild(e.target)},a.style.visibility="hidden",document.body.appendChild(a),a.click(),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},saveSVG:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.bpmnModeler.saveSVG();case 3:r=t.sent,n=r.svg,i=new Blob([n],{type:"image/svg+xml"}),a=document.createElement("a"),a.download="ops-coffee-bpmn.svg",a.innerHTML="Get BPMN SVG",a.href=window.URL.createObjectURL(i),a.onclick=function(e){document.body.removeChild(e.target)},a.style.visibility="hidden",document.body.appendChild(a),a.click(),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},handlerRedo:function(){this.bpmnModeler.get("commandStack").redo()},handlerUndo:function(){this.bpmnModeler.get("commandStack").undo()},handlerZoom:function(e){var t=e?this.scale+e:1;this.bpmnModeler.get("canvas").zoom(t),this.scale=t}}},u=c,l=(r("552c"),r("9ca4")),h=Object(l["a"])(u,n,i,!1,null,"11fad8f3",null);t["default"]=h.exports},"90ce":function(e,t,r){var n=r("a1a8");t=n(!1),t.push([e.i,".containers[data-v-11fad8f3]{width:100%;height:calc(100vh - 82px)}.canvas[data-v-11fad8f3]{width:100%;height:100%}.buttons[data-v-11fad8f3]{position:absolute;left:20px;bottom:20px}.buttons li[data-v-11fad8f3]{display:inline-block;margin:5px}.buttons li a[data-v-11fad8f3]{color:#333;background:#fff;cursor:pointer;padding:8px;border:1px solid #ccc;text-decoration:none}",""]),e.exports=t},"96db":function(e,t,r){"use strict";var n=r("f62c").charAt,i=r("b702"),a=r("99ee"),o="String Iterator",s=i.set,c=i.getterFor(o);a(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=c(this),r=t.string,i=t.index;return i>=r.length?{value:void 0,done:!0}:(e=n(r,i),t.index+=e.length,{value:e,done:!1})}))},"9d71":function(e,t,r){var n=r("efe2"),i=r("90fb"),a=r("9b9d"),o=i("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r="";return e.pathname="c%20d",t.forEach((function(e,n){t["delete"]("b"),r+=n+e})),a&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},af86:function(e,t,r){var n=r("d890"),i=r("064b"),a=r("a133"),o=r("0fc1"),s=r("90fb"),c=s("iterator"),u=s("toStringTag"),l=a.values;for(var h in i){var f=n[h],p=f&&f.prototype;if(p){if(p[c]!==l)try{o(p,c,l)}catch(v){p[c]=l}if(p[u]||o(p,u,h),i[h])for(var d in a)if(p[d]!==a[d])try{o(p,d,a[d])}catch(v){p[d]=a[d]}}}},c370:function(e,t,r){"use strict";r("a133");var n=r("1c8b"),i=r("6d7a"),a=r("9d71"),o=r("1944"),s=r("99ab"),c=r("27b5"),u=r("69fa"),l=r("b702"),h=r("c4e4"),f=r("faa8"),p=r("e349"),d=r("2a91"),v=r("857c"),m=r("a719"),g=r("6d60"),y=r("38b9"),w=r("d027"),b=r("b60f"),L=r("90fb"),x=i("fetch"),S=i("Headers"),k=L("iterator"),R="URLSearchParams",E=R+"Iterator",P=l.set,U=l.getterFor(R),M=l.getterFor(E),j=/\+/g,B=Array(4),A=function(e){return B[e-1]||(B[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},_=function(e){try{return decodeURIComponent(e)}catch(t){return e}},N=function(e){var t=e.replace(j," "),r=4;try{return decodeURIComponent(t)}catch(n){while(r)t=t.replace(A(r--),_);return t}},T=/[!'()~]|%20/g,F={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},O=function(e){return F[e]},q=function(e){return encodeURIComponent(e).replace(T,O)},C=function(e,t){if(t){var r,n,i=t.split("&"),a=0;while(a<i.length)r=i[a++],r.length&&(n=r.split("="),e.push({key:N(n.shift()),value:N(n.join("="))}))}},D=function(e){this.entries.length=0,C(this.entries,e)},G=function(e,t){if(e<t)throw TypeError("Not enough arguments")},I=u((function(e,t){P(this,{type:E,iterator:w(U(e).entries),kind:t})}),"Iterator",(function(){var e=M(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r})),V=function(){h(this,V,R);var e,t,r,n,i,a,o,s,c,u=arguments.length>0?arguments[0]:void 0,l=this,p=[];if(P(l,{type:R,entries:p,updateURL:function(){},updateSearchParams:D}),void 0!==u)if(m(u))if(e=b(u),"function"===typeof e){t=e.call(u),r=t.next;while(!(n=r.call(t)).done){if(i=w(v(n.value)),a=i.next,(o=a.call(i)).done||(s=a.call(i)).done||!a.call(i).done)throw TypeError("Expected sequence with length 2");p.push({key:o.value+"",value:s.value+""})}}else for(c in u)f(u,c)&&p.push({key:c,value:u[c]+""});else C(p,"string"===typeof u?"?"===u.charAt(0)?u.slice(1):u:u+"")},X=V.prototype;s(X,{append:function(e,t){G(arguments.length,2);var r=U(this);r.entries.push({key:e+"",value:t+""}),r.updateURL()},delete:function(e){G(arguments.length,1);var t=U(this),r=t.entries,n=e+"",i=0;while(i<r.length)r[i].key===n?r.splice(i,1):i++;t.updateURL()},get:function(e){G(arguments.length,1);for(var t=U(this).entries,r=e+"",n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){G(arguments.length,1);for(var t=U(this).entries,r=e+"",n=[],i=0;i<t.length;i++)t[i].key===r&&n.push(t[i].value);return n},has:function(e){G(arguments.length,1);var t=U(this).entries,r=e+"",n=0;while(n<t.length)if(t[n++].key===r)return!0;return!1},set:function(e,t){G(arguments.length,1);for(var r,n=U(this),i=n.entries,a=!1,o=e+"",s=t+"",c=0;c<i.length;c++)r=i[c],r.key===o&&(a?i.splice(c--,1):(a=!0,r.value=s));a||i.push({key:o,value:s}),n.updateURL()},sort:function(){var e,t,r,n=U(this),i=n.entries,a=i.slice();for(i.length=0,r=0;r<a.length;r++){for(e=a[r],t=0;t<r;t++)if(i[t].key>e.key){i.splice(t,0,e);break}t===r&&i.push(e)}n.updateURL()},forEach:function(e){var t,r=U(this).entries,n=p(e,arguments.length>1?arguments[1]:void 0,3),i=0;while(i<r.length)t=r[i++],n(t.value,t.key,this)},keys:function(){return new I(this,"keys")},values:function(){return new I(this,"values")},entries:function(){return new I(this,"entries")}},{enumerable:!0}),o(X,k,X.entries),o(X,"toString",(function(){var e,t=U(this).entries,r=[],n=0;while(n<t.length)e=t[n++],r.push(q(e.key)+"="+q(e.value));return r.join("&")}),{enumerable:!0}),c(V,R),n({global:!0,forced:!a},{URLSearchParams:V}),a||"function"!=typeof x||"function"!=typeof S||n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,r,n,i=[e];return arguments.length>1&&(t=arguments[1],m(t)&&(r=t.body,d(r)===R&&(n=t.headers?new S(t.headers):new S,n.has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=g(t,{body:y(0,String(r)),headers:y(0,n)}))),i.push(t)),x.apply(this,i)}}),e.exports={URLSearchParams:V,getState:U}},cf7f:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("e18c");function n(e,t,r,n,i,a,o){try{var s=e[a](o),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,c,"next",e)}function c(e){n(o,i,a,s,c,"throw",e)}s(void 0)}))}}},d027:function(e,t,r){var n=r("857c"),i=r("b60f");e.exports=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}},d812:function(e,t,r){"use strict";var n=2147483647,i=36,a=1,o=26,s=38,c=700,u=72,l=128,h="-",f=/[^\0-\u007E]/,p=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",v=i-a,m=Math.floor,g=String.fromCharCode,y=function(e){var t=[],r=0,n=e.length;while(r<n){var i=e.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){var a=e.charCodeAt(r++);56320==(64512&a)?t.push(((1023&i)<<10)+(1023&a)+65536):(t.push(i),r--)}else t.push(i)}return t},w=function(e){return e+22+75*(e<26)},b=function(e,t,r){var n=0;for(e=r?m(e/c):e>>1,e+=m(e/t);e>v*o>>1;n+=i)e=m(e/v);return m(n+(v+1)*e/(e+s))},L=function(e){var t=[];e=y(e);var r,s,c=e.length,f=l,p=0,v=u;for(r=0;r<e.length;r++)s=e[r],s<128&&t.push(g(s));var L=t.length,x=L;L&&t.push(h);while(x<c){var S=n;for(r=0;r<e.length;r++)s=e[r],s>=f&&s<S&&(S=s);var k=x+1;if(S-f>m((n-p)/k))throw RangeError(d);for(p+=(S-f)*k,f=S,r=0;r<e.length;r++){if(s=e[r],s<f&&++p>n)throw RangeError(d);if(s==f){for(var R=p,E=i;;E+=i){var P=E<=v?a:E>=v+o?o:E-v;if(R<P)break;var U=R-P,M=i-P;t.push(g(w(P+U%M))),R=m(U/M)}t.push(g(w(R))),v=b(p,k,x==L),p=0,++x}}++p,++f}return t.join("")};e.exports=function(e){var t,r,n=[],i=e.toLowerCase().replace(p,".").split(".");for(t=0;t<i.length;t++)r=i[t],n.push(f.test(r)?"xn--"+L(r):r);return n.join(".")}},db64:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n='<?xml version="1.0" encoding="UTF-8"?>\n<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">\n  <process id="Process_1" isExecutable="false">\n    <startEvent id="StartEvent_1y45yut" name="开始">\n      <outgoing>Flow_0jfbnmb</outgoing>\n    </startEvent>\n    <userTask id="Activity_1w1vj9r">\n      <incoming>Flow_0jfbnmb</incoming>\n    </userTask>\n    <sequenceFlow id="Flow_0jfbnmb" sourceRef="StartEvent_1y45yut" targetRef="Activity_1w1vj9r" />\n  </process>\n  <bpmndi:BPMNDiagram id="BpmnDiagram_1">\n    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">\n      <bpmndi:BPMNEdge id="Flow_0jfbnmb_di" bpmnElement="Flow_0jfbnmb">\n        <omgdi:waypoint x="188" y="120" />\n        <omgdi:waypoint x="300" y="120" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">\n        <omgdc:Bounds x="152" y="102" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <omgdc:Bounds x="160" y="145" width="22" height="14" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Activity_1w1vj9r_di" bpmnElement="Activity_1w1vj9r">\n        <omgdc:Bounds x="300" y="80" width="100" height="80" />\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</definitions>'},e62b:function(e,t,r){"use strict";var n=r("e349"),i=r("3553"),a=r("69c5"),o=r("98a9"),s=r("d88d"),c=r("1bbd"),u=r("b60f");e.exports=function(e){var t,r,l,h,f,p,d=i(e),v="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,y=void 0!==g,w=u(d),b=0;if(y&&(g=n(g,m>2?arguments[2]:void 0,2)),void 0==w||v==Array&&o(w))for(t=s(d.length),r=new v(t);t>b;b++)p=y?g(d[b],b):d[b],c(r,b,p);else for(h=w.call(d),f=h.next,r=new v;!(l=f.call(h)).done;b++)p=y?a(h,g,[l.value,b],!0):l.value,c(r,b,p);return r.length=b,r}},f1a9:function(e,t,r){"use strict";r("96db");var n,i=r("1c8b"),a=r("1e2c"),o=r("9d71"),s=r("d890"),c=r("dbe8"),u=r("1944"),l=r("c4e4"),h=r("faa8"),f=r("d8fc"),p=r("e62b"),d=r("f62c").codeAt,v=r("d812"),m=r("27b5"),g=r("c370"),y=r("b702"),w=s.URL,b=g.URLSearchParams,L=g.getState,x=y.set,S=y.getterFor("URL"),k=Math.floor,R=Math.pow,E="Invalid authority",P="Invalid scheme",U="Invalid host",M="Invalid port",j=/[A-Za-z]/,B=/[\d+-.A-Za-z]/,A=/\d/,_=/^(0x|0X)/,N=/^[0-7]+$/,T=/^\d+$/,F=/^[\dA-Fa-f]+$/,O=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,q=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,C=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,D=/[\u0009\u000A\u000D]/g,G=function(e,t){var r,n,i;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return U;if(r=V(t.slice(1,-1)),!r)return U;e.host=r}else if(Q(e)){if(t=v(t),O.test(t))return U;if(r=I(t),null===r)return U;e.host=r}else{if(q.test(t))return U;for(r="",n=p(t),i=0;i<n.length;i++)r+=Y(n[i],H);e.host=r}},I=function(e){var t,r,n,i,a,o,s,c=e.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),t=c.length,t>4)return e;for(r=[],n=0;n<t;n++){if(i=c[n],""==i)return e;if(a=10,i.length>1&&"0"==i.charAt(0)&&(a=_.test(i)?16:8,i=i.slice(8==a?1:2)),""===i)o=0;else{if(!(10==a?T:8==a?N:F).test(i))return e;o=parseInt(i,a)}r.push(o)}for(n=0;n<t;n++)if(o=r[n],n==t-1){if(o>=R(256,5-t))return null}else if(o>255)return null;for(s=r.pop(),n=0;n<r.length;n++)s+=r[n]*R(256,3-n);return s},V=function(e){var t,r,n,i,a,o,s,c=[0,0,0,0,0,0,0,0],u=0,l=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,u++,l=u}while(f()){if(8==u)return;if(":"!=f()){t=r=0;while(r<4&&F.test(f()))t=16*t+parseInt(f(),16),h++,r++;if("."==f()){if(0==r)return;if(h-=r,u>6)return;n=0;while(f()){if(i=null,n>0){if(!("."==f()&&n<4))return;h++}if(!A.test(f()))return;while(A.test(f())){if(a=parseInt(f(),10),null===i)i=a;else{if(0==i)return;i=10*i+a}if(i>255)return;h++}c[u]=256*c[u]+i,n++,2!=n&&4!=n||u++}if(4!=n)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;c[u++]=t}else{if(null!==l)return;h++,u++,l=u}}if(null!==l){o=u-l,u=7;while(0!=u&&o>0)s=c[u],c[u--]=c[l+o-1],c[l+--o]=s}else if(8!=u)return;return c},X=function(e){for(var t=null,r=1,n=null,i=0,a=0;a<8;a++)0!==e[a]?(i>r&&(t=n,r=i),n=null,i=0):(null===n&&(n=a),++i);return i>r&&(t=n,r=i),t},$=function(e){var t,r,n,i;if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=k(e/256);return t.join(".")}if("object"==typeof e){for(t="",n=X(e),r=0;r<8;r++)i&&0===e[r]||(i&&(i=!1),n===r?(t+=r?":":"::",i=!0):(t+=e[r].toString(16),r<7&&(t+=":")));return"["+t+"]"}return e},H={},Z=f({},H,{" ":1,'"':1,"<":1,">":1,"`":1}),J=f({},Z,{"#":1,"?":1,"{":1,"}":1}),z=f({},J,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Y=function(e,t){var r=d(e,0);return r>32&&r<127&&!h(t,e)?e:encodeURIComponent(e)},K={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Q=function(e){return h(K,e.scheme)},W=function(e){return""!=e.username||""!=e.password},ee=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},te=function(e,t){var r;return 2==e.length&&j.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},re=function(e){var t;return e.length>1&&te(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},ne=function(e){var t=e.path,r=t.length;!r||"file"==e.scheme&&1==r&&te(t[0],!0)||t.pop()},ie=function(e){return"."===e||"%2e"===e.toLowerCase()},ae=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},oe={},se={},ce={},ue={},le={},he={},fe={},pe={},de={},ve={},me={},ge={},ye={},we={},be={},Le={},xe={},Se={},ke={},Re={},Ee={},Pe=function(e,t,r,i){var a,o,s,c,u=r||oe,l=0,f="",d=!1,v=!1,m=!1;r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(C,"")),t=t.replace(D,""),a=p(t);while(l<=a.length){switch(o=a[l],u){case oe:if(!o||!j.test(o)){if(r)return P;u=ce;continue}f+=o.toLowerCase(),u=se;break;case se:if(o&&(B.test(o)||"+"==o||"-"==o||"."==o))f+=o.toLowerCase();else{if(":"!=o){if(r)return P;f="",u=ce,l=0;continue}if(r&&(Q(e)!=h(K,f)||"file"==f&&(W(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,r)return void(Q(e)&&K[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?u=we:Q(e)&&i&&i.scheme==e.scheme?u=ue:Q(e)?u=pe:"/"==a[l+1]?(u=le,l++):(e.cannotBeABaseURL=!0,e.path.push(""),u=ke)}break;case ce:if(!i||i.cannotBeABaseURL&&"#"!=o)return P;if(i.cannotBeABaseURL&&"#"==o){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,u=Ee;break}u="file"==i.scheme?we:he;continue;case ue:if("/"!=o||"/"!=a[l+1]){u=he;continue}u=de,l++;break;case le:if("/"==o){u=ve;break}u=Se;continue;case he:if(e.scheme=i.scheme,o==n)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query;else if("/"==o||"\\"==o&&Q(e))u=fe;else if("?"==o)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",u=Re;else{if("#"!=o){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),u=Se;continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",u=Ee}break;case fe:if(!Q(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,u=Se;continue}u=ve}else u=de;break;case pe:if(u=de,"/"!=o||"/"!=f.charAt(l+1))continue;l++;break;case de:if("/"!=o&&"\\"!=o){u=ve;continue}break;case ve:if("@"==o){d&&(f="%40"+f),d=!0,s=p(f);for(var g=0;g<s.length;g++){var y=s[g];if(":"!=y||m){var w=Y(y,z);m?e.password+=w:e.username+=w}else m=!0}f=""}else if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Q(e)){if(d&&""==f)return E;l-=p(f).length+1,f="",u=me}else f+=o;break;case me:case ge:if(r&&"file"==e.scheme){u=Le;continue}if(":"!=o||v){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Q(e)){if(Q(e)&&""==f)return U;if(r&&""==f&&(W(e)||null!==e.port))return;if(c=G(e,f),c)return c;if(f="",u=xe,r)return;continue}"["==o?v=!0:"]"==o&&(v=!1),f+=o}else{if(""==f)return U;if(c=G(e,f),c)return c;if(f="",u=ye,r==ge)return}break;case ye:if(!A.test(o)){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Q(e)||r){if(""!=f){var b=parseInt(f,10);if(b>65535)return M;e.port=Q(e)&&b===K[e.scheme]?null:b,f=""}if(r)return;u=xe;continue}return M}f+=o;break;case we:if(e.scheme="file","/"==o||"\\"==o)u=be;else{if(!i||"file"!=i.scheme){u=Se;continue}if(o==n)e.host=i.host,e.path=i.path.slice(),e.query=i.query;else if("?"==o)e.host=i.host,e.path=i.path.slice(),e.query="",u=Re;else{if("#"!=o){re(a.slice(l).join(""))||(e.host=i.host,e.path=i.path.slice(),ne(e)),u=Se;continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",u=Ee}}break;case be:if("/"==o||"\\"==o){u=Le;break}i&&"file"==i.scheme&&!re(a.slice(l).join(""))&&(te(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),u=Se;continue;case Le:if(o==n||"/"==o||"\\"==o||"?"==o||"#"==o){if(!r&&te(f))u=Se;else if(""==f){if(e.host="",r)return;u=xe}else{if(c=G(e,f),c)return c;if("localhost"==e.host&&(e.host=""),r)return;f="",u=xe}continue}f+=o;break;case xe:if(Q(e)){if(u=Se,"/"!=o&&"\\"!=o)continue}else if(r||"?"!=o)if(r||"#"!=o){if(o!=n&&(u=Se,"/"!=o))continue}else e.fragment="",u=Ee;else e.query="",u=Re;break;case Se:if(o==n||"/"==o||"\\"==o&&Q(e)||!r&&("?"==o||"#"==o)){if(ae(f)?(ne(e),"/"==o||"\\"==o&&Q(e)||e.path.push("")):ie(f)?"/"==o||"\\"==o&&Q(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&te(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(o==n||"?"==o||"#"==o))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==o?(e.query="",u=Re):"#"==o&&(e.fragment="",u=Ee)}else f+=Y(o,J);break;case ke:"?"==o?(e.query="",u=Re):"#"==o?(e.fragment="",u=Ee):o!=n&&(e.path[0]+=Y(o,H));break;case Re:r||"#"!=o?o!=n&&("'"==o&&Q(e)?e.query+="%27":e.query+="#"==o?"%23":Y(o,H)):(e.fragment="",u=Ee);break;case Ee:o!=n&&(e.fragment+=Y(o,Z));break}l++}},Ue=function(e){var t,r,n=l(this,Ue,"URL"),i=arguments.length>1?arguments[1]:void 0,o=String(e),s=x(n,{type:"URL"});if(void 0!==i)if(i instanceof Ue)t=S(i);else if(r=Pe(t={},String(i)),r)throw TypeError(r);if(r=Pe(s,o,null,t),r)throw TypeError(r);var c=s.searchParams=new b,u=L(c);u.updateSearchParams(s.query),u.updateURL=function(){s.query=String(c)||null},a||(n.href=je.call(n),n.origin=Be.call(n),n.protocol=Ae.call(n),n.username=_e.call(n),n.password=Ne.call(n),n.host=Te.call(n),n.hostname=Fe.call(n),n.port=Oe.call(n),n.pathname=qe.call(n),n.search=Ce.call(n),n.searchParams=De.call(n),n.hash=Ge.call(n))},Me=Ue.prototype,je=function(){var e=S(this),t=e.scheme,r=e.username,n=e.password,i=e.host,a=e.port,o=e.path,s=e.query,c=e.fragment,u=t+":";return null!==i?(u+="//",W(e)&&(u+=r+(n?":"+n:"")+"@"),u+=$(i),null!==a&&(u+=":"+a)):"file"==t&&(u+="//"),u+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(u+="?"+s),null!==c&&(u+="#"+c),u},Be=function(){var e=S(this),t=e.scheme,r=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(n){return"null"}return"file"!=t&&Q(e)?t+"://"+$(e.host)+(null!==r?":"+r:""):"null"},Ae=function(){return S(this).scheme+":"},_e=function(){return S(this).username},Ne=function(){return S(this).password},Te=function(){var e=S(this),t=e.host,r=e.port;return null===t?"":null===r?$(t):$(t)+":"+r},Fe=function(){var e=S(this).host;return null===e?"":$(e)},Oe=function(){var e=S(this).port;return null===e?"":String(e)},qe=function(){var e=S(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Ce=function(){var e=S(this).query;return e?"?"+e:""},De=function(){return S(this).searchParams},Ge=function(){var e=S(this).fragment;return e?"#"+e:""},Ie=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(a&&c(Me,{href:Ie(je,(function(e){var t=S(this),r=String(e),n=Pe(t,r);if(n)throw TypeError(n);L(t.searchParams).updateSearchParams(t.query)})),origin:Ie(Be),protocol:Ie(Ae,(function(e){var t=S(this);Pe(t,String(e)+":",oe)})),username:Ie(_e,(function(e){var t=S(this),r=p(String(e));if(!ee(t)){t.username="";for(var n=0;n<r.length;n++)t.username+=Y(r[n],z)}})),password:Ie(Ne,(function(e){var t=S(this),r=p(String(e));if(!ee(t)){t.password="";for(var n=0;n<r.length;n++)t.password+=Y(r[n],z)}})),host:Ie(Te,(function(e){var t=S(this);t.cannotBeABaseURL||Pe(t,String(e),me)})),hostname:Ie(Fe,(function(e){var t=S(this);t.cannotBeABaseURL||Pe(t,String(e),ge)})),port:Ie(Oe,(function(e){var t=S(this);ee(t)||(e=String(e),""==e?t.port=null:Pe(t,e,ye))})),pathname:Ie(qe,(function(e){var t=S(this);t.cannotBeABaseURL||(t.path=[],Pe(t,e+"",xe))})),search:Ie(Ce,(function(e){var t=S(this);e=String(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Pe(t,e,Re)),L(t.searchParams).updateSearchParams(t.query)})),searchParams:Ie(De),hash:Ie(Ge,(function(e){var t=S(this);e=String(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Pe(t,e,Ee)):t.fragment=null}))}),u(Me,"toJSON",(function(){return je.call(this)}),{enumerable:!0}),u(Me,"toString",(function(){return je.call(this)}),{enumerable:!0}),w){var Ve=w.createObjectURL,Xe=w.revokeObjectURL;Ve&&u(Ue,"createObjectURL",(function(e){return Ve.apply(w,arguments)})),Xe&&u(Ue,"revokeObjectURL",(function(e){return Xe.apply(w,arguments)}))}m(Ue,"URL"),i({global:!0,forced:!o,sham:!a},{URL:Ue})}}]);
//# sourceMappingURL=chunk-79956642.6f01fb04.js.map