function learning(cb) {
    setTimeout(function () {
        console.log("learning");
        cb();
    }, 600);
}

function finishedLearning(cb) {
    setTimeout(() => {
        console.log(`finished Learning`);
        cb();
    }, 800);
}

function work(cb) {
    setTimeout(function () {
        console.log("work");
        cb();
    }, 300);
}

function takeSalary() {
    setTimeout(() => {
        console.log(`Take Salary`);
    }, 200);
}

learning(function () {
    finishedLearning(function () {
        work(function () {
            takeSalary();
        });
    });
});
console.log("oke");
