// Task 2
let app1 = new Vue({
	el: '#app1',
	data: {
		text: '',
		items: [],
	},
	methods: {
		getArr: function() {
			this.items = this.text.split(' ');
		},
	},
});

// Task 7
let app2 = new Vue({
	el: '#app2',
	data: {
		arr: []
	},
	methods: {

	},
});

// Task 8
let app3 = new Vue({
	el: '#app3',
	data: {
		type: '',
	},
	methods: {

	},
});

// Task 11
let app4 = new Vue({
	el: '#app4',
	data: {
		selected: 'HTML',
		options: ['HTML', 'JS', 'PHP', 'SQL'],
	},
	methods: {

	},
});