
let app = new Vue({
	el: '#app',
	data: {
		isActive: false,
		color1: '',
	},
	methods: {
		changeColor: function() {
			this.color1 = !this.isActive ? 'red' : 'black';
		}
	}
});