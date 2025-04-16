let direction = "right"
let snake = [[9, 4], [9, 5], [9, 6]]
let speed = 500
let board_width = 30
let board_height = 15

creat_board()
initial_snake_render()
setInterval(move_snake, speed);
document.addEventListener("keydown", on_keydown)

function creat_board() {
    for (let r = 0; r < board_height; r++) {
        let row = document.createElement("div")
        row.className = "row"

        for (let c = 0; c < board_width; c++) {
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
        if (head[1] === board_width - 1) {
            new_head = [head[0], 0]
        } else {
            new_head = [head[0], head[1] + 1]
        }
    }
    else if (direction === "left") {
        if (head[1] === 0) {
            new_head = [head[0], board_width - 1]
        } else {
            new_head = [head[0], head[1] - 1]
        }
    }
    else if (direction === "up") {
        if (head[0] === 0) {
            new_head = [board_height - 1, head[1]]    
        }else{
        new_head = [head[0] - 1, head[1]]
        }
    }
    else if (direction === "down") {
        if (head [0] === board_height - 1) {
            new_head = [0 , head[1]]
        }else{
        new_head = [head[0] + 1, head[1]]
        }
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