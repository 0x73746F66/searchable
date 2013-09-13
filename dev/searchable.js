/**
 * @class searchable
 * @verson 0.1
 * @author Christopher D Langton <chris@codewiz.biz>
 * @classDescription text searchable DOM
 */
var Searchable = function(s){
    if ("string" !== typeof s) return;
	this.el = document.getElementById(s);
    if (!this.el) return;
	var ele = this.el;
	var insertAfter = function(referenceNode, newNode) {
		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	};
	var style = document.createElement("style");
	style.id = s + '_style';
	ele.parentNode.insertBefore(style, ele.nextSibling);
	ele.addEventListener('input', function() {
		var style = document.getElementById(s + '_style');
		if (!this.value) {
			style.innerHTML = "";
			return;
		}
		style.innerHTML = "[data-searchable=\""+s+"\"]:not([data-index*=\"" + this.value.split(' ').join('').toLowerCase().replace('"', '\\"') + "\"]) { display: none; }";
	});
};
Searchable.fn = Searchable.prototype = {};