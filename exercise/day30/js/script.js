var spanEl = document.querySelector(".progress-bar .progress span");
var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress-bar .progress");

var position = 0;
var totalWidth = progressBar.clientWidth;
var clientXSpan = 0;
var clientXWidth = 0;
var offsetLeft = 0;
progressBar.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
        position = (e.offsetX / totalWidth) * 100;
        progress.style.width = `${position}%`;
        clientXSpan = e.clientX;
        offsetLeft = e.offsetX;
        document.addEventListener("mousemove", handleDrag);
    }
});

spanEl.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    if (e.which === 1) {
        document.addEventListener("mousemove", handleDrag);
        clientXSpan = e.clientX;
        offsetLeft = e.target.offsetLeft;
    }
});

document.addEventListener("mouseup", function (e) {
    document.removeEventListener("mousemove", handleDrag);
});
function handleDrag(e) {
    console.log(offsetLeft);
    var spaceMove = e.clientX - clientXSpan + offsetLeft;
    var rate = (spaceMove / totalWidth) * 100;
    console.log(rate);
    if (rate < 0) {
        rate = 0;
    }

    if (rate > 100) {
        rate = 100;
    }
    progress.style.width = `${rate}%`;
}

// Xay dung player
var audio = document.querySelector("audio");
var playAction = document.querySelector(".player .play-action i");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
var getTimeFormat = function (seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${
        seconds < 10 ? "0" + seconds : seconds
    }`;
};
audio.addEventListener("canplay", function () {
    durationEl.innerText = getTimeFormat(audio.duration);
});
playAction.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
audio.addEventListener("play", function () {
    playAction.classList.replace("fa-play", "fa-pause");
});
audio.addEventListener("pause", function () {
    playAction.classList.replace("fa-pause", "fa-play");
});
audio.addEventListener("timeupdate", function () {
    currentTimeEl.innerText = getTimeFormat(audio.currentTime);
    var rate = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${rate}%`;
});
