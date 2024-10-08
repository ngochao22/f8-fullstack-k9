//HTMLElement
class HelloWorld extends HTMLElement {
    static observedAttributes = ["data-type"];
    constructor() {
        super();
        console.log("Hello World Constructor");
    }

    connectedCallback() {
        var _this = this;
        console.log("Component được đưa vào DOM");
        this.innerHTML = `
            <h1>Count: <span>0</span></h1>
            <button>+</button>`;
        var btn = this.querySelector("button");
        var span = this.querySelector("span");
        btn.addEventListener("click", function () {
            span.innerText++;
            if (span.innerHTML == 10)
                _this.setAttribute("data-type", "success");
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("attributeChangeCallback", name, oldValue, newValue);
    }

    disconnectedCallback() {
        console.log("Component trước khi loại bỏ khỏi DOM");
    }
}

customElements.define("hello-world", HelloWorld);
var btn = document.querySelector(".btn");
var HelloWorldEl = document.createElement("hello-world");
var isShow = false;
btn.addEventListener("click", function () {
    if (!isShow) {
        document.body.append(HelloWorldEl);
        isShow = true;
    } else {
        HelloWorldEl.remove();
        isShow = false;
    }
});
