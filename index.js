function reverse(word){
  const wordArray = word.split("")
   const reversedWordArray = wordArray.reverse()
   const reversedWord = reversedWordArray.join("")
   return reversedWord;
}
function isPalindrome(word) {
  // Write your algorithm here
 // make a function that returns true if a word is a 
 // and false if a word is not (if the word is the same 
 // from reverse)
 //mom = mom => true
 //abc = cba => false
 //PSEUDOCODE
//  reverse the string 
//if the input is the same as the reversed string return true
const reversedWord = reverse(word)
if (word === reversedWord){
  return true
} else {
  return false
} 






  function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,''); // Preprocess the string to remove capitalization, spaces, and non-alphanumeric characters
    for (let i = 0; i < string.length / 2; i++) { // Loop through half of the string
      if (string[i] !== string[string.length - 1 - i]) { // Check if first and last string are same
        return false; // If not, return false
      }
    }
    return true; // If all characters match, return true
  }
  
  // Example usage
  console.log(isPalindrome("mom")); // Output: true
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("hello")); 
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
