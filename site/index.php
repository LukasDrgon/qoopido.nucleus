<!DOCTYPE html>
<html itemscope itemtype="http://schema.org/WebPage" lang="en-US">
<head>
	<title>Qoopido.nucleus - modular JavaScript utility library</title>

	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimal-ui" />
	<meta name="description" lang="en-US" content="Lightweight, atomic and modular JavaScript utility library that strongly encourages the creation and usage of small yet flexible, reusable and easily maintainable modules." />
	<meta name="robots" content="index,follow" />
	<meta name="revisit-after" content="+1 week" />
	<meta name="author" content="Dirk Lüth <info@qoopido.com>" />
	<meta name="theme-color" content="#5d407f">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="mobile-web-app-capable" content="yes" />

	<link rel="shortcut icon" href="./assets/images/dist/favicon.png" />
	<link rel="icon" href="./assets/images/dist/favicon.png" />
	<link rel="apple-touch-icon" href="./assets/images/dist/favicon.png" type="image/png" />

	<meta itemprop="url" content="http://nucleus.qoopido.com" />
	<meta itemprop="name" content="Qoopido.nucleus - modular JavaScript utility library" />
	<meta itemprop="description" content="Lightweight, atomic and modular JavaScript utility library that strongly encourages the creation and usage of small yet flexible, reusable and easily maintainable modules." />

	<meta property="og:site_name" content="Qoopido.nucleus - modular JavaScript utility library" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="http://nucleus.qoopido.com" />
	<meta property="og:title"  content="Home" />
	<meta property="og:description" content="Lightweight, atomic and modular JavaScript utility library that strongly encourages the creation and usage of small yet flexible, reusable and easily maintainable modules." />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@qoopido" />
	<meta name="twitter:url" content="http://nucleus.qoopido.com" />
	<meta name="twitter:title" content="Qoopido.nucleus" />
	<meta name="twitter:description" content="Lightweight & modular JS library that strongly encourages creation of small, flexible and reusable modules." />

	<link rel="author" href="https://plus.google.com/105793905947859477305" />
	<style type="text/css">
		<?php echo file_get_contents('./assets/css/dist/default.css'); ?>
	</style>
</head>
<body>

<a id="intro"></a>
<a id="base"></a>
<a id="emitter"></a>
<a id="support"></a>
<a id="support"></a>
<a id="dom"></a>
<a id="domElementAppear"></a>
<a id="componentSense"></a>
<a id="transportXhr"></a>
<a id="task"></a>
<a id="componentIterator"></a>

<main role="main" itemprop="mainContentOfPage">
	<section itemscope itemtype="http://schema.org/WebPageElement" id="section-intro" style="background-color: rgb(102, 100, 102);">
		<meta itemprop="image" content="./assets/images/dist/1.jpg" />
		<meta itemprop="url" content="http://nucleus.qoopido.com/#intro" />
		<h1><span itemprop="headline">What can Qoopido.<wbr />nucleus do for you?</span></h1>
		<div><p itemprop="description">Nucleus is a lightweight, atomic and modular JavaScript utility library. It strongly encourages the creation and usage of small yet flexible, reusable and easily maintainable modules. Nucleus utilizes Qoopido.demand as its caching loader.</p></div>
	</section>

	<section itemscope itemtype="http://schema.org/WebPageElement" id="section-base" style="background-color: rgb(126, 150, 34);">
		<meta itemprop="image" content="./assets/images/dist/2.jpg" />
		<meta itemprop="url" content="http://nucleus.qoopido.com/#base" />
		<h2><span itemprop="headline">simple & light&shy;weight inheri&shy;tance</span></h2>
		<div><p itemprop="description">It only takes very few lines of code to inherit from any other module! The base module providing the extension & inheritance functionality weighs only about 1kB minified and gzipped.</p></div>
		<a href="#snippet" title="show snippet">{ }</a>
	</section>

	<section itemscope itemtype="http://schema.org/WebPageElement" id="section-emitter" style="background-color: rgb(157, 115, 140);">
		<meta itemprop="image" content="./assets/images/dist/3.jpg" />
		<meta itemprop="url" content="http://nucleus.qoopido.com/#emitter" />
		<h2><span itemprop="headline">events made easy & fun</span></h2>
		<div><p itemprop="description">Extending the included emitter will enable your modules to instantly emit custom events and offer listener registration via on, one and off methods. Beside that, your modules own methods will automagically emit pre- and post-events!</p></div>
		<a href="#snippet" title="show snippet">{ }</a>
	</section>

	<section itemscope itemtype="http://schema.org/WebPageElement" id="section-support" style="background-color: rgb(175, 114, 88);">
		<meta itemprop="image" content="./assets/images/dist/4.jpg" />
		<meta itemprop="url" content="http://nucleus.qoopido.com/#support" />
		<h2><span itemprop="headline">extendible feature detection</span></h2>
		<div><p itemprop="description">The atomic principle got transfered over to an absolutely versatile feature detection as well. Feature detects are always async, so any test is possible, by design!</p></div>
		<a href="#snippet" title="show snippet">{ }</a>
	</section>

	<section itemscope itemtype="http://schema.org/WebPageElement" id="section-dom" style="background-color: rgb(111, 161, 55);">
		<meta itemprop="image" content="./assets/images/dist/5.jpg" />
		<meta itemprop="url" content="http://nucleus.qoopido.com/#dom" />
		<h2><span itemprop="headline">intuitive DOM manipu&shy;lation</span></h2>
		<div><p itemprop="description">DOM manipulation, event abstraction and delegation are included for single elements and collections of elements alike. Both layers offer an intuitive chainable interface wherever applicable.</p></div>
		<a href="#snippet" title="show snippet">{ }</a>
	</section>

	<section itemscope itemtype="http://schema.org/WebPageElement" id="section-domElementAppear" style="background-color: rgb(209, 207, 213);">
		<meta itemprop="image" content="./assets/images/dist/6.jpg" />
		<meta itemprop="url" content="http://nucleus.qoopido.com/#domElementAppear" />
		<h2><span itemprop="headline">viewport-aware DOM elements</span></h2>
		<div><p itemprop="description">The included appear module makes it a breeze to react on elements entering, nearing or leaving the visible viewport or an adjustable treshold around it. It enables you to load any kind of functionality on demand, for example on scroll.</p></div>
		<a href="#snippet" title="show snippet">{ }</a>
	</section>

	<section itemscope itemtype="http://schema.org/WebPageElement" id="section-componentSense" style="background-color: rgb(195, 159, 120);">
		<meta itemprop="image" content="./assets/images/dist/7.jpg" />
		<meta itemprop="url" content="http://nucleus.qoopido.com/#componentSense" />
		<h2><span itemprop="headline">CSS media queries in JavaScript</span></h2>
		<div><p itemprop="description">The sense module makes the sometimes cumbersome use of window.matchMedia dead simple. Just create a new query and listen for any match and unmatch events it fires. Even in Internet Explorer 9!</p></div>
		<a href="#snippet" title="show snippet">{ }</a>
	</section>

	<section itemscope itemtype="http://schema.org/WebPageElement" id="section-transportXhr" style="background-color: rgb(111, 68, 69);">
		<meta itemprop="image" content="./assets/images/dist/8.jpg" />
		<meta itemprop="url" content="http://nucleus.qoopido.com/#transportXhr" />
		<h2><span itemprop="headline">Ajax for human beings</span></h2>
		<div><p itemprop="description">The built-in promise like XHR abstraction greatly simplifies your daily ajax needs by offering you a fluent and easily readable interface no matter which browser you throw at it.</p></div>
		<a href="#snippet" title="show snippet">{ }</a>
	</section>

	<section itemscope itemtype="http://schema.org/WebPageElement" id="section-task" style="background-color: rgb(146, 66, 35);">
		<meta itemprop="image" content="./assets/images/dist/9.jpg" />
		<meta itemprop="url" content="http://nucleus.qoopido.com/#task" />
		<h2><span itemprop="headline">Web&shy;Worker done right</span></h2>
		<div><p itemprop="description">Using WebWorker tends to always become a tedious task almost no developer is willing to encounter on a regular basis. Having a promise like abstraction makes them fun again, finally!</p></div>
		<a href="#snippet" title="show snippet">{ }</a>
	</section>

	<section itemscope itemtype="http://schema.org/WebPageElement" id="section-componentIterator" style="background-color: rgb(60, 128, 184);">
		<meta itemprop="image" content="./assets/images/dist/10.jpg" />
		<meta itemprop="url" content="http://nucleus.qoopido.com/#componentIterator" />
		<h2><span itemprop="headline">flexible iterators</span></h2>
		<div><p itemprop="description">Is it a slideshow, a lightbox, a slider or a pagination? No, it is a simple, abstract and UI independent iterator. Whatever you can imagine is possible as long as it is array based, no matter how it looks or behaves.</p></div>
		<a href="#snippet" title="show snippet">{ }</a>
	</section>
</main>

<a href="https://github.com/dlueth/qoopido.nucleus" target="_blank" id="github">Fork me on GitHub</a>

<script>
	!function(a,b,c){!function(d,e,f,g,h){g=e.getElementsByTagName(f)[0],h=e.createElement(f),d.demand={url:a,main:b,settings:c},h.async=1,h.src=a,g.parentNode.insertBefore(h,g)}(window,document,"script")}
	("//cdn.jsdelivr.net/qoopido.demand/2.1.4/demand.js","assets/js/dist/main",{base:"/site",version:"1.1.1",cache:false});
</script>
</body>
</html>