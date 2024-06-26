// var display = function(callback, ...args) {
//     console.log('Display');
//     if(typeof func) {
//         callback(...args); //Lời gọi hàm
//     }
// };
// var showInfo = function(text, title, a) {
//     console.log("Show Info", text, title, a);
// }
// var showInfo2 = function() {
//     console.log("Show Info 2");
// }
// display(showInfo);
// display(showInfo2);
// display(function() {
//     console.log("Chào anh em");
// })
// display(function() {
//     showInfo("F8");
// })
// display(showInfo, "f8", "f88", "f9")

//setTimeout ==> Thực thi 1 hàm khác sau 1 khoảng thời gian chỉ định
// setTimeout(function(a, b) {
//     console.log("Học lập trình không khó", a, b);
// }, 2000, "F8", "F9");

//setInterval ==> Thực thi lặp lại 1 hàm sau 1 khoảng thời gian
// var count = 0;
// var id = setInterval(function() {
//     console.log("hello anh em f8", ++count);
//     if(count === 5) {
//         clearInterval(id);
//     }
// }, 1000)

// setTimeout(function() {
//     console.log("hello anh em f8");
// }, 0);
// console.log("Học lập trình không khó");
var getA = function(callback) {
    setTimeout(function() {
        console.log("Get A");
        callback();
    }, 1000);
}

var getB = function(callback) {
    setTimeout(function() {
        console.log("Get B");
        callback()
    }, 500);
}

var getC = function(callback) {
    setTimeout(function() {
        console.log("Get C");
        callback();
    }, 1500);
}

getA(function() {
    getB(function() {
        getC(function() {
            console.log('Xong rồi');
        })
    })
});
//callback hell

//IIFE
//Hàm con 
//Closure
//Thunk function
//Đệ quy