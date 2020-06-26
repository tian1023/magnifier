var body = document.querySelector("body");
var back = document.querySelector(".back");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
left.onmouseenter = function() {
	back.style.display = "block";
	right.style.display = "block";
}
left.onmouseleave = function() {
	back.style.display = "none";
	right.style.display = "none";
}
left.onmousemove = function(e) {
	var x = e.pageX - 150 - body.offsetLeft;
	var y = e.pageY - 100 - body.offsetLeft;
	if(x < 0) {
		x = 0;
	}
	if(x > 300) {
		x = 300;
	}
	if(y < 0) {
		y = 0;
	}
	if(y > 200) {
		y = 200;
	}
	back.style.top = y + "px";
	back.style.left = x + "px";

	right.style.backgroundPositionX = (-x * 2) + "px";
	right.style.backgroundPositionY = (-y * 2) + "px";
}