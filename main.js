let direction = "down"
let snake = [[9, 4], [9, 5], [9, 6]]
let speed = 300

creat_board()
initial_snake_render()
setInterval(move_snake, speed);
document.addEventListener("keydown",on_keydown)

function creat_board() {
    for (let r = 0; r < 15; r++) {
        let row = document.createElement("div")
        row.className = "row"

        for (let c = 0; c < 30; c++) {
            let col = document.createElement("div")
            col.className = "col"
            col.id = "r" + r + "c" + c
            row.append(col)
        }

        document.getElementById("board").append(row)
    }
}
function initial_snake_render() {
    for (let s = 0; s < snake.length; s++) {
        let target_col = document.getElementById("r" + snake[s][0] + "c" + snake[s][1])
        target_col.style.backgroundColor = "black"
    }
}
function paint_column(col, color) {
    let col_element = document.getElementById("r" + col[0] + "c" + col[1])
    col_element.style.backgroundColor = color
}
function move_snake() {
    let tail = snake.shift()
    paint_column(tail, "white")

    let head = snake[snake.length - 1]
    let new_head
    if (direction === "right") {
        new_head = [head[0], head[1] + 1]
    }
    else if (direction === "left") {
        new_head = [head[0], head[1] - 1]
    }
    else if (direction === "up") {
        new_head = [head[0] - 1, head[1]]
    }
    else if (direction === "down") {
        new_head = [head[0] + 1, head[1]]
    }

    snake.push(new_head)
    paint_column(new_head, "black")
}
function on_keydown(event) {
    if (event.key === "ArrowUp") {
        direction = "up"
    } else if (event.key === "ArrowDown") {
        direction = "down"
    } else if (event.key === "ArrowRight") {
        direction = "right"
    } else if (event.key === "ArrowLeft") {
        direction = "left"
    }
}