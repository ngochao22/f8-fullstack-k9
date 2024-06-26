var a = ["ngàn", "trăm", "mươi", ""];
var num = 2143;
var ns = String(num);

var b = ns
  .split("")
  .map((so, i) => so + " " + a[i])
  .join(" ");
console.log(b);