/*

 JavaScript Exercises : Functions

 A bonus `arguments` parameter is available to functions when they are invoked.

 Print out the expected output:

 */


function printNames(){
    console.log(arguments[0]);
    console.log(arguments[2]);
}

printNames('Chris', 'Bill', 'Phil', 'Will'); //Expected Output: