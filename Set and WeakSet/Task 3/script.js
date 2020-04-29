let set = new Set;

set.add(1);
set.add(2);
set.add(3);

console.log(set)

let result;

function check(el) {
	set.has(el) ? result = 'Да' : result = 'Нет'
	return result;
}

for(let key of set) {
	console.log(`Есть ли элемент со значением ${key} = ${check(key)}`)
}
console.log(`Есть ли элемент со значением 4 = ${check(4)}`)
