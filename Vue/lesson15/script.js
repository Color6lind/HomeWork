
let app = new Vue({
	el: '#app',
	data: {
		curentTime: new Date(),
	},
	filters: {
		parseTime: function(el) {
			year = el.getFullYear();
			day = el.getDate();
			month = el.getMonth() + 1;
			return day + '.' + month + '.' + year;
		},
		reverseTime: function(el) {
			return el.split('.').reverse().join('.');
		}
	}
});