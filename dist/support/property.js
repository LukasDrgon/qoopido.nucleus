/*! /support/property 1.0.2 | http://nucleus.qoopido.com | (c) 2015 Dirk Lueth */
!function(n){"use strict";function i(i,r,t,u){var e=u(),o={};return function(u){var f,a,l,s,c,d=i(arguments[1])?arguments[1]:null,m=!!arguments[d?2:1],p=null,g=0;if(d=d||n,u=r(u),a=d===n?"#window":d.nodeName,a&&(f=o[a]=o[a]||{},p=f[u]=o[a][u]||null),null===p){for(p=!1,c=t(u),l=e?(u+" "+c+" "+e.join(c+" ")+c).split(" "):[u];s=l[g];g++)if(s in d){p=s;break}f&&(f[u]=p)}return p&&m?d[p]:p}}provide(["/demand/validator/isObject","../function/property/unify","../function/string/ucfirst","./prefix"],i)}(this);
//# sourceMappingURL=property.js.map
