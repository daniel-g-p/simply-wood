(function(e){function t(t){for(var a,o,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(l.length)l.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},c={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-097fea68":"da92c241","chunk-0a605121":"ce50a5fa","chunk-21b64d68":"06ab6671","chunk-2d0c8fe7":"3a77a380","chunk-2d0ddc2a":"e770cad4","chunk-2d0e51f4":"103d2689","chunk-2d216f84":"dd862692","chunk-2d22d418":"ae60f512","chunk-2d22fdbd":"b1a0cd98","chunk-2d230aa2":"141caa46","chunk-392db2aa":"dd8b70e4","chunk-3cfa7a54":"f3219772","chunk-46b65735":"85282146","chunk-4a8d6940":"81224c69","chunk-4df2c258":"f5a8c594","chunk-613dee4a":"51097761","chunk-69bcd184":"25c7969c","chunk-6a607228":"cadf1f91","chunk-6f529d32":"0f0d1c01","chunk-71994cc8":"eebd68a2","chunk-778cd94c":"ea63f8e0","chunk-c92fcd52":"61e08bd3","chunk-d16f84a2":"5ff0a5c0","chunk-f48a5ee8":"e2049c5d","chunk-fd906bf2":"6f1e7b5b"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-097fea68":1,"chunk-0a605121":1,"chunk-21b64d68":1,"chunk-392db2aa":1,"chunk-3cfa7a54":1,"chunk-46b65735":1,"chunk-4a8d6940":1,"chunk-4df2c258":1,"chunk-613dee4a":1,"chunk-69bcd184":1,"chunk-6a607228":1,"chunk-6f529d32":1,"chunk-71994cc8":1,"chunk-778cd94c":1,"chunk-c92fcd52":1,"chunk-d16f84a2":1,"chunk-f48a5ee8":1,"chunk-fd906bf2":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-097fea68":"000c7584","chunk-0a605121":"f52f6cc7","chunk-21b64d68":"20d53d98","chunk-2d0c8fe7":"31d6cfe0","chunk-2d0ddc2a":"31d6cfe0","chunk-2d0e51f4":"31d6cfe0","chunk-2d216f84":"31d6cfe0","chunk-2d22d418":"31d6cfe0","chunk-2d22fdbd":"31d6cfe0","chunk-2d230aa2":"31d6cfe0","chunk-392db2aa":"32e7c409","chunk-3cfa7a54":"75ec250c","chunk-46b65735":"98d2099d","chunk-4a8d6940":"b98dea8d","chunk-4df2c258":"2353b036","chunk-613dee4a":"b23dac00","chunk-69bcd184":"00fec199","chunk-6a607228":"682da146","chunk-6f529d32":"aebee891","chunk-71994cc8":"29d7f41e","chunk-778cd94c":"3a7d1fd4","chunk-c92fcd52":"56d49a61","chunk-d16f84a2":"d5fa4256","chunk-f48a5ee8":"85d519a5","chunk-fd906bf2":"a19bd8d7"}[e]+".css",c=i.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var s=r[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===c))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===a||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],f.parentNode.removeChild(f),n(r)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){o[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"021f":function(e,t,n){},"0bc5":function(e,t,n){var a={"./HomeModule":["92af","chunk-2d0e51f4"],"./HomeModule.vue":["92af","chunk-2d0e51f4"],"./components/ContactLinks":["400d","chunk-778cd94c"],"./components/ContactLinks.vue":["400d","chunk-778cd94c"],"./components/DesktopNav":["1b44","chunk-69bcd184"],"./components/DesktopNav.vue":["1b44","chunk-69bcd184"],"./components/EditButton":["56f6","chunk-2d0c8fe7"],"./components/EditButton.vue":["56f6","chunk-2d0c8fe7"],"./components/IntroText":["7e99","chunk-6a607228"],"./components/IntroText.vue":["7e99","chunk-6a607228"],"./components/LanguageToggle":["09ea","chunk-4a8d6940"],"./components/LanguageToggle.vue":["09ea","chunk-4a8d6940"],"./components/MobileNav":["92c1","chunk-3cfa7a54"],"./components/MobileNav.vue":["92c1","chunk-3cfa7a54"],"./components/NavToggle":["afc6","chunk-0a605121"],"./components/NavToggle.vue":["afc6","chunk-0a605121"],"./router":["68a4"],"./router.js":["68a4"],"./store":["80a8"],"./store.js":["80a8"],"./views/HomePage":["dc0a","chunk-21b64d68"],"./views/HomePage.vue":["dc0a","chunk-21b64d68"]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id="0bc5",e.exports=o},"110c":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("1276"),n("b64b"),n("7db0"),n("99af");var a=n("ee10"),o=n("c0d6"),c={path:"/",component:function(){return n.e("chunk-2d22d418").then(n.bind(null,"f75f"))},beforeEnter:function(e,t,n){var a=e.fullPath.split("/")[1];a&&o["a"].dispatch("language/setActiveLanguage",a),n()},children:[]},r=function(){for(var e=["fr","nl","de","en"],t={},n=0,o=e;n<o.length;n++){var c=o[n],r=Object(a["a"])(c,"home","nav");t[c]=r}return t},u=function(e,t,a,o){for(var c=Object.keys(t),r=function(){var c=i[u],r=t[c].find((function(e){return e.routeName==="".concat(c).concat(a)}));e.children.push({path:"".concat(c,"/").concat(r.path),name:"".concat(r.routeName),component:function(){return n("d8ea")("".concat(o))}})},u=0,i=c;u<i.length;u++)r()};u(c,r(),"Contact","./views/ContactPage.vue"),t["default"]=c},"12db":function(e,t,n){"use strict";n("8045")},"189a":function(e,t,n){var a={"./AboutModule":["ecf4",9,"chunk-2d230aa2"],"./AboutModule.vue":["ecf4",9,"chunk-2d230aa2"],"./router":["abf8",9],"./router.js":["abf8",9],"./store":["c573",7,"chunk-2d216f84"],"./store.js":["c573",7,"chunk-2d216f84"],"./views/AboutPage":["70b3",9,"chunk-4df2c258"],"./views/AboutPage.vue":["70b3",9,"chunk-4df2c258"]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(o,t[1])}))}o.keys=function(){return Object.keys(a)},o.id="189a",e.exports=o},1951:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("1276"),n("b64b"),n("7db0"),n("99af");var a=n("ee10"),o=n("c0d6"),c={path:"/",component:function(){return n.e("chunk-2d22fdbd").then(n.bind(null,"ea8c"))},beforeEnter:function(e,t,n){var a=e.fullPath.split("/")[1];a&&o["a"].dispatch("language/setActiveLanguage",a),n()},children:[]},r=function(){for(var e=["fr","nl","de","en"],t={},n=0,o=e;n<o.length;n++){var c=o[n],r=Object(a["a"])(c,"home","nav");t[c]=r}return t},u=function(e,t,a,o){for(var c=Object.keys(t),r=function(){var c=i[u],r=t[c].find((function(e){return e.routeName==="".concat(c).concat(a)}));e.children.push({path:"".concat(c,"/").concat(r.path),name:"".concat(r.routeName),component:function(){return n("412c")("".concat(o))}})},u=0,i=c;u<i.length;u++)r()};u(c,r(),"Images","./views/ImagesPage.vue"),t["default"]=c},"29e1":function(e,t,n){},3388:function(e,t,n){"use strict";n("b7d2")},"35e9":function(e,t,n){},"412c":function(e,t,n){var a={"./ImagesModule":["ea8c","chunk-2d22fdbd"],"./ImagesModule.vue":["ea8c","chunk-2d22fdbd"],"./components/ImagesItem":["a871","chunk-6f529d32"],"./components/ImagesItem.vue":["a871","chunk-6f529d32"],"./router":["1951"],"./router.js":["1951"],"./store":["6bf5"],"./store.js":["6bf5"],"./views/ImageGallery":["6d52","chunk-46b65735"],"./views/ImageGallery.vue":["6d52","chunk-46b65735"],"./views/ImagesPage":["6c31","chunk-392db2aa"],"./views/ImagesPage.vue":["6c31","chunk-392db2aa"]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id="412c",e.exports=o},"4b1c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function o(e,t,n,o,c,r){var u=Object(a["E"])("router-view");return Object(a["w"])(),Object(a["h"])("div",null,[Object(a["l"])(u,null,{default:Object(a["K"])((function(e){return[Object(a["l"])(a["c"],{name:"route-animation-",mode:"out-in"},{default:Object(a["K"])((function(){return[(Object(a["w"])(),Object(a["f"])(Object(a["F"])(e.Component)))]})),_:2},1024)]})),_:1})])}var c=n("5502"),r={setup:function(){var e=Object(c["b"])();Object(a["u"])((function(){var t=window.localStorage.getItem("lang")||"fr";e.dispatch("language/setActiveLanguage",t)}))}},u=(n("d3e9"),n("6b0d")),i=n.n(u);const s=i()(r,[["render",o]]);var d=s,l=(n("a4d3"),n("e01a"),{class:"page"}),f={class:"page__content"},b={key:0,class:"page__header"},m={class:"page__title"},h={key:0,class:"page__description"},p={key:0,class:"page__content"};function g(e,t,n,o,c,r){var u=Object(a["E"])("base-link");return Object(a["w"])(),Object(a["h"])("div",l,[Object(a["i"])("div",f,[Object(a["l"])(a["c"],{name:"transition__header-"},{default:Object(a["K"])((function(){return[o.showHeader?(Object(a["w"])(),Object(a["h"])("header",b,[Object(a["l"])(u,{class:"page__link",color:"blue","route-name":o.homeLink.routeName},{default:Object(a["K"])((function(){return[Object(a["k"])("← "+Object(a["H"])(o.homeLink.label),1)]})),_:1},8,["route-name"]),Object(a["i"])("h1",m,Object(a["H"])(n.title),1),n.description?(Object(a["w"])(),Object(a["h"])("p",h,Object(a["H"])(n.description),1)):Object(a["g"])("",!0)])):Object(a["g"])("",!0)]})),_:1}),Object(a["l"])(a["c"],{name:"transition__main-"},{default:Object(a["K"])((function(){return[o.showMain?(Object(a["w"])(),Object(a["h"])("main",p,[Object(a["D"])(e.$slots,"default",{},void 0,!0)])):Object(a["g"])("",!0)]})),_:3})])])}var v=n("ee10"),k={props:{title:{type:String,required:!0},description:{type:String,default:""}},setup:function(){var e=Object(c["b"])(),t=Object(a["d"])((function(){return e.getters["language/activeLanguage"]})),n=Object(a["d"])((function(){return Object(v["a"])(t.value,"home","route")})),o=Object(a["B"])(!1),r=Object(a["B"])(!1),u=Object(a["B"])(!1);return Object(a["u"])((function(){setTimeout((function(){r.value=!0}),250),setTimeout((function(){u.value=!0}),500)})),{homeLink:n,showPage:o,showHeader:r,showMain:u}}};n("b6d7");const j=i()(k,[["render",g],["__scopeId","data-v-03bf78bb"]]);var O=j;function w(e,t,n,o,c,r){var u=Object(a["E"])("router-link");return Object(a["w"])(),Object(a["f"])(u,{to:o.route},{default:Object(a["K"])((function(){return[Object(a["i"])("div",{class:Object(a["r"])(["link",o.linkClass])},[Object(a["D"])(e.$slots,"default")],2)]})),_:3},8,["to"])}n("caad");var y={props:{color:{type:String,default:"gold",validator:function(e){return["gold","blue"].includes(e)}},routeName:{type:String,required:!0}},setup:function(e){var t=Object(a["d"])((function(){return"gold"===e.color?{"link--gold":!0}:{"link--blue":!0}})),n=Object(a["d"])((function(){return{name:e.routeName}}));return{linkClass:t,route:n}}};n("3388");const _=i()(y,[["render",w]]);var C=_,N=function(e){return Object(a["z"])("data-v-7b9aad08"),e=e(),Object(a["x"])(),e},x={class:"input"},A=["id","value"],I=["type","id","value"],P=["for"],L={class:"input__error"},M=N((function(){return Object(a["i"])("div",{class:"input__underline"},null,-1)}));function S(e,t,n,o,c,r){return Object(a["w"])(),Object(a["h"])("div",x,["textarea"===n.type?(Object(a["w"])(),Object(a["h"])("textarea",{key:0,class:Object(a["r"])(["input__input input__input--textarea",o.inputError]),id:n.id,value:n.modelValue,onInput:t[0]||(t[0]=function(){return o.updateValue&&o.updateValue.apply(o,arguments)}),onChange:t[1]||(t[1]=function(){return o.emitChange&&o.emitChange.apply(o,arguments)})},null,42,A)):(Object(a["w"])(),Object(a["h"])("input",{key:1,class:Object(a["r"])(["input__input",o.inputError]),type:n.type,id:n.id,value:n.modelValue,onInput:t[2]||(t[2]=function(){return o.updateValue&&o.updateValue.apply(o,arguments)}),onChange:t[3]||(t[3]=function(){return o.emitChange&&o.emitChange.apply(o,arguments)})},null,42,I)),Object(a["i"])("label",{class:"input__label",for:n.id},Object(a["H"])(n.label),9,P),Object(a["i"])("p",L,Object(a["H"])(n.errorMessage),1),M])}var E={props:{type:{type:String,default:"text",validator:function(e){return["text","email","password","number","textarea"].includes(e)}},id:{type:String,required:!0},label:{type:String,required:!1},error:{type:Boolean,default:!1},errorMessage:{type:String,default:""},modelValue:{required:!0}},emits:["update:modelValue","change"],setup:function(e,t){var n=t.emit,o=function(e){n("update:modelValue",e.target.value)},c=Object(a["d"])((function(){return{"input__input--error":e.error}})),r=function(){n("change")};return{updateValue:o,inputError:c,emitChange:r}}};n("12db");const z=i()(E,[["render",S],["__scopeId","data-v-7b9aad08"]]);var T=z,B=["disabled"];function H(e,t,n,o,c,r){return Object(a["w"])(),Object(a["h"])("button",{class:Object(a["r"])(["button",o.buttonColor]),disabled:n.disabled},[Object(a["D"])(e.$slots,"default",{},void 0,!0)],10,B)}var D={props:{color:{type:String,default:"blue",validator:function(e){return["blue","gold","purple","red"].includes(e)}},disabled:{type:Boolean,default:!1}},setup:function(e){var t=Object(a["d"])((function(){return"gold"===e.color?{"button--gold":!0}:"purple"===e.color?{"button--purple":!0}:"red"===e.color?{"button--red":!0}:{"button--blue":!0}}));return{buttonColor:t}}};n("5ece");const V=i()(D,[["render",H],["__scopeId","data-v-17e47360"]]);var W=V,K=function(e){return Object(a["z"])("data-v-5f5707a6"),e=e(),Object(a["x"])(),e},U={key:0,class:"alert"},q={class:"alert__box"},F={class:"alert__text"},Z=K((function(){return Object(a["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"alert__icon",viewBox:"0 0 16 16"},[Object(a["i"])("path",{d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),Object(a["i"])("path",{d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1)})),$=[Z];function J(e,t,n,o,c,r){return Object(a["w"])(),Object(a["f"])(a["b"],{to:"body"},[Object(a["l"])(a["c"],{name:"alert-"},{default:Object(a["K"])((function(){return[n.visible?(Object(a["w"])(),Object(a["h"])("div",U,[Object(a["i"])("div",q,[Object(a["i"])("p",F,[Object(a["D"])(e.$slots,"default",{},void 0,!0)]),Object(a["i"])("button",{class:"alert__button",onClick:t[0]||(t[0]=function(){return o.closeAlert&&o.closeAlert.apply(o,arguments)})},$)])])):Object(a["g"])("",!0)]})),_:3})])}var G={props:{visible:{type:Boolean,required:!0}},emits:["close"],setup:function(e,t){var n=t.emit,a=function(){n("close")};return{closeAlert:a}}};n("d518");const Q=i()(G,[["render",J],["__scopeId","data-v-5f5707a6"]]);var Y=Q,R=function(e){return Object(a["z"])("data-v-fcf9c378"),e=e(),Object(a["x"])(),e},X={key:0,class:"loader"},ee=R((function(){return Object(a["i"])("div",{class:"loader__background"},[Object(a["i"])("div",{class:"loader__box"},[Object(a["i"])("div",{class:"loader__spinner"},[Object(a["i"])("div",{class:"loader__ball loader__ball--1"}),Object(a["i"])("div",{class:"loader__ball loader__ball--2"}),Object(a["i"])("div",{class:"loader__ball loader__ball--3"})])])],-1)})),te=[ee];function ne(e,t,n,o,c,r){return Object(a["w"])(),Object(a["f"])(a["b"],{to:"body"},[Object(a["l"])(a["c"],{name:"loader-"},{default:Object(a["K"])((function(){return[o.loaderActive?(Object(a["w"])(),Object(a["h"])("div",X,te)):Object(a["g"])("",!0)]})),_:1})])}var ae={setup:function(){var e=Object(c["b"])(),t=Object(a["d"])((function(){return e.getters["admin/loaderActive"]}));return{loaderActive:t}}};n("fd2d");const oe=i()(ae,[["render",ne],["__scopeId","data-v-fcf9c378"]]);var ce=oe,re=function(e){return Object(a["z"])("data-v-c6731e58"),e=e(),Object(a["x"])(),e},ue={key:0,class:"modal"},ie={class:"modal__box"},se=re((function(){return Object(a["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"modal__icon",viewBox:"0 0 16 16"},[Object(a["i"])("path",{d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),Object(a["i"])("path",{d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})],-1)})),de=[se];function le(e,t,n,o,c,r){return Object(a["w"])(),Object(a["f"])(a["c"],{name:"modal-"},{default:Object(a["K"])((function(){return[n.open?(Object(a["w"])(),Object(a["h"])("div",ue,[Object(a["i"])("div",ie,[Object(a["i"])("button",{class:"modal__button",onClick:t[0]||(t[0]=function(){return o.closeModal&&o.closeModal.apply(o,arguments)})},de),Object(a["D"])(e.$slots,"default",{},void 0,!0)])])):Object(a["g"])("",!0)]})),_:3})}var fe={props:{open:{type:Boolean,required:!0}},emits:["close"],setup:function(e,t){var n=t.emit,a=function(){n("close")};return{closeModal:a}}};n("c959");const be=i()(fe,[["render",le],["__scopeId","data-v-c6731e58"]]);var me=be,he=n("6c02"),pe=n("68a4"),ge=n("abf8"),ve=n("1951"),ke=n("110c"),je=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),{path:"/administration",component:function(){return n.e("chunk-71994cc8").then(n.bind(null,"b534"))},beforeEnter:function(e,t,n){var a={url:"".concat("https://simply-wood.herokuapp.com/api","/users/login"),options:{credentials:"include"}};fetch(a.url,a.options).then((function(e){return e.json()})).then((function(t){"login"===e.name?t.ok?n({name:"adminImages"}):n():t.ok?n():n({name:"login"})})).catch((function(e){console.log(e)}))},children:[{path:"",redirect:{name:"login"}},{path:"login",name:"login",component:function(){return n.e("chunk-097fea68").then(n.bind(null,"6ecc"))}},{path:"images",name:"adminImages",component:function(){return n.e("chunk-613dee4a").then(n.bind(null,"6e8a"))}},{path:"utilisateur",name:"user",component:function(){return n.e("chunk-d16f84a2").then(n.bind(null,"e26c"))}}]}),Oe=Object(he["a"])({history:Object(he["b"])(),routes:[pe["default"],ge["default"],ve["default"],ke["default"],je,{path:"/:path(.*)*",redirect:"/"}]}),we=n("c0d6"),ye=Object(a["e"])(d);ye.component("BasePage",O),ye.component("BaseLink",C),ye.component("BaseTextbox",T),ye.component("BaseButton",W),ye.component("BaseAlert",Y),ye.component("BaseLoader",ce),ye.component("BaseModal",me),ye.use(we["a"]),ye.use(Oe),ye.mount("#app")},"5ece":function(e,t,n){"use strict";n("35e9")},"64a0":function(e,t,n){},"68a4":function(e,t,n){"use strict";n.r(t);var a=n("2909"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("1276"),n("99af"),n("b64b"),n("7db0"),n("ee10")),c=n("c0d6"),r={path:"/",component:function(){return n.e("chunk-2d0e51f4").then(n.bind(null,"92af"))},beforeEnter:function(e,t,n){if("/"===e.fullPath){var a=c["a"].getters["language/activeLanguage"];n({name:"".concat(a,"Home")})}else{var o=e.fullPath.split("/")[1];o&&c["a"].dispatch("language/setActiveLanguage",o),n()}},children:[]},u=function(){for(var e=["fr","nl","de","en"],t={},n=0,c=e;n<c.length;n++){var r=c[n],u=Object(o["a"])(r,"home","route"),i=Object(o["a"])(r,"home","nav"),s=[u].concat(Object(a["a"])(i));t[r]=s}return t},i=function(e,t,a,o){for(var c=Object.keys(t),r=function(){var c=i[u],r=t[c].find((function(e){return e.routeName==="".concat(c).concat(a)}));e.children.push({path:"".concat(c,"/").concat(r.path),name:"".concat(r.routeName),component:function(){return n("0bc5")("".concat(o))}})},u=0,i=c;u<i.length;u++)r()};i(r,u(),"Home","./views/HomePage.vue"),t["default"]=r},"6bf5":function(e,t,n){"use strict";n.r(t);n("d3b7");t["default"]={namespaced:!0,state:function(){return{categories:[]}},getters:{getCategories:function(e){return e.categories}},mutations:{setCategories:function(e,t){e.categories=t}},actions:{fetchCategories:function(e){fetch("".concat("https://simply-wood.herokuapp.com/api","/images/categories")).then((function(e){return e.json()})).then((function(t){e.commit("setCategories",t.categories)})).catch((function(e){console.log(e)}))}}}},8045:function(e,t,n){},"80a8":function(e,t,n){"use strict";n.r(t),t["default"]={namespaced:!0,state:function(){return{activeLanguage:"fr"}},getters:{activeLanguage:function(e){return e.activeLanguage}},mutations:{setActiveLanguage:function(e,t){e.activeLanguage=t}},actions:{setActiveLanguage:function(e,t){window.localStorage.setItem("lang",t),e.commit("setActiveLanguage",t)}}}},8218:function(e,t,n){},abf8:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("1276"),n("b64b"),n("7db0"),n("99af");var a=n("ee10"),o=n("c0d6"),c={path:"/",component:function(){return n.e("chunk-2d230aa2").then(n.bind(null,"ecf4"))},beforeEnter:function(e,t,n){var a=e.fullPath.split("/")[1];a&&o["a"].dispatch("language/setActiveLanguage",a),n()},children:[]},r=function(){for(var e=["fr","nl","de","en"],t={},n=0,o=e;n<o.length;n++){var c=o[n],r=Object(a["a"])(c,"home","nav");t[c]=r}return t},u=function(e,t,a,o){for(var c=Object.keys(t),r=function(){var c=i[u],r=t[c].find((function(e){return e.routeName==="".concat(c).concat(a)}));e.children.push({path:"".concat(c,"/").concat(r.path),name:"".concat(r.routeName),component:function(){return n("189a")("".concat(o))}})},u=0,i=c;u<i.length;u++)r()};u(c,r(),"About","./views/AboutPage.vue"),t["default"]=c},b6d7:function(e,t,n){"use strict";n("8218")},b7d2:function(e,t,n){},c0d6:function(e,t,n){"use strict";var a=n("5502"),o=n("80a8"),c=(n("c740"),n("b0c0"),n("d3b7"),{namespaced:!0,state:function(){return{categories:[],activeCategory:"",loaderActive:!1,admin:{name:"",email:""}}},getters:{categories:function(e){return e.categories},activeCategory:function(e){return e.activeCategory},loaderActive:function(e){return e.loaderActive},admin:function(e){return e.admin}},mutations:{setCategories:function(e,t){e.categories=t},setActiveCategory:function(e,t){e.activeCategory=t},toggleLoader:function(e){e.loaderActive=!e.loaderActive},updateMainImage:function(e,t){var n=t.categoryId,a=t.imageUrl,o=e.categories.findIndex((function(e){return e._id===n}));e.categories[o].mainImage=a},setAdmin:function(e,t){var n=t.name,a=t.email;e.admin.name=n,e.admin.email=a}},actions:{setCategories:function(e){var t={url:"".concat("https://simply-wood.herokuapp.com/api","/images/categories"),options:{credentials:"include"}};fetch(t.url,t.options).then((function(e){return e.json()})).then((function(t){t.categories&&e.commit("setCategories",t.categories)})).catch((function(e){console.log(e)}))},setActiveCategory:function(e,t){e.commit("setActiveCategory",t)},toggleLoader:function(e){e.commit("toggleLoader")},updateMainImage:function(e,t){e.commit("updateMainImage",t)}}}),r=n("6bf5");t["a"]=Object(a["a"])({modules:{language:o["default"],admin:c,images:r["default"]}})},c959:function(e,t,n){"use strict";n("4b1c")},d3e9:function(e,t,n){"use strict";n("021f")},d518:function(e,t,n){"use strict";n("29e1")},d8ea:function(e,t,n){var a={"./ContactModule":["f75f",9,"chunk-2d22d418"],"./ContactModule.vue":["f75f",9,"chunk-2d22d418"],"./components/ContactButtons":["307d",9,"chunk-c92fcd52"],"./components/ContactButtons.vue":["307d",9,"chunk-c92fcd52"],"./components/ContactForm":["9d8e",9,"chunk-f48a5ee8"],"./components/ContactForm.vue":["9d8e",9,"chunk-f48a5ee8"],"./router":["110c",9],"./router.js":["110c",9],"./store":["8381",7,"chunk-2d0ddc2a"],"./store.js":["8381",7,"chunk-2d0ddc2a"],"./views/ContactPage":["2701",9,"chunk-fd906bf2"],"./views/ContactPage.vue":["2701",9,"chunk-fd906bf2"]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(o,t[1])}))}o.keys=function(){return Object.keys(a)},o.id="d8ea",e.exports=o},ee10:function(e,t,n){"use strict";var a={home:{text:"Bienvenue chez Simply Wood, que pouvons-nous faire pour vous?",route:{label:"Accueil",path:"",routeName:"frHome"},nav:[{label:"A propos",path:"a-propos",routeName:"frAbout"},{label:"Nos créations",path:"creations",routeName:"frImages"},{label:"Contact",path:"contact",routeName:"frContact"}]},about:{title:"Qui sommes-nous?",description:"Nous sommes une société artisanale et traditionnelle de conception et fabrication sur mesure de mobilier tel que dressing, penderie, placard, cuisine, meuble mansardé, et plus. Appréciés pour notre sens esthétique et des volumes alliés à un savoir-faire maitrisé.",features:[{title:"Au service du particulier",text:"Tout projet est conceptualisé et abordé en dialogue constant avec vous."},{title:"Interlocuteur unique",text:"La conception et la fabrication comme la mise en œuvre sont faites par nos soins."},{title:"Solution personnalisée",text:"Pour un projet ciblé et une solution sur mesure nous vous guiderons dans vos choix."}]},images:{title:"Nos créations sur mesure",description:"Lorem ipsum dolor sit amet."},contact:{title:"Contact",description:"Vous avez encore des questions? N’hésitez pas à nous envoyer un message ci-dessous et nous reviendrons vers vous dans les moindres délais.",fields:{formTitle:"Formulaire de contact",firstName:"Prénom",lastName:"Nom de famille",zipCode:"Code postal",phone:"Numéro de téléphone",email:"Adresse email",subject:"Sujet",message:"Message",button:"Envoyer"},success:"Merci beaucoup pour votre message, nous nous mettrons en contact avec vous au plus tôt!",error:"Votre message n'a pas pu être envoyé, veuillez reéssayer plus tard s'il vous plaît."}},o={home:{text:"Welkom bij Simply Wood, wat kunnen wij voor u doen?",route:{label:"Home",path:"",routeName:"nlHome"},nav:[{label:"Over ons",path:"over-ons",routeName:"nlAbout"},{label:"Onze creaties",path:"onze-creaties",routeName:"nlImages"},{label:"Contact",path:"contact",routeName:"nlContact"}]},about:{title:"Wie zijn wij?",description:"Wij zijn een ambachtelijk en traditioneel bedrijf, dat op maat gemaakte meubelen ontwerpt en vervaardigt, zoals kleedkamers, kleerkasten, kasten, keukens, zoldermeubelen... Gewaardeerd voor ons gevoel voor esthetiek en volumes gecombineerd met een meesterlijke know-how.",features:[{title:"Altijd tot uw dienst",text:"Elk project wordt geconceptualiseerd en benaderd in voortdurende dialoog met u."},{title:"Intern vervaardigd",text:"Zowel het ontwerp en de fabricage als de uitvoering worden door ons gedaan."},{title:"Maatwerkoplossing",text:"Voor een gericht project en een oplossing op maat begeleiden wij u in uw keuzes."}]},images:{title:"Onze op maat gesnedene creaties",description:"Lorem ipsum dolor sit amet."},contact:{title:"Contact",description:"Heb je nog vragen? Stuur ons hieronder een bericht en wij nemen zo spoedig mogelijk contact met u op.",fields:{formTitle:"Contactformulier",firstName:"Voornam",lastName:"Familiennaam",zipCode:"Postcode",phone:"Telefoonnummer",email:"Mailadres",subject:"Onderwerp",message:"Bericht",button:"Verzenden"},success:"Dank u voor uw bericht, wij nemen zo spoedig mogelijk contact met u op!",error:"Uw bericht kon niet worden afgeleverd, probeer het later nog eens."}},c={home:{text:"Willkommen bei Simply Wood, wie können wir Ihnen helfen?",route:{label:"Startseite",path:"",routeName:"deHome"},nav:[{label:"Über Uns",path:"ueber-uns",routeName:"deAbout"},{label:"Unsere Dienste",path:"dienste",routeName:"deImages"},{label:"Kontakt",path:"kontakt",routeName:"deContact"}]},about:{title:"Wer sind wir?",description:"Wir sind ein traditionelles Handwerksunternehmen, das sich der maßgeschneiderten Möbelanfertigung widmet. Wir bieten Ankleidezimmer, Kleiderschränke, Wandschränke, Küchen, Dachschrägenmöbel, und vieles mehr.",features:[{title:"Jederzeit für Sie da",text:"Jedes Projekt wird in konstantem Austausch mit Ihnen konzeptualisiert und verarbeitet."},{title:"Einzigartige Handfertigung",text:"Das Design, die Herstellung, wie auch die Umsetzung werden bei uns im Hause durchgeführt."},{title:"Personalisierte Dienstleistung",text:"Für ein zielgerichtetes Projekt und eine maßgeschneiderte Lösung werden wir Sie bei Ihren Entscheidungen begleiten."}]},images:{title:"Unsere Werke",description:"Lorem ipsum dolor sit amet."},contact:{title:"Kontakt",description:"Haben Sie noch weitere Fragen? Setzen Sie sich gerne mit uns in Kontaktm, wir werden uns so schnell wie möglich bei Ihnen melden.",fields:{formTitle:"Kontaktformular",firstName:"Vorname",lastName:"Nachname",zipCode:"Postleitzahl",phone:"Telefonnummer",email:"Emailadresse",subject:"Betreff",message:"Nachricht",button:"Senden"},success:"Vielen Dank für Ihre Nachricht, wir werden uns so schnell wie möglich bei Ihnen melden!",error:"Ihre Nachricht konnte nicht zugestellt werden, bitte versuchen Sie es später nochmal."}},r={home:{text:"Welcome to Simply Wood, what can we do for you?",route:{label:"Home",path:"",routeName:"enHome"},nav:[{label:"About Us",path:"about-us",routeName:"enAbout"},{label:"Our creations",path:"creations",routeName:"enImages"},{label:"Contact",path:"contact",routeName:"enContact"}]},about:{title:"Who are we?",description:"We are an artisanal and traditional company, designing and manufacturing custom-made furniture such as dressing rooms, wardrobes, cupboards, kitchens, attic furniture, the list goes on. We take pride in our sense for aesthetics paired with masterful technical know-how.",features:[{title:"Always at your service",text:"Every project is conceptualised and carried out in constant dialogue with you."},{title:"Crafted entirely in-house",text:"The design and manufacture as well as the implementation are done entirely in-house by us."},{title:"Tailor-made solution",text:"For a targeted project and a tailor-made solution we will guide you in your choices."}]},images:{title:"Our custom creations",description:"Lorem ipsum dolor sit amet."},contact:{title:"Contact",description:"Still have questions? Feel free to send us a message below and we will get back to you as soon as possible.",fields:{formTitle:"Contact form",firstName:"First name",lastName:"Last name",zipCode:"ZIP Code",phone:"Phone number",email:"Email address",subject:"Subject",message:"Message",button:"Send"},success:"Thanks a lot for your message, we will come back to you as soon as possible!",error:"Your message couldn't be delivered, please try again later."}},u={fr:a,nl:o,de:c,en:r};t["a"]=function(e,t,n){var a=u[e],o=a[t],c=o[n];return c}},fd2d:function(e,t,n){"use strict";n("64a0")}});
//# sourceMappingURL=app.82ce05e4.js.map