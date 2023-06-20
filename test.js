var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});