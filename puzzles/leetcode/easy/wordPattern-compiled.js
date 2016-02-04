/*

 Given a pattern and a string str, find if str follows the same pattern.

 Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

 Examples:
 pattern = "abba", str = "dog cat cat dog" should return true.
 pattern = "abba", str = "dog cat cat fish" should return false.
 pattern = "aaaa", str = "dog cat cat dog" should return false.
 pattern = "abba", str = "dog dog dog dog" should return false.

 Notes:
 You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

 */

(function iife() {
    'use strict';

    let pattern = "abba";
    let str = "dog cat cat dog";

    function reduce(str) {
        let letters = [];
        let words = str.split(' ');
        for (let i = 0; i < words.length; i++) {
            letters.push(words[i][0]);
        }

        return letters.join('');
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    function uniqueLetters(str) {
        return str.filter(onlyUnique);
    }

    function numerise(str) {
        let map = [];
        let numbers = '';
        let letters = str.split('');
        let currentNumber = 0;

        for (let i = 0; i < letters.length; i++) {

            if (map[letters[i]] > -1) {
                numbers += map[letters[i]];
            } else {
                map[letters[i]] = currentNumber;
                numbers += currentNumber;
                currentNumber++;
            }
        }

        return numbers;
    }

    console.log('Pattern: ' + pattern);
    console.log('Pattern Digits: ' + numerise(pattern));

    console.log('Output Letters: ' + reduce(str));
    console.log('Output Digits: ' + numerise(reduce(str)));

    console.log('Equal: ' + (numerise(pattern) === numerise(reduce(str))));
})();

//# sourceMappingURL=wordPattern-compiled.js.map