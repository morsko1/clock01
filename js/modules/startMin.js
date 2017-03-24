module.exports = function () {
	var date = new Date(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();
	arrowMin.style.transform = 'rotate(' + (minutes*6 + seconds*0.1) + 'deg)';
};