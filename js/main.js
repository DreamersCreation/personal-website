(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);



 // Form script

 const scriptURL = 'https://script.google.com/macros/s/AKfycbxze_pEYSfn90dHIFkCzU0l07IJ_rrtw8BjvUravJ_oZJejbM89iFHY5CjC8UdM66MU8g/exec'
 const form = document.forms['submit-to-google-sheet'];
 const sentmsg = document.getElementById("Success_Msg");
 const unsentmsg = document.getElementById("Unsent_Msg")

 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {sentmsg.innerHTML = "Message Sent Successfully"
   setTimeout(function(){
       sentmsg.innerHTML =""
   },5000)
   form.reset()
})
     .catch(error => {unsentmsg.innerHTML = "Message Sent Unsuccesfull"
     setTimeout(function(){
       unsentmsg.innerHTML =""
     },5000)
     form.reset()
 })
 })




 