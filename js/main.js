// initialization
var sw = $(window).width();
var sh = $(window).height();
$('header').css('width', sw+'px');
$('header').css('height', sh+'px');

$(window).resize(function(e){
	var sw = $(window).width();
	var sh = $(window).height();
	$('header').css('width', sw+'px');
	$('header').css('height', sh+'px');
});