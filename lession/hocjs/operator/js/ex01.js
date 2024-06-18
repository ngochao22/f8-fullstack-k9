//Biểu thuwcsc = Toán hạng + toán tử
// ví dụ: s = (a + b) * c;

//1. Toán tử số học: +, -, *, /, %(Chia lấy dư), **(Lũy thừa)
// Lưu ý với phép + ==> Chú ý kiểu dữ liệu và thực hiện ép kiểu
// var a = '10';
// var b = 20;
// var c = +a + +b;
// var c = a - b;
// var c = a ** b;
// console.log(c);

//Toán tử: ++, --
// var count = 0;
// count++;
// ++count;
// console.log(count++);

/*
Phân biệt: count++ và ++count
    - Giống nhau: đều tăng lên 1 đơn vị
    - Khác nhau: 
        + count++: trả về giá trị trước khi tăng
        + ++count: trả về giá trị sau khi tăng
*/

// var count = 1;
// var total = ++count;
// console.log(`count = ${count}`, `total = ${total}`);
// var total = count++ + ++count + 5 + ++count + count++;

//2. Toán tử so sánh: Luôn chả về kiểu dữ liệu boolean(true, false)
//>, <, >=, <=, ==, ===, !=, !==
// var a = 10;
// var b = "10";
// var c = a === b;
// console.log(c);

//3. Toán tử gán(=)
// var a = 10;
// a = a + 10;
// a += 10; // a = a + 10
// a -= 10; // a = a - 10
// a *= 10; // a = a * 10
// a /= 10; // a = a / 10
// a %= 10; // a = a % 10
// a **= 10; // a = a ** 10
// console.log(a);

//4. Toán tử logic (Luận lý): &&, ||, !
// &&: Kết hợp các biểu thức con, nếu tất cả đều đúng ==> trả về true, ngược lại trả về false
// ||: Kết hợp các biểu thức con, nếu 1 biểu thức đúng ==> trả về true. Nếu tất cả đều sai ==> trả về false
// !: Ngược lại (Phủ định)
// !haveNotCompleted
//Lưu ý: trong tình huống cần kết hợp mà muốn ưu tiên ==> Thêm cặp ngoặc ()
//Độ ưu tiên: Not -> and -> or


// var a = 10;
// var b = a >= 5 && a <= 15;
// console.log(b);

//5. Toán tử 3 ngôi (dieuKien ? giaTriDung : giaTriSai)
// var a = 10;
// var b = a === 10 ? 20 : 5;

//6. Toán tử nullish (??)
// Kiểm tra null hoặc undefined
// var a = 10;
// var b = a ?? 'F8';
// console.log(b);

//Bài tập: Viết lại toán tử nullish bằng toán tử 3 ngôi

// var total = (a === null || a === undefined) ? "f8" : a;
// console.log(total);

//7. Truthy, Falsy
// - Trong điều kiện cần phải sử dụng kiểu dữ liệu logic(boolean) mà các giá trị tự động chuyển về true --> Truthy, ngược lại gọi là falsy

//Falsy: 0, "", null, undefined, NaN, false
//Truthy: Các trường hợp còn lại

// var a = 0;
// var b = !a ? "Đúng" : "Sai";
// console.log(b);

//8. && (áp dụng cho việc gán vào biểu thức) ==> Tìm giá trị của biểu thức sai
// var a = 10;
// var b = "F8";
// var c = -5;
// var result = a && b !== "F8" && c;
// console.log(result);

//9. && (áp dụng cho việc gán vào biểu thức) ==> Tìm giá trị của biểu thức đúng
var a = 0;
var b = null;
var c = "F8";
var result = a || b || c || "Học JS";
console.log(result);

/*
Các kiểu dữ liệu trong js
1. Kiểu dữ liệu nguyên thủy
- String
- Number
- Boolean
- Null
- Undefined
- BigInt
- Symbol
2. Kiểu dữ liệu tham chiếu
- Object:
    + Array
    + function
    + Literal Object
*/
