// versi 1
function isPalindrom(value) {
	const string = String(value);
	const split = string.split('');

	const newString = [];

	for (let i = split.length; i > 0; i--) {
		const string = split[i - 1];

		newString.push(string);
	}

	const joinString = newString.join('');

	const checkString = string === joinString;

	return checkString;
}

// versi 2
function isPalindromSimple(value) {
	const string = String(value);
	const reverse = string.split('').reverse().join('');

	const checkString = string === reverse;

	return checkString;
}

console.log(isPalindromSimple('kodok'));
