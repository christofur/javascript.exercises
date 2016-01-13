/*
    The first thing to understand is that the two methods share access to the private variable n.

    The second thing to understand is that each invocation of counter() creates a new scope
    chain and a new private variable.

    So if you call counter() twice, you get two counter objects with different private variables.

    Calling count() or reset() on one counter object has no effect on the other.

 */

function counter() {
    var n = 0;

    return {
        count: function() { return n++; },
        reset: function() { n = 0; return n;}
    }; }

//Create two counters
var c = counter(), d = counter();
console.log(c.count()); //What are these values?
console.log(d.count());
console.log(c.reset());
console.log(c.count());
console.log(d.count());
