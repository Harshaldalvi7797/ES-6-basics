var appGlobal=function(t){var e={};function n(o){if(e[o])return e[o].exports;var l=e[o]={i:o,l:!1,exports:{}};return t[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(o,l,function(e){return t[e]}.bind(null,l));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./dist/",n(n.s=3)}([function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));const o=Symbol("jsonValue");class l{static set bindJsonValue(t){this[o]=t}static get bindJsonValue(){return this[o]}}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var o=n(0);class l{setjsonValue(){let t=void 0;t=JSON.stringify({firstname:"Harshal",lastname:"Dalvi"}),o.default.bindJsonValue=t}}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var o=n(0);class l{getJsonValue(){let t=void 0,e=void 0;e=o.default.bindJsonValue,t=JSON.parse(e),o.default.bindJsonValue="Saylee",console.log(t)}}},function(t,e,n){n(4),n(6),n(0),n(1),n(2),t.exports=n(5)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));const o=Symbol("privateMethodDemo"),l=Symbol("fullname"),s=Symbol("age"),i=Symbol("age"),r=Symbol("firstname");class u{constructor(){console.log("constructor automatically called when instance is created")}[o](){console.log("private method")}set[s](t){this[i]=t}get[s](){return this[i]}publicMethodDemo(t){console.log(t),this[o](),this[i]=23,console.log(this[i]),u.staticPublicMethodDemo()}set fullname(t){t.length>=6?this[l]=t:this[l]=void 0}get fullname(){return this[l]}static staticPublicMethodDemo(){console.log("static method demo")}static set firstname(t){this[r]=t}static get firstname(){return this[r]}}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s})),n.d(e,"onSubmiClickEvent",(function(){return i}));var o=n(1),l=n(2);n(0);class s{onSubmit(){let t=null,e=null;t=new o.default,t.setjsonValue(),e=new l.default,e.getJsonValue()}}function i(){let t=null;t=new s,t.onSubmit()}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c})),n.d(e,"onsubmitClickEvent",(function(){return f}));const o=Symbol("privateMethodDemo"),l=Symbol("fullname"),s=Symbol("age"),i=Symbol("age"),r=Symbol("firstname");class u{constructor(){console.log("constructor automatically called when instance is created")}[o](){console.log("private method")}set[s](t){this[i]=t}get[s](){return this[i]}publicMethodDemo(t){console.log(t),this[o](),this[i]=23,console.log(this[i]),u.staticPublicMethodDemo()}set fullname(t){t.length>=6?this[l]=t:this[l]=void 0}get fullname(){return this[l]}static staticPublicMethodDemo(){console.log("static method demo")}static set firstname(t){this[r]=t}static get firstname(){return this[r]}}n(0);const a=Symbol("_classDemoObj");class c{constructor(t){this[a]=t}onsubmit(){this[a].publicMethodDemo("Harshal Dalvi"),this[a].fullname="Saylee Mane",console.log(this[a].fullname),u.staticPublicMethodDemo(),u.firstname="Javascript",console.log(u.firstname)}}function f(){let t=new u;new c(t).onsubmit()}}]);