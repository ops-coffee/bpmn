(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2eebccf4"],{"7f86":function(e,t,a){"use strict";var n=a("d090"),s=a.n(n);s.a},c5d9:function(e,t,a){var n=a("a1a8f");t=n(!1),t.push([e.i,".containers[data-v-871ef1c8]{background:#fff;overflow:auto;background-image:linear-gradient(90deg,hsla(0,0%,86.3%,.5) 6%,transparent 0),linear-gradient(hsla(0,0%,75.3%,.5) 6%,transparent 0);background-size:12px 12px;width:100%;height:calc(100vh - 60px);-webkit-tap-highlight-color:rgba(255,255,255,0)}.canvas[data-v-871ef1c8]{width:100%;height:100%}.panel[data-v-871ef1c8]{right:0;top:0;width:300px}.buttons[data-v-871ef1c8],.panel[data-v-871ef1c8]{position:absolute}.buttons[data-v-871ef1c8]{left:20px;bottom:20px}.buttons li[data-v-871ef1c8]{display:inline-block;margin:5px}.buttons li a[data-v-871ef1c8]{color:#999;background:#eee;cursor:not-allowed;padding:8px;border:1px solid #ccc;text-decoration:none}.buttons li a.active[data-v-871ef1c8]{color:#333;background:#fff;cursor:pointer}.demo-drawer-footer[data-v-871ef1c8]{width:100%;position:absolute;bottom:0;left:0;border-top:1px solid #e8e8e8;padding:10px 16px;text-align:right;background:#fff}",""]),e.exports=t},d044:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"containers"},[a("div",{ref:"canvas",staticClass:"canvas"}),a("ul",{staticClass:"buttons"},[a("li",[a("a",{ref:"saveXML",staticClass:"active",attrs:{href:"javascript:",title:"保存为bpmn"}},[e._v("保存为bpmn")])]),a("li",[a("a",{ref:"saveSvg",staticClass:"active",attrs:{href:"javascript:",title:"保存为svg"}},[e._v("保存为svg")])]),a("li",[a("a",{staticClass:"active",attrs:{href:"javascript:",title:"撤销操作"},on:{click:e.handlerUndo}},[e._v("撤销")])]),a("li",[a("a",{staticClass:"active",attrs:{href:"javascript:",title:"恢复操作"},on:{click:e.handlerRedo}},[e._v("恢复")])]),a("li",[a("a",{staticClass:"active",attrs:{href:"javascript:",title:"放大"},on:{click:function(t){return e.handlerZoom(.1)}}},[e._v("放大")])]),a("li",[a("a",{staticClass:"active",attrs:{href:"javascript:",title:"缩小"},on:{click:function(t){return e.handlerZoom(-.1)}}},[e._v("缩小")])]),a("li",[a("a",{staticClass:"active",attrs:{href:"javascript:",title:"还原"},on:{click:function(t){return e.handlerZoom(0)}}},[e._v("还原")])])]),a("Drawer",{attrs:{title:"Create",width:"720","mask-closable":!1},model:{value:e.userTask,callback:function(t){e.userTask=t},expression:"userTask"}},[a("Form",{attrs:{model:e.formData}},[a("FormItem",{attrs:{label:"节点类型","label-position":"top"}},[a("Input",{attrs:{disabled:""},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}})],1),a("FormItem",{attrs:{label:"节点名称","label-position":"top"}},[a("Input",{attrs:{placeholder:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("FormItem",{attrs:{label:"处理场景","label-position":"top"}},[a("Select",[a("Option",{attrs:{value:"beijing"}},[e._v("先派单后处理")]),a("Option",{attrs:{value:"shanghai",disabled:""}},[e._v("London")]),a("Option",{attrs:{value:"shenzhen"}},[e._v("Sydney")])],1)],1),a("FormItem",{attrs:{label:"处理人","label-position":"top"}},[a("Select",{attrs:{multiple:""}},[a("Option",{attrs:{value:"beijing"}},[e._v("ops-coffee")]),a("Option",{attrs:{value:"shanghai",disabled:""}},[e._v("London")]),a("Option",{attrs:{value:"shenzhen"}},[e._v("Sydney")])],1)],1),a("FormItem",{attrs:{label:"是否可转单","label-position":"top"}},[a("RadioGroup",[a("Radio",{attrs:{label:"yes"}},[a("span",[e._v("是")])]),a("Radio",{attrs:{label:"no"}},[a("span",[e._v("否")])])],1)],1),a("FormItem",{attrs:{label:"是否可终止","label-position":"top"}},[a("RadioGroup",[a("Radio",{attrs:{label:"yes"}},[a("span",[e._v("是")])]),a("Radio",{attrs:{label:"no"}},[a("span",[e._v("否")])])],1)],1)],1),a("div",{staticClass:"demo-drawer-footer"},[a("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(t){e.userTask=!1}}},[e._v("Cancel")]),a("Button",{attrs:{type:"primary"},on:{click:function(t){e.userTask=!1}}},[e._v("Submit")])],1)],1),a("Drawer",{attrs:{title:"Create",width:"720","mask-closable":!1},model:{value:e.serviceTask,callback:function(t){e.serviceTask=t},expression:"serviceTask"}},[a("Form",{attrs:{model:e.formData}},[a("FormItem",{attrs:{label:"节点类型","label-position":"top"}},[a("Input",{attrs:{disabled:""},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}})],1),a("FormItem",{attrs:{label:"节点名称","label-position":"top"}},[a("Input",{attrs:{placeholder:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("FormItem",{attrs:{label:"URL","label-position":"top"}},[a("Input",{attrs:{placeholder:""},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),a("FormItem",{attrs:{label:"","label-position":"top"}},[a("RadioGroup",[a("Radio",{attrs:{label:"get"}},[a("span",[e._v("GET")])]),a("Radio",{attrs:{label:"post"}},[a("span",[e._v("POST")])]),a("Radio",{attrs:{label:"put"}},[a("span",[e._v("PUT")])]),a("Radio",{attrs:{label:"delete"}},[a("span",[e._v("DELETE")])])],1)],1),a("FormItem",{attrs:{label:"Header","label-position":"top"}},[a("Input",{attrs:{placeholder:""},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),a("FormItem",{attrs:{label:"参数","label-position":"top"}},[a("Input",{attrs:{type:"textarea",rows:4,placeholder:""},model:{value:e.formData.desc,callback:function(t){e.$set(e.formData,"desc",t)},expression:"formData.desc"}})],1)],1),a("div",{staticClass:"demo-drawer-footer"},[a("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(t){e.serviceTask=!1}}},[e._v("Cancel")]),a("Button",{attrs:{type:"primary"},on:{click:function(t){e.serviceTask=!1}}},[e._v("Submit")])],1)],1),a("Drawer",{attrs:{title:"Create",width:"720","mask-closable":!1},model:{value:e.scriptTask,callback:function(t){e.scriptTask=t},expression:"scriptTask"}},[a("Form",{attrs:{model:e.formData}},[a("FormItem",{attrs:{label:"状态","label-position":"top"}},[a("RadioGroup",{model:{value:e.sequenceFlow,callback:function(t){e.sequenceFlow=t},expression:"sequenceFlow"}},[a("Radio",{attrs:{label:"通过"}},[a("span",[e._v("通过")])]),a("Radio",{attrs:{label:"不通过"}},[a("span",[e._v("不通过")])])],1)],1),a("FormItem",{attrs:{label:"条件表达式","label-position":"top"}},[a("Input",{attrs:{placeholder:""}})],1)],1),a("div",{staticClass:"demo-drawer-footer"},[a("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(t){e.scriptTask=!1}}},[e._v("Cancel")]),a("Button",{attrs:{type:"primary"},on:{click:function(t){e.scriptTask=!1}}},[e._v("Submit")])],1)],1)],1)},s=[],r=(a("fe59"),a("053b"),a("6a61"),a("cf7f")),o=a("65fd"),i=a("bf4a"),l={name:"",components:{},created:function(){},mounted:function(){this.init()},data:function(){return{bpmnModeler:null,container:null,canvas:null,scale:1,userTask:!1,serviceTask:!1,scriptTask:!1,sequenceFlow:"",formData:{name:"",type:""}}},methods:{init:function(){var e=this.$refs.canvas;this.bpmnModeler=new i["a"]({container:e,additionalModules:[{labelEditingProvider:["value",""]}]}),this.createNewDiagram()},createNewDiagram:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.bpmnModeler.importXML(o["a"]);case 3:a=t.sent,n=a.warnings,console.log(n),e.success(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.message,t.t0.warnings);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},success:function(){this.addBpmnListener(),this.addModelerListener(),this.addEventBusListener()},addModelerListener:function(){var e=this.bpmnModeler,t=this,a=["shape.added","shape.move.end","shape.removed","connect.end","connect.move"];a.forEach((function(a){t.bpmnModeler.on(a,(function(t){console.log(a,t);var n=e.get("elementRegistry"),s=t.element?n.get(t.element.id):t.shape;console.log(s)}))}))},addBpmnListener:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,s,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=function(){return i=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.saveSVG();case 3:t=e.sent,r=t.svg,a.setEncoded(s,"ops-coffee.svg",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:return e.prev=11,e.next=14,a.saveXML();case 14:o=e.sent,i=o.xml,a.setEncoded(n,"ops-coffee.bpmn",i),e.next=22;break;case 19:e.prev=19,e.t1=e["catch"](11),console.log(e.t1);case 22:case"end":return e.stop()}}),e,null,[[0,8],[11,19]])}))),i.apply(this,arguments)},o=function(){return i.apply(this,arguments)},a=e,n=e.$refs.saveXML,s=e.$refs.saveSvg,o(),e.bpmnModeler.on("commandStack.changed",o);case 7:case"end":return t.stop()}}),t)})))()},saveSVG:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.bpmnModeler.saveSVG(e);case 3:return n=a.sent,a.abrupt("return",n);case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},saveXML:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.bpmnModeler.saveXML({format:!0},e);case 3:return n=a.sent,a.abrupt("return",n);case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},setEncoded:function(e,t,a){var n=encodeURIComponent(a);a&&(e.href="data:application/bpmn20-xml;charset=UTF-8,"+n,e.download=t)},handlerRedo:function(){this.bpmnModeler.get("commandStack").redo()},handlerUndo:function(){this.bpmnModeler.get("commandStack").undo()},handlerZoom:function(e){var t=e?this.scale+e:1;this.bpmnModeler.get("canvas").zoom(t),this.scale=t},addEventBusListener:function(){var e=this.bpmnModeler.get("eventBus"),t=this.bpmnModeler.get("modeling"),a=this.bpmnModeler.get("elementRegistry");e.on("element.click",(function(e){if(console.log("点击了element",e.element.businessObject.id,e.element.businessObject.$type,e.element.businessObject.name),"bpmn:SequenceFlow"==e.element.businessObject.$type){var n=e.element.businessObject.sourceRef;if("bpmn:ExclusiveGateway"==n.$type){var s=a.get(n.id);t.updateProperties(s,{default:e.element.businessObject})}}}))}},computed:{task:{get:function(){var e=this,t=this.$store.state.bpmn.nodeInfo;return t.businessObject&&(console.log(t.businessObject.id,t.businessObject.name,t.businessObject.$type),"bpmn:UserTask"===t.businessObject.$type&&(e.formData.type="用户任务",e.formData.name=t.businessObject.name,e.userTask=this.$store.state.bpmn.nodeVisible),"bpmn:ServiceTask"===t.businessObject.$type&&(e.formData.type="服务任务",e.formData.name=t.businessObject.name,e.serviceTask=this.$store.state.bpmn.nodeVisible),"bpmn:ScriptTask"===t.businessObject.$type&&(e.formData.type="脚本任务",e.formData.name=t.businessObject.name,e.serviceTask=this.$store.state.bpmn.nodeVisible),"bpmn:SequenceFlow"===t.businessObject.$type&&(e.sequenceFlow=t.businessObject.name,e.scriptTask=this.$store.state.bpmn.nodeVisible)),!1},set:function(e){this.$store.state.bpmn.nodeVisible=e}}},watch:{task:function(e){},userTask:function(e){this.$store.state.bpmn.nodeVisible=e},serviceTask:function(e){this.$store.state.bpmn.nodeVisible=e},scriptTask:function(e){this.$store.state.bpmn.nodeVisible=e},sequenceFlow:function(e){var t=this.$store.state.bpmn.nodeInfo,a=this.bpmnModeler.get("modeling");a.updateLabel(t,e)},"formData.name":{handler:function(e,t){var a=this.$store.state.bpmn.nodeInfo,n=this.bpmnModeler.get("modeling");n.updateLabel(a,e)},deep:!0}}},c=l,p=(a("7f86"),a("9ca4")),u=Object(p["a"])(c,n,s,!1,null,"871ef1c8",null);t["default"]=u.exports},d090:function(e,t,a){var n=a("c5d9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("85cb4").default;s("34b3a37b",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-2eebccf4.e3e6288b.js.map