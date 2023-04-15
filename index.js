let homePoints = 0;

let homePointsEl = document.getElementById("home-points");

homePointsEl.textContent = 0;

let guestPoints = 0;

let guestPointsEl = document.getElementById("guest-points");

guestPointsEl.textContent = 0;

function homeAdd1() {
	homePoints++;
	homePointsEl.textContent = homePoints;
}

function homeAdd2() {
	homePoints = homePoints + 2;
	homePointsEl.textContent = homePoints;
}

function homeAdd3() {
	homePoints = homePoints + 3;
	homePointsEl.textContent = homePoints;
}

function guestAdd1() {
	guestPoints++;
	guestPointsEl.textContent = guestPoints;
}

function guestAdd2() {
	guestPoints = guestPoints + 2;
	guestPointsEl.textContent = guestPoints;
}

function guestAdd3() {
	guestPoints = guestPoints + 3;
	guestPointsEl.textContent = guestPoints;
}

function newGame() {
	window.location.reload();
}
