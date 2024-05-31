function fibonacciGenerator() {
    const cache = {};

    return function* (start = 0, end = Infinity) {
        if (start < 0 || end < start) {
            throw new Error('Invalid range');
        }

        const fib = (n) => {
            if (n in cache) {
                return cache[n];
            }
            if (n === 0) {
                return 0;
            } else if (n === 1) {
                return 1;
            } else {
                const result = fib(n - 1) + fib(n - 2);
                cache[n] = result;
                return result;
            }
        };

        for (let i = start; i <= end; i++) {
            yield fib(i);
        }
    };
}

const fibGen = fibonacciGenerator();
const start = 3;
const end = 8;

const fibSequence = fibGen(start, end);
for (const num of fibSequence) {
    console.log(num);
}
