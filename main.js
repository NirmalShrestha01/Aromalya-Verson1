// STICKY NAVBAR SECTION START

  ///////////////// fixed menu on scroll for desktop
  if ($(window).width() > 992) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('#navbar_top').addClass("fixed-top");
          $('#navbar_top').addClass("navbar_top");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#navbar_top').removeClass("fixed-top");
           // remove padding top from body
          $('body').css('padding-top', '0');
          $('#navbar_top').removeClass("navbar_top");
  
        }   
    });
  } 

// STICKY NAVBAR SECTION END
