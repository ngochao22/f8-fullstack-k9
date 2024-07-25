//1. innerHTML
// console.log(contentEl.innerHTML);
// contentEl.innerHTML = `<h1>Học lập trình quá khó</h1>`;

//2. innerText
// console.log(contentEl.innerText);
// contentEl.innerText = `<h1>Học lập trình quá khó</h1>`;

//3. textContent
// console.log(contentEl.textContent);
// contentEl.textContent = `<h1>Học lập trình quá khó</h1>`;

//4. outerHTML
// console.log(contentEl.outerHTML);
// contentEl.outerHTML = `<h1>Học lập trình quá khó</h1>`;

// var contentEl = document.querySelector(".content");
// var btnEl = document.querySelector(".btn");
// var content = contentEl.innerHTML;

// var handleClick = function (e) {
//     if (contentEl.innerHTML) {
//         contentEl.innerHTML = "";
//         e.target.innerHTML = "Hiện";
//     } else {
//         contentEl.innerHTML = content;
//         e.target.innerHTML = "Ẩn";
//     }
// };

// btnEl.addEventListener("click", handleClick);

// var numberEl = document.querySelector(".number");
// var btnMinus = document.querySelector(".minus-btn");
// var btnPlus = document.querySelector(".plus-btn");

// function handleDecrement(e) {
//     numberEl.innerText--;
// }
// function handleIncrement(e) {
//     numberEl.innerText++;
// }
// btnMinus.addEventListener("click", handleDecrement);
// btnPlus.addEventListener("click", handleIncrement);

//Attribute

//1. Áp dụng với các thuộc tính hợp lệ
//Cú pháp: element.tenthuoctinh

//2. Áp dụng với các thuộc tính tự tạo
// - getAttribute(tenthuoctinh)
// - setAttribute(tenthuoctinh, giatri)
var linkEl = document.querySelector("a");
// console.log(linkEl.href);
// console.log(linkEl.target);
// console.log(linkEl.id);
// console.log(linkEl.title);
// console.log(linkEl.className);
// linkEl.href = "https://google.com";
// linkEl.className = `link-text`;
// linkEl.style = `background: yellow`;
// console.log(linkEl.setAttribute("v-name", "Hoàng An F9"));

//Data Attribute: data-*
// console.log(linkEl.getAttribute("data-index"));
console.log(linkEl.dataset.index); //data-index
linkEl.dataset.index = "ahihi"; //data-index

//Giả sử: data-animation-duration
linkEl.dataset.animationDuration = "1s";

//data-animation-timing-function
linkEl.dataset.animationTimingFunction = "ease-in";

//Xóa data attribute
delete linkEl.dataset.index;

//Xóa các loại thuộc tính ==> removeAttribute(tenthuoctinh)
linkEl.removeAttribute("target");

//Xóa thẻ html
linkEl.remove();

var websiteEl = document.querySelector(".website");
websiteEl.addEventListener("change", function () {
    var value = this.value;
    if (value) {
        window.open(value);
    }
});
