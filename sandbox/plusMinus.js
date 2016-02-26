const plusMinus = function(arr){


    var plusses = arr.filter((a) => { return a > 0 });
    var minuses = arr.filter((a) => { return a < 0 });
    var zeroes = arr.filter((a) => { return a === 0 });

    console.log(arr.filter((a) => { return a > 0 }).length / arr.length);
    console.log(arr.filter((a) => { return a < 0 }).length / arr.length);
    console.log(arr.filter((a) => { return a === 0 }).length / arr.length);
};


//Input

var arr = [-4,3,-9,0,4,1];
plusMinus(arr);

module.exports = plusMinus;