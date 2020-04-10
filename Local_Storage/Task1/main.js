
let txt = document.getElementById('txt');
txt.value = localStorage.getItem('text');

setInterval(() => {
	localStorage.setItem('text', txt.value);
}, 200);