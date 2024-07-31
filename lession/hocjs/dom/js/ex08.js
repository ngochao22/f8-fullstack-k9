/**
- previousElementSibling --> Chọn thành phần phía trước(Bên trái)
- parentNode
- childNodes
- nextSibling
- previousSibling
- firstChild
- lastChild
- firstElementChild
- lastElementChild
 */
// var h2 = document.querySelector("h2");
// console.log(h2);
// console.log(h2.parentElement.parentElement.parentElement);
// var products = document.querySelector(".products");
// console.log(products.children);
// console.log(products.childNodes);

var items = document.querySelectorAll("ul .d-flex");
items.forEach(function (itemEl) {
    if (itemEl.nextElementSibling) {
        var liEl = itemEl.parentElement;
        liEl.addEventListener("click", function (e) {
            var menuEl = document.querySelector(".menu-child.d-block");
            console.log(menuEl);
            var lastChild = this.lastElementChild;
            lastChild.classList.toggle("d-none");
            lastChild.classList.toggle("d-block");
            if (menuEl) {
                console.log(menuEl);
                menuEl.classList.remove("d-block");
                menuEl.classList.add("d-none");
            }
            if (lastChild.classList.contains("d-block")) {
                this.firstElementChild.lastElementChild.classList.add("rotate");
            }

            if (lastChild.classList.contains("d-none")) {
                this.firstElementChild.lastElementChild.classList.remove(
                    "rotate"
                );
            }
        });
    }
});
