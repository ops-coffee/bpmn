(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08accfb1"],{"6d2e":function(e,t,n){"use strict";n("e576")},"70de":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"containers"},[n("div",{ref:"canvas",staticClass:"canvas"}),n("ul",{staticClass:"buttons"},[n("li",[n("a",{attrs:{href:"javascript:"},on:{click:function(t){return e.$refs.refFile.click()}}},[e._v("加载本地BPMN文件")]),n("input",{ref:"refFile",staticStyle:{display:"none"},attrs:{type:"file",id:"files"},on:{change:e.loadXML}})]),n("li",[n("a",{attrs:{href:"javascript:",title:"保存为bpmn"},on:{click:e.saveXML}},[e._v("保存为BPMN文件")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"保存为svg"},on:{click:e.saveSVG}},[e._v("保存为SVG图片")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"撤销操作"},on:{click:e.handlerUndo}},[e._v("撤销")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"恢复操作"},on:{click:e.handlerRedo}},[e._v("恢复")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"放大"},on:{click:function(t){return e.handlerZoom(.1)}}},[e._v("放大")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"缩小"},on:{click:function(t){return e.handlerZoom(-.1)}}},[e._v("缩小")])]),n("li",[n("a",{attrs:{href:"javascript:",title:"还原"},on:{click:function(t){return e.handlerZoom(0)}}},[e._v("还原")])])])])},a=[],i=n("60b5"),s=(n("9dfd"),n("27ae"),n("591f"),n("feb3"),n("1d43"),n("6a61"),n("bbd1")),o='<?xml version="1.0" encoding="UTF-8"?>\n<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">\n  <process id="Process_1" isExecutable="false">\n    <startEvent id="StartEvent_1y45yut" name="开始">\n      <outgoing>Flow_0jfbnmb</outgoing>\n    </startEvent>\n    <userTask id="Activity_1w1vj9r">\n      <incoming>Flow_0jfbnmb</incoming>\n    </userTask>\n    <sequenceFlow id="Flow_0jfbnmb" sourceRef="StartEvent_1y45yut" targetRef="Activity_1w1vj9r" />\n  </process>\n  <bpmndi:BPMNDiagram id="BpmnDiagram_1">\n    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">\n      <bpmndi:BPMNEdge id="Flow_0jfbnmb_di" bpmnElement="Flow_0jfbnmb">\n        <omgdi:waypoint x="188" y="120" />\n        <omgdi:waypoint x="300" y="120" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">\n        <omgdc:Bounds x="152" y="102" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <omgdc:Bounds x="160" y="145" width="22" height="14" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Activity_1w1vj9r_di" bpmnElement="Activity_1w1vj9r">\n        <omgdc:Bounds x="300" y="80" width="100" height="80" />\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</definitions>',c={name:"ops-coffee",mounted:function(){this.init()},data:function(){return{bpmnModeler:null,container:null,canvas:null,xmlStr:o}},methods:{init:function(){var e=this.$refs.canvas;this.bpmnModeler=new s["a"]({container:e}),this.createNewDiagram()},createNewDiagram:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.bpmnModeler.importXML(e.xmlStr);case 3:n=t.sent,r=n.warnings,console.log(r),e.success(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.message,t.t0.warnings);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},success:function(){this.addModelerListener(),this.addEventBusListener()},loadXML:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,r=e.$refs.refFile.files[0],a=new FileReader,a.readAsText(r),a.onload=function(){n.xmlStr=this.result,n.createNewDiagram()};case 5:case"end":return t.stop()}}),t)})))()},saveXML:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.bpmnModeler.saveXML({format:!0});case 3:n=t.sent,r=n.xml,a=new Blob([r],{type:"application/bpmn20-xml;charset=UTF-8,"}),i=document.createElement("a"),i.download="ops-coffee-bpmn.bpmn",i.innerHTML="Get BPMN SVG",i.href=window.URL.createObjectURL(a),i.onclick=function(e){document.body.removeChild(e.target)},i.style.visibility="hidden",document.body.appendChild(i),i.click(),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},saveSVG:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.bpmnModeler.saveSVG();case 3:n=t.sent,r=n.svg,a=new Blob([r],{type:"image/svg+xml"}),i=document.createElement("a"),i.download="ops-coffee-bpmn.svg",i.innerHTML="Get BPMN SVG",i.href=window.URL.createObjectURL(a),i.onclick=function(e){document.body.removeChild(e.target)},i.style.visibility="hidden",document.body.appendChild(i),i.click(),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},handlerRedo:function(){this.bpmnModeler.get("commandStack").redo()},handlerUndo:function(){this.bpmnModeler.get("commandStack").undo()},handlerZoom:function(e){var t=e?this.scale+e:1;this.bpmnModeler.get("canvas").zoom(t),this.scale=t},addModelerListener:function(){var e=this;e.bpmnModeler.on("element.click",(function(e){console.log("modelerListener",e)}))},addEventBusListener:function(){var e=this,t=this.bpmnModeler.get("eventBus");t.on("element.click",(function(t){e.elementClick(t)}))},elementClick:function(e){var t=this.bpmnModeler.get("modeling");"bpmn:StartEvent"===e.element.businessObject.$type&&(console.log("这是一个开始节点",e.element.businessObject.id,e.element.businessObject.$type,e.element.businessObject.name),t.updateProperties(e.element,{id:"StartEvent_ops_coffee"})),"bpmn:UserTask"===e.element.businessObject.$type&&(console.log("这是一个用户节点",e.element.businessObject.id,e.element.businessObject.$type,e.element.businessObject.name),t.updateProperties(e.element,{name:"ops-coffee.cn"}))}}},u=c,l=(n("6d2e"),n("5d22")),h=Object(l["a"])(u,r,a,!1,null,"6b53a61e",null);t["default"]=h.exports},"91ae":function(e,t,n){"use strict";n("31e1");var r=n("1f04"),a=n("902e"),i=n("e77e"),s=n("bbee"),o=n("6b78"),c=n("d1d6"),u=n("8b9c"),l=n("28d0"),h=n("e6a2"),f=n("2ccf"),p=n("0c1b"),d=n("07b4"),m=n("baa9"),v=n("97f5"),g=n("a447"),b=n("1f88"),w=n("a379"),y=n("203f"),k=n("3086"),L=a("fetch"),R=a("Headers"),x=k("iterator"),S="URLSearchParams",U=S+"Iterator",B=l.set,j=l.getterFor(S),M=l.getterFor(U),P=/\+/g,A=Array(4),E=function(e){return A[e-1]||(A[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},_=function(e){try{return decodeURIComponent(e)}catch(t){return e}},q=function(e){var t=e.replace(P," "),n=4;try{return decodeURIComponent(t)}catch(r){while(n)t=t.replace(E(n--),_);return t}},N=/[!'()~]|%20/g,C={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},F=function(e){return C[e]},O=function(e){return encodeURIComponent(e).replace(N,F)},D=function(e,t){if(t){var n,r,a=t.split("&"),i=0;while(i<a.length)n=a[i++],n.length&&(r=n.split("="),e.push({key:q(r.shift()),value:q(r.join("="))}))}},I=function(e){this.entries.length=0,D(this.entries,e)},T=function(e,t){if(e<t)throw TypeError("Not enough arguments")},$=u((function(e,t){B(this,{type:U,iterator:w(j(e).entries),kind:t})}),"Iterator",(function(){var e=M(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n})),G=function(){h(this,G,S);var e,t,n,r,a,i,s,o,c,u=arguments.length>0?arguments[0]:void 0,l=this,p=[];if(B(l,{type:S,entries:p,updateURL:function(){},updateSearchParams:I}),void 0!==u)if(v(u))if(e=y(u),"function"===typeof e){t=e.call(u),n=t.next;while(!(r=n.call(t)).done){if(a=w(m(r.value)),i=a.next,(s=i.call(a)).done||(o=i.call(a)).done||!i.call(a).done)throw TypeError("Expected sequence with length 2");p.push({key:s.value+"",value:o.value+""})}}else for(c in u)f(u,c)&&p.push({key:c,value:u[c]+""});else D(p,"string"===typeof u?"?"===u.charAt(0)?u.slice(1):u:u+"")},X=G.prototype;o(X,{append:function(e,t){T(arguments.length,2);var n=j(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){T(arguments.length,1);var t=j(this),n=t.entries,r=e+"",a=0;while(a<n.length)n[a].key===r?n.splice(a,1):a++;t.updateURL()},get:function(e){T(arguments.length,1);for(var t=j(this).entries,n=e+"",r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){T(arguments.length,1);for(var t=j(this).entries,n=e+"",r=[],a=0;a<t.length;a++)t[a].key===n&&r.push(t[a].value);return r},has:function(e){T(arguments.length,1);var t=j(this).entries,n=e+"",r=0;while(r<t.length)if(t[r++].key===n)return!0;return!1},set:function(e,t){T(arguments.length,1);for(var n,r=j(this),a=r.entries,i=!1,s=e+"",o=t+"",c=0;c<a.length;c++)n=a[c],n.key===s&&(i?a.splice(c--,1):(i=!0,n.value=o));i||a.push({key:s,value:o}),r.updateURL()},sort:function(){var e,t,n,r=j(this),a=r.entries,i=a.slice();for(a.length=0,n=0;n<i.length;n++){for(e=i[n],t=0;t<n;t++)if(a[t].key>e.key){a.splice(t,0,e);break}t===n&&a.push(e)}r.updateURL()},forEach:function(e){var t,n=j(this).entries,r=p(e,arguments.length>1?arguments[1]:void 0,3),a=0;while(a<n.length)t=n[a++],r(t.value,t.key,this)},keys:function(){return new $(this,"keys")},values:function(){return new $(this,"values")},entries:function(){return new $(this,"entries")}},{enumerable:!0}),s(X,x,X.entries),s(X,"toString",(function(){var e,t=j(this).entries,n=[],r=0;while(r<t.length)e=t[r++],n.push(O(e.key)+"="+O(e.value));return n.join("&")}),{enumerable:!0}),c(G,S),r({global:!0,forced:!i},{URLSearchParams:G}),i||"function"!=typeof L||"function"!=typeof R||r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,n,r,a=[e];return arguments.length>1&&(t=arguments[1],v(t)&&(n=t.body,d(n)===S&&(r=t.headers?new R(t.headers):new R,r.has("content-type")||r.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=g(t,{body:b(0,String(n)),headers:b(0,r)}))),a.push(t)),L.apply(this,a)}}),e.exports={URLSearchParams:G,getState:j}},"9dfd":function(e,t,n){"use strict";n("591f");var r,a=n("1f04"),i=n("8fe5"),s=n("e77e"),o=n("f14a"),c=n("e0d1"),u=n("bbee"),l=n("e6a2"),h=n("2ccf"),f=n("cc2e"),p=n("f180"),d=n("8e50").codeAt,m=n("a29a"),v=n("d1d6"),g=n("91ae"),b=n("28d0"),w=o.URL,y=g.URLSearchParams,k=g.getState,L=b.set,R=b.getterFor("URL"),x=Math.floor,S=Math.pow,U="Invalid authority",B="Invalid scheme",j="Invalid host",M="Invalid port",P=/[A-Za-z]/,A=/[\d+-.A-Za-z]/,E=/\d/,_=/^(0x|0X)/,q=/^[0-7]+$/,N=/^\d+$/,C=/^[\dA-Fa-f]+$/,F=/[\u0000\t\u000A\u000D #%/:?@[\\]]/,O=/[\u0000\t\u000A\u000D #/:?@[\\]]/,D=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,I=/[\t\u000A\u000D]/g,T=function(e,t){var n,r,a;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return j;if(n=G(t.slice(1,-1)),!n)return j;e.host=n}else if(W(e)){if(t=m(t),F.test(t))return j;if(n=$(t),null===n)return j;e.host=n}else{if(O.test(t))return j;for(n="",r=p(t),a=0;a<r.length;a++)n+=K(r[a],Z);e.host=n}},$=function(e){var t,n,r,a,i,s,o,c=e.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),t=c.length,t>4)return e;for(n=[],r=0;r<t;r++){if(a=c[r],""==a)return e;if(i=10,a.length>1&&"0"==a.charAt(0)&&(i=_.test(a)?16:8,a=a.slice(8==i?1:2)),""===a)s=0;else{if(!(10==i?N:8==i?q:C).test(a))return e;s=parseInt(a,i)}n.push(s)}for(r=0;r<t;r++)if(s=n[r],r==t-1){if(s>=S(256,5-t))return null}else if(s>255)return null;for(o=n.pop(),r=0;r<n.length;r++)o+=n[r]*S(256,3-r);return o},G=function(e){var t,n,r,a,i,s,o,c=[0,0,0,0,0,0,0,0],u=0,l=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,u++,l=u}while(f()){if(8==u)return;if(":"!=f()){t=n=0;while(n<4&&C.test(f()))t=16*t+parseInt(f(),16),h++,n++;if("."==f()){if(0==n)return;if(h-=n,u>6)return;r=0;while(f()){if(a=null,r>0){if(!("."==f()&&r<4))return;h++}if(!E.test(f()))return;while(E.test(f())){if(i=parseInt(f(),10),null===a)a=i;else{if(0==a)return;a=10*a+i}if(a>255)return;h++}c[u]=256*c[u]+a,r++,2!=r&&4!=r||u++}if(4!=r)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;c[u++]=t}else{if(null!==l)return;h++,u++,l=u}}if(null!==l){s=u-l,u=7;while(0!=u&&s>0)o=c[u],c[u--]=c[l+s-1],c[l+--s]=o}else if(8!=u)return;return c},X=function(e){for(var t=null,n=1,r=null,a=0,i=0;i<8;i++)0!==e[i]?(a>n&&(t=r,n=a),r=null,a=0):(null===r&&(r=i),++a);return a>n&&(t=r,n=a),t},V=function(e){var t,n,r,a;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=x(e/256);return t.join(".")}if("object"==typeof e){for(t="",r=X(e),n=0;n<8;n++)a&&0===e[n]||(a&&(a=!1),r===n?(t+=n?":":"::",a=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},Z={},J=f({},Z,{" ":1,'"':1,"<":1,">":1,"`":1}),z=f({},J,{"#":1,"?":1,"{":1,"}":1}),H=f({},z,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),K=function(e,t){var n=d(e,0);return n>32&&n<127&&!h(t,e)?e:encodeURIComponent(e)},Q={ftp:21,file:null,http:80,https:443,ws:80,wss:443},W=function(e){return h(Q,e.scheme)},Y=function(e){return""!=e.username||""!=e.password},ee=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},te=function(e,t){var n;return 2==e.length&&P.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},ne=function(e){var t;return e.length>1&&te(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},re=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&te(t[0],!0)||t.pop()},ae=function(e){return"."===e||"%2e"===e.toLowerCase()},ie=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},se={},oe={},ce={},ue={},le={},he={},fe={},pe={},de={},me={},ve={},ge={},be={},we={},ye={},ke={},Le={},Re={},xe={},Se={},Ue={},Be=function(e,t,n,a){var i,s,o,c,u=n||se,l=0,f="",d=!1,m=!1,v=!1;n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(D,"")),t=t.replace(I,""),i=p(t);while(l<=i.length){switch(s=i[l],u){case se:if(!s||!P.test(s)){if(n)return B;u=ce;continue}f+=s.toLowerCase(),u=oe;break;case oe:if(s&&(A.test(s)||"+"==s||"-"==s||"."==s))f+=s.toLowerCase();else{if(":"!=s){if(n)return B;f="",u=ce,l=0;continue}if(n&&(W(e)!=h(Q,f)||"file"==f&&(Y(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,n)return void(W(e)&&Q[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?u=we:W(e)&&a&&a.scheme==e.scheme?u=ue:W(e)?u=pe:"/"==i[l+1]?(u=le,l++):(e.cannotBeABaseURL=!0,e.path.push(""),u=xe)}break;case ce:if(!a||a.cannotBeABaseURL&&"#"!=s)return B;if(a.cannotBeABaseURL&&"#"==s){e.scheme=a.scheme,e.path=a.path.slice(),e.query=a.query,e.fragment="",e.cannotBeABaseURL=!0,u=Ue;break}u="file"==a.scheme?we:he;continue;case ue:if("/"!=s||"/"!=i[l+1]){u=he;continue}u=de,l++;break;case le:if("/"==s){u=me;break}u=Re;continue;case he:if(e.scheme=a.scheme,s==r)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query;else if("/"==s||"\\"==s&&W(e))u=fe;else if("?"==s)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query="",u=Se;else{if("#"!=s){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.path.pop(),u=Re;continue}e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query,e.fragment="",u=Ue}break;case fe:if(!W(e)||"/"!=s&&"\\"!=s){if("/"!=s){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,u=Re;continue}u=me}else u=de;break;case pe:if(u=de,"/"!=s||"/"!=f.charAt(l+1))continue;l++;break;case de:if("/"!=s&&"\\"!=s){u=me;continue}break;case me:if("@"==s){d&&(f="%40"+f),d=!0,o=p(f);for(var g=0;g<o.length;g++){var b=o[g];if(":"!=b||v){var w=K(b,H);v?e.password+=w:e.username+=w}else v=!0}f=""}else if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&W(e)){if(d&&""==f)return U;l-=p(f).length+1,f="",u=ve}else f+=s;break;case ve:case ge:if(n&&"file"==e.scheme){u=ke;continue}if(":"!=s||m){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&W(e)){if(W(e)&&""==f)return j;if(n&&""==f&&(Y(e)||null!==e.port))return;if(c=T(e,f),c)return c;if(f="",u=Le,n)return;continue}"["==s?m=!0:"]"==s&&(m=!1),f+=s}else{if(""==f)return j;if(c=T(e,f),c)return c;if(f="",u=be,n==ge)return}break;case be:if(!E.test(s)){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&W(e)||n){if(""!=f){var y=parseInt(f,10);if(y>65535)return M;e.port=W(e)&&y===Q[e.scheme]?null:y,f=""}if(n)return;u=Le;continue}return M}f+=s;break;case we:if(e.scheme="file","/"==s||"\\"==s)u=ye;else{if(!a||"file"!=a.scheme){u=Re;continue}if(s==r)e.host=a.host,e.path=a.path.slice(),e.query=a.query;else if("?"==s)e.host=a.host,e.path=a.path.slice(),e.query="",u=Se;else{if("#"!=s){ne(i.slice(l).join(""))||(e.host=a.host,e.path=a.path.slice(),re(e)),u=Re;continue}e.host=a.host,e.path=a.path.slice(),e.query=a.query,e.fragment="",u=Ue}}break;case ye:if("/"==s||"\\"==s){u=ke;break}a&&"file"==a.scheme&&!ne(i.slice(l).join(""))&&(te(a.path[0],!0)?e.path.push(a.path[0]):e.host=a.host),u=Re;continue;case ke:if(s==r||"/"==s||"\\"==s||"?"==s||"#"==s){if(!n&&te(f))u=Re;else if(""==f){if(e.host="",n)return;u=Le}else{if(c=T(e,f),c)return c;if("localhost"==e.host&&(e.host=""),n)return;f="",u=Le}continue}f+=s;break;case Le:if(W(e)){if(u=Re,"/"!=s&&"\\"!=s)continue}else if(n||"?"!=s)if(n||"#"!=s){if(s!=r&&(u=Re,"/"!=s))continue}else e.fragment="",u=Ue;else e.query="",u=Se;break;case Re:if(s==r||"/"==s||"\\"==s&&W(e)||!n&&("?"==s||"#"==s)){if(ie(f)?(re(e),"/"==s||"\\"==s&&W(e)||e.path.push("")):ae(f)?"/"==s||"\\"==s&&W(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&te(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(s==r||"?"==s||"#"==s))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==s?(e.query="",u=Se):"#"==s&&(e.fragment="",u=Ue)}else f+=K(s,z);break;case xe:"?"==s?(e.query="",u=Se):"#"==s?(e.fragment="",u=Ue):s!=r&&(e.path[0]+=K(s,Z));break;case Se:n||"#"!=s?s!=r&&("'"==s&&W(e)?e.query+="%27":e.query+="#"==s?"%23":K(s,Z)):(e.fragment="",u=Ue);break;case Ue:s!=r&&(e.fragment+=K(s,J));break}l++}},je=function(e){var t,n,r=l(this,je,"URL"),a=arguments.length>1?arguments[1]:void 0,s=String(e),o=L(r,{type:"URL"});if(void 0!==a)if(a instanceof je)t=R(a);else if(n=Be(t={},String(a)),n)throw TypeError(n);if(n=Be(o,s,null,t),n)throw TypeError(n);var c=o.searchParams=new y,u=k(c);u.updateSearchParams(o.query),u.updateURL=function(){o.query=String(c)||null},i||(r.href=Pe.call(r),r.origin=Ae.call(r),r.protocol=Ee.call(r),r.username=_e.call(r),r.password=qe.call(r),r.host=Ne.call(r),r.hostname=Ce.call(r),r.port=Fe.call(r),r.pathname=Oe.call(r),r.search=De.call(r),r.searchParams=Ie.call(r),r.hash=Te.call(r))},Me=je.prototype,Pe=function(){var e=R(this),t=e.scheme,n=e.username,r=e.password,a=e.host,i=e.port,s=e.path,o=e.query,c=e.fragment,u=t+":";return null!==a?(u+="//",Y(e)&&(u+=n+(r?":"+r:"")+"@"),u+=V(a),null!==i&&(u+=":"+i)):"file"==t&&(u+="//"),u+=e.cannotBeABaseURL?s[0]:s.length?"/"+s.join("/"):"",null!==o&&(u+="?"+o),null!==c&&(u+="#"+c),u},Ae=function(){var e=R(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(r){return"null"}return"file"!=t&&W(e)?t+"://"+V(e.host)+(null!==n?":"+n:""):"null"},Ee=function(){return R(this).scheme+":"},_e=function(){return R(this).username},qe=function(){return R(this).password},Ne=function(){var e=R(this),t=e.host,n=e.port;return null===t?"":null===n?V(t):V(t)+":"+n},Ce=function(){var e=R(this).host;return null===e?"":V(e)},Fe=function(){var e=R(this).port;return null===e?"":String(e)},Oe=function(){var e=R(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},De=function(){var e=R(this).query;return e?"?"+e:""},Ie=function(){return R(this).searchParams},Te=function(){var e=R(this).fragment;return e?"#"+e:""},$e=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(i&&c(Me,{href:$e(Pe,(function(e){var t=R(this),n=String(e),r=Be(t,n);if(r)throw TypeError(r);k(t.searchParams).updateSearchParams(t.query)})),origin:$e(Ae),protocol:$e(Ee,(function(e){var t=R(this);Be(t,String(e)+":",se)})),username:$e(_e,(function(e){var t=R(this),n=p(String(e));if(!ee(t)){t.username="";for(var r=0;r<n.length;r++)t.username+=K(n[r],H)}})),password:$e(qe,(function(e){var t=R(this),n=p(String(e));if(!ee(t)){t.password="";for(var r=0;r<n.length;r++)t.password+=K(n[r],H)}})),host:$e(Ne,(function(e){var t=R(this);t.cannotBeABaseURL||Be(t,String(e),ve)})),hostname:$e(Ce,(function(e){var t=R(this);t.cannotBeABaseURL||Be(t,String(e),ge)})),port:$e(Fe,(function(e){var t=R(this);ee(t)||(e=String(e),""==e?t.port=null:Be(t,e,be))})),pathname:$e(Oe,(function(e){var t=R(this);t.cannotBeABaseURL||(t.path=[],Be(t,e+"",Le))})),search:$e(De,(function(e){var t=R(this);e=String(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Be(t,e,Se)),k(t.searchParams).updateSearchParams(t.query)})),searchParams:$e(Ie),hash:$e(Te,(function(e){var t=R(this);e=String(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Be(t,e,Ue)):t.fragment=null}))}),u(Me,"toJSON",(function(){return Pe.call(this)}),{enumerable:!0}),u(Me,"toString",(function(){return Pe.call(this)}),{enumerable:!0}),w){var Ge=w.createObjectURL,Xe=w.revokeObjectURL;Ge&&u(je,"createObjectURL",(function(e){return Ge.apply(w,arguments)})),Xe&&u(je,"revokeObjectURL",(function(e){return Xe.apply(w,arguments)}))}v(je,"URL"),a({global:!0,forced:!s,sham:!i},{URL:je})},a29a:function(e,t,n){"use strict";var r=2147483647,a=36,i=1,s=26,o=38,c=700,u=72,l=128,h="-",f=/[^\0-\u007E]/,p=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",m=a-i,v=Math.floor,g=String.fromCharCode,b=function(e){var t=[],n=0,r=e.length;while(n<r){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);56320==(64512&i)?t.push(((1023&a)<<10)+(1023&i)+65536):(t.push(a),n--)}else t.push(a)}return t},w=function(e){return e+22+75*(e<26)},y=function(e,t,n){var r=0;for(e=n?v(e/c):e>>1,e+=v(e/t);e>m*s>>1;r+=a)e=v(e/m);return v(r+(m+1)*e/(e+o))},k=function(e){var t=[];e=b(e);var n,o,c=e.length,f=l,p=0,m=u;for(n=0;n<e.length;n++)o=e[n],o<128&&t.push(g(o));var k=t.length,L=k;k&&t.push(h);while(L<c){var R=r;for(n=0;n<e.length;n++)o=e[n],o>=f&&o<R&&(R=o);var x=L+1;if(R-f>v((r-p)/x))throw RangeError(d);for(p+=(R-f)*x,f=R,n=0;n<e.length;n++){if(o=e[n],o<f&&++p>r)throw RangeError(d);if(o==f){for(var S=p,U=a;;U+=a){var B=U<=m?i:U>=m+s?s:U-m;if(S<B)break;var j=S-B,M=a-B;t.push(g(w(B+j%M))),S=v(j/M)}t.push(g(w(S))),m=y(p,x,L==k),p=0,++L}}++p,++f}return t.join("")};e.exports=function(e){var t,n,r=[],a=e.toLowerCase().replace(p,".").split(".");for(t=0;t<a.length;t++)n=a[t],r.push(f.test(n)?"xn--"+k(n):n);return r.join(".")}},a379:function(e,t,n){var r=n("baa9"),a=n("203f");e.exports=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},e576:function(e,t,n){var r=n("ece3");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("5925").default;a("21f1bab1",r,!0,{sourceMap:!1,shadowMode:!1})},e77e:function(e,t,n){var r=n("7ce6"),a=n("3086"),i=n("941f"),s=a("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),i&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[s]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},ece3:function(e,t,n){var r=n("a1a8");t=r(!1),t.push([e.i,".containers[data-v-6b53a61e]{width:100%;height:calc(100vh - 60px)}.canvas[data-v-6b53a61e]{width:100%;height:100%}.buttons[data-v-6b53a61e]{position:absolute;left:20px;bottom:20px}.buttons li[data-v-6b53a61e]{display:inline-block;margin:5px}.buttons li a[data-v-6b53a61e]{color:#333;background:#fff;cursor:pointer;padding:8px;border:1px solid #ccc;text-decoration:none}",""]),e.exports=t},f180:function(e,t,n){"use strict";var r=n("0c1b"),a=n("f8d3"),i=n("fd17"),s=n("1a0a"),o=n("a187"),c=n("98a5"),u=n("203f");e.exports=function(e){var t,n,l,h,f,p,d=a(e),m="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,b=void 0!==g,w=u(d),y=0;if(b&&(g=r(g,v>2?arguments[2]:void 0,2)),void 0==w||m==Array&&s(w))for(t=o(d.length),n=new m(t);t>y;y++)p=b?g(d[y],y):d[y],c(n,y,p);else for(h=w.call(d),f=h.next,n=new m;!(l=f.call(h)).done;y++)p=b?i(h,g,[l.value,y],!0):l.value,c(n,y,p);return n.length=y,n}},fd17:function(e,t,n){var r=n("baa9"),a=n("cd08");e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(s){throw a(e),s}}}}]);
//# sourceMappingURL=chunk-08accfb1.f2f3f773.js.map