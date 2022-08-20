let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabet = document.getElementById("alphabet");
const passwordBoard = [
  "A bad workman always blames his tools",
  "A bird in hand is worth two in bush",
  "An apple a day keeps the doctor away",
  "Better to wear out than to rust out",
  "Don`t judge a book by its cover",
  "Good tjings come to those who wait",
  "If you can`t beat them, join them",
  "It`s no use crying over spilt milk",
];

const passwordDiv = document.querySelector("#board");
const imgDiv = document.querySelector("#hangman-dude");
const random = Math.floor(Math.random() * passwordBoard.length);
const password = passwordBoard[random];
const yes = new Audio("yes.wav");
const no = new Audio("no.wav");
const win = new Audio("nice-work.wav");
const lose = new Audio("oh-my-god-1.wav");
let fail = 1;
let countDown;

const start = function () {
  letters.split("").forEach((letter) => {
    const html = `<div class = "letter">${letter}>/div>`;
    alphabet.insertAdjacentHTML("beforeend", html);
  });
  showPassword();
  showHangman(fail);
};
window.onload = start;

const passwordDashed = password.split("").map((letter) => {
  if (letter === "") return "";
  else if (letter === ",") return ",";
  else if (letter === "`") return "`";
  else return "_";
});

const showPassword = function () {
  passwordDiv.innerHTML = passwordDashed.join("");
};
function showHangman(nr) {
  imgDiv.innerHTML = `<img src="img/${nr}.svg" alt="" />`;
}

const checkForLetter = function (e) {
  if (e.target.classList.contains("letter")) {
    if (password.toUpperCase().split("").includes(e.target.textContent)) {
      yes.play();
      password
        .toUpperCase()
        .split("")
        .forEach((letter, i, arr) => {
          if (letter === e.target.textContent) {
            passwordDashed[i] = letter;
            showPassword();
          }
        });
    }
  }
};
