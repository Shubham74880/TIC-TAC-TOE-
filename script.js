let cell = document.querySelectorAll('.cells');
cell = Array.from(cell);

let currentPlayer = "x";
let winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [2, 4, 6]
];
let isGameOver = false;

function checkForWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        let check = combination.every(idx => cell[idx].innerText.trim() == currentPlayer);
        if (check) {

            isGameOver = true;
            highlightsCells(combination); // Highlight the winning cells
            setTimeout(function () {
                alert(currentPlayer + " Wins!");

            }, 200); // Show an alert after 100 milliseconds
            return;
        }
    }

    // Check for a draw
    if (!cell.some(cells => cells.innerText.trim() === "")) {
        isGameOver = true;
        setTimeout(function () {
            alert("It's a draw!");
        }, 100); // Show an alert after 100 milliseconds
    }
}

function highlightsCells(combination) {
    combination.forEach(function (idx) {
        cell[idx].classList.add("highlight");
    });
}

cell.forEach(function (cells) {
    cells.addEventListener("click", function () {
        if (cells.innerText.trim() != "" || isGameOver) {return};
         // Check if the game is already over
         cells.style.color="white";

        cells.innerText = currentPlayer;
        checkForWinner();

        if (!isGameOver) {
            currentPlayer = currentPlayer == "x" ? "o" : "x";

        }
    });
});

// Add event listener for the restart button
document.querySelector(".restart").addEventListener("click", function () {
    // Clear the board
    cell.forEach(function (cells) {
        cells.innerText = "";
        cells.classList.remove("highlight");
    });

    // Reset game variables
    currentPlayer = "x";
    isGameOver = false;
});
