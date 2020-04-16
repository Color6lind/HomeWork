// Task 3
class Rectangle {
	constructor(width, height) {
		this.elem = document.createElement('div');

		this.elem.style.width = width + 'px';
		this.elem.style.height = height + 'px';
		this.elem.style.border = '1px solid red';
		this.elem.style.margin = '10px';

		document.body.appendChild(this.elem);
	}	

	getWidth(width) {
		return parseInt(this.elem.style.width);
	}

	setWidth(width) {
		this.elem.style.width = width + 'px';
	}

	getHeight(height) {
		return parseInt(this.elem.style.height);
	}
	
	setHeight(height) {
		this.elem.style.height = height + 'px';
	}
}

let rect = new Rectangle();
rect.setWidth(300);
rect.setHeight(200);
console.log('Ширина: '+rect.getWidth()+' '+'Высота: '+rect.getHeight())
let rect2 = new Rectangle();
rect2.setWidth(200);
rect2.setHeight(100);
console.log('Ширина: '+rect2.getWidth()+' '+'Высота: '+rect2.getHeight())