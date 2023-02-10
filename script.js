document.querySelector(".creation-button").onclick = showPass;
function randomInteger(max) {
  return Math.floor(Math.random() * max);
}

function createPass(passLength) {
  const CHAR = [
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
  ];
  let result = [];
  for (let i = 0; i < passLength; i++) {
    result.push(CHAR[randomInteger(CHAR.length)]);
  }
  let password = result.join("");
  console.log(password)
  return password;
}

function copyText(){
  let copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");

  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}
function outFunc() {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

function showPass() {
  let lng = prompt('Enter password length', 8);
  document.querySelector("input").value = ` ${createPass(Number(lng))}`;
}