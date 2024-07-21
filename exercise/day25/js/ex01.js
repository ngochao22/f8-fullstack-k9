function sum(...args) {
    var total = 0;
    for (var arg of args) {
        if (typeof arg !== "number") {
            return "Đây không phải số";
        }
        total += arg;
    }
    return total;
}
console.log(sum(1, 2, 3, 4));
