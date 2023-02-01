const body = document.querySelector("body");
const btnDiv = document.querySelector(".btn-div");
const textTitel = document.querySelector(".text-titel");
const copyright = document.querySelector(".copyright");

const colors = [
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
];

function getColors() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const newColor = Math.floor(Math.random() * colors.length);
    color += colors[newColor];
  }
  return color;
}
function setColors() {
  const color1 = getColors();
  const color2 = getColors();
  const rendomDeg = Math.floor(Math.random() * 360);
   const bodyBg=`linear-gradient(
    ${rendomDeg}deg,
    ${color1},
    ${color2}
  )`
  textTitel.textContent=bodyBg
  btnDiv.style.background=bodyBg
  body.style.background=bodyBg
}
setColors()
btnDiv.addEventListener("click", setColors);