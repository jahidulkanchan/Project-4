
//preloader

window.addEventListener('load', function(){
    var loader = document.getElementById('preloader');
    loader.style.display = 'none';
})
// Sticky Menu
window.addEventListener('scroll', function(){
    var header = document.getElementById('header');
    header.classList.toggle('sticky', window.scrollY > 300);
    
    // scroll-top
    var scrollTop = document.getElementById('scroll-top');
    scrollTop.classList.toggle('show', window.scrollY > 500);
    scrollTop.addEventListener('click', function(){
        $(window).scrollTop(0);
    })

});

//Smooth-scroll js
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");  
        $('.scroll-to-section a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash,
        menu = target;
        var target = $(this.hash);
        $('html, body').stop().animate({
            scrollTop: (target.offset().top) + 1
        }, 100, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
  });
  
  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#main-menu li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#main-menu li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
  }

//nav toggle
var navToggler = document.getElementById("nav-toggle");
var mainMenu = document.getElementById('main-menu');

navToggler.onclick = function () {
  navToggler.classList.toggle("active");
  mainMenu.classList.toggle("active");
};
document.onclick = function (e) {
  if (e.target.id !== "nav-toggle" && e.target.id !== "menu" ) {
    navToggler.classList.remove("active");
    mainMenu.classList.remove("active");
  }
};

//active menu
// $(document).on('click', '#main-menu ul li', function(){
//     $(this).addClass('active').siblings().removeClass('active');
// })

//dropdown-btn
// $('#dropdown').on('click',function(){
//     var dropdownItem = document.querySelector('.dropdown-item');
//     dropdownItem.classList.toggle('show');
// })
/*
//Preloader 

var preload = document.getElementById("preloader");
window.addEventListener("load", function(){
    preload.style.display = "none";
});

//wow js
new WOW().init();





//owl carousel
$('.slide1').owlCarousel({
  loop: true,
  margin: 20,
  stagePadding: 10,
  autoplay: true,
  nav: false,
  smartSpeed: 300,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
// progress bar
var skillSection = document.getElementById('skill-section');
var progressBar = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll',() =>{
var sectionPos = skillSection.getBoundingClientRect().top;
var screenPos = window.innerHeight /1.2;

function showProgress(){
    progressBar.forEach(progressBar =>{
        var value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress(){
    progressBar.forEach(p =>{
        p.style.opacity = 0;
        p.style.width = 0;
    });
}
    if( sectionPos < screenPos){
        showProgress();
    }
    // else{
    //     hideProgress();
    // }
});
*/
//counter
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

