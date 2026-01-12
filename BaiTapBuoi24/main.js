// 1
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(12));

// 2
function isPerfectNumber(n) {
  if (n <= 1) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n;
}
console.log(isPerfectNumber(12));
console.log(isPerfectNumber(28));