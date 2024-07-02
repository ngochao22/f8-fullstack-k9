// var fullName = "TẠ HOÀNG AN";
// //Kiểm tra biến fullName có phải tất cả là chữ hoa không
// var transName = fullName.toUpperCase();
// if (transName === fullName) {
//     console.log("Tất cả là chữ hoa");
// } else {
//     console.log("Có chữ cái thường trong chuỗi");
// }

//Bài tập 2: Kiểm tra độ mạnh, yếu của mật khẩu
/*
    >=8 ký tự
    Phải có ít nhất 1 kí tự viết HOA
    phải có ít nhất 1 ký tự viết thường
    phải có ít nhất 1 ký tự số
    phải có ít nhất 1 ký tự đặc biệt: !@#$%^&*()
*/

var checkPassword = function (pass) {
    var isUpper = false;
    var isLower = false;
    var isNumber = false;
    var isSpecial = false;

    var countUpper = 0;
    var countLower = 0;
    var countNumber = 0;

    var number = "0123456789";
    var special = "!@#$%^&*()";
    var passLength = pass.length;

    if (passLength < 8) {
        return "Yếu";
    }

    for (var i = 0; i < passLength; i++) {
        if (pass.charAt(i) >= "a" && pass.charAt(i) <= "z") {
            countUpper++;
            isLower = true;
        }

        if (pass.charAt(i) >= "A" && pass.charAt(i) <= "Z") {
            countLower++;
            isUpper = true;
        }

        if (number.includes(pass.charAt(i))) {
            countNumber++;
            isNumber = true;
        }

        if (special.includes(pass.charAt(i))) {
            isSpecial = true;
        }
    }

    if (isLower && isNumber && isUpper && isSpecial) {
        return countLower++ >= 2 && countNumber++ >= 2 && countUpper++ >= 2
            ? "Mạnh"
            : "Yếu";
    }

    return "Yếu";
};
console.log(checkPassword("fdfd!12sDF"));
