var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = `Count: `;
var btn = document.createElement("button");
btn.innerText = "+";
root.append(h1);
root.append(btn);

// var span = document.createElement("span");
// span.innerText = "0";
var textNode = document.createTextNode(0);
h1.append(textNode);
btn.addEventListener("click", function (e) {
    // span.innerText++;
    textNode.data++;
    comment.data = "Vừa tăng";
});

//comment Node
var comment = document.createComment("Counter App");
root.append(comment);
