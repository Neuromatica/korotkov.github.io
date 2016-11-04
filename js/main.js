// initialization
var $page = $('html, body');
var sw = $(window).clientWidth;
var sh = $(window).height();
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$page.find('#social').hide();
$('header').css('width', sw+'px');
$('header').css('height', sh+'px');
$('#present').css('height', sh+'px');
$('#about').css('height', sh+'px');
$('#social').css('left', sw+'px');

$(window).resize(function(e){
	var sw = $(window).clientWidth;
	var sh = $(window).height();
	$('header').css('width', sw+'px');
	$('header').css('height', sh+'px');
});

$("i").hover(
	function() {
		$(this).addClass("animated pulse");
	}, function() {
		$(this).removeClass("animated pulse");
	}
);

window.onscroll = function() {
	if ($(window).height() <= $(document).scrollTop()) {
		$page.find('#social').show();
		$('#social').removeClass("animated fadeOutRight");
		$('#social').addClass("animated fadeInRight");
		$('#social').find('i').removeClass("animated fadeOutRight");
		$('#social').find('i').addClass("animated fadeInRight");
	}
	if ($(window).height() > $(document).scrollTop()) {
		$('#social').removeClass("animated fadeInRight");
		$('#social').addClass("animated fadeOutRight");
		$('#social').find('i').removeClass("animated fadeInRight");
		$('#social').find('i').addClass("animated fadeOutRight");
	}
}

$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
});



// $('#social').animateCss('fadeInRight');

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

//$("#popen").click(function() {
//
//	$(this).closest('body').find('header').hide();
//});