/*! Qoopido.nucleus 1.0.0 | https://github.com/dlueth/qoopido.nucleus | (c) 2015 Dirk Lueth */
!function(){"use strict";function t(t,e){function o(t){e.process(this,t)}return o.prototype={originalEvent:null,isDelegate:!1,isDefaultPrevented:!1,isPropagationStopped:!1,isImmediatePropagationStopped:!1,preventDefault:function(){var t=this,e=t.originalEvent;e.cancelable!==!1&&(t.isDefaultPrevented=!0,e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var t=this,e=t.originalEvent;t.isPropagationStopped=!0,e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){var t=this,e=t.originalEvent;t.isImmediatePropagationStopped=!0,e.stopImmediatePropagation&&e.stopImmediatePropagation(),t.stopPropagation()}},t.extend(o)}provide(["../base","../hooks/event"],t)}();
//# sourceMappingURL=event.js.map
