var p1_dice = Math.floor(Math.random() * 6) + 1;

if (p1_dice === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (p1_dice === 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (p1_dice === 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (p1_dice === 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (p1_dice === 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else if (p1_dice === 6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

var p2_dice = Math.floor(Math.random() * 6) + 1;

if (p2_dice === 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (p2_dice === 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (p2_dice === 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (p2_dice === 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (p2_dice === 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else if (p2_dice === 6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if (p1_dice === p2_dice) {
  document.querySelector("h1").innerText = ("It's a Draw!");
} else if (p1_dice > p2_dice) {
  document.querySelector("h1").innerText = ("Player One Wins!");
}  else {
 document.querySelector("h1").innerText = ("Player Two Wins!");
}
