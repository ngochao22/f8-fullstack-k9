var a = 0;
var b = -0;

if(a > 0 && b > 0 || a < 0 && b < 0 || a === 0 && b === 0) {
    console.log(`Hai số cùng dấu: a = ${a} và b = ${b}`);
} else {
    console.log(`Hai số trái dấu: a = ${a} và b = ${b}`);
}