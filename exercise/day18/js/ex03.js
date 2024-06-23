var n = 10;
var result = 0;
for(var i = 1; i <= n; i++) {
    for(var j = i + 1; j <= i + 1; j++) {
        result += i*j;
    }
}
document.write(`Với n = ${n} ta có kết quả = ${result}`);
console.log(result);