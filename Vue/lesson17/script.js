
// Task 1
let app1 = new Vue({
	el: '#app1',
	data: {
		message: '',
	},
	methods: {
		addText: function() {
			this.message = 'Hello'
		}
	}
});

// Task 3
let app2 = new Vue({
	el: '#app2',
	data: {
		text: "Some text too"
	},
	methods: {
		change: function() {
			this.text = 'I have changed a little'
		}
	}
});

// Task 4
let app3 = new Vue({
	el: '#app3',
	data: {
		msg: '',
	},
	methods: {
		addMsg: function() {
			this.msg = '<span style="color: red;">Text</span>'
		}
	}
});