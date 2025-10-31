const toggle = document.querySelector(".toggle-button");
const overlay = document.querySelector(".nav-overlay");
const closeBtn = document.querySelector(".close-button");

toggle.addEventListener("click", () => {
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});

// Detect if user is on a touch (mobile/tablet) device
const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const swiper = new Swiper('.hero-swiper', {
    loop: true,
    spaceBetween: 60,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1000, // smooth slide animation
    autoplay: !isMobile?{
        delay: 4000,
        disableOnInteraction: false,
    }:false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
    },
});

const swiperEl = document.querySelector(".hero-swiper");
swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start());