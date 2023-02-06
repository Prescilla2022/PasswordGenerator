const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordOne = document.getElementById("password-One");
let passwordTwo = document.getElementById("password-Two");
let passwordLength = document.getElementById("password-length");
let copyPwd = document.getElementById("password-One");

function randomNumberGenerator() {
  let randomNumber = Math.floor(Math.random() * characters.length);
  let randomCharacter = characters[randomNumber];
  return randomCharacter;
}

function generatePassword() {
  if (passwordOne.textContent === "" && passwordTwo.textContent === "") {
    for (let i = 1; i <= passwordLength.value; i++) {
      passwordOne.textContent += randomNumberGenerator();
      passwordTwo.textContent += randomNumberGenerator();
    }
  }
}

function clearPassword() {
  passwordOne.textContent = "";
  passwordTwo.textContent = "";
}

function copyPasswordOne() {
  navigator.clipboard.writeText(passwordOne.textContent);
  alert("Copied the text: " + passwordOne.textContent);
}

function copyPasswordTwo() {
  navigator.clipboard.writeText(passwordTwo.textContent);
  alert("Copied the text: " + passwordTwo.textContent);
}
