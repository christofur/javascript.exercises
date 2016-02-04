/*

    JavaScript Exercises : Functions as Parameters

 */



function operate(operator, operand1, operand2)
{
    return operator(operand1, operand2);
}

var operators = {
    add:      function(x,y) { return x+y; },
    subtract: function(x,y) { return x-y; },
    multiply: function(x,y) { return x*y; },
    divide:   function(x,y) { return x/y; },
    pow:      Math.pow  // Works for predefined functions too
};

// We can use the above like:

var sum = operate(add, 2, 3);

// Write the code to calculate:
// (2+3) + (4*5):
//var result =
