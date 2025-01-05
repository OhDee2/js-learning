// There are 3 scopes in JavaScript: global, function and block scope.
// 'var' is function scoped and 'let' and 'const' are block scoped.

// BLOCK scope
{
    let v = 1;
}

// x can not be accessed outside the block

{
    var v = 2;
}

// x can be used outside the block

// LOCAL scope
// y cannot be used outside the below function
function myLocalScopeFunction() {
    let w = 3;
}

try {
    console.log(w);
} catch (error) {
    console.log(`w cannot be used outside function ${error}`);
}

// FUNCTION scope
function myFunctionScopeFunction() {
    var x = 3;
    let y = 3;
    const z = 3;
}

try {
    console.log(x);
} catch (error) {
    console.log(`x cannot be used outside function ${error}`);
}

try {
    console.log(y);
} catch (error) {
    console.log(`y cannot be used outside function ${error}`);
}

try {
    console.log(z);
} catch (error) {
    console.log(`z cannot be used outside function ${error}`);
}

// GLOBAL scope
var a = 3;
function myGlobalScopeFunction() {
    console.log(a);
}

myGlobalScopeFunction();

// Automatically global
// This will not work in STRICT mode which modern browsers use by default
automaticallyGlobal();

function automaticallyGlobal() {
    undeclaredVariable = 4;
    console.log(undeclaredVariable);
}