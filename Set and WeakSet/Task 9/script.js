let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
let result = document.getElementById('result')

let set = new Set;

btn.addEventListener('click', ()=> {
	result.innerHTML = '';
	set.add(inp.value);
	for(let key of set) {
		result.innerHTML += `${key} <br>`;
	}
	console.log(set)
});