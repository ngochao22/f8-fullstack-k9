//Vòng lặp while
/*
while(dieukien) {
    Khổi lệnh
}
*/

// var i = 1;
// while(i <= 10) {
//     console.log(i);
//     i++;
// }

// var n = 505000000;
// var count = 0;
// while(n % 2 === 0) {
//     n /= 2;
//     count++;
// }
// console.log(`Số lần ${count}`);
// console.log(`n = ${n}`);

// while (true) {
//     console.log("hello");
// }

// var i = 1;
// do {
//     console.log(i);
//     i++;
// } while(i <= 10)

//break: Thoát vòng lặp khi chưa hết
//continue: Bỏ qua lần lặp để chạy lần lặp tiếp theo
for(var i = 1; i <= 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}