/*

 JavaScript Exercises : Functions

 The module pattern allows us to eliminate use of global variables, use information hiding and
 encapsulation to create best practice entities.

 The pattern of a module is a function that defines private variables and functions; along with
 public functions which, through closure, have access to the private variables and functions.

 Add code to call scoreKeeper, adding points until the target score is achieved.

 What happens if the () from the last line is removed?
 */

var scoreKeeper = function () {

    var score = 0;
    var targetScore = 100;

    var checkIfScoreReached = function(){
        return score >= targetScore;
    };

    return {
        scoreAchieved: function () {
            return checkIfScoreReached();
        },
        getCurrentScore: function () { return score; },
        addToCurrentScore: function (points) { score += points; }
    };

}();

