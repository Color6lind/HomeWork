
let btn = document.getElementById('btn');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let area = document.getElementById('area');

let i = 0;
let arr = [""];

btn.addEventListener('click', ()=> {
	arr[i] = area.value;
	localStorage.setItem("item" , arr)
});

prev.addEventListener('click', ()=> {
	if (i > 0 ) {
		i--;
		let end = localStorage.getItem("item", arr);
		area.value = arr[i];
	} else {
		return
	}
});

area.onfocus = function() {
	let end = localStorage.getItem("item", arr);
	ler = end.split(',')
	arr[i] = ler[i]
	area.value = arr[i]
}

next.addEventListener('click', ()=> {
	i++;
	let end = localStorage.getItem("item", arr);
	area.value = arr[i];
	if (arr[arr.length-1] != arr[i]) {
		area.value = arr[i];
		if (typeof arr[i+1] === "undefined") {
			area.value = "";
		} 
	} 
});

