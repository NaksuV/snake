let direction = "right";
let snake = [
  [1, 1],
  [1, 2],
  [1, 3],
];
let speed = 500;
let board_width = 30;
let board_height = 15;
let mouse_col;
let mouse_generation_delay = 2000;
let score = 0;

creat_board();
initial_snake_render();
setInterval(move_snake, speed);
create_mouse();
document.addEventListener("keydown", on_keydown);

function creat_board() {
  for (let r = 0; r < board_height; r++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let c = 0; c < board_width; c++) {
      let col = document.createElement("div");
      col.className = "col";
      col.id = "r" + r + "c" + c;
      row.append(col);
    }

    document.getElementById("board").append(row);
  }
}
function initial_snake_render() {
  for (let s = 0; s < snake.length; s++) {
    let target_col = document.getElementById(
      "r" + snake[s][0] + "c" + snake[s][1],
    );
    target_col.style.backgroundColor = "black";
  }
}
function paint_column(col, color) {
  let col_element = document.getElementById("r" + col[0] + "c" + col[1]);
  col_element.style.backgroundColor = color;
}
function move_snake() {
  let head = snake[snake.length - 1];
  let new_head;
  if (direction === "right") {
    if (head[1] === board_width - 1) {
      new_head = [head[0], 0];
    } else {
      new_head = [head[0], head[1] + 1];
    }
  } else if (direction === "left") {
    if (head[1] === 0) {
      new_head = [head[0], board_width - 1];
    } else {
      new_head = [head[0], head[1] - 1];
    }
  } else if (direction === "up") {
    if (head[0] === 0) {
      new_head = [board_height - 1, head[1]];
    } else {
      new_head = [head[0] - 1, head[1]];
    }
  } else if (direction === "down") {
    if (head[0] === board_height - 1) {
      new_head = [0, head[1]];
    } else {
      new_head = [head[0] + 1, head[1]];
    }
  }

  snake.push(new_head);
  paint_column(new_head, "black");

  if (
    mouse_col &&
    mouse_col[0] === new_head[0] &&
    mouse_col[1] === new_head[1]
  ) {
    mouse_col = null;
    setTimeout(create_mouse, mouse_generation_delay);
    score = score + 1;
    document.getElementById("score").innerText =
      "score: " + score.toString().padStart(3, "0");
  } else {
    let tail = snake.shift();
    paint_column(tail, "white");
  }
}
function on_keydown(event) {
  if (event.key === "ArrowUp") {
    direction = "up";
  } else if (event.key === "ArrowDown") {
    direction = "down";
  } else if (event.key === "ArrowRight") {
    direction = "right";
  } else if (event.key === "ArrowLeft") {
    direction = "left";
  }
}

function create_mouse() {
  let random_width = Math.floor(Math.random() * (board_width - 1));
  let random_height = Math.floor(Math.random() * (board_height - 1));

  mouse_col = [random_height, random_width];

  for (i = 0; i < snake.length; i++) {
    if (snake[i][0] === mouse_col[0] && snake[i][1] === mouse_col[1]) {
      create_mouse();
      return;
    }
  }

  paint_column(mouse_col, "gray");
}
