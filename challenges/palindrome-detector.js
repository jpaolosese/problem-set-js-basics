/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE

function uniformString(palindrome) {
    var uniformString = palindrome.toLowerCase();
    uniformString = uniformString.replace(/[., \/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return uniformString;
}
//All incoming strings will be made all lowercase, accounting for
//and removing punctuation


function isPalindrome(palindrome) {
    palindrome = uniformString(palindrome);
	for ( var i=0; i <palindrome.length/2; i++) {
		return (palindrome.charAt(i) === palindrome.charAt(palindrome.length-1));
    //Compares characters starting at both ends of the String
	}
}
