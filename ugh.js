var opacity_trolling = function(obj) {$(this).css("opacity", (Math.random() + 2.0) / 3.0);}

var UGHJS_MIN = 3000;
var UGHJS_MAX = 12000;

var ughjs_init = function() {
	setTimeout("ughjs_run", UGHJS_MIN + Math.random() * (UGHJS_MAX - UGHJS_MIN));
}

var ughjs_run = function() {
	$('div').each(opacity_trolling);
	ughjs_init();
}

ughjs_init();
