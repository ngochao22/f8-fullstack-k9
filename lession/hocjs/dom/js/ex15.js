//Scroll Event
//window.scrollY ==> Lấy vị trí scroll theo trục Y
//window.scrollX ==> lấy vị trí scroll theo trục X
/*
window.scroll({
    top:0, left:0
}) ==> Chuyển thanh cuộn tới vị trí đã thiết lập 
*/
// var lastY = 0;
// window.addEventListener("scroll", function () {
//     if (window.scrollY > lastY) {
//         document.body.style.background = `red`;
//     } else {
//         document.body.style.background = null;
//     }
//     lastY = window.scrollY;
// });

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//     window.scroll({
//         top: 500,
//         behavior: "smooth",
//     });
// });
var btn = document.querySelector(".btn-top");
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", function () {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});
