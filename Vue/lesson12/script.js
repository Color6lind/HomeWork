// Task 5
let app = new Vue({
	el: '#app',
	data: {
		isActive: true,
	},
	computed: {
		objColor: function() {
			return {
				valid: this.isActive,
				error: !this.isActive
			}
		}
	}
});