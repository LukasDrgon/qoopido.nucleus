/*! /emitter 1.0.6 | http://nucleus.qoopido.com | (c) 2016 Dirk Lueth */
!function(t){"use strict";function e(e,r,n){function i(){var t=this,e=t.constructor.prototype,r=f(e);r.forEach(function(r){var n,i;"function"==typeof t[r]&&u.test(r)===!1&&c(e,r).writable&&(n=r.charAt(0).toUpperCase()+r.slice(1),i=c(e,r),i.value=function(){var i;return t.emit("pre"+n,arguments),i=e[r].apply(t,arguments),t.emit("post"+n,arguments,i),i},s(t,r,i))})}function o(){var t=this,e=t.uuid;return!e&&(e=n())&&s(t,"uuid",r(e)),a[e]={},p(t)!==o.prototype&&i.call(t),t}var u=/^(_|((get|has|is)([A-Z]|$)))/,s=Object.defineProperty,f=Object.getOwnPropertyNames,c=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,a={};return o.prototype={on:function(e,r){var n,i=this,o=a[i.uuid],u=0;for(e=e.split(" ");(n=e[u])!==t;u++)(o[n]=o[n]||[]).push(r);return i},one:function(t,e,r){var n=this;return r=r!==!1,n.on(t,function i(o){n.off(r===!0?o:t,i),e.apply(this,arguments)}),n},off:function(e,r){var n,i,o,u=this,s=a[u.uuid],f=0;if(e)for(e=e.split(" ");(n=e[f])!==t;f++)if(s[n]=s[n]||[],r)for(i=0;(o=s[n][i])!==t;i++)o===r&&(s[n].splice(i,1),i--);else s[n].length=0;else for(n in u.listener)s[n].length=0;return u},emit:function(e){var r,n,i,o=this,u=0;if(e)for(r=a[o.uuid],r[e]=r[e]||[],n=r[e].slice();(i=n[u])!==t;u++)i.apply(o,arguments);return o}},e.extend(o)}provide(["./base","./function/descriptor/generate","./function/unique/uuid"],e)}();
//# sourceMappingURL=emitter.js.map
