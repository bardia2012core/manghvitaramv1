
let p1Score = 0;
let p2Score = 0;
const scoreLimit = 3;
let p1 = "", p2 = "";

window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("game").classList.remove("hidden");
  }, 1000);
};

function nextPhase() {
  p1 = document.getElementById("player1Input").value.trim();
  if (!p1) return alert("بازیکن ۱ باید چیزی بنویسد!");
  document.getElementById("player1Phase").classList.add("hidden");
  document.getElementById("player2Phase").classList.remove("hidden");
}

function showResponses() {
  p2 = document.getElementById("player2Input").value.trim();
  if (!p2) return alert("بازیکن ۲ باید چیزی بنویسد!");
  document.getElementById("player2Phase").classList.add("hidden");

  document.getElementById("p1Resp").innerText = p1;
  document.getElementById("p2Resp").innerText = p2;
  document.getElementById("responses").classList.remove("hidden");
  document.getElementById("voting").classList.remove("hidden");
}

function vote(winner) {
  if (winner === "p1") p1Score++;
  else p2Score++;

  document.getElementById("p1Score").innerText = p1Score;
  document.getElementById("p2Score").innerText = p2Score;
  document.getElementById("voting").classList.add("hidden");

  if (p1Score >= scoreLimit) declareWinner("بازیکن ۱");
  else if (p2Score >= scoreLimit) declareWinner("بازیکن ۲");
  else resetRound();
}

function resetRound() {
  document.getElementById("player1Input").value = "";
  document.getElementById("player2Input").value = "";
  document.getElementById("p1Resp").innerText = "";
  document.getElementById("p2Resp").innerText = "";
  document.getElementById("responses").classList.add("hidden");
  document.getElementById("player1Phase").classList.remove("hidden");
}

function declareWinner(name) {
  document.getElementById("winnerName").innerText = name;
  document.getElementById("winner").classList.remove("hidden");
}
