function firstChar(text) {
	// your code here
	text = text.trim();

	if (text === '') {
		return '';
	}

	for (let index = 0; index < text.length; index++) {
		if (text[i] !== ' ') {
			return text[i];
		}
	}

	return '';
}

console.log(firstChar(' Rosa Parks '));    
console.log(firstChar('  Hello World '));   
console.log(firstChar('   '));              
console.log(firstChar(''));

// Do not change the code below

const text = prompt("Enter text:"); 
alert(firstChar(text));
