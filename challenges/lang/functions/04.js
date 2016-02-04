/*

 JavaScript Exercises : Functions

 When a function is stored as the property of an object, we call it a method.

 The function add() below has access to the outer context. This is called closure.

 The code below doesn't run. Why not? Correct it, and complete the expected output.

 */

var go = {
    total : 0,
    add : function(a,b){
        total += (a + b);
    }
};

go.add(1,2);
console.log(go.total); //Expected output:
go.add(3,4);
console.log(go.total); //Expected output: