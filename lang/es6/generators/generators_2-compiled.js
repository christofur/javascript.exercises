
function* foo() {
    var x = yield 1;
    var y = yield 2;
    var z = yield 3;
    console.log(x, y, z);
}

var gen = foo();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//# sourceMappingURL=generators_2-compiled.js.map