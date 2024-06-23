var n = 5;
var count = 0;
for(var i = 1; i <= n; i++) {
    for(var j = 1; j <= i; j++) {
        document.write(++count + " ");
    }
    document.writeln("<br/>");
}