//Đối tượng(Object): Khái niệm trừu tượng để mô tả 1 đối tượng cụ thể
// - Đặc điểm (Thuộc tính)
// - Hành động (Phương thức)
//Trong js, hầu hết đều là đối tượng

//Khởi tạo object
// var user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//     age: 32,
//     getName: function () {
//         return "hello anh em";
//     },
//     //key: value
// };
//Thêm key vào object
// user.address = "Hà Nội";
// user["location"] = "Việt Nam";

//Cập nhật giá trị của 1 key trong object
// user.name = "Hoàng An F8";

//Xóa 1 key trong object
// delete user.email;

//Duyệt qua từng phần tử của object(Duyệt key)
// for (var key in user) {
//     if (typeof user[key] === "function") {
//         console.log(user[key]());
//     } else {
//         console.log(user[key]);
//     }
// }

// var product = {
//     name: "laptop",
//     price: 2000,
//     information: {
//         ssd: "512GB",
//         ram: "8GB",
//     },
// };
// console.log(product.information.ssd);

// var obj1 = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
// };

// var obj2 = {
//     age: 32,
//     role: "Teacher",
// };

// var obj3 = {};

// for (var key in obj1) {
//     obj3[key] = obj1[key];
// }

// for (var key in obj2) {
//     obj3[key] = obj2[key];
// }
// console.log(obj3);

// var user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//     age: 32,
// };

//Object.keys() ==> Lấy danh sách key trong object và trả về array
// console.log(Object.keys(user));

//Ví dụ; Kiểm tra 1 object có dữ liệu hay không?
// var a = {};
// if (Object.keys(a).length) {
//     console.log("Có dữ liệu");
// } else {
//     console.log("Không có dữ liệu");
// }

//Object.values() ==> Lấy các value trong object và lưu vào 1 mảng
// console.log(Object.values(user));

//Object.entries() ==> Lấy cả key và value của object và trả về mảng 2 chiều
// console.log(Object.entries(user));

//Object.fromEntries() ==> Chuyển mảng 2 chiều thành object
// var arr = [
//     ["name", "Hoàng An"],
//     ["email", "hoangan.web@gmail.com"],
//     ["address", "Hà Nội"],
// ];
// console.log(arr);
// console.log(Object.fromEntries(arr));

//Bài tập
// var query = {
//     category: 1,
//     keyword: "Khóa học Fullstack",
//     status: true,
// };
// var queryString = "";
// for (var key in query) {
//     queryString += `&${key}=${query[key]}`;
// }
// console.log(queryString.slice(1).replaceAll(" ", "+"));

// var queryString = Object.entries(query)
//     .map(function (item) {
//         return item.join("=");
//     })
//     .join("&")
//     .replaceAll(" ", "+");
// console.log(queryString);

//Bài tập: Chuyển query string thành object query
// var allowArr = ["true", "false"];
// var queryObject = queryString
//     .replaceAll("+", " ")
//     .split("&")
//     .map(function (item) {
//         var itemArr = item.split("=");
//         if (!isNaN(+itemArr[1])) {
//             itemArr[1] = +itemArr[1];
//         }
//         if (allowArr.includes(itemArr[1])) {
//             itemArr[1] = itemArr[1] === "true";
//         }
//         return itemArr;
//     });
// queryObject = Object.fromEntries(queryObject);
// console.log(queryObject);

//Object.assign(target, source1, source2, ,,,,sourceN) ==> Nối object
// var user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
// };
// var course = {
//     courseName: "Fullstack 09",
//     coursePrice: 1000,
// };
// // var newObj = Object.assign(user, course);
// var newObj = Object.assign({}, user, course);
// console.log(newObj);

//Từ khóa this(context)
// var user = {
//     name: "Hoàng An",
//     email: "hoangan.web@gmail.com",
//     getName: function () {
//         return this.name;
//     },
//     getInfo: function () {
//         var _this = this;
//         return {
//             age: 32,
//             getEmail: function () {
//                 console.log(_this.email);
//             },
//         };
//     },
// };
// user.getInfo().getEmail();

// var b = {
//     course: "Fullstack",
//     teacher: "Hoàng An",
//     getEmail: function () {
//         console.log(this.email);
//     },
// };
//Hàm bind()
// b.getEmail.bind(a)();

//Hàm call()
var a = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
};
function something(a, b) {
    console.log(this);
    console.log(a, b);
}
// something.call(a, 10, 20);

//Hàm apply
var args = [10, 20];
// something.apply(a, args);
Object.prototype.message = "Hello anh em F8";
var user = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    combineValues: function () {
        //Lấy tất cả các giá trị của các key không phải là hàm và gán vào 1 mảng
        var result = [];
        Object.keys(this).forEach(function (key) {
            console.log(this[key]);
        }, this);
        console.log(result);
    },
};
console.log(user.message);

var product = {
    name: "laptop",
};
console.log(product.message);

var fullName = "Hoàng An";
console.log(fullName.message);

//Trong js ==> Hàm tạo object là to nhất(Hay còn gọi là Object cụ tổ)
// console.dir(String.prototype);
// console.log(Array.prototype);
// console.log(Number.prototype);
// console.log(Boolean.prototype);
