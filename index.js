// ONLY ODDS EXERCISE

// Input array = [2, 4, 6, 8, 11, 20, 15, 22]
// Expected output: [11, 15]

// Create an array with the numbers
const array = [2, 4, 6, 8, 11, 20, 15, 22];
const odd = [];

// Create a for loop
for (let i = 0; i < array.length; i++) {
    const num = array[i];
if (num % 2 === 1) {
    odd.push(num);
}
}
console.log(odd);

// The above code will work for the rest of these input arrays
    // as well as the expected output:

// Input array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected output: [1, 3, 5, 7, 9]


// Input array = [70, 42, 55, 81, 21, 91, 34]
// Expected output: [55, 81, 21, 91]

// Input array = [2, 4, 6, 8, 10, 11, 12]
// Expected output: 9110


// VOWELS VS CONSONANT EXERSICE

// "a", "e", "i", "o", and "u" are vowels
// Every other letter is a consonant
// Set up array for "hello"
// Expected result: "hello has 3 consonants and 2 vowels"
const array = "hello";

let numVowels = 0;
let numConsonants = 0;

const vowels = 'aeiou';

for (let i = 0; i < array.length; i++) {
    const char = array[i];

  if (vowels.includes(char)) {
    numVowels++;
  } else {
    numConsonants++;
  }
}
console.log(`${array} has ${numConsonants} consonants and ${numVowels} vowels`);