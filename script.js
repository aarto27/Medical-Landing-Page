document.getElementById("Appointment").addEventListener("click", function(){
    window.location.href = "contact.html";
})

document.getElementById("send").addEventListener("click", function(){
    alert('Your data has been submitted ')
})


document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".service-swiper-container .swiper-button-next",
            prevEl: ".service-swiper-container .swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});
