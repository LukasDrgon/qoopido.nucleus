/*! /url 1.0.7 | http://nucleus.qoopido.com | (c) 2016 Dirk Lueth */
!function(t,e){"use strict";function i(t,i,u){function n(){var t=e.createElement("a");return t.href="/",t.href.slice(0,-1)}function o(t,e){var i;return(i=h[t])?i.link[e]:void 0}function c(t,e,i){var u;(u=h[t])&&(u.link[e]=i)}function r(t){var e=this;a(e,{uuid:i(t)}),r.update.call(e)}function s(t){var n=this,o=u(),c=e.createElement("a");a(n,{uuid:i(o),toString:{value:function(){return c.toString()},enumerable:!1},valueOf:{value:function(){return c.valueOf()},enumerable:!1}}),h[o]={link:c,parameter:{}},c.href=t,n.searchParams=new r(o)}var a=Object.defineProperties,h={},d=/^\//,f=/[?&]?([^=]+)=([^&]*)/g,b=/%20/g,j=/%5B/g,p=/%5D/g,l=new RegExp("^"+n(),"i"),O={"http:":/:80$/,"https:":/:443$/,"ftp:":/:21$/};return r.prototype={get:function(t){return h[this.uuid].parameter[t]},set:function(t,e){h[this.uuid].parameter[t]=e,r.serialize.call(this)},remove:function(t){delete h[this.uuid].parameter[t],r.serialize.call(this)}},r.update=function(){var t,e,i=h[this.uuid],u=i.parameter,n=i.link.search.split("+").join(" ");for(t in u)delete u[t];for(;e=f.exec(n);)u[decodeURIComponent(e[1])]=decodeURIComponent(e[2])},r.serialize=function(){var t,e=h[this.uuid],i=e.parameter,u="";for(t in i)u+=(u?"&":"?")+encodeURIComponent(t)+"="+encodeURIComponent(i[t]);e.link.search=u.replace(b,"+").replace(j,"[").replace(p,"]")},s.prototype={get local(){var t;return(t=o(this.uuid,"href"))?l.test(t):void 0},get href(){return o(this.uuid,"href")},set href(t){c(this.uuid,"href",t)},get origin(){var t=this;return o(t.uuid,"origin")||t.protocol+"//"+t.host},get protocol(){return o(this.uuid,"protocol")},set protocol(t){c(this.uuid,"protocol",t)},get username(){return o(this.uuid,"username")},set username(t){c(this.uuid,"username",t)},get password(){return o(this.uuid,"password")},set password(t){c(this.uuid,"password",t)},get host(){var t,e;return(t=o(this.uuid,"host"))?(e=o(this.uuid,"protocol"),O[e]?t.replace(O[e],""):t):void 0},set host(t){c(this.uuid,"host",t)},get hostname(){return o(this.uuid,"hostname")},set hostname(t){c(this.uuid,"hostname",t)},get port(){return o(this.uuid,"port")},set port(t){c(this.uuid,"port",t)},get pathname(){var t;return(t=o(this.uuid,"pathname"))?d.test(t)?t:"/"+t:void 0},set pathname(t){c(this.uuid,"pathname",t)},get search(){return o(this.uuid,"search")},set search(t){c(this.uuid,"search",t),r.update.call(this)},get hash(){return o(this.uuid,"hash")},set hash(t){c(this.uuid,"hash",t)}},t.extend(s)}provide(["./base","./function/descriptor/generate","./function/unique/uuid"],i)}(this,document);
//# sourceMappingURL=url.js.map
