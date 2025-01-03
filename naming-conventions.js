// Js variables are case sensitive
// the below variables are all unique and will work when used.
var name = 'Robin Wieruch';
var Name = 'Dennis Wieruch';
var NAME = 'Thomas Wieruch';

console.log(name);
// "Robin Wieruch"

console.log(Name);
// "Dennis Wieruch"

console.log(NAME);
// "Thomas Wieruch"

// values should be self-descriptive 
var firstName = 'James';

// Booleans - use is/has/are etc to help describe state
var isVisible = true;
var areEqual = false;
var hasError = false;

// Functions - again, be descriptive and with camelCase
function getName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

// Classes - use PascalCase
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
var user = new User('James', 'Farrell');

// Components - use PascalCase
// Note : when a component gets used it looks different as the first letter is uppercase
// function UserProfile(user) {
//     return (
//         <div>
//             <h1>{user.firstName} {user.lastName}</h1>
//         </div>
//     );
// }

// Private
class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = this._getName();
    }
    _getName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
var developer = new Developer('James', 'Farrell');
console.log(developer._getName());