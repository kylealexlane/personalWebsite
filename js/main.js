//CHANGING THE NAVBAR BACKGROUND COLOR
$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#about').offset().top; // pixels to the top of div1
        var navHeight = $('#mainNav').height();
        // change the color. either by adding a class or setting a css property
        if(scroll > os - navHeight){
            $('#mainNav').addClass('darkNavBackground');
        }
        if(scroll < os - navHeight ){
            $('#mainNav').removeClass('darkNavBackground');
        }
    });
}); 
  

//PRELOADER ANIMATION
$(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
})

//SMOOTH SCROLLING
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});