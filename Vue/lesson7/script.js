// Task 13
let app = new Vue({
	el: '#app',
	data: {
		age: 19,
	},
});

// Task 14
let app2 = new Vue({
	el: '#app2',
	data: {
		show: true,
	},
	methods: {
		changeElem: function () {
			this.show = !this.show;
		},
	}
});