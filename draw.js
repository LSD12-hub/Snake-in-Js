const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
	snake = new snake();
	fruit = new fruit();
	fruit.pickLocation();
	
	window.setInterval(() => {
		console.log("Running");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		fruit.draw();
		snake.update();
		snake.draw();
		
		if(snake.eat(fruit)){
			console.log('EATING');
			fruit.pickLocation();
		}
		snake.die();
	}, 50);
}());

window.addEventListener('keydown',((evt) => {
	const direction = evt.key.replace('Arrow','');
	console.log(direction);
	snake.changeDirection(direction);
}))