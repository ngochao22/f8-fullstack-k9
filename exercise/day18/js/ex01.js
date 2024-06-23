var total = 0;
var km = 10;

if(km > 0) {
    if(km <= 1) {
        total = 15000;
    } else if( km > 1 && km <= 5) {
        total = 13500*(km - 1) + 15000;
    } else if(km > 5) {
        total = 13500*4 + 11000*(km - 5) + 15000;
    } else if(km > 120) {
        var kmAfter = km - 120;
        total = 13500*4 + 11000*(115) + 15000 + kmAfter*11000*0.1;
    }
}

console.log(`total = ${total}`);
document.write(`Với quãng đường dài ${km}km thì giá tiền là: ${total} đồng`);