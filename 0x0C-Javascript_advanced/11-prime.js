let timeStart, timeEnd;

function countPrimeNumbers() {
  let primeNumbers = 0;
  let isPrime = true;

  for (let i = 2; i <= 100; i++) {
    isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      primeNumbers++;
    }
  }

  return primeNumbers;
}

timeStart = performance.now()

for (let i = 0; i < 100; i++) {
  setTimeout(countPrimeNumbers(), 0);
}

timeEnd = performance.now()

timeEnd -= timeStart;

console.log(
  'Execution time of calculating prime numbers 100 times was ' +
  timeEnd +
  ' milliseconds.'
);

