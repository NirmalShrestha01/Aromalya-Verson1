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



// PAYMENT DETAILS JS START


var coll = document.getElementsByClassName("collapsible_cards");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var card_details = this.nextElementSibling;
    if (card_details.style.display === "block") {
      card_details.style.display = "none";
    } else {
      card_details.style.display = "block";
    }
  });
}
var coll = document.getElementsByClassName("collapsible_paypal");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var paypal_details = this.nextElementSibling;
    if (paypal_details.style.display === "block") {
      paypal_details.style.display = "none";
    } else {
      paypal_details.style.display = "block";
    }
  });
}

// PAYMENT DETAILS JS END
