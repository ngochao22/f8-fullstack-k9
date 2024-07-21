//Thực hành Prototype
// - Thêm prototype cho object ==> Tất cả các object sẽ đều kế thừa được
// - Thêm prototype cho Constructor(Array, String...) ==> Chỉ những object được tạo ra từ Constructor đó ==> Kế thừa được

//Object ==> Constructor ==> instance
// Array.prototype.latest = function () {
//     return this[this.length - 1];
// };
// var arr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(arr.latest());

// var users = ["Item 1", "Item 2", "Item 3", "Item 4"];
// Array.prototype.map2 = function (fn) {
//     if (typeof fn !== "function") {
//         return;
//     }
//     var arr = this;
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         var value = arr[i];
//         var index = i;
//         var result = fn(value, index);
//         newArr.push(result);
//     }
//     return newArr;
// };

// var newArr = users.map2(function (user, index) {
//     console.log(index);
//     return `<h3>${index + 1} - ${user}</h3>`;
// });
// console.log(newArr);

//Function constructor
// - Tạo ra 1 bản thiết kế cho đối tượng
// - Khởi tạo đối tượng từ bản thiết kế đó ==> Đối tượng này được gọi là instance

function Person(name, email) {
    this.name = name;
    this.email = email;
    this.getName = function () {
        return this.name;
    };
    this.getEmail = function () {
        return this.email;
    };
}
var person1 = new Person("Hoàng An", "hoangan.web@gmail.com");
console.log(person1);

//Kiểm tra 1 object được tạo từ Constructor nào?
// console.log(person1.constructor.name);
// console.log(person1 instanceof Person);

//Kiểm tra 1 biến có phải là mảng không? (không dùng hàm Array.isArray())
// var users = [];
// if (users instanceof Array) {
//     console.log("là mảng");
// } else {
//     console.log("không phải mảng");
// }

//Phương thức tĩnh, thuộc tính tĩnh
// - không phụ thuộc vào đối tượng
// - Đảm bảo dữ liệu không thay đổi khi Constructor dc khởi tạo lại
// - Truy cập trực tiếp từ Constructor
Person.message = "Học js không khó";
Person.isPerson = function (instance) {
    return instance instanceof Person;
}; //static method

//Prototype Constructor

//non-static property
Person.prototype.data = "hello anh em F8";

//non-static method
Person.prototype.getData = function () {
    console.log(this.constructor.message);
    return this.data;
};

Person.something = function () {
    console.log(new this().data);
    return "something";
};

//Từ khóa this trong phương thức tĩnh sẽ trả về constructor

// console.log(Person.message);
// console.log(Person.isPerson(person1));

// //Yêu cầu 1: Gọi hàm getData
// var person = new Person();
// console.log(person.getData());

//Yêu cầu 2: Trong hàm getData ==> gọi thuộc tính message
console.log(Person.something());

//Yêu cầu 3: trong hàm thuộc tính something ==> gọi thuộc tính data
