var users = ["user 1", "user 2", "user 3", "user 4", "user 3"];
console.log(users);

//1. at(index) ==> Lấy phần tử dựa vào index
// console.log(users.at(0));

//2. concat(arr1,arr2,...) ==> Nối các array thành 1 array
// console.log(users.concat([1, 2, 3], [4, 5, 6], ["a", "b", "c"]));
// console.log(users.concat("User 5"));

//3. fill(value) ==> Cập nhật các phần tử thành 1 giá trị duy nhất
// users.fill(0);
// console.log(users);

//4. includes(value) ==> kiểm tra phần tử có trong mảng không? (trả về true / false)
// console.log(users.includes("user 1"));

//5. indexOf(value) ==> Kiểm tra phần tử có trong mảng không? (trả về index đầu tiên tìm được)
// console.log(users.indexOf("user 22"));

//6. lastIndexOf(value) ==> Kiểm tra phần tử có trong mảng không và trả về index cuối cùng
// console.log(users.lastIndexOf("user 3"));

//7. slice(start, end) ==> cắt mảng từ start đến end - 1 (trả về mảng mới)
// console.log(users.slice(0, 2));
// console.log(users.slice(1));
// console.log(users.slice(-2));

//8. join() ==> Nối các phần tử trong mảng thành chuỗi
// console.log(users.join(" - "));
// var fullName = "Tạ Hoàng An";
// var firstName = fullName.split(" ").slice(-1).join();
// console.log(firstName);

//9. reverse() ==> Đảo ngược mảng (Thay đổi mảng ban đầu)
// console.log(users.reverse());
// console.log(users);

//10. sort() ==> Sắp xếp mảng theo thứ tự tăng dần(Kiểm tra theo ký tự)
// var users = ["Dũng", "An", "Tâm", "Văn"];
// users.sort();
// console.log(users);
// var numbers = [2, 100, 1, 8];
// numbers.sort(function (a, b) {
//     /*
//         a: Phần tử sau
//         b: Phần tử trước
//         Nếu hàm này return về giá trị âm ==> tự động đổi chỗ a và b
//     */
//     console.log(`a = ${a}, b = ${b}`);
//     if (b > a) {
//         return -1;
//     }
// });
// console.log(numbers);

// var number2 = [2, 100, 1, 8];
// for (var i = 0; i < number2.length; i++) {
//     var minIndex = i;
//     for (var j = i + 1; j < number2.length; j++) {
//         if (number2[j] < minIndex) {
//             minIndex = j;
//         }
//     }
//     if (minIndex != i) {
//         var temp = number2[i];
//         number2[i] = number2[minIndex];
//         number2[minIndex] = temp;
//     }
// }
// console.log(number2);
// var customers = [
//     "Tạ Hoàng An",
//     "Phan Văn Hiếu",
//     "Nguyễn Tuấn Anh",
//     "Nguyễn Văn Tùng",
// ];
// var newCustomer = "Lê Đức Nam";
// //Sắp xếp mảng customers theo thứ tự tăng dần(Sắp xếp theo tên)
// var getFullName = function (fullName) {
//     return fullName.split(" ").slice(-1).join();
// };
// customers.sort(function (a, b) {
//     if (getFullName(a) < getFullName(b)) {
//         return -1;
//     }
// });
// console.log(customers);

//bt2: Thêm 1 khách hàng vào giữa mảng customer sau khi đã sắp xếp ở trên
// var position = (customers.length - (customers.length % 2)) / 2;
// var newArr = customers.slice(0, position);
// var lastArr = customers.slice(position);
// var newCustomer1 = newArr.concat(newCustomer, lastArr);
// console.log(newCustomer1);

// var fullName = "Tạ     Hoàng   An";
// fullName = fullName.split(" ");
// var fullNameArr = [];
// for (var value of fullName) {
//     if (value) {
//         fullNameArr[fullNameArr.length] = value;
//     }
// }
// console.log(fullNameArr);
// fullName = fullNameArr.join(" ");
// console.log(fullName);

//11. push() ==> Thêm phần tử vào cuối mảng
// var count = users.push("A", "B", "C");
// console.log(users);
// console.log(count);

//12. unshift() ==> Thêm phần tử vào đầu mảng
// var count = users.unshift("A", "B", "C");
// console.log(users);
// console.log(count);

//13. pop() ==> Xóa phần tử cuối mảng và trả về giá trị vừa xóa
// var value = users.pop();
// console.log(users);
// console.log(value);

//14. shift() ==> Xóa phần tử đầu mảng và trả về giá trị vừa xóa
// var value = users.shift();
// console.log(users);
// console.log(value);

//15.splice(index, count) ==> Xóa count phần tử từ index và trả về các phần tử đã xóa
// var result = users.splice(1, 2, "item 1");
// console.log(users);
// console.log(result);

//16. length ==> Lấy độ dài
// var arr = ["item 1", "item 2", "item 3", "item 4"];
// arr.length = 2;
// console.log(arr);
