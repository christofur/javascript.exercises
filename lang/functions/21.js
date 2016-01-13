/*

 JavaScript Exercises : Closures

 JS uses Lexical Scoping - a function uses the variable scope in
 place when they are defined, not when they are executed.

 */


//Version 1
var scope = "global scope";
function checkscope1() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f();
}
console.log(checkscope1()); // => "local scope"

//Version 2
function checkscope2() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}

console.log(checkscope2()()); // => what does this return?