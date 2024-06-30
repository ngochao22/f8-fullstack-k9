var content =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, nulla reiciendis. Rerum, aspernatur necessitatibus tempore modi nam quod praesentium quam quidem, molestias inventore repudiandae enim, hic sed veniam quia fuga? ";
var newContent = "";
var firstContent = "";
var position = content.indexOf(" ");
var text = content;
setInterval(function () {
    if (position === -1) {
        newContent = "";
        content = text;
        firstContent = "";
        position = content.indexOf(" ");
    }
    newContent =
        firstContent +
        `<span>${content.slice(0, position)}</span>` +
        content.slice(position);
    firstContent += content.slice(0, position + 1);
    content = content.slice(position).trimStart();
    position = content.indexOf(" ");
    document.body.innerHTML = newContent;
}, 100);
