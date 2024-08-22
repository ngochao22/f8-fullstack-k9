var inputRangeList = document.querySelectorAll('input[type="range"]');
var finishEvent = new Event("finish");
inputRangeList.forEach(function (inputRange) {
    inputRange.addEventListener("input", function () {
        if (+this.value === 100) {
            this.dispatchEvent(finishEvent);
        }
    });
});

//tạo event tên: dragFast
//Để phát hiện user kéo nhành (< 500ms)
var dragFastEvent = new Event("dragFast");
inputRangeList.forEach(function (inputRange) {
    var startValue;
    var startTime;
    inputRange.addEventListener("input", function () {
        if (!startValue) {
            startValue = this.value;
        }
        if (this.value !== startValue && !startTime) {
            startTime = new Date().getTime();
        }
        if (+this.value === 100) {
            this.dispatchEvent(finishEvent);
            var currentTime = new Date().getTime();
            if (currentTime - startTime < 500) {
                this.dispatchEvent(dragFastEvent);
            }
        }
    });
});
