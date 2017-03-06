var watch = (function () {
	var arrow1 = document.getElementById('arrow1'),
		arrow2 = document.getElementById('arrow2'),
		arrow3 = document.getElementById('arrow3'),
		start = function () {
			var date = new Date(),
				hours = date.getHours(),
				minutes = date.getMinutes(),
				seconds = date.getSeconds();

			function secArrow () {
				if (seconds === 0) {
					arrow1.style.transition = 'none';
					arrow1.style.transform = 'rotate(' + seconds*6 + 'deg)';
					return;
				}
				arrow1.style.transition = 'all ease-in .1s';
				arrow1.style.transform = 'rotate(' + seconds*6 + 'deg)';
			}
			function minArrow () {
				arrow2.style.transform = 'rotate(' + (minutes*6 + seconds*0.1) + 'deg)';
			}
			function hourArrow () {
				arrow3.style.transform = 'rotate(' + (hours*30 + minutes*0.5 + seconds*0.0083333333333333) + 'deg)';
			}
			secArrow();
			minArrow();
			hourArrow();
		},
		init = function () {
			setInterval(start, 1000);
		};
		return {
			init: init
		};
}());

watch.init();