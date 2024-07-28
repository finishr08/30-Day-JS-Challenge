/*
Activity 3: String Manipulation with Recursion
Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
*/

// Task-5

function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));
console.log(reverseString("recursion"));
console.log(reverseString(""));

// Task-6

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.substr(1, str.length - 2));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
