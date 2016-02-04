/*

 JavaScript Exercises : Functions

 JavaScript provides try / catch / throw mechanism. Catch expects an exception, which is
 just an object containing `name` and `message` properties.

 Add to the code below to throw the correct type of object.

 */

var addPositive = function(a,b){
    if(a < 0 || b < 0){
        //add throw code here
    }
};

var try_it = function(){
    try{
        addPositive(5, -6);
    } catch(e){
     console.log('We hit a problem: ' + e.name + ' : ' + e.message);
    }
};

try_it();

