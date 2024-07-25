//Event: Hành động từ phía người dùng tác động lên các thẻ html
// - Các thẻ html có sẵn các event
// - Việc của lập trình viên ==> lắng nghe các event đó để thực thi 1 cộng việc cụ thể
// - Định nghĩa các công việc bằng 1 hàm(event handler)
// - Trong các Event Handler luôn có 1 tham số gọi là event object(Mô tả thông tin của event)
// var btnEl = document.querySelector(".btn");
// btnEl.onclick = function (e) {
//     console.log("click me");
//     console.log(e);
// };

//Event Listener
// - addEventListener
// - removeEventListener
var btn2El = document.querySelector(".btn-2");
// btn2El.addEventListener("click", function () {
//     console.log("click me 2");
// });
// btn2El.addEventListener("click", function () {
//     console.log("ok chưa?");
// });
var count = 0;
var handleClick = function () {
    console.log(`Count: `, ++count);
    if (count === 5) {
        btn2El.removeEventListener("click", handleClick);
    }
};
btn2El.addEventListener("click", handleClick);
