function getComputerChoice() {
	let max = 3;
	return Math.floor(Math.random() * max);
}

function defineUserInput() {
	let userInput = prompt("Choose: Rock, Paper, or Scissors!");
	if (userInput.toUpperCase() == "ROCK") {
		return 0;
	}
	else if (userInput.toUpperCase() == "PAPER") {
		return 1;
	}
	else if (userInput.toUpperCase() == "SCISSORS") {
		return 2;
	}
	else {
		alert("Please, choose correctly!");
		return defineUserInput();
	}
}

function conditions(player, computer) {
	if (player == computer) {
		return 2;
	}
	else if (player == 0 && computer == 1) {
		return 0;
	}
	else if (player == 0 && computer == 2) {
		return 1;
	}
	else if (player == 1 && computer == 0) {
		return 1;
	}
	else if (player == 1 && computer == 2) {
		return 0;
	}
	else if (player == 2 && computer == 0) {
		return 0;
	}
	else if (player == 2 && computer == 1) {
		return 1;
	}
}

console.log("Rock - 0; Paper - 1; Scissors - 2");

for (i = 0; i < 5; i++) {
	let computer = getComputerChoice();
	let player = defineUserInput();
	console.log(`Player - ${player}; Computer - ${computer}`);
	if (conditions(player, computer) == 2) {
		alert("Tie!");
		console.log("Tie!");
	}
	else if (conditions(player, computer) == 1) {
		alert("Win!");
		console.log("Win!");
	}
	else if (conditions(player, computer) == 0) {
		alert("Lose!");
		console.log("Lose!");
	}
}