//Appica v1.1
//Copyright 2013 8Guild.com
//All scripts for Preview Page

/*Checking if it's touch device we disable some features due to inconsistency*/
if (Modernizr.touch) { 

		/*Preloading Animation*/
		$(window).load(function() {
			$('#status').fadeOut();
			$('#preloader').delay(300).fadeOut('slow'); 
			$('body').delay(300).css({'overflow':'visible'});
		})
  
} else {
	
      $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(300).fadeOut('slow'); 
        $('body').delay(300).css({'overflow':'visible'});
				setTimeout(function(){$('.ios-preview').addClass('fadeInLeft');},300);
				setTimeout(function(){$('.android-preview').addClass('fadeInRight');},300);
				setTimeout(function(){$('.logo').addClass('bounceInDown');},300);
				setTimeout(function(){$('.footer').addClass('fadeIn');},300);
      });
	
//////////////////////////////////*SCROLL ANIMATIONS*/////////////////////////////////


			$('.animation').waypoint(function() {
					 var animation = jQuery(this).attr("data-animation");
					 $(this).addClass(animation);
					 $(this).addClass('animated');
			}, { offset: '75%' });
	
}