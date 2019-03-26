
const card = document.getElementById("cardID");
const style = document.getElementById("cardColor");

function setCard() {
	// const suit = card.value;
	const cardSlot = document.getElementById(card.value);

	cardSlot.style.color = style.value;
}

function reset(){
	location.reload();
}