//Comment 1 dòng
/*
    Comment nhiều dòng
    Comment nhiều dòng
    Comment nhiều dòng
*/

//Khai báo biến
//var tenBien1, tenBien2, tenBien3
// var tienBien1=giaTri1,tienBien2=giaTri2,tienBien3=giaTri3,
var username, userEmail, userId;
var customer = "Hoàng An",
    course = "Fullstack";

//Hiển thị ở tab console
// console.log(customer);
// console.log(course);
// console.log(username);

//Hiển thị lên giao diện trình duyệt
// document.write(customer);
// document.body.innerHTML = course;

var company = "F8";
// var welcome = "<h1>Chào mừng bạn đến với " + company + "</h1>";
var welcome = `<h1>Chào mừng bạn đến với ${company}</h1>
                <h2>Hoàng An F8</h2>`;
//==> backtick
document.write(welcome);


var a = 10;
var b = 20;
var result = `<h2>Kết quả phép tính ${a} + ${b} = ${a + b}</h2>`;
document.write(result);