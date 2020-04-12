// Task 3
let app = new Vue({
	el: '#app',
	data: {
		text: '',
	},
	methods: {
		addTextLeft: function() {
			this.text = "left"
		},
		addTextRight: function() {
			this.text = "right"
		},
		addTextMiddle: function() {
			this.text = "middle"
		}
	}
});