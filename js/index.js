$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, // Number of items to display
        loop: true, // Enable looping
        autoplay: true, // Enable autoplay
        autoplayTimeout: 5000, // Set the delay between slides (in ms)
        animateOut: 'fadeOut', // Add animation for transitions
        dots: true, // Enable navigation dots
        nav: true, // Enable navigation arrows
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"] // Custom navigation icons
    });
});