var total = null;
var reverseNumber = function(n) {
    var result = 0;
    do {
        total = n % 10;
        n = parseInt(n / 10);
        result = (result*10) + total;
    } while (n > 0);
    console.log(result);
}
reverseNumber(342342);

