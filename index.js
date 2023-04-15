let homePoints = 0;
console.log(homePoints);

let homePointsEl = document.getElementById("home-points");
console.log(homePointsEl);

homePointsEl.textContent = 0;
console.log(homePointsEl);

let guestPoints = 0;
console.log(guestPoints);

let guestPointsEl = document.getElementById("guest-points");
console.log(guestPointsEl);

guestPointsEl.textContent = 0;
console.log(guestPointsEl);

function homeAdd1() {
	console.log("Home +1 button clicked.");
	homePoints++;
	console.log(homePoints);
	homePointsEl.textContent = homePoints;
	console.log(homePointsEl);
}

function homeAdd2() {
	console.log("Home +2 button clicked.");
	homePoints = homePoints + 2;
	console.log(homePoints);
	homePointsEl.textContent = homePoints;
	console.log(homePointsEl);
}

function homeAdd3() {
	console.log("Home +3 button clicked.");
	homePoints = homePoints + 3;
	console.log(homePoints);
	homePointsEl.textContent = homePoints;
	console.log(homePointsEl);
}

function guestAdd1() {
	console.log("Guest +1 button clicked.");
	guestPoints++;
	console.log(guestPoints);
	guestPointsEl.textContent = guestPoints;
	console.log(guestPointsEl);
}

function guestAdd2() {
	console.log("Guest +2 button clicked.");
	guestPoints = guestPoints + 2;
	console.log(guestPoints);
	guestPointsEl.textContent = guestPoints;
	console.log(guestPointsEl);
}

function guestAdd3() {
	console.log("Guest +3 button clicked.");
	guestPoints = guestPoints + 3;
	console.log(guestPoints);
	guestPointsEl.textContent = guestPoints;
	console.log(guestPointsEl);
}

function newGame() {
	window.location.reload();
}
