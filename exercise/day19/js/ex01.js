var numbers = [];
var on;

function fibonacci(n) {
  if (n < 1) {
    return;
  }

  if (!on) {
    on = n;
  }

  if (!numbers.length) {
    numbers.push(0);
  } else if (numbers.length === 1) {
    numbers.push(1);
  } else {
    var i = on - n;
    var nextNum = numbers[i - 1] + numbers[i - 2];
    numbers.push(nextNum);
  }

  fibonacci(n - 1);
}
fibonacci(10);
console.log(numbers);


