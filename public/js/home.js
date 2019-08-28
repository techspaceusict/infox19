"use strict"

var countDownDate = new Date ("october 15, 2019 00:00:00").getTime();
    var x = setInterval(function() {
    setTimeout(()=>{
        var now = new Date ().getTime();
        var distance = countDownDate - now;
        var days = Math.floor (distance /(1000*60*60*24));
        var hours = Math.floor ((distance % (1000*60*60*24)) / (1000*60*60));
        var minutes = Math.floor ((distance % (1000*60*60)) / (1000*60));
        var seconds = Math.floor ((distance % (1000*60)) / 1000);

        document.getElementById("launch").innerHTML=days + "d " + hours + "h " + minutes + "m " + seconds + "s";
        if (distance < 0) {
        clearInterval(x);
        document.getElementById('launch').innerHTML="EXPIRED";
        }
    },4000)
}, 1000);


setTimeout(() => {
    document.getElementById("smoke").remove();
    document.getElementsByTagName("body")[0].style.overflow="visible";
}, 7200);



// AOS initialize


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


$(document).scrollTop(0);