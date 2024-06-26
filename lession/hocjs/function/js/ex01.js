//Kỹ thuật tách các đoạn chuong trình 
//Hàm: Đoạn chương trình(Thể hiện dưới dạng động từ, danh từ)

/*
Cú pháp:
function tenHam() {
    Nội dung hàm    
}

function tenHam(thamso1, thamso2,...) {
    Nội dung hàm
}

2. Gọi hàm
tenHam()
tenHam(doiso1, doiso2,...)
*/

// function getTotal(a, b) {
//     var total = a + b;
//     console.log(total);
// }
// getTotal(10, 20);
// getTotal(15, 25);
// getTotal(10, 20);

// function showMessage(msg, type = 'success') {
//     console.log(msg);
//     console.log(type);
// }
// showMessage("Học lập trình không khó", 'error');

//Hàm có giá trị trả về (return function)
//Hàm không có giá trị trả về (void function)
//Lưu ý khi dùng return:
//==> Khi đã gọi từ khóa return thì hàm sẽ bị thoát(Các đoạn chương trình phía dưới return không có tác dụng)
// function getTotal(a, b) {
//     var total = a + b;
//     return total;
// }
// console.log(` Kết quả là: ${getTotal(10, 20)}`);

// function division(a, b) {
//     if(b === 0) {
//         return 0;
//     }

//     return a / b;
// }
// console.log(division(10, 5));

//Bài tập: Viết hàm kiểm tra số nguyên tố
//Nếu isShow = true ==> Hiển thị kết quả dạng console ngay trong hàm
//Nếu isShow = false ==> return về true / false và sẽ thực hiện hiển thị kết quẩ ngoài hàm
// function showResult(number, isShow, status) {
//     var msgSuccess = `${number} là số nguyên tố`;
//     var msgError = `${number} không phải là số nguyên tố`;
//     if(!isShow) {
//         return status;
//     }
//     console.log(status ? msgSuccess : msgError);
// }

// function isPrime(number, isShow = false) {
    
//     if(number <= 1 || number % 1 !== 0) {
//         return showResult(number, isShow, false);
//     }
//     for(var i = 2; i < number; i++) {
//         if(number % i === 0) {
//             return showResult(number, isShow, false)
//         }
//     }
//     return showResult(number, isShow, true);
// }
// console.log(isPrime(10, false));
// isPrime(13, true);

//Biến toàn cục, biến cục bộ
//Biến cục bộ chỉ được sử dụng trong phạm vi hàm
// var data = "Học js không khó";//Biến toàn cục
// function getMessage() {
//     return data;
// }
// function setMessage(value) {
//     data = value;
// }
// setMessage("JS");
// console.log(getMessage());

//Hàm ẩn danh (Anonymous function)
//- Không có tên
//- Muốn chạy được phải gán vào 1 biến hoặc gọi trong hàm khác thông qua tham số
// var something = function() {
//     console.log('Xin chào anh em f8');
// }
//==> expression function
// something();

// function getA() {
//     console.log("Xin chào anh em f8");
// }

// var something = getA;
// something();
// getA();

// var something = function() {
//     console.log("Xin chào anh em f8");
// };
// if(typeof something === 'function') {
//     console.log("something là function");
//     something();
// }

//arguments keyword
//rest parameters ==> Tham số còn lại
var getMAX = function(a, b, ...args) {
    console.log(a, b);
    console.log(args);
}
getMAX(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
