(()=>{"use strict";var e={989:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}html{height:100%}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{font-family:Montserrat;color:#fff}body{background-color:rgba(3,3,23,.7607843137)}body.light{background-color:#fff;color:#000}.wrapper{height:100vh}.container{position:relative;width:20rem;margin:0px auto;padding:1rem}footer{position:fixed;bottom:0;left:calc((100% - 22rem)/2)}.footer{background-color:#3f3f4e;opacity:1;z-index:5}.footer-container{display:flex;justify-content:space-around;align-items:center}.footer-item{display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#3f3f4e;border:none}.footer*{display:flex;align-items:center;justify-content:center;line-height:2.5rem}.footer-item:hover .fa-house,.fa-heart,.fa-bars{color:rgba(237,43,218,.7607843137)}.header-wrapper{display:flex;justify-content:space-between;align-items:center}.header-info-wrapper{display:flex;align-items:center;justify-content:space-between;padding-bottom:1.5rem}.header-return{display:none;margin-right:1rem;cursor:pointer}.header-info{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.header-city{font-size:2rem}.header-icon img{width:6rem;height:6rem}.header-temparature{font-size:3.5rem;padding-bottom:1rem}.header-status{padding:1rem;flex:0 0;background-color:#6717e8;border-radius:15px;flex-wrap:wrap}.weather__info-container{display:flex;justify-content:space-between;align-items:center;padding:2rem 0}.weather__info-pressure-wrapper{display:flex;justify-content:space-between;align-items:center}.weather__info-pressure-icon{margin-right:.5rem}.weather__info-humidity-icon{margin-right:.5rem}.weather__info-humidity-wrapper{display:flex;justify-content:space-between;align-items:center}.weather__info-wind-wrapper{display:flex;justify-content:space-between;align-items:center}.weather__info-wind-icon{margin-right:.5rem}.sunset{padding-left:.5rem}.sunset-wrapper{display:flex;justify-content:flex-start;padding-bottom:1rem}.sunset-sunrise .container{padding-top:.5rem}.sunset-sunrise-divider{width:100%;height:1px;background:#1918bd;background:linear-gradient(90deg, rgb(25, 24, 189) 11%, rgb(151, 69, 23) 50%, rgb(204, 22, 61) 83%)}.sunrise{padding-left:.5rem}.sunrise-wrapper{display:flex;justify-content:flex-end;padding-top:1rem}.today__temp-container{padding:0;overflow:auto}.today__temp-container::-webkit-scrollbar{width:0}.today__temp-flex-container{display:flex;justify-content:space-between;align-items:center}.today__temp-item{margin:.6rem}.today-item{display:flex;justify-content:space-between;align-items:center;flex-direction:column}.today-item__time{font-size:.7rem;padding-bottom:1rem}.today-item__icon{padding-bottom:1rem}.week__temp{padding-bottom:3rem}.week__temp .container{padding-top:0}.week__temp-container{display:flex;justify-content:space-between;align-items:center}.week__temp-item{display:flex;justify-content:space-between;align-items:center;flex-direction:column}.item{padding:1rem 0}.week-item{width:100%}.week-item__day{margin-right:auto}.week-item__daytemp{margin-left:auto}.week-item__nighttemp{margin-left:auto;color:#e0ffff;opacity:.7}.week-item__icon{padding:0}.week-item__icon img{width:3rem;height:3rem}.fa-cloud{opacity:.75}.fa-wind,.fa-circle-exclamation,.fa-droplet{color:rgba(142,153,212,.7607843137)}.fa-house,.fa-heart,.fa-bars,.fa-magnifying-glass,.fa-pencil{color:rgba(142,153,212,.7607843137);transition:color .3s ease}.fa-house:hover,.fa-heart:hover,.fa-bars:hover{color:rgba(237,43,218,.7607843137)}.fa-sun{color:rgba(242,78,7,.7607843137)}.fa-moon{color:#6717e8}.fa-magnifying-glass{color:rgba(142,153,212,.7607843137)}.fa-pencil{color:rgba(142,153,212,.7607843137)}.active{color:rgba(237,43,218,.7607843137)}input{color:#f0f8ff}input:focus{font-size:1rem}.input-wrapper{display:flex;justify-content:space-between;align-items:center}.input-search{width:100%;margin:0 1rem;background-color:rgba(0,0,0,0);border:none;height:1.5rem}.input-search-icon{line-height:2.5rem}.input-search-icon:hover .fa-magnifying-glass{color:rgba(237,43,218,.7607843137)}.search-form{position:relative}a{background-color:#3f3f4e;border:none;cursor:pointer;transition:color .3s ease;text-decoration:none}a:hover .fa-house:hover,a .fa-heart:hover,a .fa-bars:hover,a .fa-pencil:hover,a .fa-magnifying-glass:hover{color:rgba(237,43,218,.7607843137)}a:hover{color:rgba(237,43,218,.7607843137)}.saved-cities{padding-bottom:3rem}.saved-cities-wrapper{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.saved-cities .container{overflow:auto}.city{position:relative;display:flex;justify-content:space-between;align-items:right;flex-direction:column;width:calc(50% - 1rem);border-radius:30px;background-color:rgba(10,7,18,.3333333333);margin-bottom:1rem;cursor:pointer}.city-name{padding-left:.7rem}.city-deg{font-size:1.5rem;padding-top:1rem}.city-deg-icon{display:flex;justify-content:space-between;padding:.7rem}.city-delete{position:absolute;top:0;right:0;width:1rem;height:1rem;text-align:center;border-radius:40%;border:1px solid;padding-bottom:.1rem}.city-weather-info{display:flex;justify-content:space-around;align-items:center;padding:0 0 1rem 0rem;font-size:.7rem}.city-weather-humidity-wrapper{display:flex;justify-content:space-between}.city-weather-humidity-icon{margin-right:.5rem}.city-weather-wind-wrapper{display:flex}.city-weather-wind-icon{margin-right:.5rem}.city-found{display:flex;align-items:center;justify-content:space-between;height:2rem;margin:0 .7rem}.city-found-icon{cursor:pointer}.country-name{padding-left:.7rem;font-size:.8rem;margin:.5rem 0;color:gray}.found-cities-wrapper{position:absolute;width:100%;background-color:#8480c4;border-radius:15px;z-index:5}.settings{padding-bottom:3rem}.settings-page{display:flex;justify-content:center;align-items:center;flex-direction:column}.settings-item{display:flex;justify-content:space-between;align-items:center;padding:.7rem}.settings-item-choice{padding:.5rem;border:1px solid;border-radius:15px}.your-location-wrapper{display:flex;align-items:center;justify-content:center}.your-location-icon{margin-right:.5rem}.your-location-title{font-size:.7rem;opacity:.6}.city-country{margin:1rem 0 1rem 0}.city-status{padding:1rem;display:flex;justify-content:center;align-items:center;background-color:#6717e8;border-radius:15px}.city-temperature{margin-top:1.5rem;font-size:3rem}.city-settings{display:flex;justify-content:space-between;align-items:center;flex:1 0;width:100%;margin-top:1.5rem}.choice-temperature,.choice-wind,.choice-theme{cursor:pointer}body.light{background-color:#fff;color:#000}body.light .header-status{color:#fff}body.light .week-item__nighttemp{color:blue}body.light input{color:#000}body.light .city{background-color:#add8e6}body.light .city-status{color:#fff}body.light .footer{background-color:#fff}body.light .footer-item{background-color:#fff}body.light a{background-color:#fff}.error{padding:1rem 0;display:flex;justify-content:center;align-items:center}.error-wrapper{position:absolute;background-color:#be123c;display:flex;flex-wrap:wrap;border-radius:15px;right:1rem;top:1rem;visibility:hidden;opacity:0;transition:opacity .7s ease}.error-wrapper.show{visibility:visible;opacity:1}.error>*{margin:0 .5rem}.error-close{cursor:pointer}.error-container{text-align:center}.error-404{padding-top:1.5rem;font-size:5rem}.error-message{padding-top:1.5rem;font-size:1rem;letter-spacing:2px}',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var f=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=i(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var s=r(e,i),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),a=n.n(o),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),f=n.n(u),p=n(989),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l();t()(p.Z,m);p.Z&&p.Z.locals&&p.Z.locals;function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */v=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i=t&&t.prototype instanceof u?t:u,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return E()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=d(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,a),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l={};function u(){}function f(){}function p(){}var m={};c(m,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==t&&n.call(g,i)&&(m=g);var w=p.prototype=u.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(i,o,a,c){var s=d(e[i],e,o);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==h(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(u).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=d(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=p,c(w,"constructor",p),c(p,"constructor",f),f.displayName=c(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,a,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(_.prototype),c(_.prototype,o,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new _(s(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(w),c(w,a,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}function y(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,i)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){y(o,r,i,a,c,"next",e)}function c(e){y(o,r,i,a,c,"throw",e)}a(void 0)}))}}var w="https://api.weatherapi.com/v1",b="c1b5dcebecd24bc99f5141741221705",_=function(){var e=g(v().mark((function e(t){var n,r,i,o=arguments;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"auto:ip",r=t+"/forecast.json?key=".concat(b,"&q=").concat(n,"&days=4&aqi=no&alerts=no"),e.next=4,fetch(r,{method:"GET"});case 4:if((i=e.sent).ok){e.next=7;break}throw new Error("Smth went wrong!");case 7:return e.next=9,i.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=g(v().mark((function e(t,n){var r,i,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length<2)){e.next=2;break}return e.abrupt("return");case 2:return r=t+"/search.json?key=c1b5dcebecd24bc99f5141741221705&q=".concat(n),e.next=5,fetch(r,{method:"GET"});case 5:if((i=e.sent).ok){e.next=9;break}throw alert(i.status),new Error("Error! status: ".concat(i.status));case 9:return e.next=11,i.json();case 11:return o=e.sent,e.abrupt("return",o.splice(0,3));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(e){var t=new Date(e.forecast.forecastday[0].date).getDay(),n=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return[].concat(t,t)[e]},r=JSON.parse(window.localStorage.getItem("storage"));return'\n    <header>\n    <div class="container">\n        <div class="header-wrapper">\n            <div class="header-info">\n                <div class="header-info-wrapper">\n                  <div class="header-return"><i class="fa-solid fa-arrow-left-long"></i></div>\n                  <div class="header-city">'.concat(e.location.name,'</div>\n                </div>\n                <div class="header-temparature">').concat(r.isCelcius?e.current.temp_c:e.current.temp_f,'º</div>\n                <div class="header-status">').concat(e.current.condition.text,'</div>\n            </div>\n            <div class="header-icon"><img src="').concat(e.current.condition.icon,'" alt="Weather Icon"></div>\n        </div>\n        <div class="weather__info-container">\n\n            <div class="weather__info-humidity-wrapper">\n                <div class="weather__info-humidity-icon"><i class="fa-solid fa-droplet"></i></div>\n                <div class="weather__info-humidity">').concat(e.current.humidity,'%</div>\n            </div>\n\n            \n            <div class="weather__info-pressure-wrapper">\n                <div class="weather__info-pressure-icon"> <i class="fa-solid fa-circle-exclamation"></i></div>\n                <div class="weather__info-pressure">').concat(e.current.pressure_in,'mBar</div>\n            </div>\n            <div class="weather__info-wind-wrapper">\n                <div class="weather__info-wind-icon"><i class="fa-solid fa-wind"></i></div>\n                <div class="weather__info-wind">').concat(r.isKPH?e.current.wind_kph+"km/h":e.current.wind_mph+"m/s",'</div>\n            </div>\n            \n\n        </div>\n    </div>\n  </header>\n  <section class="sunset-sunrise">\n    <div class="container">\n        <div class="sunset-wrapper">\n            <div class="sunset-icon"><i class="fa-solid fa-moon"></i></div>\n            <div class="sunset">').concat(e.forecast.forecastday[0].astro.sunset,'</div>\n        </div>\n        <div class="sunset-sunrise-divider"></div>\n        <div class="sunrise-wrapper">\n            <div class="sunrise-icon"><i class="fa-solid fa-sun"></i></div>\n            <div class="sunrise">').concat(e.forecast.forecastday[1].astro.sunrise,'</div>\n        </div>\n    </div>\n  </section>\n  <section class="today__temp">\n    <div class="container">\n        <div class="today__temp-container">\n            <div class="today__temp-flex-container">\n                ').concat(e.forecast.forecastday[0].hour.map((function(e){return'\n                    <div class="today__temp-item today-item">\n                      <div class="today-item__time">'.concat(e.time.substr(10,e.time.length),'</div>\n                      <div class="today-item__icon"><img src="').concat(e.condition.icon,'" alt="Wether Icon"></div>\n                      <div class="today-item__degree">').concat(r.isCelcius?e.temp_c:e.temp_f,"º</div>\n                    </div>\n                  ")})).join(""),'\n        </div>\n    </div>\n  </section>\n  <section class="week__temp">\n    <div class="container">\n        <div class="week__temp-container">\n            <div class="week__temp-item week-item">\n                <div class="week-item__day item">').concat(n(t+1),'</div>\n                <div class="week-item__day item">').concat(n(t+2),'</div>\n            </div>\n\n            <div class="week__temp-item week-item">\n                <div class="week-item__icon item"><img src="').concat(e.forecast.forecastday[1].day.condition.icon,'" alt="Weather Icon"></div>\n                <div class="week-item__icon item"><img src="').concat(e.forecast.forecastday[2].day.condition.icon,'" alt="Weather Icon"></div>\n            </div>\n\n            <div class="week__temp-item week-item">\n                <div class="week-item__daytemp item">').concat(r.isCelcius?e.forecast.forecastday[1].day.maxtemp_c:e.forecast.forecastday[1].day.maxtemp_f,'º</div>\n                <div class="week-item__daytemp item">').concat(r.isCelcius?e.forecast.forecastday[2].day.maxtemp_c:e.forecast.forecastday[2].day.maxtemp_f,'º</div>\n            </div>\n\n            <div class="week__temp-item week-item">\n                <div class="week-item__nighttemp item">').concat(r.isCelcius?e.forecast.forecastday[1].day.mintemp_c:e.forecast.forecastday[2].day.mintemp_f,'º</div>\n                <div class="week-item__nighttemp item">').concat(r.isCelcius?e.forecast.forecastday[2].day.mintemp_c:e.forecast.forecastday[2].day.mintemp_f,"º</div>\n            </div>\n        </div>\n    </div>\n  </section>\n\n  ")},S=function(){var e=I();return"\n    ".concat(e.cards.map((function(t){return'\n                <div data-id="'.concat(t.city,'" class="saved-cities-item city">\n                  <div data-id="').concat(t.city,'" class="city-delete">x</div>\n                  <div class="city-deg-icon">\n                      <div class="city-deg">').concat(e.isCelcius?t.temp_c:t.temp_f,'º</div>\n                      <div class="city-icon"><img src="').concat(t.icon,'"></div>\n                  </div>\n                  <div class="city-name">').concat(t.city,'</div>\n                  <div class="country-name">').concat(t.country,'</div>\n                  <div class="city-weather-info">\n                      \n                      <div class="city-weather-humidity-wrapper">\n                          <div class="city-weather-humidity-icon"><i class="fa-solid fa-droplet"></i></div>\n                          <div class="city-weather-humidity">').concat(t.humidity,'%</div>\n                      </div>\n                      <div class="city-weather-wind-wrapper">\n                          <div class="city-weather-wind-icon"><i class="fa-solid fa-wind"></i></div>\n                          <div class="city-weather-wind">').concat(e.isKPH?t.wind_kph+"km/h":t.wind_mph+"m/s","</div>\n                      </div>\n                      \n                  </div>\n                </div>\n              ")})).join(""),"\n  ")},L=function(e){var t=j(e);document.querySelector("#content").innerHTML=t,setTimeout((function(){document.querySelector(".error-wrapper").classList.add("show")}),700),document.querySelector(".error-close").addEventListener("click",E)},j=function(e){return'\n    <div class="error-wrapper">\n      <article class="error">\n        <span><i class="fas fa-exclamation-circle"></i></span>\n        <p class="error-text">\n          '.concat(e,'\n        </p>\n        <i class="error-close far fa-times-circle rui-cross"></i>\n      </article>\n    </div>\n  ')},E=function(e){e.target.closest(".error-wrapper").remove()},I=function(){var e=JSON.parse(window.localStorage.getItem("storage"));return e.cards.forEach((function(t,n){_(w,t.city).then((function(t){var r={city:t.location.name,country:t.location.country,temp_c:t.current.temp_c,temp_f:t.current.temp_f,icon:t.current.condition.icon,humidity:t.current.humidity,wind_kph:t.current.wind_kph,wind_mph:t.current.wind_mph};e.cards[n]=r,window.localStorage.setItem("storage",JSON.stringify(e))})).catch((function(e){return L(e)}))})),e};function T(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".footer-container").addEventListener("click",(function(e){e.target.closest(".footer-item")&&(document.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}));var C=function(e){if(e.target.closest(".city")&&!e.target.classList.contains("city-delete")){var t=(document.location.hash+"/".concat(e.target.closest(".city").dataset.id)).replace(" ","");J[t]=q,document.location.assign((document.location.hash+"/".concat(e.target.closest(".city").dataset.id)).replace(" ",""))}if(e.target.classList.contains("found-cities-wrapper")||A(),e.target.classList.contains("city-delete")){console.log("delete event",e.target.dataset.id);var n=JSON.parse(localStorage.getItem("storage")),r=n.cards.filter((function(t){return t.city!==e.target.dataset.id}));n.cards=T(r),localStorage.setItem("storage",JSON.stringify(n)),M()}e.target.classList.contains("search")&&_(w,e.target.dataset.name).then((function(e){!function(e){var t=JSON.parse(window.localStorage.getItem("storage"));t.cards.push(e),window.localStorage.setItem("storage",JSON.stringify(t))}({city:e.location.name,country:e.location.country,temp_c:e.current.temp_c,temp_f:e.current.temp_f,icon:e.current.condition.icon,humidity:e.current.humidity,wind_kph:e.current.wind_kph,wind_mph:e.current.wind_mph})})).then((function(){M()})).catch((function(e){return alert(e)})),e.target.closest(".input-search-icon")&&N()},N=function(){document.querySelector(".input-search").focus()};null===localStorage.getItem("storage")&&localStorage.setItem("storage",JSON.stringify({isDarkTheme:!0,isCelcius:!0,isKPH:!0,editMode:!1,cards:[{city:"Austin",country:"USA",temp_c:23,temp_f:40,icon:"http://cdn.weatherapi.com/weather/64x64/night/122.png",humidity:20,wind_kph:10,wind_mph:5},{city:"Brest",country:"Belarus",temp_c:20,temp_f:38,icon:"http://cdn.weatherapi.com/weather/64x64/night/122.png",humidity:20,wind_kph:10,wind_mph:5}]}));var q=function(){_(w,location.hash.split("/")[1]).then((function(e){var t=k(e);document.getElementById("content").innerHTML=t;var n=document.querySelector(".header-return");n.style.display="block",n.addEventListener("click",(function(){window.location.hash="#saved",M()})),window.scrollTo(0,0)})).catch((function(e){return L(e)}))},J={"#home":function(){_(w).then((function(e){var t=k(e);document.getElementById("content").innerHTML=t,window.scrollTo(0,0)})).catch((function(e){L(e)}))},"#saved":function(){for(var e in J)e.includes("#saved/")&&delete J[e];var t=document.querySelector(".wrapper"),n='\n    <header class="header">\n      <div class="container">\n          <form class="search-form" type="submit" action="#">\n              <div class="input-wrapper">\n                  <a class="input-search-icon"><i class="fa-solid fa-magnifying-glass"></i></a>\n                  <input class="input-search" type="text" placeholder="Search">\n                  \n              </div>\n          </form>\n      </div>\n    </header>\n    <section class="saved-cities">\n      <div class="container">\n          <div class="saved-cities-wrapper">\n            '.concat(S(),"\n          </div>\n      </div>\n    </section>\n  "),r=JSON.parse(localStorage.getItem("storage"));document.getElementById("content").innerHTML=n,window.scrollTo(0,0),t.addEventListener("click",C),document.querySelector(".input-search").oninput=function(){A(),this.value.length>2&&x(w,this.value).then((function(e){var t=function(e){return'\n  <div class="found-cities">\n    '.concat(e.map((function(e){return'\n        <div class="found-cities-item city-found">\n          <div class="city-found-name">'.concat(e.name,'</div>\n          <div class="city-found-icon"><i data-name="').concat(e.name,'" class="fa-solid fa-heart search"></i></div>\n        </div>\n      ')})).join(""),"\n  </div>\n  ")}(e),n=document.createElement("div");n.className="found-cities-wrapper",n.innerHTML=t,document.querySelector(".search-form").append(n);var i=[],o=[];return r.cards.forEach((function(e){i.push(e.city)})),e.forEach((function(e){o.push(e.name)})),{saved:i,received:o}})).then((function(e){e.saved.forEach((function(t){e.received.includes(t)&&document.querySelector(".search").remove()}))})).catch((function(e){return L(e)}))}},"#settings":function(){_(w).then((function(e){var t=function(e){var t=JSON.parse(window.localStorage.getItem("storage"));return'\n    <header class="header">\n    <div class="container">\n        <div class="settings-page">\n            <div class="your-location-wrapper">\n                <div class="your-location-icon"><i class="fa-solid fa-location-crosshairs"></i></div>\n                <div class="your-location-title">Your Location Now</div>\n            </div>\n            <div class="city-country">'.concat(e.location.name,", ").concat(e.location.country,'</div>\n            <div class="city-icon"><img src="').concat(e.current.condition.icon,'" alt="Weather Icon"></div>\n            <div class="city-status">').concat(e.current.condition.text,'</div>\n            <div class="city-temperature">').concat(t.isCelcius?e.current.temp_c:e.current.temp_f,'º</div>\n            <div class="city-settings">\n                <div class="weather__info-humidity-wrapper">\n                    <div class="weather__info-humidity-icon"><i class="fa-solid fa-droplet"></i></div>\n                    <div class="weather__info-humidity">').concat(e.current.humidity,'%</div>\n                </div>\n                \n                <div class="weather__info-pressure-wrapper">\n                    <div class="weather__info-pressure-icon"> <i class="fa-solid fa-circle-exclamation"></i></div>\n                    <div class="weather__info-pressure">').concat(e.current.pressure_in,'mBar</div>\n                </div>\n                <div class="weather__info-wind-wrapper">\n                    <div class="weather__info-wind-icon"><i class="fa-solid fa-wind"></i></div>\n                    <div class="weather__info-wind">').concat(t.isKPH?e.current.wind_kph+"km/h":e.current.wind_mph+"m/s",'</div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n  </header>\n\n  <section class="settings">\n    <div class="container">\n        <div class="settings-wrapper">\n            <div class="settings-item">\n                <div class="settings-item-title">Temperature</div>\n                <div class="settings-item-choice choice-temperature">').concat(t.isCelcius?"ºC":"ºF",'</div>\n            </div>\n            <div class="settings-item">\n                <div class="settings-item-title">Wind Speed</div>\n                <div class="settings-item-choice choice-wind">').concat(t.isKPH?"km/h":"m/s",'</div>\n            </div>\n            <div class="settings-item">\n                <div class="settings-item-title">Theme</div>\n                <div class="settings-item-choice choice-theme">').concat(t.isDarkTheme?"Dark":"Light","</div>\n            </div>\n        </div>\n    </div>\n  </section>\n  ")}(e);document.getElementById("content").innerHTML=t})).then((function(){document.querySelector(".settings-wrapper").addEventListener("click",P)})).catch((function(e){return L(e)}))},404:function(){document.getElementById("content").innerHTML='\n    <div class="error-container">\n      <h1 class="error-404">404</h1>\n      <div class="error-message">Something Went Wrong...</div>\n    </div>\n  '}},M=function(){JSON.parse(localStorage.getItem("storage")).isDarkTheme?document.body.classList.remove("light"):document.body.classList.add("light"),J[location.hash]?J[location.hash]():J[404]()},P=function(e){var t=e.target,n=JSON.parse(localStorage.getItem("storage"));t.classList.contains("choice-temperature")?"ºC"===t.textContent?(t.textContent="ºF",n.isCelcius=!1,localStorage.setItem("storage",JSON.stringify(n)),M()):(t.textContent="ºC",n.isCelcius=!0,localStorage.setItem("storage",JSON.stringify(n)),M()):t.classList.contains("choice-wind")?"km/h"===t.textContent?(t.textContent="m/s",n.isKPH=!1,localStorage.setItem("storage",JSON.stringify(n)),M()):(t.textContent="km/h",n.isKPH=!0,localStorage.setItem("storage",JSON.stringify(n)),M()):t.classList.contains("choice-theme")&&("Dark"===t.textContent?(t.textContent="Light",n.isDarkTheme=!1,localStorage.setItem("storage",JSON.stringify(n)),M()):(t.textContent="Dark",n.isDarkTheme=!0,localStorage.setItem("storage",JSON.stringify(n)),M()))},A=function(){var e=document.querySelector(".found-cities-wrapper");e&&e.remove()};window.onload=function(){window.location.hash="#home",M()},window.addEventListener("hashchange",M)})()})();