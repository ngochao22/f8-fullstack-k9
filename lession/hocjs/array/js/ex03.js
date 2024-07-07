//Vòng lặp mảng

//forEach(callback)
// - duyệt qua từng phần tử của mảng và trả kết quả vào callback
// - callback có 2 tham số: value, index
// users.forEach(function (value, index) {
//     console.log(value, index);
// });

//2. map(callback)
// - duyệt qua từng phần tử của mảng trả về value, index ở callback
// - trả về 1 mảng mới có số lượng phần tử bằng mảng ban đầu
// - Giá trị các phần tử của mảng mới là giá trị của callback(callback return về giá trị nào ==> lưu vào mảng mới)
// var newArr = users.map(function (value, index) {
//     console.log(value, index);
//     return `${index + 1} - ${value}`;
// });
// console.log(newArr);

//3. filter(callback)
// - duyệt qua từng phần tử của mảng ban đầu
// - trả về 1 mảng mới, giá trị phần tử của mảng mới sẽ là các phần từ của mảng ban đầu nếu callback trả về truthy
// var numbers = [1, 3, 5, 7, 8, 9];
// console.log(numbers);
// var newArr = numbers.filter(function (value, index) {
//     return value % 2 !== 0;
// });
// console.log(newArr);

//Bài tập: Xóa khách hàng có email là: customer2@gmail.com

var customers = [
    ["customer1", "customer1@gmail.com", 32],
    ["customer2", "customer2@gmail.com", 28],
    ["customer3", "customer3@gmail.com", 31],
    ["customer4", "customer4@gmail.com", 29],
];

// var newCustomers = customer2.filter(function (value, index) {
//     return !value.includes("customer2@gmail.com");
// });
// console.log(newCustomers);

//Bài tập 2: tăng tuổi của customer: customer2 thêm 2 tuổi
// customers = customers.map(function (customer) {
//     if (customer.includes("customer2@gmail.com")) {
//         customer[2] += 2;
//     }
//     return customer;
// });
// console.log(customers);

//Bài tập 3:
var users = ["User 1", "User 2", "User 3", "User 4", "User 2"];
console.log(users);
var newArr = [];
users = users.forEach(function (user) {
    if (!newArr.includes(user)) {
        newArr.push(user);
    }
});
console.log(newArr);

//Buổi sau:
// - some()
// - every()
// - find()
// - findIndex()
// - findLast()
// - findLastIndex()
// - reduce()
