let menuicon = document.querySelector(".menubar");
let menulist = document.querySelector(".navbar-iteams");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const accordaon = document.querySelectorAll(".accordion-heading");

accordaon.forEach(acc => {
    acc.addEventListener("click", function () {
        const accacitve = document.querySelector(".accordion.acc-active");
        acc.parentElement.classList.toggle("acc-active");
        accacitve && accacitve.classList.remove("acc-active");
    });
});
