const veryBigSum = function (arr) {

    var sum = 0;
    arr.forEach(function (a) {
        sum += a;
    });

    return sum;

};

var arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005, 1000000006, 1000000007, 1000000008, 1000000009, 1000000010];
console.log(veryBigSum(arr));
console.log(Number.MAX_VALUE);

module.exports = veryBigSum;