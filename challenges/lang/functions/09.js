/*

 JavaScript Exercises : Functions

 Apply Invocation involves using the special apply() method. This method takes in two
 parameters. First, a value which should be bound to `this`. Second, an array of parameters.

 Complete the expected output.

 */

var obj = {
    data:'Hello ',
    names: ['Chris', 'Bill']
}

var displayData = function() {
    console.log(this.data + (arguments[0] ? arguments[0] : ''));
}

displayData();                          //Expected Output:
displayData.apply(obj);                 //Expected Output:
displayData.apply(obj, obj.names);      //Expected Output: