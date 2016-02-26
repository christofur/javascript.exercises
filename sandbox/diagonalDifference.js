var diagonalDifference = function(arr){

    var findPrimaryDiagonal = function(arr){

        var sum = 0;

        for(var i = 0; i < arr.length; i++)
        {
            sum += arr[i][i];
        }

        console.log('Primary Diagonal is ' + sum);

        return sum;
    };

    var findSecondaryDiagonal = function(arr){

        var sum = 0;

        for(var i = 0; i < arr.length; i++)
        {
            sum += arr[(arr.length - (i + 1))][i];
        }


        console.log('Secondary Diagonal is ' + sum);

        return sum;
    };


    var findDiagonal = function(arr, route){
        var sum = 0;

        for(var i = 0; i < arr.length; i++)
        {
            sum += route(arr, i);
        }

        return sum;
    };

    var difference = findDiagonal(arr, (arr, i) => { return arr[i][i]; }) - findDiagonal(arr, (arr, i) => {return arr[(arr.length - (i + 1))][i]});

    //var difference = findPrimaryDiagonal(arr) - findSecondaryDiagonal(arr);

    return Math.abs(difference);

};

var arr = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
];

console.log(diagonalDifference(arr));
module.exports = diagonalDifference;