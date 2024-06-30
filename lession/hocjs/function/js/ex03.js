//IIFE
// function something() {
//     console.log("hello");
// }
// (function(title) {
//     console.log("Hello", title);
// })("F8");

//Hàm con
// var b = 20;
// function display(c) {
//     var a = 10;
//     function showInfo() {
//         console.log("Hoàng An F8");
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     showInfo();
// }
// display("F8");

//Hàm showInfo ==> được gọi là hàm closure
// ==> Hàm có khả năng truy cập tới các biến của phạm vị chứa nó
// ==> Chỉ gọi hàm trong phạm vi mà nó được khai báo

// var sum = function(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// var adder = sum(10);
// var result1 = adder(10);
// var result2 = adder(20);
// console.log(result1);
// console.log(result2);

//Giải thuật đệ quy
//Kỹ thuật gọi lại chính hàm đang định nghĩa để thực thi các bài toán lặp đi lặp đi
// Trong lập trình web thường được dùng để giải quyết các bài toán đa cấp: menu đa cấp, chuyên mục đa cấp...
// Lưu ý: Khi gọi lại hàm ==> để ý điều kiện để chương trình dừng lại

/*
Ưu điểm: dễ, nhàn cho lập trình viên
Nhược điểm: chạy chậm
*/

// function showNumber(number) {
//     console.log(number);
//     if(number > 1) {
//         showNumber(number - 1);
//     }
// }
// showNumber(10);

// var getTotal = function(n) {
//     if(n === 1) {
//         return 1;
//     }
//     return n + getTotal(n - 1);
// }

// var result = getTotal(10);
// console.log(result);

function fibonacci(n) {
    if(n === 1 || n === 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function showFibonacci(number, count = 1) {
    console.log(fibonacci(count));
    if(count < number ) {
        showFibonacci(number, count + 1);
    }
}

showFibonacci(10);