var Util = {};

Util.isWide = function (node) {
	return node.clientWidth >= 800;
};

Util.isIriFilter = function (url) {
	var pattern = /10.10.34.34/;
	return pattern.test(url);
};