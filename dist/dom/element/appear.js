!function(t,e,i,n){"use strict";function o(o,r,s){function a(){f.left=0,f.top=0,f.right=t.innerWidth||h.clientWidth,f.bottom=t.innerHeight||h.clientHeight}function u(){var t=this,e=g[t.uuid],i=e.settings,o=e.boundaries,r=i.threshold,s=r!==n?r:h.clientWidth*i.auto,a=r!==n?r:h.clientHeight*i.auto;o.left=f.left-s,o.top=f.top-a,o.right=f.right+s,o.bottom=f.bottom+a}function c(t,e){var i=t.getBoundingClientRect();return!(i.right<=e.left||i.bottom<=e.top||i.left>=e.right||i.top>=e.bottom)}function d(){var t=this,e=t.node,i=g[t.uuid];return c(e,f)?2:c(e,i.boundaries)?1:0}function l(t,e){var i=o.call(this,t);return e=r({},l.settings,e),"auto"===e.threshold&&delete e.threshold,g[i.uuid]={settings:e,boundaries:{},state:-1},p.on(m,s(u.bind(i))),u.call(i),b.push(i),i}var h=e.documentElement,p=new o(t),f={},g={},b=[],m="resize orientationchange";return p.on(m,s(a)),a(),i(function(){for(var t,e,i,n,o=0;t=b[o];o++)if(e=g[t.uuid],i=e.settings,!i.visibility||t.isVisible()){if((n=d.call(t))!==e.state){switch(n){case 0:t.emit("disappear",{priority:1});break;case 1:t.emit(e.state<=0?"appear":"disappear",{priority:2});break;case 2:t.emit("appear",{priority:1})}e.state=n}i.recur||2!==n||(b.splice(o,1),o--)}},1e3/30),l.settings={threshold:"auto",recur:!0,auto:1,visibility:!0},l.extends(o)}if("CSS1Compat"!==e.compatMode)throw new Error("Browser needs to be in standards mode");provide(["../element","../../function/merge","../../function/debounce"],o)}(this,document,setInterval);
//# sourceMappingURL=appear.js.map
