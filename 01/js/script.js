(function () {
	var i = 0,
		states = document.querySelectorAll('.play-states'),
		square = document.querySelector('.square');

	for(var length = states.length; i < length; i++) {
		states[i].onchange = function (e) {
			square.style.animationPlayState = e.target.value;
		}
	}
})()