// 'var', 'let' and 'const'
// 'var' is function scoped and 'let' is block scoped
// 'const' is block scoped and cannot be reassigned
var start = new Date().getTime();
console.log("Start time: " + start);

let end = new Date().getTime();
console.log("End time: " + end);

if (start < end) {
    const timeTaken = end - start;
    console.log("Time taken: " + timeTaken + "ms");
}