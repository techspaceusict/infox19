"use strict"


$(function(){
      
  $(".down-arrow").click(()=>{
    location.hash="about";
    $("html,body").animate({
      scrollTop: $("#aboutus").offset().top
    },1000)
  });

  $.get("public/templates/back-anime.html").then(data=>{
    $("#hero").prepend(data);
  });
  location.hash="about";
  $(window).scroll(()=>{
    //console.log($("#hero").height()+$("#hero").offset().top);
    if($(window).scrollTop()>$("#hero").height()+$("#hero").offset().top){
      $(".navigation").addClass("revealNav");
    }else{
      $(".navigation").removeClass("revealNav");
    }
  });

  setHash();
  
  
});

function setHash(){
  let hash=location.hash;
  console.log(hash);
  $.get(`public/templates/${hash.substr(1)}.html`).then(data=>{
    $("#routes").html(data);
  })
}

window.onhashchange=setHash


function changeRoute(obj){
  location.hash=$(obj).text().split(" ").join("-").toLowerCase();
}


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
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

