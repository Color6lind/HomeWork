// Task 4
class MyString {
	reverse(str) {
		return str.split('').reverse().join('');
	}

	ucFirst(str) {
		return str[0].toUpperCase() + str.slice(1);
	}

	ucWords(str) {
		return str.split(/\s+/).map(w => w[0].toUpperCase() + w.substring(1)).join(' ')
	}
}

let str = new MyString('my name is pavel');

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));

console.log('==============')
// Task 5
class Validator {
	isEmail(str) {
		if (str.match(/^[0-9a-z]+\@[0-9a-z]{4,}\.[a-z]{2,}$/i)) {
			return true
		} else {
			return false
		}
	}

	isDomain(str) {
		if (str.match(/^[0-9a-z]+\.[0-9a-z]{2,}$/g)) {
			return true
		} else {
			return false
		}

	}

	isDate(str) {
		if (str.match(/^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.(\d{4})$/g)) {
			return true
		} else {
			return false
		}
	}

	isPhone(str) {
		if (str.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g)) {
			return true
		} else {
			return false
		}
	}
}

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+7 (239) 817-68-92'));