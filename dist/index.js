"use strict";

// versi 1
function isPalindrom(value) {
  var string = String(value);
  var split = string.split('');
  var newString = [];

  for (var i = split.length; i > 0; i--) {
    var _string = split[i - 1];
    newString.push(_string);
  }

  var joinString = newString.join('');
  var checkString = string === joinString;
  return checkString;
} // versi 2


function isPalindromSimple(value) {
  var string = String(value);
  var reverse = string.split('').reverse().join('');
  var checkString = string === reverse;
  return checkString;
}

console.log(isPalindromSimple('kodok'));