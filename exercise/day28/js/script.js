var form = document.querySelector(".form");
var inputEl = document.querySelector(".todo-input");
var ul = document.querySelector("ul");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (inputEl.value) {
        ul.innerHTML += `<div class="todo">
                <p>${inputEl.value}</p>
                <div>
                    <i class="fa-solid fa-pen-to-square btn-edit"></i>
                    <i class="fa-solid fa-trash btn-delete"></i>
                </div>
            </div>`;
        inputEl.value = "";
        inputEl.focus();
    }
});

ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-edit")) {
        console.log(e.target);
    }

    if (e.target.classList.contains("btn-delete")) {
    }
});
