
let txt = document.getElementById('txt');
let left = document.getElementById('btn1')
let right = document.getElementById('btn2');
let clear = document.getElementById('btn3');

i = 0

let object = {
	value: "",
}



txt.addEventListener('blur', function(e) {
	object.value = txt.value;
	localStorage.setItem(i, JSON.stringify(object))
	let raw = localStorage.getItem(i)
	obj = JSON.parse(raw);
	obj.value = txt.value;
	i++
});

left.addEventListener('click', (e) => {
	if (i > 0 ) {
		i--;
		console.log(obj);
		let end = localStorage.getItem(i);
		obj = JSON.parse(end);
		txt.value = obj.value;
	} else {
		return
	}
	
});

right.addEventListener('click', () => {
	if(i < localStorage.length -1) {
		i++;
		console.log(obj);
		let end = localStorage.getItem(i);
		obj = JSON.parse(end);
		txt.value = obj.value;
	}
	console.log(localStorage.length)
});

clear.addEventListener('click', ()=> {
	localStorage.clear();
});

// localStorage.clear();