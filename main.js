let direction = "right"






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




let snake = [[9, 4], [9, 5], [9, 6]]
for (let s = 0; s < snake.length; s++) {

    let target_col = document.getElementById("r" + snake[s][0] + "c" + snake[s][1])
    target_col.style.backgroundColor = "black"

}




setInterval(() => {
    let tail = snake.shift()
    let tail_col = document.getElementById("r" + tail[0] + "c" + tail[1])
    tail_col.style.backgroundColor = "white"

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

    let head_col = document.getElementById("r" + new_head[0] + "c" + new_head[1])
    head_col.style.backgroundColor = "black"
}, 500);



document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        direction = "up"
    } else if (event.key === "ArrowDown") {
        direction = "down"
    } else if (event.key === "ArrowRight") {
        direction = "right"
    } else if (event.key === "ArrowLeft") {
        direction = "left"
    }
})