//DOM CSS
// var h1 = document.querySelector("h1");
// h1.style.color = `red`;
// h1.style.backgroundColor = `yellow`;
// h1.style.height = `300px`;
// var css = {
//     color: `red`,
//     backgroundColor: `yellow`,
//     height: `300px`,
//     backgroundImage: `url("https://fastly.picsum.photos/id/860/200/300.jpg?hmac=IABW-3mXBCuVP5aHuuuC7WpE3w1TpQZS9PZYr4mf7Gk")`,
//     transform: `translateX(200px)`,
// };
// Object.assign(h1.style, css);

// h1.style.color = null;

//Bai tap: them 2 thuoc tinh sau
//background-image ==> tự thiết lập 1 ảnh bất kỳ
//transform: translateX(200px)
var btnInEl = document.querySelector(".fade-in");
var btnOutEl = document.querySelector(".fade-out");
var p = document.querySelector("p");

p.style.transition = `all 1s linear`;
btnOutEl.addEventListener("click", function () {
    p.style.opacity = `0`;
    p.style.visibility = `hidden`;
    setTimeout(function () {
        p.style.display = `none`;
    }, 1000);
});

btnInEl.addEventListener("click", function () {
    p.style.display = `block`;
    p.style.visibility = `visible`;
    setTimeout(function () {
        p.style.opacity = `1`;
    }, 0);
});
