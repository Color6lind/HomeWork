// Task 4

let app = new Vue({
	el: '#app',
	data: {
		items: [1, 2, 3, 4, 5],
	},
	methods: {
		sqrt: function(index) {
			let num = Math.pow(this.items[index], 2);
			this.items.splice(index, 1, num);
		},
	},
});