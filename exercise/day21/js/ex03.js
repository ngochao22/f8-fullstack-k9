var list = [1, 5, 1, 54, 34, "text", "oke", "oke", undefined, null, undefined];
var filterArr = function (arr) {
    var newList = [];
    for (var value of arr) {
        var check = false;
        for (var valueNewList of newList) {
            if (value === valueNewList) {
                check = true;
                break;
            }
        }
        if (!check) {
            newList[newList.length] = value;
        }
    }

    return newList;
};
console.log(filterArr(list));
