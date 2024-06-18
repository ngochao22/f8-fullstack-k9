var a = -32;
var b = 12;
var c = -89;

if(a > b) {
    var temp = a;
    a = b;
    b = temp;
}

if(a > c) {
    var temp = a;
    a = c;
    c = temp;
}

if(b > c) {
    var temp = b;
    b = c;
    c = temp;
}

console.log("Dãy số sắp xếp theo thứ tự tăng dần: ", a, b, c);