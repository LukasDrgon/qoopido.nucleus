!function(){"use strict";function e(e,t,n,s){function i(e){n(e,{opacity:0,bottom:"7.8rem"},{duration:100,easing:"easeInQuad",display:"none"}),o=null}function a(e){e!==o&&(o&&i(o),n(e,{opacity:1,bottom:"6.8rem"},{duration:100,easing:"easeOutQuad",display:"block"}),o=e)}function c(n){var i,c=n.getAttribute("data-hash"),o=p[c];o?a(o.element):(i=new t("<aside />",{"class":"snippet",itemscope:!0,itemtype:"http://schema.org/WebPageElement/Snippet"},{display:"none",opacity:0}),e("text!../../assets/snippets/"+c+".txt").then(function(e){i.setContent('<pre><code class="language-javascript">'+e+"</code></pre>",!0),s.highlightElement(i.element.firstChild.firstChild),i.appendTo(n),a(i.element),p[c]=i}))}var o,p={};return new t("body").on("click",function(){o&&i(o)}),c}provide(["demand","/nucleus/dom/element","legacy!/velocity","legacy!/prism/js","css!/prism/css","css!../css/snippet.css"],e)}();
//# sourceMappingURL=snippet.js.map
