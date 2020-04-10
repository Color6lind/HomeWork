// Task 7

let app = new Vue({
	el: '#app',
	data: {
		items: [0, 6, 3, 4, 25, -1, 11, 5],
	},
	methods: {
		sort: function() {
			this.items = this.items.filter((elem) => {
				if (elem > 0 && elem < 10) {
					return true;
				} else {
					return false;
				}
 			});
		},
	},
});