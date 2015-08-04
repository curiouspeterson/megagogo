/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
	
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '50px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
	
	$("a.page-scroll[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top -100
	     }, 300, function(){});

	});

    // Initialize WOW.js Scrolling Animations
    new WOW().init();
	
    CountDownTimer('08/29/2015 11:59 PM', 'countdown');

	var distance;

    function CountDownTimer(dt, id)
    {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            distance = end - now;
			
            if (distance < 0) {
                clearInterval(timer);
                document.getElementById(id).innerHTML = 'Funded!';
				document.getElementById('remaining-time').innerHTML = 'Campaign has ended';
				
                return;
            } else {
				
	            var days = Math.floor(distance / _day);
	            var hours = Math.floor((distance % _day) / _hour);
	            var minutes = Math.floor((distance % _hour) / _minute);
	            var seconds = Math.floor((distance % _minute) / _second);
				
				if (days >= 1) {
		            document.getElementById(id).innerHTML = days;
			
				} else {
					if (hours >= 1) {
						document.getElementById(id).innerHTML = hours;
						document.getElementById('units-left').innerHTML = 'hours';
	
					} else {
						
						if (minutes > 1 ) {
							document.getElementById(id).innerHTML = minutes;
							document.getElementById('units-left').innerHTML = 'mins';
						} else {
							document.getElementById(id).innerHTML = seconds;
							document.getElementById('units-left').innerHTML = 'secs';
						}
			           
						
					}
				}
           }
            
        }
			showRemaining();
        timer = setInterval(showRemaining, 1000);
    }
	 
	
	function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	
	function secondsRemaining() {

			var amount = 'amount-pledged';
			var backers = 'backers';
			var individualDonation = 2926;
			var amountDonated;
		
			var firstDate = new Date('July 29, 2015 00:00:00');
			var secondDate = new Date();
	
			var dif = firstDate.getTime() - secondDate.getTime()

			var Seconds_from_T1_to_T2 = dif / 1000;
			var elapsedSecs = Math.abs(Seconds_from_T1_to_T2);
		
			var elapsedSecs = Math.floor(elapsedSecs);
			amountDonated = elapsedSecs * individualDonation;
		
			var divisibleDonars = elapsedSecs;
		
			elapsedSecs = numberWithCommas(elapsedSecs);
			amountDonated = numberWithCommas(amountDonated);
		
		
			document.getElementById(backers).innerHTML = elapsedSecs;
			document.getElementById(amount).innerHTML = amountDonated;
		
			document.getElementById('update-backer-1').innerHTML = numberWithCommas(Math.floor(divisibleDonars *.35));
			document.getElementById('update-backer-2').innerHTML = numberWithCommas(Math.floor(divisibleDonars *.2));
			document.getElementById('update-backer-3').innerHTML = numberWithCommas(Math.floor(divisibleDonars *.15));
			document.getElementById('update-backer-4').innerHTML = numberWithCommas(Math.floor(divisibleDonars *.1));
			document.getElementById('update-backer-5').innerHTML = numberWithCommas(Math.floor(divisibleDonars *.25));
			document.getElementById('update-backer-6').innerHTML = numberWithCommas(Math.floor(divisibleDonars *.05));
			
	}
	secondsRemaining();

	(function loop() {
	    var rand = Math.round(Math.random() * (20000 - 10000)) + 10000;
	
	
		if (distance < 0) { 
			return;
		} else {
		    setTimeout(function() {
		            secondsRemaining();
		            loop();  
		    }, rand);
		}
	    
	}());
	

	$('.reward-hover-container').on('click', function() {
		ga('send', 'event', 'button', 'click', 'select this reward');
	});
	
	$('.related-project').on('click', function() {
	  ga('send', 'event', 'button', 'click', 'related project');
	});
	
	$('.twitter-share').on('click', function() {
	  ga('send', 'event', 'button', 'click', 'twitter share');
	});

	$('.facebook-share').on('click', function() {
	  ga('send', 'event', 'button', 'click', 'facebook share');
	});
	
	$('.follow-link').on('click', function() {
	  ga('send', 'event', 'button', 'click', 'follow link');
	});


	function hoverText() {

		$(".reward-hover-container").each(function() {
			var height = $(this).outerHeight();
			var halfHeight = height / 2 - 10;
			$(this).css('padding-top', halfHeight );
		});

	}
	
	hoverText();
	resizeFooter();	
	
	$(window).resize(function() {
		hoverText();
		resizeFooter();	
	});


	function resizeFooter() {
		var h = window.innerHeight;
		$('#footer-resize').css('min-height', h);
	}


	function fixPlaceholders() {
		
		$('input.wpcf7-text').each(function() {
			if (!$(this).val()) {
				$(this).val($(this).attr('title'));
			}
			if ($(this).val() == $(this).data('originalValue')) {
				$(this).val('');
			}
		});		
				
		$('input.wpcf7-text, textarea ').focus(function() {
			if (!$(this).data('originalValue')) {
				$(this).data('originalValue', $(this).val());
			}
			if ($(this).val() == $(this).data('originalValue')) {
				$(this).val('');
			}
		}).blur(function(){
			if ($(this).val() == '') {
				$(this).val($(this).data('originalValue'));
			}
		});

		$('#mce-EMAIL').val('Email Address');

	    $('#mce-EMAIL').focus(function() {
	        if (!$(this).data('originalValue')) {
	            $(this).data('originalValue', $(this).val());
	        }
	        if ($(this).val() == $(this).data('originalValue')) {
	            $(this).val('');
	        }
	    }).blur(function(){
	        if ($(this).val() == '') {
	            $(this).val($(this).data('originalValue'));
	        }
	    });
	}



})(jQuery); // End of use strict
