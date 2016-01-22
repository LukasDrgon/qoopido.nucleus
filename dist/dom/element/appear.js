/*! /dom/element/appear 1.0.6 | http://nucleus.qoopido.com | (c) 2016 Dirk Lueth */
!function(t,e,i,n){"use strict";function o(o,r,s){function u(){g.left=0,g.top=0,g.right=t.innerWidth||f.clientWidth,g.bottom=t.innerHeight||f.clientHeight}function a(){var t=this,e=m[t.uuid],i=e.settings,o=e.boundaries,r=i.threshold,s=r!==n?r:f.clientWidth*i.auto,u=r!==n?r:f.clientHeight*i.auto;o.left=g.left-s,o.top=g.top-u,o.right=g.right+s,o.bottom=g.bottom+u}function c(t,e){var i=t.getBoundingClientRect();return i.right<=e.left||i.bottom<=e.top||i.left>=e.right||i.top>=e.bottom?!1:!0}function l(){var t=this,e=t.element,i=m[t.uuid];return c(e,g)?2:c(e,i.boundaries)?1:0}function d(t,e){var i=this["super"].call(this,t),n=i.uuid;e=r({},d.settings,e),"auto"===e.threshold&&delete e.threshold,m[n]={settings:e,boundaries:{},state:-1},p.on(v,s(a.bind(i))),a.call(i),b.push(i)}var h,f=e.documentElement,p=new o(t),g={},m={},b=[],v="resize orientationchange",w="appear",y="disappear";return h=o.extend(d),h.settings={threshold:"auto",recur:!0,auto:1,visibility:!0},p.on(v,s(u)),u(),i(function(){for(var t,e,i,n,o=0;t=b[o];o++)if(e=m[t.uuid],i=e.settings,!i.visibility||t.isVisible()){if(n=l.call(t),n!==e.state){switch(n){case 0:t.emit(y,{priority:1});break;case 1:t.emit(0===e.state?w:y,{priority:2});break;case 2:t.emit(w,{priority:1})}e.state=n}i.recur||2!==n||(b.splice(o,1),o--)}},1e3/30),h}if("CSS1Compat"!==e.compatMode)throw new Error("Browser needs to be in standards mode");provide(["../element","../../function/merge","../../function/debounce"],o)}(this,document,setInterval);
//# sourceMappingURL=appear.js.map
