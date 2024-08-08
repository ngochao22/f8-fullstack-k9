var root = document.querySelector("#root");

//Tạo element
var h1 = document.createElement("h1");
h1.innerText = `Học JS không khó`;
h1.id = "title";
h1.className = `title`;

var btn = document.createElement("button");
btn.innerText = `Click me`;
btn.addEventListener("click", function (e) {
    var span = document.createElement("span");
    span.innerText = `F8`;
    h1.append(span);
});

root.append(h1);
root.append(btn);

// var h2 = document.createElement("h2");
// h2.innerText = `Học lập trình quá khó`;
// root.prepend(h2);

/*
Bài tập: 
*/

var ul = document.createElement("ul");
ul.className = "menu";
root.append(ul);

for (var i = 1; i <= 4; i++) {
    var li = document.createElement("li");
    li.innerText = `Item ${i}`;
    li.addEventListener("click", function (e) {
        removeItem(this);
    });
    ul.append(li);
}

var btnAdd = document.createElement("button");
btnAdd.innerText = `Add`;
root.append(btnAdd);

btnAdd.addEventListener("click", function (e) {
    var li = document.createElement("li");
    li.innerText = `Item ${i++}`;
    li.addEventListener("click", function (e) {
        removeItem(li);
    });
    ul.append(li);
});

var removeItem = function (el) {
    el.remove();
};

//insertBefore
var h3 = document.createElement("h3");
h3.innerText = `Javascript`;
// root.insertBefore(h3, ul);

var nextUlEl = ul.nextElementSibling;
if (nextUlEl) {
    root.insertBefore(h3, nextUlEl);
} else {
    root.append(h3);
}

//replaceChild
var p = document.createElement("p");
p.innerText = "Học lập trình quá khó";
root.replaceChild(p, h1);
root.append(h1);

//removeChild
root.removeChild(ul);
root.append(ul);
