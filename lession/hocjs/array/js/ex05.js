//Array.from() ==> ép kiểu dữ liệu khác về mảng
// var fullName = "Hoàng An";
// console.log(Array.from(fullName));

// function something() {
//     Array.from(arguments).forEach(function (item) {
//         console.log(item);
//     });
// }
// something(5, 10, 15, 20, 25, 30);
// var rangeArr = Array.from(Array(100)).map(function (_, index) {
//     return index + 1;
// });
// console.log(rangeArr);

//Tham chiếu
// var a = ["Hoàng An", "hoangan.web@gmail.com"];
// var b = a;
//Sao chép mảng
//1. shallow copy ==> dùng các phương thức trong mảng cho phép trả về 1 mảng mới
// var b = a.slice(0);
// var b = [...a];

//2. Deep copy: Đệ quy, JSON
// - B1: chuyển array thành json
// - b2: Chuyển json thành array
// var json = JSON.stringify(a); //Chuyển mảng a thành json
// var b = JSON.parse(json); //Chuyển json của mảng a thành mảng b
// b[0] = "Nguyễn Văn Dũng";
// console.log(a);
// console.log(b);

// var a = ["An"];
// var b = ["An"];
// // console.log(a === b);
// console.log(JSON.stringify(a) === JSON.stringify(b));
