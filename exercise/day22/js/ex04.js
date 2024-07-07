var contents = [
    [
        "https://picsum.photos/200/300",
        "Tiêu đề bài viết 1",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vitae facilis! Voluptatum atque commodi ipsa temporibus eius, possimus autem sapiente consequuntur beatae id explicabo quas illum eaque magni! Rerum, asperiores.",
    ],
    [
        "https://picsum.photos/200/300",
        "Tiêu đề bài viết 2",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vitae facilis! Voluptatum atque commodi ipsa temporibus eius, possimus autem sapiente consequuntur beatae id explicabo quas illum eaque magni! Rerum, asperiores.",
    ],
    [
        "https://picsum.photos/200/300",
        "Tiêu đề bài viết 3",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vitae facilis! Voluptatum atque commodi ipsa temporibus eius, possimus autem sapiente consequuntur beatae id explicabo quas illum eaque magni! Rerum, asperiores.",
    ],
];

var content = contents.map(function (content) {
    return `<div class="container">
            <div class="box">
                <div class="left">
                    <img src="${content[0]}" alt="" />
                </div>
                <div class="right">
                    <h2>${content[1]}</h2>
                    <p>
                        ${content[2]}
                    </p>
                </div>
            </div>
            <hr />
        </div>`;
});
document.body.innerHTML = content;
