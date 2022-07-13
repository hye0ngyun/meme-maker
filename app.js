const canvas = document.querySelector("canvas");

// context: 붓
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.rect(50, 50, 100, 100); // 선 만들기
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath(); // 새로운 경로 생성, beginPath()를 실행하면 이전 경로와 단절된다.
ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
