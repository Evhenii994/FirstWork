// Slider
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
});

// TABS
$( function() {
  $( "#accordion" ).accordion({
    "animate":true,
    "collapsible":true,
    heightStyle: 'content',
  });
} );

//burger
const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active')
})

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active')
})