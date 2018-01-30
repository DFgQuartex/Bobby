(function($)
{
	"use strict"

	/* Event - Window Scroll */
	$(window).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= 300 )
		{
			$('.header-section').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.header-section').removeClass("navbar-fixed-top");
		}
		else
		{
			$('.header-section').removeClass("navbar-fixed-top");
		} // set sticky menu - end		

		if ($(this).scrollTop() >= 50)
		{
			// If page is scrolled more than 50px
			$('#back-to-top').fadeIn(200);    // Fade in the arrow
		}
		else
		{
			$('#back-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	/* Event - Window Scroll /- */

	$('#back-to-top').click(function()
	{
		// When arrow is clicked
		$('body,html').animate(
		{
			scrollTop : 0 // Scroll to top of body
		},800);
	});
	
	/* Service Section */
	$('.service-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.service-section .col-md-6:nth-child(even) .service-box-inner').addClass('animated slideInLeft');
			$('.service-section .col-md-6:nth-child(odd) .service-box-inner').addClass('animated slideInRight');
						
		});
	});
	
	/* Feature Section */
	$('.features-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.features-section .col-md-7').addClass('animated slideInLeft');
			$('.features-section .col-md-5').addClass('animated slideInRight');
		});
	});
	
	/* Our Work */
	$('.our-work').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.our-work .section-header').addClass('animated fadeInDown');
			$('.our-work .portfolio-categories').addClass('animated fadeInUp');
			$('.our-work .portfolio-list li').addClass('animated rollIn');
		});
	});
	/* Client Section */
	$('.client-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.client-section .client-style1').addClass('animated fadeInDown');
			$('.client-section .client-style2').addClass('animated fadeInLeft');
			$('.client-section .client-style3').addClass('animated fadeInUp');			
		});
		
		$('.client-style1').hover(function() {
			$('.client-style1').addClass('client-active');
			$('.client-style2').removeClass('client-active');
			$('.client-style1:hover').css('clip-path','url("#client-12")');
		}, function() { 
			$('.client-style2').addClass('client-active');
			$('.client-style1').removeClass('client-active');
			$('.client-style1').css('clip-path','url("#client-1")');
			$('.client-style2').css('clip-path','url("#client-21")');
		});
		
		$('.client-style3').hover(function() {
			$('.client-style3').addClass('client-active');
			$('.client-style2').removeClass('client-active');
			$('.client-style3').css('clip-path','url("#client-31")');
		}, function() { 
			$('.client-style2').addClass('client-active');
			$('.client-style3').removeClass('client-active');
			$('.client-style3').css('clip-path','url("#client-3")');
			$('.client-style2').css('clip-path','url("#client-21")');
		});
		
		
		//$('.client-style2').css('clip-path','url("#client-2")');
		//$('.client-style3').css('clip-path','url("#client-3")');
	});
	

	/* Social Section */
	$('.social-main').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.social-main > div').addClass('animated bounceInUp');
		});
	});	
	
	/* Project Section */
	$('.project-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.project-section .start-project p').addClass('animated fadeInLeft');
			$('.project-section .start-project h2').addClass('animated fadeInLeft');
			$('.project-section .start-project').addClass('animated fadeInLeft');
			$('.project-section .send-msg p').addClass('animated fadeInRight');
			$('.project-section .send-msg h2').addClass('animated fadeInRight');
			$('.project-section .send-msg').addClass('animated fadeInRight');
		});
	});	

	
	/*
	$('#creative-our-skill-section').each(function ()
	{		
		var $this = $(this);
		var myVal = $(this).data("value");	

		$this.appear(function()
		{
			var skill_item_count = 0;
			var skills_count = 0;

			skill_item_count = $( "[id*='skill_count-']" ).length;

			for(var i=1; i<=skill_item_count; i++)
			{
				skills_count = $( "[id*='skill_count-"+i+"']" ).attr( "skills_percent" );
				$("[id*='skill_count-"+i+"']").animateNumber({ number: skills_count }, 2000);
				// $("[id*='skill_count-"+i+"']").css('width', skills_count);
			}
		});				
	});	*/
	
	$('.dial').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");		

		$this.appear(function()
		{
			// alert(myVal);
			$this.knob({ });
			$({ value: 0 }).animate({ value: myVal },
			{
				duration: 2000,
				easing: 'swing',
				step: function ()
				{
					$this.val(Math.ceil(this.value)).trigger('change');
				}
			});
		});
	});
	
	// 08 - Line Progress Bar
	/*$('.skills-wrapper').appear(function()
	{
		var skill_item_count = 0;
		var skills_count = 0;

		skill_item_count = $( "[class*='skill_count-']" ).length;
		for(var i=1; i<=skill_item_count; i++)
		{
			skills_count = $( "[class*='skill_count-"+i+"']" ).attr( "skills_percent" );
			$("[class*='skill_count-"+i+"']").css('width', skills_count);
		}
	},{accX: 0, accY: -70});*/
	
	/* Event - Document Ready /- */	
	$(document).ready(function($)
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= height -500 )
		{
			$('.header').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.header').removeClass("navbar-fixed-top");
		}
		else
		{
			$('.header').removeClass("navbar-fixed-top");
		} // set sticky menu - end

		$('.navbar-nav li a, .logo-block a').bind('click', function(event)
		{
			var anchor = $(this);

			if( anchor == 'undefined' || anchor == null || anchor.attr('href') == '#' ) { return; }
			if ( anchor.attr('href').indexOf('#') === 0 )
			{
				if( $(anchor.attr('href')).length )
				{
					$('html, body').stop().animate( { scrollTop: $(anchor.attr('href')).offset().top - 72 }, 1500, 'easeInOutExpo' );					
				}
				event.preventDefault();
			}
		});

		$('.goto-next a').bind('click', function(event)
		{
			var anchor = $(this);

			if( anchor == 'undefined' || anchor == null || anchor.attr('href') == '#' ) { return; }
			if ( anchor.attr('href').indexOf('#') === 0 )
			{
				if( $(anchor.attr('href')).length )
				{
					$('html, body').stop().animate( { scrollTop: $(anchor.attr('href')).offset().top - 150 }, 1500, 'easeInOutExpo' );			
				}
				event.preventDefault();
			}
		});
		
		$('.our-work .portfolio-categories li > a').on('click', function(event)
		{
			$('.our-work .portfolio-categories li > a').removeClass('active');
			$(this).addClass('active');
		});
		
		
		/* Window Hight Set to Elements /- */
		var window_height = $(window).height();
		var window_width = $(window).width();

		// picker buttton
		$(".picker_close").click(function()
		{
			$("#choose_color").toggleClass("position");
		});
	});
	/* document.ready /- */

	/* Event - Window Resize /- */
	$(window).resize(function()
	{
		/* Window Hight Set to Elements /- */
		var window_height = $(window).height();
		var window_width = $(window).width();
		// $(".header").css("height", window_height + "px");
	});
	/* Event - Window Resize /- */

	var $itemsHolder = $('.portfolio-list');
	var $itemsClone = $itemsHolder.clone(); 
	var $filterClass = "";
	$('.portfolio-categories li').click(function(e)
	{
		e.preventDefault();
		$filterClass = $(this).attr('data-value');
		if($filterClass == 'all')
		{
			var $filters = $itemsClone.find('li');
		}
		else
		{
			var $filters = $itemsClone.find('li[data-type='+ $filterClass +']');
		}
		$itemsHolder.quicksand(
		$filters,
		{
			duration: 1000
		});
	});
	
	$('#photos-slider').superslides({
		animation: 'fade',
		pagination: true
	});
	
	var wow = new WOW(
	{
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true        // act on asynchronously loaded content (default is true)
	});
	wow.init();

})(jQuery);


var isIframe =  function() {
	var isIframe = false;
	try{
		//try to access the document object
		if (self.location.href != top.location.href)
			isIframe = true;
	}catch(e) {
		//We don't have access, it's cross-origin!
		isIframe = true;
	}
	return isIframe;
};


jQuery(function () {
	var myPlayer = jQuery("#bgndVideo").YTPlayer({
		onReady: function (player) {
			YTPConsole.append(player.id + " player is ready");
			YTPConsole.append("<br>");
		}
	});

	/* DEBUG ******************************************************************************************/

	var YTPConsole = jQuery("#eventListener");
	// EVENT: YTPStart YTPEnd YTPLoop YTPPause YTPBuffering
	myPlayer.on("YTPStart YTPEnd YTPLoop YTPPause YTPBuffering", function (e) {
		YTPConsole.append(e.type + " - " + jQuery("#bgndVideo").getPlayer().getPlayerState() + " - time: " + e.time);
		YTPConsole.append("<br>");
	});
	// EVENT: YTPChanged
	myPlayer.on("YTPChanged", function (e) {
		YTPConsole.html("");
	});

	// EVENT: YTPData
	myPlayer.on("YTPData", function (e) {
		YTPConsole.append("******************************");
		YTPConsole.append("<br>");
		YTPConsole.append(e.type);
		YTPConsole.append("<br>");
		YTPConsole.append(e.prop.title);
		YTPConsole.append("<br>");
		YTPConsole.append(e.prop.description.replace(/\n/g, "<br/>"));
		YTPConsole.append("<br>");
		YTPConsole.append("******************************");
		YTPConsole.append("<br>");
	});

	// EVENT: YTPTime
	myPlayer.on("YTPTime", function (e) {
		var currentTime = e.time;
		var player = e.target.wrapper;
		var traceLog = currentTime / 4 == Math.floor(currentTime / 4);

		if (traceLog && YTPConsole.is(":visible")) {
			YTPConsole.append(e.type + " actual time is: " + currentTime);
			YTPConsole.append("<br>");
		}
	});

	/* DEBUG END ******************************************************************************************/

});

var v = false;
function changeVideo() {
	var vID = v ? "7SnmCUwOsts" : "BsekcY04xvQ";
	jQuery('#bgndVideo').changeMovie({videoURL: vID});
	$("#vidData").toggle(1000);
	v = !v;
}

//Отзывы
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:false
    });
});
//Счетчик
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 1 * 5 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

// Create Countdown
var Countdown = {
  
  // Backbone-like structure
  $el: $('.countdown'),
  
  // Params
  countdown_interval: null,
  total_seconds     : 0,
  
  // Initialize the countdown  
  init: function() {
    
    // DOM
		this.$ = {
    	hours  : this.$el.find('.bloc-time.hours .figure'),
    	minutes: this.$el.find('.bloc-time.min .figure'),
    	seconds: this.$el.find('.bloc-time.sec .figure')
   	};

    // Init countdown values
    this.values = {
	      hours  : this.$.hours.parent().attr('data-init-value'),
        minutes: this.$.minutes.parent().attr('data-init-value'),
        seconds: this.$.seconds.parent().attr('data-init-value'),
    };
    
    // Initialize total seconds
    this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

    // Animate countdown to the end 
    this.count();    
  },
  
  count: function() {
    
    var that    = this,
        $hour_1 = this.$.hours.eq(0),
        $hour_2 = this.$.hours.eq(1),
        $min_1  = this.$.minutes.eq(0),
        $min_2  = this.$.minutes.eq(1),
        $sec_1  = this.$.seconds.eq(0),
        $sec_2  = this.$.seconds.eq(1);
    
        this.countdown_interval = setInterval(function() {

        if(that.total_seconds > 0) {

            --that.values.seconds;              

            if(that.values.minutes >= 0 && that.values.seconds < 0) {

                that.values.seconds = 59;
                --that.values.minutes;
            }

            if(that.values.hours >= 0 && that.values.minutes < 0) {

                that.values.minutes = 59;
                --that.values.hours;
            }

            // Update DOM values
            // Hours
            that.checkHour(that.values.hours, $hour_1, $hour_2);

            // Minutes
            that.checkHour(that.values.minutes, $min_1, $min_2);

            // Seconds
            that.checkHour(that.values.seconds, $sec_1, $sec_2);

            --that.total_seconds;
        }
        else {
            clearInterval(that.countdown_interval);
        }
    }, 1000);    
  },
  
  animateFigure: function($el, value) {
    
     var that         = this,
		     $top         = $el.find('.top'),
         $bottom      = $el.find('.bottom'),
         $back_top    = $el.find('.top-back'),
         $back_bottom = $el.find('.bottom-back');

    // Before we begin, change the back value
    $back_top.find('span').html(value);

    // Also change the back bottom value
    $back_bottom.find('span').html(value);

    // Then animate
    TweenMax.to($top, 0.8, {
        rotationX           : '-180deg',
        transformPerspective: 300,
	      ease                : Quart.easeOut,
        onComplete          : function() {

            $top.html(value);

            $bottom.html(value);

            TweenMax.set($top, { rotationX: 0 });
        }
    });

    TweenMax.to($back_top, 0.8, { 
        rotationX           : 0,
        transformPerspective: 300,
	      ease                : Quart.easeOut, 
        clearProps          : 'all' 
    });    
  },
  
  checkHour: function(value, $el_1, $el_2) {
    
    var val_1       = value.toString().charAt(0),
        val_2       = value.toString().charAt(1),
        fig_1_value = $el_1.find('.top').html(),
        fig_2_value = $el_2.find('.top').html();

    if(value >= 10) {

        // Animate only if the figure has changed
        if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
        if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
    }
    else {

        // If we are under 10, replace first figure with 0
        if(fig_1_value !== '0') this.animateFigure($el_1, 0);
        if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
    }    
  }
};

// Let's go !
Countdown.init();