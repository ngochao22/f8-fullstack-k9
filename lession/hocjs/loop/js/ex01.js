//Vòng lặp: Cứ pháp trong lập trình cho phép đoạn chương trình lặp đi lặp lại theo số lần nào đó
//2 loại:
//1. Lặp với số lần lặp xác định trước
//2. Lặp với số lần lặp không xác định trước: while, do while

//Cú pháp của for
/*
    for(giaTriKhoiTao; dieukiendung; buocnhay) {
        Khối lệnh
    }
*/
// for(var i = 1; i <= 10; i++) {
//     console.log(`Lần lặp ${i}`);
// }

// for(var i = 10; i >= 1; i--) {
//     console.log(`Lần lặp ${i}`);
// }

// for(var i = 1; i <= 5; i++) {
//     for(var j = 1; j <= 5; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }
// var n = 5;
// var result = 1;
// for(i = n; i >= 2; i--) {
//     result *= i;
// }

// console.log(`Result = ${result}`);

// var n = 5;
// var result = 0;
// for(var i = 1; i <= n; i++) {
//     var total = 1;
//     for(var j = 1; j <= i; j++) {
//         total *= j;
//     }
//     result += total;
// }

// console.log(`result = ${result}`);
// var result = 0;
// var total = 1;
// for(var i = 1; i <= n; i++) {
//     total *= i;
//     result += total;
// }

// console.log(result);

var n = 10;
var isPrime = true; //Giả định n là số nguyên tố
if(n > 1 && n % 1 === 0) {
    for(i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        console.log(`${n} là số nguyên tố!`);
    } else {
        console.log(`${n} không phải là số nguyên tố!`);
    }
} else {
    console.log(`${n} không phải là số nguyên tố!`);
}
//Kỹ thuật đặt cờ hiệu