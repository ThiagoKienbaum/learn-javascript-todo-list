var result = [];

function pares(x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
}

console.log(result);
pares(32, 321);
