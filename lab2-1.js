function isInteger(num) {
  return typeof num === 'number' && num % 1 === 0;
  }
  
  console.log( isInteger(1) ); // true
  console.log ( isInteger(1.5) ); // false
  console.log ( isInteger(-0.5) ); // false

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  
  function findPrimes(a, b) {
    if (!Number.isInteger(a)){
        a = Math.ceil(a);
    }
    for (let i = a; i <= b; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  
  // Приклад використання:
  findPrimes(1.2, 50); // Знайде і виведе всі прості числа в інтервалі [10, 50]
  