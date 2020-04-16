// Task 1
class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	
	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User {
	constructor(name, surname, year) {
		super(name, surname);
		this.date = new Date().getFullYear();
		this.year = year;
	}

	getCourse() {
		return this.date - this.year;
	}
}

var student = new Student('Иван', 'Иванов', 2017);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());