// Task 7
let cvs = document.getElementById('canvas')
let ctx = cvs.getContext('2d');

let pika = new Image();
let grass = new Image();
let sky = new Image();
grass.src = './pixel-art-game-sprite-8-bit.jpg'
sky.src = './sky.jpg'
pika.src = './pika_img.png';

class DrawObject {
	constructor() {
		this.lastTime = 0;
		this.curTime = 0;
		this.size = 20;
		this.sizeEye = 4;
		this.mouth = 10;
		this.isPressed = false;
	}

	bg() {
  		ctx.drawImage(sky,0,0, 300, 220);
  		ctx.drawImage(grass,0,210);
  		if(this.size > 75) {
			this.full();
		}
	}

	full() {
		ctx.fillStyle = "white";
        ctx.font = "Bold 20pt Arial";
        ctx.fillText("I'am full", 100,350);
	}

	drawPlayerStay() {
		ctx.beginPath();
		ctx.fillStyle = "red";
    	ctx.arc(150,200,this.size,0,Math.PI*2,true); // Внешняя окружность
    	ctx.fill();
    	ctx.stroke();
    	ctx.closePath()
    	ctx.beginPath()
    	this.clickBtn2();
    	ctx.closePath();
    	ctx.beginPath();
    	ctx.moveTo(145,192);
    	ctx.fillStyle = "black";
    	ctx.arc(145,192,this.sizeEye,0,Math.PI*2,true);  // Левый глаз
    	ctx.fill();
    	ctx.closePath();
    	ctx.beginPath();
		ctx.fillStyle = "black";
    	ctx.moveTo(155,192);
    	ctx.arc(155,192,this.sizeEye,0,Math.PI*2,true);  // Правый глаз
		ctx.fill();
    	ctx.closePath();
	}

	clickBtn2() {
		if(this.isPressed) {
			this._sadness()
		} else {
			this._smile()
		}

		if(this.lastTime > this.curTime + 0.8) {
			this.isPressed = false;
		}
	}

	_smile() {
		ctx.moveTo(150,200);
    	ctx.fillStyle = "black";
    	ctx.arc(150, 200,this.mouth,0,Math.PI,false);  // рот (по часовой стрелке)
    	ctx.fill();
	}

	_sadness() {
		ctx.moveTo(150,210);
    	ctx.fillStyle = "black";
    	ctx.arc(150, 210,this.mouth,0,Math.PI,true);  // рот (по часовой стрелке)
    	ctx.fill();
	}

	update(time) {
		this.bg();
		this.drawPlayerStay();
		this.eatMax();
		if(this.lastTime == 0) {
            this.lastTime = time;
            return;
        }
        this.lastTime = time;
    }

	frame(time) {
		this.update(time);
        requestAnimationFrame(time => this.frame(time /1000));
    }

    run() {
        requestAnimationFrame(time => this.frame(time / 1000));
    }
}

class Size extends DrawObject {
	constructor() {
		super();
	}

	_checkSize() {
		if (this.size <= 85 && this.size >= 20) {
			return true
		} else {
			return false
		}
	}

	_checkMaxSize() {
		if (this.size > 21 && this.size < 95) {
			return true
		} else {
			return false
		}
	}

	eating() {
		while (this._checkSize()) {
			this.size += 8;
			break;
		} 
	}

	eatMax() {
		while (this._checkMaxSize()) {
			this.size -= 0.12;
			break;
		}
	}
}


let game = new Size();
game.run();


let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')

btn1.onclick = function() {
	game.eating();
}

btn2.onclick = function() {
	game.isPressed = true;
	game.curTime = game.lastTime;
	game.clickBtn2();
}