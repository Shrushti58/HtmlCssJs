window.onload = function () {
    const bt = document.querySelectorAll(".btn");
    const re = document.querySelector(".reset");
    const h3 = document.getElementById("h3");
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let turnO = true;

    const checkWin = () => {
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            const pos1 = bt[a].innerText;
            const pos2 = bt[b].innerText;
            const pos3 = bt[c].innerText;

            if (pos1 && pos1 === pos2 && pos2 === pos3) {
                h3.innerHTML = `Congratulation!..Winner is... ${pos1}`;
                disableAllButtons();
                return true;
            }
        }
        return false;
    };

    const disableAllButtons = () => {
        bt.forEach(button => (button.disabled = true));
    };

    const resetGame = () => {
        bt.forEach(button => {
            button.innerText = "";
            button.disabled = false;
        });
        h3.innerHTML = "Welcome...Enjoy the Game!!";
        turnO = true;
    };

    bt.forEach(button => {
        button.addEventListener("click", () => {
            button.innerText = turnO ? "O" : "X";
            button.disabled = true;
            turnO = !turnO;

            if (!checkWin()) {
                if ([...bt].every(b => b.innerText !== "")) {
                    h3.innerHTML = "It's a draw!";
                }
            }
        });
    });

    re.addEventListener("click", resetGame);
};
