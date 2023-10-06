// write the createBase() function
//var addSix = createBase(6);
//addSix(10); // returns 16
//addSix(21); // returns 27

let createBase = base => {
    return function(n) {
        return n + base;
    }
}

var addSix = createBase(6);
console.log("addSix(10): ", addSix(10));
console.log("addSix(21): ", addSix(21));