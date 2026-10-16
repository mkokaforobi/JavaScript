/*for(let count = 1; count <= 2; count++){

	console.log("# # # #")
	console.log(" # # # #")
	console.log("# # # #")
	console.log(" # # # #")
	
}

*/

const prompt = require("prompt-sync")();

let chessBoard = Number(prompt("Enter a number between 1 and 8: "));

//chessboard 

for(let rowCount = 1; rowCount <= chessBoard; rowCount++){
	
		if(rowCount % 2 == 0 ){
		
		
			console.log("# # # #");
		 } 
		else {
			console.log(" # # # #");
		}	 
		
	}




	
