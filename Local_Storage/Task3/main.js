
let btn = document.getElementById('btn');
let name = document.getElementById('name');
let em = document.getElementById('em');
let area = document.getElementById('area');

let form = {
	name: "",
	email: "",
	text: ""
}

name.addEventListener('blur', ()=> {
	form.name = name.value;
	localStorage.setItem("ObjectForm", JSON.stringify(form))
	let raw = localStorage.getItem("ObjectForm")
	obj = JSON.parse(raw);
});

em.addEventListener('blur', ()=> {
	form.email = em.value;
	localStorage.setItem("ObjectForm", JSON.stringify(form))
	let raw = localStorage.getItem("ObjectForm")
	obj = JSON.parse(raw);
});

area.addEventListener('blur', ()=> {
	form.text = area.value;
	localStorage.setItem("ObjectForm", JSON.stringify(form))
	let raw = localStorage.getItem("ObjectForm")
	obj = JSON.parse(raw);
});

window.onload = function() {
	let last = localStorage.getItem("ObjectForm");
	obj = JSON.parse(last);
	console.log(obj)
	name.value = obj.anme
	em.value = obj.email
	area.value = obj.text
}

// localStorage.clear()