var watch = (function () {
	var arrowSec = document.getElementById('arrowSec'),
		arrowMin = document.getElementById('arrowMin'),
		arrowHour = document.getElementById('arrowHour'),
		button = document.getElementById('button'),
		start = require('./modules/start'),
		changeBack = require('./modules/changeBack'),
		init = function () {
			setInterval(start, 1000);
			button.addEventListener('click', changeBack);
		};
		return {
			init: init
		};
}());

watch.init();