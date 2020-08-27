function snake(){
	this.x = 0;
	this.y = 0;
	this.xSpeed = scale * 1;
	this.ySpeed = 0;
	this.total = 0;
	this.tailx = [];
	this.taily = [];
	
	this.draw = function(){
		ctx.fillStyle = "#00FF00";
		ctx.fillRect(this.x, this.y, scale, scale);
		
		ctx.fillStyle = "#FFFFFF";
		for(let i = 0; i < this.tailx.length; i++){
			ctx.fillRect(this.tailx[i], this.taily[i], scale, scale);
		}
	}
	
	this.update = function(){
		for(let i = 0; i < this.tailx.length; i++){
			this.tailx[i] = this.tailx[i+1];
			this.taily[i] = this.taily[i+1];
		}
		
		this.tailx[this.total - 1] = this.x;
		this.taily[this.total - 1] = this.y;
		
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		if(this.x > canvas.width){
			this.x = 0;
		}
		if(this.y > canvas.height){
			this.y = 0;
		}
		if(this.x < 0){
			this.x = canvas.width;
		}
		if(this.y < 0){
			this.y = canvas.height;
		}
	}
	
	this.changeDirection = function(direction){
		switch(direction){
			case 'Up':
				this.xSpeed = 0;
				this.ySpeed = scale * -1;
				break;
			case 'Down':
				this.xSpeed = 0;
				this.ySpeed = scale * 1;
				break;
			case 'Right':
				this.ySpeed = 0;
				this.xSpeed = scale * 1
				break;
			case 'Left':
				this.ySpeed = 0;
				this.xSpeed = scale * -1;
				break;
			default:
				break;
		}
	}
	
	this.eat = function(fruit){
		//console.log(fruit);
		if(this.x === fruit.x && this.y === fruit.y){
			this.total++;
			return true;
		}
		return false;
	}
	
	this.die = function(){
		for(let i = 0; i < this.tailx.length; i++){
			if(this.x === this.tailx[i] && this.y === this.taily[i]){
				this.total = 0;
			}
		}
	}
	
}