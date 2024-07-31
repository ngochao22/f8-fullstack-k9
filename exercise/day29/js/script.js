var carouselInner = document.querySelector(".carousel .carousel-inner");
var nextBtn = document.querySelector(".carousel .carousel-nav .next");
var prevBtn = document.querySelector(".carousel .carousel-nav .prev");
var carouselDots = document.querySelector(".carousel .carousel-dots");
var carouselItem = document.querySelectorAll(".carousel .item");

var carouselWidth = carouselInner.clientWidth;
var totalWidth = carouselWidth * carouselInner.children.length;
var position = 0;
var lengthDots = carouselItem.length;

(function () {
    if (lengthDots > 0) {
        for (var i = 0; i < lengthDots; i++) {
            carouselDots.innerHTML += `<span></span>`;
        }
    }
})();

var carouselSpan = document.querySelectorAll(".carousel .carousel-dots span");
carouselSpan.forEach(function (item, index) {
    item.dataset.index = index;
    if (index === 0) {
        item.classList.add("active");
    }
    item.addEventListener("click", function (e) {
        var spanEl = document.querySelector(
            ".carousel .carousel-dots span.active"
        );
        spanEl.classList.remove("active");
        e.target.classList.add("active");
        position = carouselWidth * -index;
        carouselInner.style.translate = `${position}px`;
    });
});

nextBtn.addEventListener("click", function () {
    if (Math.abs(position) + carouselWidth >= totalWidth) {
        return;
    }
    position -= carouselWidth;
    carouselInner.style.translate = `${position}px`;
    var dotIndex = position / carouselWidth;
    var spanEl = document.querySelectorAll(".carousel .carousel-dots span");
    spanEl.forEach(function (item, index) {
        if (index === Math.abs(dotIndex)) {
            var spanEl = document.querySelector(
                ".carousel .carousel-dots span.active"
            );
            item.classList.add("active");
            spanEl.classList.remove("active");
        }
    });
});

prevBtn.addEventListener("click", function () {
    if (Math.abs(position) === 0) {
        return;
    }
    position += carouselWidth;
    carouselInner.style.translate = `${position}px`;
    var dotIndex = position / carouselWidth;
    var spanEl = document.querySelectorAll(".carousel .carousel-dots span");
    spanEl.forEach(function (item, index) {
        if (index === Math.abs(dotIndex)) {
            var spanEl = document.querySelector(
                ".carousel .carousel-dots span.active"
            );
            item.classList.add("active");
            spanEl.classList.remove("active");
        }
    });
});
