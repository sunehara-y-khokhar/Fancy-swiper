// Thumbs slider button
var swiper = new Swiper(".gallery-thumbs", {
    loop: true,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    spaceBetween: 0,
  
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      480: {
        slidesPerView: 1
      }
    }
  });
  
  // slider
  var swiper2 = new Swiper(".slide-swiper", {
    loop: true,
    speed: 1300,
    autoplay: true,
    centeredSlides: true,
    thumbs: {
      swiper: swiper
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  