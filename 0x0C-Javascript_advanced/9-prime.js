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
countPrimeNumbers();
timeEnd = performance.now()

timeEnd -= timeStart;

console.log(
  'Execution time of printing countPrimeNumbers was ' +
  timeEnd +
  ' milliseconds.'
);

