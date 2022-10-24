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

let playercounter = 0;
let computercounter = 0;

do {
	let computer = getComputerChoice();
	let player = defineUserInput();
	console.log(`Player - ${player}; Computer - ${computer}`);
	if (conditions(player, computer) == 2) {
		alert(`Tie!\nYour points - ${playercounter}\nComputer points - ${computercounter}`);
		console.log("Tie!");
	}
	else if (conditions(player, computer) == 1) {
		playercounter += 1;
		alert(`Win!\nYour points - ${playercounter}\nComputer points - ${computercounter}`)
		console.log("Win!");
	}
	else if (conditions(player, computer) == 0) {
		computercounter += 1;
		alert(`Lose!\nYour points - ${playercounter}\nComputer points - ${computercounter}`);
		console.log("Lose!");
	}
} while (playercounter < 3 && computercounter < 3)

playercounter == 3 ? alert("Congrats!!! You won whole battle.") : 
	alert("You lost yout battle! Try your luck next time.")