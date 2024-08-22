var root = document.getElementById("root");
var div = document.createElement("div");
div.className = `timer`;
var h2 = document.createElement("h2");
h2.innerText = `Get Link`;
var span = document.createElement("span");
span.className = `counter`;
span.innerText = 0;
root.append(div);
div.append(h2);
div.append(span);
var action = document.createElement("div");
action.className = `action`;
div.append(action);
var button = document.createElement("button");
button.className = `btn`;
button.innerText = `Get Link`;
action.append(button);

document.addEventListener("DOMContentLoaded", function (e) {
    var count = 30;
    var interval = 1000;
    var timer = 0;
    var counterEl = document.querySelector(".counter");
    var btn = document.querySelector(".btn");
    btn.disabled = true;

    var handleDecrement = function (currentTime) {
        if (timer <= currentTime) {
            count--;
            counterEl.innerText = count;
            timer = currentTime + interval;
        }

        if (count > 0) {
            window.requestAnimationFrame(handleDecrement);
        } else {
            btn.disabled = false;
        }
    };

    window.requestAnimationFrame(handleDecrement);

    btn.addEventListener("click", function () {
        if (count === 0) {
            window.open(
                "https://www.facebook.com/profile.php?id=100076536585889"
            );
        }
    });
});
