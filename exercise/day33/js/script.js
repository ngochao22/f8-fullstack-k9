var list = document.querySelector(".list");
var listLength = data.length;
var count = 0;
for (var i = 0; i < listLength; i++) {
    var div = document.createElement("div");
    var span = document.createElement("span");
    div.className = `active list-item`;
    div.innerText = `Module ${i + 1}: `;
    span.innerText = `${data[i].heading}`;
    list.append(div);
    div.append(span);
    data[i].child.forEach(function (item) {
        var div = document.createElement("div");
        var span = document.createElement("span");
        div.className = `list-item`;
        div.innerText = `Bài ${++count}: `;
        span.innerText = `${item.title}`;
        list.append(div);
        div.append(span);
    });
}

var listItem = document.querySelectorAll(".list-item");
var _this = null;
document.addEventListener("DOMContentLoaded", function () {
    listItem.forEach(function (item) {
        item.addEventListener("mousedown", function () {
            _this = this;
            list.addEventListener("mousemove", handleDrag);
        });
    });
});

function handleDrag() {}
