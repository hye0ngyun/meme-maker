const canvas = document.querySelector("canvas");

// context: 붓
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

const colors = [
  "#ffcccc",
  "#ff9f1a",
  "#7d5fff",
  "#32ff7e",
  "#c56cf0",
  "#3d3d3d",
];
let offsetX = 0;
let offsetY = 0;
ctx.lineWidth = 2;
canvas.addEventListener("mousemove", (e) => {
  const color = colors[Math.round(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(offsetX, offsetY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});
canvas.addEventListener("click", (e) => {
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});
