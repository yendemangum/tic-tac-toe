const Player = function (name, marker) {
    this.name = name;
    this.marker = marker;
}

function createPlayer(name, marker) {
    return { name, marker }
}

let array = new Array(9)

const gameboard = (function (marker, n) {
    array[n] = marker
    return { array }
})

const Game = function (player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
}

function createGame(player1, player2) {
    return { player1, player2 }
}

function declareWinner() {

    if (array[0] == array[1] && array[1] == array[2] && array[2] == player1.marker) {
        return "Game Over, " + player1.name + " wins!"

    }
    else if (array[0] == array[1] && array[1] == array[2] && array[2] == player2.marker) {
        return "Game Over, " + player2.name + " wins!"

    }
    else if (array[3] == array[4] && array[4] == array[5] && array[5] == player1.marker) {
        return "Game Over, " + player1.name + " wins!"

    }
    else if (array[3] == array[4] && array[4] == array[5] && array[5] == player2.marker) {
        return "Game Over, " + player2.name + " wins!"

    }
    if (array[6] == array[7] && array[7] == array[8] && array[8] == player1.marker) {
        return "Game Over, " + player1.name + " wins!"

    }
    else if (array[6] == array[7] && array[7] == array[8] && array[8] == player2.marker) {
        return "Game Over, " + player2.name + " wins!"

    }
    else if (array[0] == array[3] && array[3] == array[6] && array[6] == player1.marker) {
        return "Game Over, " + player1.name + " wins!"

    }
    else if (array[0] == array[3] && array[3] == array[6] && array[6] == player2.marker) {
        return "Game Over, " + player2.name + " wins!"
    }

    if (array[1] == array[4] && array[4] == array[7] && array[7] == player1.marker) {
        return "Game Over, " + player1.name + " wins!"

    }
    else if (array[1] == array[4] && array[4] == array[7] && array[7] == player2.marker) {
        return "Game Over, " + player2.name + " wins!"

    }
    else if (array[2] == array[5] && array[5] == array[8] && array[8] == player1.marker) {
        return "Game Over, " + player1.name + " wins!"

    }
    else if (array[2] == array[5] && array[5] == array[8] && array[8] == player2.marker) {
        return "Game Over, " + player2.name + " wins!"

    }
    if (array[0] == array[4] && array[4] == array[8] && array[8] == player1.marker) {
        return "Game Over, " + player1.name + " wins!"

    }
    else if (array[0] == array[4] && array[4] == array[8] && array[8] == player2.marker) {
        return "Game Over, " + player2.name + " wins!"

    }
    else if (array[2] == array[4] && array[4] == array[6] && array[6] == player1.marker) {
        return "Game Over, " + player1.name + " wins!"

    }
    else if (array[2] == array[4] && array[4] == array[6] && array[6] == player2.marker) {
        return "Game Over, " + player2.name + " wins!"
    }
}

const container = document.querySelector(".container")

const gameText = document.querySelector(".game-text")

container.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.className) {
        case "mark-box zero":
            if (array[0] === undefined) {
                array[0] = currentPlayer.marker;
                target.textContent = currentPlayer.marker;
                alternateTurn();
            }
            break;
        case "mark-box one":
            if (array[1] === undefined) {
                array[1] = currentPlayer.marker;
                target.textContent = currentPlayer.marker;
                alternateTurn();
            }
            break;
        case "mark-box two":
            if (array[2] === undefined) {
                array[2] = currentPlayer.marker;
                target.textContent = currentPlayer.marker;
                alternateTurn();
            }
            break
        case "mark-box three":
            if (array[3] === undefined) {
                array[3] = currentPlayer.marker;
                target.textContent = currentPlayer.marker;
                alternateTurn();
            }
            break
        case "mark-box four":
            if (array[4] === undefined) {
                array[4] = currentPlayer.marker;
                target.textContent = currentPlayer.marker;
                alternateTurn();
            }
            break
        case "mark-box five":
            if (array[5] === undefined) {
                array[5] = currentPlayer.marker;
                target.textContent = currentPlayer.marker;
                alternateTurn();
            }
            break
        case "mark-box six":
            if (array[6] === undefined) {
                array[6] = currentPlayer.marker;
                target.textContent = currentPlayer.marker;
                alternateTurn();
            }
            break
        case "mark-box seven":
            if (array[7] === undefined) {
                array[7] = currentPlayer.marker;
                target.textContent = currentPlayer.marker;
                alternateTurn();
            }
            break
        case "mark-box eight":
            if (array[8] === undefined) {
                array[8] = currentPlayer.marker;
                target.textContent = currentPlayer.marker;
                alternateTurn();
            }
            target.textContent = currentPlayer.marker
            break
    }
    gameText.textContent = declareWinner()
})

function alternateTurn() {
    if (currentPlayer == player1) {
        currentPlayer = player2
    }
    else if (currentPlayer == player2) {
        currentPlayer = player1
    }
}

resetButton = document.querySelector(".reset")
resetButton.addEventListener("click", () => {
    array = new Array(9);
    gameText.textContent = ""
    const boxes = document.querySelectorAll(".mark-box")
    boxes.forEach(node => {
        node.textContent = ""
    })

})

const player1 = createPlayer("Mark", "x");
const player2 = createPlayer("Er", "o");
const game1 = createGame(player1, player2);
let currentPlayer = player1;




/* 

012
345
678

*/