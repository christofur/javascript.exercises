/*

    JavaScript Exercises : Let

    Complete the expected outputs.
    Which variable(s) exist only inside the if statement, and which variable(s) exist only inside the for loop?

 */

let a = 2;

if (a > 1) {
    let b = a * 3;
    console.log(b); // Expected Output:

    for (let i = a; i <= b; i++) {
        let j = i + 10;
        console.log(j);
    }
    // Expected Output:

    let c = a + b;
    console.log(c); // Expected Output:
}

// Variable(s) which only exist inside the if statement:
// Variable(s) which only exist inside the for loop:

//# sourceMappingURL=simple_let-compiled.js.map