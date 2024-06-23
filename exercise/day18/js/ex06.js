var col = 8;
var row = 8;
for(var i = 1; i <= row; i++) {
    for(var j = 1; j <= col; j++) {
        if(i % 2 !== 0 && j % 2 === 0) {
            document.write(`<td class="bg-black"></td>`);
        } else if(i % 2 === 0 && j % 2 !== 0){
            document.write(`<td class="bg-black"></td>`);
        } else {
            document.write(`<td></td>`);
        }
    }
    document.write(`<tr></tr>`)
}