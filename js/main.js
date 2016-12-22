// initialization
var $page = $('html, body');
var sw = $(window).clientWidth;
var sh = $(window).height();
var s = 0;
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$('header').css('width', sw+'px');
$('header').css('height', sh+'px');
$('#social').css('margin-left', $(window).width()-60+'px');

$('#f1').css('height', sh+'px');
$('#f2').css('height', sh+'px');




$(window).resize(function(e){
	var sw = $(window).clientWidth;
	var sh = $(window).height();
	$('header').css('width', sw+'px');
	$('header').css('height', sh+'px');
	$('#social').css('margin-left', $(window).width()-60+'px');

	$('#f1').css('height', sh+'px');
	$('#f2').css('height', sh+'px');
});

$(document).ready(function() {
	$("#lightgallery").lightGallery(); 
});