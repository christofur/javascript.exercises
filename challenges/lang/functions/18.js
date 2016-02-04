/*

 JavaScript Exercises : Functions

 Lots of functions don't return values (such as setters or UI updating methods).

 In these cases, returning `this` is a powerful way to allow us to chain function calls,
 as below.

 */

var printer = {
    whisper: function(content){
        console.log(content.toLowerCase() + ' ');
        return this;
    },
    say: function(content){
        console.log(content + ' ');
        return this;
    },
    shout: function(content){
        console.log(content.toUpperCase() + ' ');
        return this;
    }
};

printer .say('Lets Either Be')
        .whisper('really quiet')
        .say('Or')
        .shout('really loud');

