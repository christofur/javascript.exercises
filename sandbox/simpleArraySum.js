var simpleArraySum = function(arr){

    var sum = 0;
    arr.forEach(function(a){
        sum += a;
    });

    return sum;
};

var arr = [10,10,10];
console.log(simpleArraySum(arr));

module.exports = simpleArraySum;