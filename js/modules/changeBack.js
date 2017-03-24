module.exports = function () {
	var clock = document.getElementById('clock');
	if (clock.style.backgroundImage !== 'none') {
		clock.style.backgroundImage = 'none';
		clock.style.boxShadow = '0 0 3px 3px #555';
	}
	else{
		clock.style.backgroundImage = '';
		clock.style.boxShadow = '';
	}
};