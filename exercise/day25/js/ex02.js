function Current() {}
Current.prototype.getCurrent = function (n) {
    function formatNumber(number) {
        var numberString = number.toString();
        var regex = /(\d)(?=(\d{3})+(?!\d))/g;
        return numberString.replace(regex, "$1,");
    }
    var total = formatNumber(n);
    return `${total} đ`;
};

var current = new Current();
console.log(current.getCurrent(1200000));
