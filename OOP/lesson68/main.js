// Task 7
let cvs = document.getElementById('canvas')
let ctx = cvs.getContext('2d');

let grass = new Image();
let sky = new Image();
grass.src = './grass.jpg';
sky.src = './sky.jpg';

class DrawObject{
	constructor() {
		this.lastTime = 0;
		this.size = 20;
		this.sizeEye = 4;
		this.mouth = 10;
		this.posArcX = 150;
		this.posEyeL = 145;
		this.posEyeR = 155;
	}

	bg() {
  		ctx.drawImage(sky,0,0, 300, 220);
  		ctx.drawImage(grass,0,210);
  		if(this.size > 75) {
			this.textFull();
		}
	}

	textFull() {
		ctx.fillStyle = "black";
        ctx.font = "Bold 26pt Arial";
        ctx.fillText("I'am full", 85,350);
	}

	drawPlayerStay() {
		ctx.beginPath();
		ctx.fillStyle = "red";
    	ctx.arc(this.posArcX,200,this.size,0,Math.PI*2,true); // Внешняя окружность
    	ctx.fill();
    	ctx.stroke();
    	ctx.closePath()
    	ctx.beginPath()
    	this.clickBtn2();
    	ctx.closePath();
    	ctx.beginPath();
    	ctx.moveTo(this.posEyeL,192);
    	ctx.fillStyle = "black";
    	ctx.arc(this.posEyeL,192,this.sizeEye,0,Math.PI*2,true);
    	ctx.fill();
    	ctx.closePath();
    	ctx.beginPath();
		ctx.fillStyle = "black";
    	ctx.moveTo(this.posEyeR,192);
    	ctx.arc(this.posEyeR,192,this.sizeEye,0,Math.PI*2,true);
		ctx.fill();
    	ctx.closePath();
	}	

	smile() {
		ctx.moveTo(this.posArcX,200);
    	ctx.fillStyle = "black";
    	ctx.arc(this.posArcX, 200,this.mouth,0,Math.PI,false);
    	ctx.fill();
	}

	sadness() {
		ctx.moveTo(this.posArcX,210);
    	ctx.fillStyle = "black";
    	ctx.arc(this.posArcX, 210,this.mouth,0,Math.PI,true);
    	ctx.fill();
	}

	render() {
		this.bg();
		this.drawPlayerStay();
		this.eatMax();
		this.move();
		this.moveBack();
	}

	update(time) {
		this.render();
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

class CheckKick extends DrawObject{
	constructor() {
		super();
		this.curTime = 0;
		this.isPressed = false;
	}

	clickBtn2() {
		if(this.isPressed) {
			this.sadness()
		} else {
			this.smile()
		}

		if(this.lastTime > this.curTime + 0.8) {
			this.isPressed = false;
		}
	}
}

class Size extends CheckKick {
	constructor() {
		super();
	}

	_checkSize(size) {
		if (size <= 85 && size >= 20) {
			return true
		} else {
			return false
		}
	}

	_checkMaxSize(size) {
		if (size > 21 && size < 95) {
			return true
		} else {
			return false
		}
	}

	eating() {
		while (this._checkSize(this.size)) {
			this.size += 8;
			break;
		} 
	}

	eatMax() {
		while (this._checkMaxSize(this.size)) {
			this.size -= 0.12;
			break;
		}
	}
}

class Position extends Size {
	constructor() {
		super();
		this.moveRight = false
		this.moveLeft = false
	}

	_checkPosX(posArcX) {
		if(Math.abs(posArcX) <= 330 && this.moveRight == true) {
			return true
		} else {
			return false
		}
	}

	_checkBackPosX(posArcX) {
		if(posArcX != 150 ) {
			return true
		} else {
			return false
		}
	}

	move() {
		if(this._checkPosX(this.posArcX)) {
			this.posArcX += 1;
			this.posEyeL += 1;
			this.posEyeR += 1;
		}
	}

	moveBack() {
		if (this._checkBackPosX(this.posArcX) && this.moveLeft == true) {
			this.posArcX -= 1;
			this.posEyeL -= 1;
			this.posEyeR -= 1;
		}
		if (this.posArcX == 150) {
			btn3.disabled = false;
		}
	}
}


let game = new Position();
game.run();

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

btn1.onclick = function() {
	game.eating();
}

btn2.onclick = function() {
	game.isPressed = true;
	game.curTime = game.lastTime;
	game.clickBtn2();
}

btn3.onclick = function() {
	game.moveRight = true;
	game.moveLeft = false;
	
	setTimeout(() => {
		game.moveRight = !game.moveRight;
		game.moveLeft = !game.moveLeft;
	}, 4000);

	if(game.moveLeft == true || game.moveRight == true) {
		btn3.disabled = true;
	} 
}
