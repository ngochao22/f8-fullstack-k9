// var form = document.querySelector("form");
// var todoList = document.querySelector(".todo-list");
// form.addEventListener("click", function (e) {
//     e.preventDefault();
//     var inputEl = this.querySelector("input");
//     var value = inputEl.value;
//     if (value) {
//         var p = document.createElement("p");
//         p.innerText = value;
//         todoList.append(p);
//         inputEl.value = "";
//     }
// });

//DOMContentLoaded --> Khi cây DOM được tải
//load
// document.addEventListener("DOMContentLoaded", function () {
//     var h1 = document.querySelector("h1");
//     console.log(h1);
// });

// document.addEventListener("DOMContentLoaded", function () {
//     var img = document.querySelector("img");
//     console.log(img.width);
// });

// window.addEventListener("load", function (e) {
//     var img = document.querySelector("img");
//     console.log(img.width);
// });

window.addEventListener("load", function (e) {
    var img = document.querySelector("img");
    var loading = document.querySelector(".loading");
    console.log(img);
    if (img) {
        loading.style.opacity = 0;
        loading.style.visibility = "hidden";
        loading.style.transition = "all 1s ease";
    }
});
