//Câu lệnh rẽ nhánh
//1. if else
/*
    1.1 câu lệnh if thiếu
    if(dieu kien) {
        Khối lệnh 
    }

    1.2 Câu lệnh if đủ
    if(dieuKien) {
        Khối lệnh đúng
    } else {
        Khối lệnh sai 
    }

    1.3 Câu lệnh if nhiều nhánh
    if(dieukien1) {
        Khối lệnh 1
    } else if (dieukien2) {
        Khối lệnh 32
    } else if (dieukien3) {
        Khối lệnh 3 
    } else {
        Khối lệnh 4 
    }

    1.4 if lồng nhau
    if(dieukien1) {
        if(dieukien2) {
            Khối lệnh
        } else {
            Khối lệnh 
        }
    } else {
        Khối lệnh 
    }
*/
//2. switch case

// var salary = 20000000;
// var income, tax;
// if(salary < 0) {
//     console.log("Lương không âm");
// } else {
//     if(salary <= 5000000) {
//         tax = 0;
//     } else if(salary < 15000000) {
//         tax = 3;
//     } else {
//         tax = 5;
//     }
//     income = salary - (salary * tax) / 100;
//     console.log(`Thu nhập: ${income}`);
// }

//Bài kiểm tra logic
var saleRate = 5;// Phần trăm giảm giá
var salePrice = 1000000; //Giá sau khi giảm giá

var price = salePrice / (1 - saleRate / 100);
console.log(price);



