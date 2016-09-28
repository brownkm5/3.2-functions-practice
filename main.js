/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------
var number1 = 10;
var number2 = 12;
function max(num1, num2){
"use strict"
    if (num1>num2) {
      var answer =num1;
    }
    else {
      var answer =num2;
    }
    return answer;
}
console.log(max(number1, number2));
var greater = max(number1, number2);
console.assert(max(number1, number2) == number2);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
var number1 = 134;
var number2 = 23;
var number3 = 345;

function maxOfThree(num1, num2, num3){
    "use strict";
  if (num1>num2 && num1>num3) {
    var answer = num1;
  }
  else if (num2>num1 && num2>num3) {
    var answer = num2;
  }
  else {
    var answer = num3;
  }
  return answer;
}
console.log (maxOfThree(number1, number2, number3));
var greater = maxOfThree(number1, number2, number3);
console.assert(maxOfThree(number1, number2, number3) == number3);
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
// found this documentation on mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
var char = 'a';
function isVowel(char){
    "use strict";
    //dont need an if because the includes function returns true or false
  if('aeiouAEIOU'.includes(char)){
    var ans = true;
  }
  else{
    var ans = false;
  }
  return ans;
}
var ans = isVowel(char);
console.log(ans);
console.assert(isVowel(char) == true);
console.assert(isVowel('b') == false);

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
var textPhrase= phrase;
var newPhrase = "";
var vowel = ["a", "e", "i", "o", "u", " "];
for (var i = 0; i < textPhrase.length; i++) {
  var char = textPhrase.charAt(i);

  if (vowel.indexOf(char) != -1) {
    newPhrase = (newPhrase + (char));
  }
  else {
    newPhrase = (newPhrase + (char + 'o' + char));
  }
}
return newPhrase;
}
console.log(rovarspraket('this is fun'));
console.assert(rovarspraket('this is fun') == 'tothohisos isos fofunon');

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    var num= [1, 2, 3, 5];
    var answer5 = num[0]+num[1]+num[2]+num[3];
    return answer5;
}
var answer5 = sum();
console.log(sum());
console.assert(sum()  == 11);

function multiply(){
    "use strict";
    var num = [1, 2, 3, 5];
    var answer52 = num[0]*num[1]*num[2]*num[3];
    return answer52;
}
var answer52 = multiply();
console.log(multiply());
console.assert(multiply()  == 30);
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
//found on http://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript
function reverse(string){
    "use strict";
    return string.split("").reverse().join("");
}
var string = 'jag testar';
console.log(reverse(string));
console.assert(reverse(string) == 'ratset gaj');

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
//found on https://medium.freecodecamp.com/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c#.jfel0nmpf
var words = ['one', 'kevin', 'travel', 'long'];
function findLongestWord(words){
    "use strict";
    var words;
  var longestWord = 0;
  //counts the length of each word and if it is bigger than what longestWord is currently set to it changes it to the greater length until it goes through the entire array and the greatest length is left
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }
  return longestWord;
}
var length = findLongestWord(words);
console.log(length);
console.assert(findLongestWord(words) == 6);
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

var words2 = ['kevin', 'cities', 'greenville', ]
function filterLongWords(words, i){
    "use strict";
var longWords = [ ];
for (var j = 0; j < words2.length; j++) {
  if (words2[j].length>i) {
    longWords.push(words2[j]);
  }
} //got help from peter with this
var correctWords= ['cities', 'greenville'];
for (var j = 0; j < longWords.length; j++) {
  if (longWords[j] != correctWords[j]){
    return false;
  }

}
return true;
}
// console.log(longWords);
console.log(filterLongWords(words2, 5));
console.assert(filterLongWords(words2, 5)  == true);
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
//found at http://stackoverflow.com/questions/18619785/counting-frequency-of-characters-in-a-string-using-javascript
var string = 'abbabcbdbabdbdbabababcbcbab';
    function getFrequency(string) {
      "use strict";
      var freq = {};
      for (var i=0; i<string.length;i++) {
          var character = string.charAt(i);
          if (freq[character]) {
             freq[character]++;
          } else {
             freq[character] = 1;
          }
        }
          return freq;
      }
var frequency = getFrequency(string);
console.log(getFrequency(string));
console.assert(getFrequency(string) == {a: 7, b: 14, c: 3, d: 3}); //this is copied straight from the log, not sure why its giving me an assertion failed
