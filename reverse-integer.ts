function reverse(x: number): number {
  let reversed = 0;

  while (x !== 0) {
    let digit = x % 10;

    x = Math.trunc(x / 10);

    if (reversed > 214748364 || reversed === 214748364) return 0;
    if (reversed < -214748364 || reversed === -214748364) return 0;

    reversed = reversed * 10 + digit;
  }

  return reversed;
}

console.log(reverse(153));
