// initialization
var $page = $('html, body');
var sw = $(window).clientWidth;
var sh = $(window).height();
var s = 0;
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$page.find('#social').hide();
$page.find('#rp1').hide();
$('header').css('width', sw+'px');
$('header').css('height', sh+'px');
$('#social').css('margin-left', $(window).width()-60+'px');

$(window).resize(function(e){
	var sw = $(window).clientWidth;
	var sh = $(window).height();
	$('header').css('width', sw+'px');
	$('header').css('height', sh+'px');
	$('#social').css('margin-left', $(window).width()-60+'px');
});

$(document).ready(function() {
	$("#lightgallery").lightGallery(); 
});