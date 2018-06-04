$(document).ready(function() {

	redrawDotNav();

	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });

	/* Next/prev and primary nav btn click handlers */
	$('a.eight').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.nine').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#nine').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.ten').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#ten').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.eleven').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#eleven').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
		$('a.twelve').click(function(){
				$('html, body').animate({
					scrollTop:$('#twelve').offset().top
				}, 1000, function() {
					parallaxScroll(); // Callback is required for iOS
			});
				return false;
			});
			$('a.thirteen').click(function(){
		    	$('html, body').animate({
		    		scrollTop:$('#thirteen').offset().top
		    	}, 1000, function() {
			    	parallaxScroll(); // Callback is required for iOS
				});
		    	return false;
		    });

			//in case for clothing--etc.
				// $('a.maybe').click(function(){
			  //   	$('html, body').animate({
			  //   		scrollTop:$('#maybe').offset().top
			  //   	}, 1000, function() {
				//     	parallaxScroll(); // Callback is required for iOS
				// 	});
			  //   	return false;
			  //   });
				// 	$('a.maybe').click(function(){
				// 			$('html, body').animate({
				// 				scrollTop:$('#maybe').offset().top
				// 			}, 1000, function() {
				// 				parallaxScroll(); // Callback is required for iOS
				// 		});
				// 			return false;
				// 		});





    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );

});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#eight').offset().top - (($('#nine').offset().top - $('#eight').offset().top) / 2);
	var section3Top =  $('#nine').offset().top - (($('#ten').offset().top - $('#nine').offset().top) / 2);
var section4Top =  $('#ten').offset().top - (($('#eleven').offset().top - $('#ten').offset().top) / 2);
var section5Top =  $('#eleven').offset().top - (($('#twelve').offset().top - $('#eleven').offset().top) / 2);
var section6Top =  $('#twelve').offset().top - (($('#thirteen').offset().top - $('#twelve').offset().top) / 2);
// var section7Top =  $('#thirteen').offset().top - (($('#thirteen').offset().top - $('#twelve').offset().top) / 2);
 var section7Top =  $('#thirteen').offset().top - (($(document).height() - $('#twelve').offset().top) / 2);
;


	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.eight').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.nine').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.ten').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.eleven').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.twelve').addClass('active');
	 }
	// else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
	// 	$('nav#primary a.thirteen').addClass('active');
	// }
	else if ($(document).scrollTop() >= section6Top){
		$('nav#primary a.thirteen').addClass('active');
	}




	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('footer').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 7000);

	function hasScrolled() {
	    var st = $(this).scrollTop();

	    // scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    // If they scrolled down and are past the navbar, class .nav-up.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('footer').removeClass('nav-down').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('footer').removeClass('nav-up').addClass('nav-down');
	        }
	    }

	    lastScrollTop = st;
	}









}










// Hide footer on on scroll down
