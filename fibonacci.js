//write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function.

function fib(n) {
    if(n <= 0) return 0;
    else if(n <= 2) return 1;
    else return fib(n-2) + fib(n-1);
}

console.log("fib of 6: ", fib(6));
console.log("fib of 7: ", fib(7));
console.log("fib of 8: ", fib(8));