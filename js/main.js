// initialization
var $page = $('html, body');
var sw = $(window).clientWidth;
var sh = $(window).height();
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$page.find('#social').hide();
$page.find('#rp1').hide();
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
		$page.find('#rp1').show();
		$page.find('header').hide();
		window.scrollTo(0, 0);
		$('#social').addClass("animated fadeInRight");
		$('#social').find('i').addClass("animated fadeInRight");
		$('#rp1t1').addClass("animated fadeInDown");
		$('#rp1hr').addClass("animated fadeInLeft");
		$('#rp1t2').addClass("animated fadeInUp");
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
//s
//	$(this).closest('body').find('header').hide();
//});
