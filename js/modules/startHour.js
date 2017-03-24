module.exports = function () {
	var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();
	arrowHour.style.transform = 'rotate(' + (hours*30 + minutes*0.5 + seconds*0.0083333333333333) + 'deg)';
};