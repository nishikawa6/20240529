import "./styles.css";

const canvas = document.querySelector("#draw-area");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", (event) => {
  const rect = event.target.getBoundingClientRect();
  let x = event.x - rect.left;
  let y = event.y - rect.top;
  draw(x, y);
});
canvas.addEventListener("touchmove", (event) => {
  const rect = event.target.getBoundingClientRect();
  let x = event.x - rect.left;
  let y = event.y - rect.top;
  draw(x, y);
});

canvas.addEventListener("mousedown", (event) => {
  context.beginPath();
  isDrag = true;
});

canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});
canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

let isDrag = false;
function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.strokeStyle = "blue";
  context.lineWidth = 5;
  context.lineTo(x, y);
  context.stroke();
}
