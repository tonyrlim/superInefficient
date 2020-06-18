//This demonstrates O(n!) [Factorial Time]. This is the worst and most inefficient programming practice. This is the Big Oh No!!!

const boxes = 10;

function superInefficient(n) {
  for (let i = 0; i < n; i++) {
    superInefficient(n - 1);
  }
}

console.log(superInefficient(boxes));