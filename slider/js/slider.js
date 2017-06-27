var sliderInt = 1;
var sliderInt = 2;

$(document).ready(function(){
	$("#slider > img#1").fadeIn(300);
	startSlider();
});

function startSlider(){
	var count = $("#slider > img").size();
	var loop = setInterval(function(){
		$("#slider > img").fadeOut(300);
	}, 3000);
}