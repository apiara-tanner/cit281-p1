/*
    CIT 281 Project 1
    Name: Tanner Gill
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//creates empty string and alphabet array
let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let randWord = "";

//loops through alphabet array between 5 to 25 times and chooses random letters to add to a single word
for(let i = 0; i< getRandomInteger(5, 25); i++){
  let randomLetter = alpha[getRandomInteger(0, 32)];
  randWord = randWord + randomLetter;
}
console.log(randWord);
