/*

 JavaScript Exercises : Functions

 Memoization is a performance booster for algo functions. It allows us to cache previous runs
 of a function with a given argument. On future runs of the algo, we check if the value has already
 been computed and is in the cache.

 Below is a generic memoizer function, and it's usage in a factorial function (factorial 4 is 4 x 3 x 2 x 1).

 Use the memoizer for a fibonacci function (fib number is sum of two previous fib numbers)

 */


var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};

var factorial = memoizer([1, 1], function (shell, n) {
    return n * shell(n - 1);
});

//Write this code..
//var fibonacci =

console.log(fibonacci(6)); //should equal 8
console.log(fibonacci(10)); //should equal 55