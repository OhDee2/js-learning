// 'hoisting' will take any function within the file and move it to the top of the file
// only traditional functions are hoisting, const and let are not hoisted e.g. arrow functions
// 'var' gets hoisted to an undefined variable at the top of the file
// use 'let' and 'const' to avoid hoisting issues
// Source https://www.youtube.com/watch?v=EvfRXyKa_GI&ab_channel=WebDevSimplified

function sumFunction(a, b) {
    return a + b;
  }

const sumConst = (a, b) => a + b;

console.log("sumFunction(1, 2): " + sumConst(1, 2));
console.log("sumFunction(3, 4): " + sumConst(3, 4));

