const passwordLength = 10;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSpecialCharacters = true;

function generatePassword(length, uppercase, lowercase, numbers, specialCharacters) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let allowedChars = "";
    let password = "";

    allowedChars += uppercase ? uppercaseChars : '';
    allowedChars += lowercase ? lowercaseChars : '';
    allowedChars += numbers ? numberChars : '';
    allowedChars += specialCharacters ? specialChars : '';

    if (allowedChars.length <= 0) {

    return '(Password length must be greater than 0 and at least one character type must be selected)';
   }
   if (allowedChars.length === 0) {
    return '(At least one character type must be selected)';
   }
   

   for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
   }
   return password;
}
const password = generatePassword(passwordLength, 
    includeUppercase, 
    includeLowercase, 
    includeNumbers, 
    includeSpecialCharacters);

// console.log(`Generated Password: ${password}`);


//funtion expression  - a way to define a function and assign it to a variable

const nums = [1, 2, 3, 4, 5];

const squaredNums = nums.map(function(num) {
    return num * num;
});

console.log(squaredNums); // Output: [1, 4, 9, 16, 25]

const evenNums = nums.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNums); // Output: [2, 4]

const sum = nums.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


/** arrow functions - a concise way to define functions
 * expressions for functions that are not hoisted and only used once or a few times, and they can be anonymous (without a name). They are often used as callbacks or in functional programming.
 * (parameters) => { function body } 
 * 
 * 
 */

const multiply = (a, b) =>  a * b;

console.log(multiply(5, 3)); // Output: 15