/*

 JavaScript Patterns : A custom Inherits method, removed a tiny bit of the alien inheritance syntax.

 It sometimes happens that a constructor is given a very large number of parameters.
 This can be troublesome because it can be very difficult to remember the order of the arguments.
 In such cases, it can be much friendlier if we write the constructor to accept a single object specifier instead.
 That object contains the specification of the object to be constructed.

 */

    var maker = function(){
        //..
    };

//So, instead of:

    var myObject = maker('Chris', 'Sydney', 'NSW', 'Perks', 'Something Else');

//we can write:

    var betterObject = maker({
        first: 'Chris',
        last: 'Perks',
        state: 'NSW',
        city: 'Sydney'
    });