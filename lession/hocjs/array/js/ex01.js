//Mảng: Cấu trúc dữ liệu có nhiều phần tử (Giá trị)

//Khai báo
// var users = ["An", "Tâm", "Đạt", "Tùng"];

//Kiểm tra 1 biến có phải mảng hay không?
// console.log(Array.isArray(users));

//Lấy số lượng phần tử
// console.log(users.length);

//Truy cập vào 1 phần tử trong mảng
// console.log(users[1]);

//Cập nhật giá trị 1 phần tử
// users[1] = "quân";
// console.log(users);

//Thêm phần tử mới vào mảng
// users[users.length] = "Quân";
// users[users.length] = "Sơn";
// console.log(users);

//Duyệt qua từng giá trị
// for (var i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }
// for (var index in users) {
//     console.log(users[index]);
// }
// for (var value of users) {
//     console.log(value);
// }
// console.log(users);
// var indexDel = 2;
// var newUsers = [];
// for (var index in users) {
//     if (+index === indexDel) {
//         continue;
//     }
//     newUsers[newUsers.length] = users[index];
// }
// console.log(newUsers);
// console.log(users);
// var value = "Sơn";
// var indexInsert = 0;
// var newUsers = [];
// for (var index in users) {
//     if (+index === indexInsert) {
//         newUsers[0] = value;
//     }
//     newUsers[newUsers.length] = users[index];
// }
// console.log(newUsers);
// var users = [
//     "Tạ Hoàng An",
//     "Nguyễn Tuấn Anh",
//     "Nguyễn Văn Dũng",
//     "Phạm Văn Hiếu",
// ];
// var keyword = "an";
// var newUsers = [];
// for (var index in users) {
//     var check = users[index].toLowerCase().includes(keyword.toLowerCase());
//     if (check) {
//         continue;
//     }
//     newUsers[newUsers.length] = users[index];
// }
// console.log(newUsers);
var numbers = [5, 2, 1, 9, 6];
var max = numbers[0];
var maxIndex = 0;
for (var i in numbers) {
    if (numbers[i] > max) {
        max = numbers[i];
        maxIndex = i;
    }
}
numbers[maxIndex] = numbers[0];
numbers[0] = max;
console.log(numbers);
