const findSum = function(array) {

const findSum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
  return findSum;
};


const findFrequency = function(array) {

let countedLetters = array.reduce(function (fullArray, count) {
  if (count in fullArray) {
    fullArray[count]++
  }
  else {
    fullArray[count] = 1
  }
  return fullArray
}, {})

//console.log(countedLetters);

sorted = Object.keys(countedLetters).sort(function(a,b) {
  return countedLetters[b]- countedLetters[a]});

//console.log(sorted);

let findFrequency = {
  most : sorted[0],
  least : sorted[sorted.length-1]
}
return findFrequency;
};



const isPalindrome = function(str) {

  let string = str.toLowerCase();
  for (let i = 0; i <= string.length/2; i++) {
    if (string[i] !== string[string.length-1-i]) {
      return false;
    }
  }
 
  return true;
};


const largestPair = function(array) {
  
  let largestPair = 0;

  for (i = 0; i < array.length-1; i++) {
    if (array[i] * array[i+1] > largestPair) {
      largestPair = array[i] * array[i+1];
    }
  } 
  return largestPair;
};


const removeParenth = function(string) {
  
  const indexOfOpen = string.indexOf('(');
  const indexOfClose = string.indexOf(')');
    let diff = indexOfClose - indexOfOpen + 1;
    let newString = string.split('');
    let removeParenth = newString.splice(indexOfOpen, diff, '');
  return newString.join('');
};


const scoreScrabble = function(str) {

let newString = str.toLowerCase();
let scoreScrabble = 0;

for (i = 0; i < newString.length; i++) {
  if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || 
  newString[i] === 'u' || newString[i] === 'l' || newString[i] === 'n' || newString[i] === 'r' || 
  newString[i] === 's' || newString[i] === 't') {
    scoreScrabble += 1;
  }
  if (newString[i] === 'd' || newString[i] === 'g' || newString[i] === 'b' || newString[i] === 'c' || 
  newString[i] === 'm' || newString[i] === 'p') {
    scoreScrabble +=2;
  }
  if (newString[i] === 'b' || newString[i] === 'c' || newString[i] === 'm' || newString[i] === 'p') {
    scoreScrabble +=3;
  }
  if (newString[i] === 'f' || newString[i] === 'h' || newString[i] === 'b' || newString[i] === 'w' || 
  newString[i] === 'y') {
    scoreScrabble +=4;
  }
  if (newString[i] === 'k') {
    scoreScrabble +=5;
  }
  if (newString[i] === 'j' || newString[i] === 'x') {
    scoreScrabble +=8;
  }
  if (newString[i] === 'q' || newString[i] === 'z') {
    scoreScrabble +=10;
  }
}
return scoreScrabble;
};

