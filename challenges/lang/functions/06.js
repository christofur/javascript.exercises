/*

 JavaScript Exercises : Functions

 When a function is stored as the property of an object, we call it a method.

 With Method invocation, `this` is set to the containing object.

 Complete the following expected output.

 */

var anObject = {
    id : 1,
    total : 0,
    imAMethod : function(a,b){
        console.log(this.id); //Expected output:
    }
};

anObject.imAMethod(1,2);

