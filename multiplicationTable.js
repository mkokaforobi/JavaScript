const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));

//let userInput = number;


while(Number.isNaN(number)){
	number = Number(prompt("Enter a valid number: "));
}		

	
for(let count = 1; count <= 12; count++){

	let multiplication = number * count
	console.log( number + "x" + count + "=", multiplication); 
	

}





