//1. some(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về giá trị boolean(true, false)
- trả về true nếu có ít nhất 1 lần trong callback return về truthy
*/
// var numbers = [1, 3, 5, 6, 9];
// var status = numbers.some(function (number) {
//     return number % 2 === 0;
// });
// console.log(status);

//2. every(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về giá trị boolean(true, false)
- trả về true nếu tất cả các lần lặp đều return về truthy
*/
// var numbers = [1, 3, 5, 7, 9];
// var status = numbers.every(function (number) {
//     return number % 2 === 0;
// });
// console.log(status);

//3. find(callback)
/*
Cách hoạt động giống filter
Khác: Trả về phần tử mảng đầu tiên tìm được
*/

//4. findLast(callback)
/*
Trả về phần tử cuối cùng tìm được
*/

//5. findIndex(callback)
/*
    Cách hoạt động giống find
    Khác: Nó trả về index đầu tiên tìm được
*/

//6. findLastIndex(callback)
/*
Cách hoạt động giống findLast
Khác: Trả về index cuối cùng tìm được
*/
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var result = numbers.findLastIndex(function (number) {
//     return number > 2;
// });
// console.log(result);
// var arrA = [1, 4, 3, 2];
// var arrB = [5, 2, 6, 7, 1];

// var arr = arrA.filter(function (number) {
//     return arrB.includes(number);
// });
// console.log(arr);

//Bài tập 2
// var data = [];
// var addData = function (value, status) {
//     if (status) {
//         if (!data.includes(value)) {
//             data.push(value);
//         }
//     } else {
//         data = data.filter(function (item) {
//             return item !== value;
//         });
//     }
// };
// addData("An", true);
// addData("An", true);
// addData("Quân", true);
// addData("Quân", false);
// addData("Đức", true);
// console.log(data);

//reduce(callback, initialValue)
/*
Callback có 4 tham số (chủ yếu làm việc với 3 tham số)
- prevValue
- currentValue
- index

initialValue: Giá trị khởi tạo
Cách hoạt động: 
1. Không có initialValue(không có tham số thứ 2)
- Vòng lặp reduce sẽ chạy từ phần tử thứ 2 đến hết
- prevValue của lần lặp đầu tiên chính là phần tử đầu của mảng
- currentValue là giá tị của từng phần tử mảng khi lặp
- prevValue của lần lặp sau sẽ là return của lần lặp trc
- Giá trị của hàm reduce là return cuối cùng của callback

2. Có initialValue
- Vòng lặp reduce sẽ chạy từ phần tử thứ nhất
- prevValue của lần lặp đầu tiên sẽ chính là initialValue
- Các ý sau giống trên
*/
// var numbers = [5, 10, 15, 20, 25, 30];
// var result = numbers.reduce(function (prev, current, index) {
//     console.log(`prev = ${prev}, current = ${current}, index = ${index}`);
// });

// var numbers = [2, 9, 5, 1, -5];
// var max = numbers.reduce(function (prev, number, index) {
//     if (number < prev) {
//         return prev;
//     }
//     return number;
// });
// console.log(max);

//Bài tập 2:
// var users = ["An", "Tùng", "Đạt", "Quân", "Tùng", "Nam"];
// users = users.reduce(function (prev, user) {
//     if (!prev.includes(user)) {
//         prev.push(user);
//     }
//     return prev;
// }, []);
// console.log(users);

//Bài 3:
// var numbers = [1, [2, 3], [4], 5, [[6, 7]], [[[[8]], 9]]];
// var flatNumber = function (arr) {
//     arr = arr.reduce(function (prev, current) {
//         if (!Array.isArray(current)) {
//             return prev.concat(current);
//         }
//         return prev.concat(flatNumber(current));
//     }, []);
//     return arr;
// };
// var newArr = flatNumber(numbers);
// console.log(newArr);
// flatNumber(numbers);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var size = 3;
var result = numbers.reduce(
    function (prev, current) {
        if (prev[prev.length - 1].length < size) {
            prev[prev.length - 1].push(current);
        } else {
            prev.push([current]);
        }
        return prev;
    },
    [[]]
);
console.log(result);
