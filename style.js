let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let barBtn = document.querySelector('#bar-btn');
let nabBar = document.querySelector('.nabvar');
let bgBtn = document.querySelector('#bg-btn');
let buttonBox = document.querySelector('.button-box');
let userBtn = document.querySelector('#user-btn');


window.onscroll = () => {
    searchForm.classList.remove('active');
    nabBar.classList.remove('active');

}
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    nabBar.classList.remove('active');
    buttonBox.classList.remove('active');
})

barBtn.addEventListener('click', () => {
    barBtn.classList.toggle('fa-times');
    nabBar.classList.toggle('active');
    searchForm.classList.remove('active');
    buttonBox.classList.remove('active');
})

userBtn.addEventListener('click', () => {
    userBtn.classList.toggle('fa-times');
    buttonBox.classList.toggle('active');
    searchForm.classList.remove('active');
    nabBar.classList.remove('active');
})



bgBtn.onclick = () => {
    bgBtn.classList.toggle('fa-sun');
    if (bgBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active')
    }
    else {
        document.body.classList.remove('active');
    }
}



var swiper = new Swiper(".testmonial-container", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 1,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// var  = new Swiper(".featured-slider", {
//     grabCursor: true,
//     centeredSlides: true,
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//       delay: 9500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable:true,
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//   });

















