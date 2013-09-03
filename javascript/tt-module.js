var tt = (function(){
	"use strict";
	var tt = {};

	tt.createWrap = function(obj) {
		var wrap = document.createElement('span');
		wrap.className = 'tt-wrap';
		obj.parentNode.replaceChild(wrap, obj);
		wrap.appendChild(obj);
		return wrap;
	};
	tt.init = function(objs) {
		var i = objs.length;
		while(i--) {
			var obj = objs[i],
				wrap = tt.createWrap(obj),
				ttContent = tt.getContent(obj);

			wrap.appendChild(ttContent);
		}
		return objs;
	};
	tt.getContent = function(obj) {
		var rel = obj.getAttribute('data-rel');
		return document.querySelector(rel);
	};

	return {
		init : tt.init
	};
}());

var $ = function(selector) {
	return document.querySelectorAll(selector);
};
window.addEventListener("load", function() {
	console.log(tt);//Object { init=function()}
	console.log(tt.createWrap);//undefined
	tt.init($('.tt'));
	tt.init($('#another'));
});