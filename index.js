//This demonstrates O(n!) [Factorial Time]. This is the worst and most inefficient programming practice. This is the Big Oh No!!!

const boxes = 10;

function superInefficient(int) {
  for (let i = 0; i < int; i++) {
    superInefficient(int - 1);
  }
}

console.log(superInefficient(boxes));