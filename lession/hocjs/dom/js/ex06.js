//Event Object
// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//     // console.log(`ClientX: ${e.clientX}`);
//     // console.log(`ClientY: ${e.clientY}`);
//     // console.log(`OffsetX: ${e.offsetX}`);
//     // console.log(`OffsetY: ${e.offsetY}`);
//     console.log(this);
//     console.log(e.target);
// });

//Cach 1:
// var items = document.querySelectorAll(".content ul li");
// items.forEach(function (item) {
//     item.addEventListener("click", function () {
//         this.style.color = `red`;
//     });
// });
// var btn = document.querySelector(".content .btn");
// var ul = document.querySelector(".content ul");
// btn.addEventListener("click", function () {
//     ul.innerHTML += `<li>Item 4</li>`;
//     console.log(ul);
// });

//Cach 2 --> Dùng event target
// var ul = document.querySelector(".content ul");
// var btn = document.querySelector(".content .btn");
// ul.addEventListener("click", function (e) {
//     e.target.style.color = `red`;
// });
// btn.addEventListener("click", function () {
//     ul.innerHTML += `<li>Item 4</li>`;
// });

// var btn = document.querySelector(".btn");
// var x = 0;
// var y = 0;
// btn.addEventListener("mousedown", function (e) {
//     if (e.which === 1) {
//         x = e.offsetY;
//         y = e.offsetX;
//         document.addEventListener("mousemove", handleDrag);
//         console.log(e);
//     }
// });
// document.addEventListener("mouseup", function (e) {
//     document.removeEventListener("mousemove", handleDrag);
// });
// function handleDrag(e) {
//     btn.style.top = `${e.clientY - x}px`;
//     btn.style.left = `${e.clientX - y}px`;
// }

//e.preventDefault() --> Ngăn hành động mặc định của thẻ html
var a = document.querySelector("a");
a.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(a.href);
});
var menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    menu.style.display = "block";
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
});
menu.addEventListener("click", function (e) {
    e.stopPropagation();
});
document.addEventListener("click", function () {
    menu.style.display = "none";
});
document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
        menu.style.display = "none";
    }
});
