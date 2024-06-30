//Chuổi: Tập hợp các ký tự 
// var fullName = "Tạ Hoàng An";
// console.log(fullName);

//Kiểm tra 1 biến có phải chuỗi ko
// if(typeof fullName === 'string' ) {
//     console.log("Đúng");
// }

//Lưu ý: trong tất cả các kiểu dữ liệu (Trừ null và undefined)
// ==> Js bọc object ở bên ngoài kiểu dữ liệu để chứa các phương thức và thuộc tính xử lý với kiểu dữ liệu tương ứng
//Mỗi kiểu dữ liệu tỏng js sẽ có 1 hàm tạo (Constructor) tương ứng
//Chuỗi ==> String()
//Số ==> Number()
//Logic ==> Boolean()
//Mảng ==> Array()
//Đối tượng ==> Object()

// console.log(String.prototype);
// console.log(fullName.length);

//1. At(index) hoặc charAt(index) ==> Trả về ký tự dựa vào index(index bắt đầu từ 0)
// var str = "Học lập trình tại F8";
// console.log(str.charAt(1));

//2. charCodeAt(index) ==> trả về mã ASCII của ký tự index
// var str = "Học F8 lập trình tại F8";
// console.log(str.charCodeAt(2));

//3. concat() ==> Nối chuỗi(ít dùng)
// console.log(str.concat("hello1", "hello2", "hello3"));

//4. length ==> Trả về độ dài của chuỗi
// console.log(str.length);

//5. indexOf(sub_string) ==> Trả về index đầu tiên tìm được chuỗi sub_string trong chuỗi cha, nếu không tìm được trả về -1
// console.log(str.indexOf("F8"));

//6. lastIndexOf(sub_string) ==> Trả về index cuối cùng tìm được chuỗi sub_string trong chuỗi cha, nếu không tìm được trả về -1
// console.log(str.lastIndexOf("F8"));

//7. includes(sub_string) ==> Tìm chuỗi sub_string trong chuỗi cha và trả về true/ false
// console.log(str.includes("F8"));

//8. slice(start, end) ==> Cắt chuỗi từ start đến end-1
// console.log(str.slice(3, 5)); //Từ 3 đến 4
// console.log(str.slice(4)); //Từ 4 đến hết
// console.log(str.slice(-4)); //4 ký tự cuối

//9. replace(old_string, new_string) ==> Thay thế old_string thành new_string
// console.log(str.replace("F8", "F88"));

//10. replaceAll(old_string, new_string) ==> Thay thế tất cả
// console.log(str.replaceAll("F8", "F88"));

//11. startsWith(sub_string) ==> Tìm chuỗi sub_string có bắt đầu trong chuỗi cha không
// console.log(str.startsWith("Học"));

//12. endsWith(sub_string) ==> Tìm chuỗi sub_string có kêt thúc trong chuỗi cha ko

//13. toUpperCase() ==> Chuyển thành chữ HOA
// console.log(str.toUpperCase());

//14. toLowerCase() ==> Chuyển thành chữ thường
// console.log(str.toLowerCase());

//15. trim() ==> Xóa khoảng trắng đầu và cuối chuỗi
// var str1 = "       TẠ HOÀNG AN            ";
// console.log(str1);
// console.log(str1.trim());

//16. trimStart(), trimLeft() ==> Xóa khoảng trắng đầu chuỗi

//17. trimEnd(), trimRight() ==> Xóa khoảng trắng cuối chuỗi

//18. split() ==> Tách chuỗi thành mảng dựa vào ký tự phần tách
// console.log(str.split(" "));

//19. repeat() ==> Lặp lại chuỗi theo số lần nhất định
// console.log('*'.repeat(10));

//20. match() ==> Cắt chuỗi dựa vào biểu thức chính quy(Regex)
// var str = 'Hello anh em F8, so dien thoai 0243423440 và so nua 0242304020';
// var phones = str.match(/0\d{9}/g);
// console.log(phones);
var content = `<h1>Học lập trình không khó tại F8.Học lập trình không khó tại F8.Học lập trình không khó tại F8.Học lập trình không khó tại F8<h1/>`;
var keyword = "trình";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var newContent = "";
while(position !== -1) {
    newContent += content.slice(0, position) +
        `<span>${content.slice(position, position + keyword.length)}</span>`;
    //Cắt bỏ đoạn đã tìm được
    content = content.slice(position + keyword.length);
    //tìm ở content mới
    position = content.toLowerCase().indexOf(keyword.toLowerCase());
}
newContent += content;
document.write(newContent);


