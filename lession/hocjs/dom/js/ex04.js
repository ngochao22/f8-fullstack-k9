//ClassList
var titleEl = document.querySelector("#title");
console.log(titleEl.classList);

//add() ==> Thêm class cho element
titleEl.classList.add("title-1", "title-2", "title-3");

//remove() ==> Xóa class khỏi element
titleEl.classList.remove("title-1", "title-3");

//replace() ==> Thay thế class cũ thành class mới
titleEl.classList.replace("title-2", "title-4");

//toggle ==> thêm class nếu không tồn tại, xóa class nếu tồn tại
titleEl.classList.toggle("title");
titleEl.classList.toggle("title");

//contains ==> kiểm tra class có tồn tại hay không?
console.log(titleEl.classList.contains("title-4"));

var body = document.body;
var btn = document.querySelector(".switch-theme");
btn.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
    var isDarkTheme = body.classList.contains("dark-theme");
    if (isDarkTheme) {
        btn.innerText = "Light Theme";
    } else {
        btn.innerText = "Dark Theme";
    }
});

var items = document.querySelectorAll("ul li");
items.forEach(function (itemEl) {
    itemEl.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});

var btnClear = document.querySelector(".clear-btn");
btnClear.addEventListener("click", function () {
    items.forEach(function (itemEl) {
        itemEl.classList.remove("active");
    });
});
