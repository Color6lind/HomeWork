let btn = document.getElementById('btn');
let elem = document.querySelectorAll('p');

let set = new Set;

for (let el of elem) {
	el.addEventListener('click', function() {
		set.add(this);
	});
}

btn.addEventListener('click', function() {
	for(let el of set) {
		el.innerHTML += '!'
	}
	set.clear();
});