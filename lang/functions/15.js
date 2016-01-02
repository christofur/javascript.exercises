/*

 JavaScript Exercises : Functions

 Inner functions have reference access to outer variables, not copies of the data.

 As such, the code below is supposed to alert 1, 2, 3 etc. But instead, the code always
 outputs nodes.length. Why? How would you fix this code?

 */

var add_the_handlers = function (nodes) {

    var i;

    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            alert(i);
        };
    }
};