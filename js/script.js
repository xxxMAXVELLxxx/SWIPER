"use strict"

const shareSwiper = document.querySelector('.swiper-share')

if(shareSwiper){
const swiper = new Swiper('.swiper-share', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
});
}