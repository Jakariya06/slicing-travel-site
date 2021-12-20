const menuHmb = document.querySelector('.menu-toggle'),
      menuWrap = document.querySelector('.menu-wrapper')  

menuHmb.addEventListener('click', function(){
    menuHmb.classList.toggle('bx-x')
    menuWrap.classList.toggle('active')
})

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: false,
    spaceBetween: 30,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
      },
  });

  var swiper = new Swiper(".mySwiperTesti", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });