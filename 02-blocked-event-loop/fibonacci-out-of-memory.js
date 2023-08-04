// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

setTimeout(() => {
  console.log("rofl");
}, 0);

const fibonacci = (n) => {
  return new Promise((resolve, reject) => {
    if (n === 0 || n === 1) {
      return resolve(n);
    }
    Promise.all([fibonacci(n - 1), fibonacci(n - 2)]).then(([fib1, fib2]) =>
      resolve(fib1 + fib2)
    );
  });
};

fibonacci(10).then((res) => console.log(res));
