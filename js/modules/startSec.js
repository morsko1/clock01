module.exports = function () {
	var date = new Date(),
		seconds = date.getSeconds();
	if (seconds === 0) {
		arrowSec.style.transition = 'none';
		arrowSec.style.transform = 'rotate(' + seconds*6 + 'deg)';
		return;
	}
	arrowSec.style.transition = 'all ease-in .1s';
	arrowSec.style.transform = 'rotate(' + seconds*6 + 'deg)';
};