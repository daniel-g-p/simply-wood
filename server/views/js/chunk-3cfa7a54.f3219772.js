(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cfa7a54","chunk-4a8d6940","chunk-0a605121"],{"09ea":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=function(e){return Object(c["z"])("data-v-55bde9cd"),e=e(),Object(c["x"])(),e},u=["onClick"],o=a((function(){return Object(c["i"])("div",{class:"language__background"},null,-1)}));function l(e,t,n,a,l,g){return Object(c["w"])(),Object(c["h"])("div",null,[Object(c["i"])("div",{class:Object(c["r"])(["language",a.toggleColor])},[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["C"])(a.buttons,(function(e,t){return Object(c["w"])(),Object(c["h"])("button",{key:e,class:Object(c["r"])(["language__button",["language__button--".concat(t+1),a.activeLanguage===e?"language__button--active":""]]),onClick:function(t){return a.setLanguage(e)}},Object(c["H"])(e),11,u)})),128)),o],2)])}n("caad");var g=n("5502"),r=n("6c02"),b={props:{color:{type:String,default:"gold",validator:function(e){return["gold","blue"].includes(e)}}},setup:function(e){var t=["fr","nl","de","en"],n=Object(g["b"])(),a=Object(r["c"])(),u=Object(c["d"])((function(){return"gold"===e.color?{"language--gold":!0}:{"language--blue":!0}})),o=Object(c["d"])((function(){return n.getters["language/activeLanguage"]})),l=function(e){n.dispatch("language/setActiveLanguage",e),a.push({name:"".concat(e,"Home")})};return{buttons:t,toggleColor:u,activeLanguage:o,setLanguage:l}}},i=(n("3b2c"),n("6b0d")),s=n.n(i);const d=s()(b,[["render",l],["__scopeId","data-v-55bde9cd"]]);t["default"]=d},"0b9a":function(e,t,n){},"0f06":function(e,t,n){},"3b2c":function(e,t,n){"use strict";n("0f06")},"50e6":function(e,t,n){},6574:function(e,t,n){"use strict";n("50e6")},6768:function(e,t,n){"use strict";n("0b9a")},"92c1":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={class:"menu__sidebar"},u={class:"menu__nav"};function o(e,t,n,o,l,g){var r=Object(c["E"])("nav-toggle"),b=Object(c["E"])("language-toggle"),i=Object(c["E"])("base-link");return Object(c["w"])(),Object(c["h"])("div",null,[Object(c["i"])("header",{class:Object(c["r"])(["menu",o.menuClass])},[Object(c["l"])(r,{class:"menu__open",onToggleMenu:o.toggleMenu},null,8,["onToggleMenu"]),Object(c["i"])("div",a,[Object(c["l"])(b,{class:"menu__language",color:"blue"}),Object(c["l"])(r,{class:"menu__close",type:"close",color:"blue",onToggleMenu:o.toggleMenu},null,8,["onToggleMenu"]),Object(c["i"])("nav",u,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["C"])(o.links,(function(e){return Object(c["w"])(),Object(c["f"])(i,{key:e.label,"route-name":e.routeName,color:"blue"},{default:Object(c["K"])((function(){return[Object(c["k"])(Object(c["H"])(e.label),1)]})),_:2},1032,["route-name"])})),128))])])],2)])}var l=n("5502"),g=n("ee10"),r=n("afc6"),b=n("09ea"),i={components:{NavToggle:r["default"],LanguageToggle:b["default"]},setup:function(){var e=Object(l["b"])(),t=Object(c["d"])((function(){return e.getters["language/activeLanguage"]})),n=Object(c["d"])((function(){return Object(g["a"])(t.value,"home","nav")})),a=Object(c["B"])(!1),u=Object(c["d"])((function(){return{"menu--closed":!a.value}})),o=function(){a.value=!a.value};return{links:n,menuClass:u,toggleMenu:o}}},s=(n("6768"),n("6b0d")),d=n.n(s);const f=d()(i,[["render",o],["__scopeId","data-v-f2756a38"]]);t["default"]=f},afc6:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=function(e){return Object(c["z"])("data-v-4eacc59f"),e=e(),Object(c["x"])(),e},u={key:0,class:"toggle__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o=a((function(){return Object(c["i"])("path",{"fill-rule":"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"},null,-1)})),l=[o],g={key:1,xmlns:"http://www.w3.org/2000/svg",class:"toggle__icon",viewBox:"0 0 16 16"},r=a((function(){return Object(c["i"])("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"},null,-1)})),b=[r];function i(e,t,n,a,o,r){return Object(c["w"])(),Object(c["h"])("button",{class:Object(c["r"])(["toggle",a.toggleClass]),onClick:t[0]||(t[0]=function(){return a.toggleMenu&&a.toggleMenu.apply(a,arguments)})},["open"===n.type?(Object(c["w"])(),Object(c["h"])("svg",u,l)):(Object(c["w"])(),Object(c["h"])("svg",g,b))],2)}n("caad");var s={props:{type:{type:String,default:"open",validator:function(e){return["open","close"].includes(e)}},color:{type:String,default:"gold",validator:function(e){return["gold","blue"].includes(e)}}},setup:function(e,t){var n=function(){t.emit("toggle-menu")},a=Object(c["d"])((function(){return"gold"===e.color?{"toggle--gold":!0}:{"toggle--blue":!0}}));return{toggleMenu:n,toggleClass:a}}},d=(n("6574"),n("6b0d")),f=n.n(d);const j=f()(s,[["render",i],["__scopeId","data-v-4eacc59f"]]);t["default"]=j}}]);
//# sourceMappingURL=chunk-3cfa7a54.f3219772.js.map