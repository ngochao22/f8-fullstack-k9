import keywords from "./data.js";

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = "vi-VN";

const btn = document.querySelector("button");
const actionEl = document.querySelector(".action");
const resultEl = document.querySelector(".result");
if (btn) {
    btn.addEventListener("click", function () {
        recognition.start();
        actionEl.innerText = `Hãy nói nội dung bạn muốn`;
        if (actionEl.classList.contains("success")) {
            actionEl.classList.remove("success");
        }

        if (resultEl.classList.contains("show")) {
            resultEl.classList.remove("show");
        }
    });
}

recognition.onspeechend = function (e) {
    this.stop();
    if (actionEl) {
        actionEl.innerText = `Đã nói xong. Hy vọng kết quả như ý bạn`;
        actionEl.classList.add("success");
    }
};

recognition.onresult = function (e) {
    const value = e.results[0][0].transcript;
    const valueLower = value.toLowerCase();
    if (resultEl) {
        resultEl.innerText = `Đang thực hiện: ${value}`;
        resultEl.classList.add("show");
    }

    if (keywords[valueLower]) {
        window.open(keywords[valueLower]);
        resultEl.innerText = `Đã thực hiện xong`;
        resultEl.classList.add("show");
    } else {
        resultEl.innerText = `Không thực hiện được yêu cầu`;
        resultEl.classList.add("show");
    }

    const direction = ["chỉ đường", "đường tới", "tới"];
    const isDirection = direction.some((item) => value.includes(item));
    if (isDirection) {
        let textResult = value;
        direction.forEach((item) => {
            textResult = textResult.replaceAll(item, "");
        });
        textResult = textResult.trim().replaceAll(" ", "+");
        const mapUrl = `https://www.google.com/maps/search/${textResult}`;
        window.open(mapUrl);
    }
};
