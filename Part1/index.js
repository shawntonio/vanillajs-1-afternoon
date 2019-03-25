
const player = document.getElementById("player");
const winnerArr = []
let won = false;

function play(num){
	if(won){
		return 
	}
	const squareNum = document.getElementById(num)
	if(!squareNum.innerText){
		
		squareNum.innerText = player.innerText;
		winnerArr[num] = player.innerText;

		//test for winner
		
		if(winnerArr[0] !== undefined){

			if(winnerArr[0] === winnerArr[1] && winnerArr[0] === winnerArr[2]){
				alert(`Player ${player.innerText}. You are the winner!`)
				won = true
			}
			if(winnerArr[0] === winnerArr[3] && winnerArr[0] === winnerArr[6]){
				alert(`Player ${player.innerText}. You are the winner!`)
				won = true
			}
			if(winnerArr[0] === winnerArr[4] && winnerArr[0] === winnerArr[8]){
				alert(`Player ${player.innerText}. You are the winner!`)
				won = true
			}
		}

		if(winnerArr[4] !== undefined){
			if(winnerArr[4] === winnerArr[3] && winnerArr[4] === winnerArr[5]){
				alert(`Player ${player.innerText}. You are the winner!`)
				won = true
			}
			if(winnerArr[4] === winnerArr[1] && winnerArr[4] === winnerArr[7]){
				alert(`Player ${player.innerText}. You are the winner!`)
				won = true
			}
			if(winnerArr[4] === winnerArr[6] && winnerArr[4] === winnerArr[2]){
				alert(`Player ${player.innerText}. You are the winner!`)
				won = true
			}
		}

		if(winnerArr[8] !== undefined){
			if(winnerArr[8] === winnerArr[6] && winnerArr[8] === winnerArr[7]){
				alert(`Player ${player.innerText}. You are the winner!`)
				won = true
			}
			if(winnerArr[8] === winnerArr[2] && winnerArr[8] === winnerArr[5]){
				alert(`Player ${player.innerText}. You are the winner!`)
				won = true
			}
		}

		

		let counter = 0;
		for (let i = 0; i < 9; i++){
			if(won){
				return 
			}
			// console.log(winnerArr[i])
			
			if (winnerArr[i] !== undefined) {
				counter++;
			}
			if (counter === 9){
				alert("CAT's Game")
			}
		}

		//set players turn
		if (player.innerText === "X"){
			player.innerText = "O";
		} else {
			player.innerText = "X";
		}
	}

}

function reset(){
	location.reload(true)
}

