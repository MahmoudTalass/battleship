import dot from "./../../icons/circle-small.png";

function renderGameScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const gameScreenContainer = document.createElement("div");
   gameScreenContainer.classList.add("game-screen-container");
   gameScreenContainer.id = "game-screen-container";

   const playerBoardContainer = document.createElement("div");
   playerBoardContainer.classList.add(
      "player-board-container",
      "board-container"
   );
   playerBoardContainer.id = "player-board-container";

   const playerBoard = document.createElement("div");
   playerBoard.classList.add("player-board", "board");
   playerBoard.id = "player-board";

   const playerNameTag = document.createElement("p");
   playerNameTag.classList.add("player-nametag");
   playerNameTag.id = "player-nametag";
   playerNameTag.textContent = "You";

   playerBoardContainer.appendChild(playerNameTag);
   playerBoardContainer.appendChild(playerBoard);

   const enemyBoardContainer = document.createElement("div");
   enemyBoardContainer.classList.add(
      "enemy-board-container",
      "board-container"
   );
   enemyBoardContainer.id = "enemy-board-container";

   const enemyBoard = document.createElement("div");
   enemyBoard.classList.add("enemy-board", "board");
   enemyBoard.id = "enemy-board";

   const enemyNameTag = document.createElement("p");
   enemyNameTag.classList.add("enemy-nametag");
   enemyNameTag.id = "enemy-nametag";
   enemyNameTag.textContent = "Enemy";

   enemyBoardContainer.appendChild(enemyNameTag);
   enemyBoardContainer.appendChild(enemyBoard);

   gameScreenContainer.appendChild(playerBoardContainer);
   gameScreenContainer.appendChild(enemyBoardContainer);

   mainScreenContainer.appendChild(gameScreenContainer);
}

function renderGridSquare(row, col) {
   const gridSquare = document.createElement("div");
   gridSquare.classList.add("grid-square");
   gridSquare.setAttribute("data-x", col);
   gridSquare.setAttribute("data-y", row);

   return gridSquare;
}

function markMissedAttack(row, col, board) {
   let missedSquareElement;

   if (board === "enemyBoard") {
      const enemyBoard = document.getElementById("enemy-board");
      missedSquareElement = enemyBoard.querySelector(
         `[data-x="${col}"][data-y="${row}"]`
      );
   } else {
      const playerBoard = document.getElementById("player-board");
      missedSquareElement = playerBoard.querySelector(
         `[data-x="${col}"][data-y="${row}"]`
      );
   }

   let img = new Image();
   img.src = dot;

   missedSquareElement.appendChild(img);
   missedSquareElement.classList.add("missed-attack");
}

function markSuccessfulAttack(row, col, board) {
   let shipSquareElement;

   if (board === "enemyBoard") {
      const enemyBoard = document.getElementById("enemy-board");
      shipSquareElement = enemyBoard.querySelector(
         `[data-x="${col}"][data-y="${row}"]`
      );
   } else {
      const playerBoard = document.getElementById("player-board");
      shipSquareElement = playerBoard.querySelector(
         `[data-x="${col}"][data-y="${row}"]`
      );
   }

   shipSquareElement.classList.add("successful-attack");
}

function displayWinningScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const gameOverScreenContainer = document.createElement("div");
   gameOverScreenContainer.classList.add("gameover-screen-container");

   const winningMessage = document.createElement("p");
   winningMessage.classList.add("game-status-message");
   winningMessage.textContent = "You have won!";

   const playAgainBtn = document.createElement("button");
   playAgainBtn.classList.add("play-again-btn");
   playAgainBtn.id = "play-again-btn";
   playAgainBtn.textContent = "Play again";

   gameOverScreenContainer.appendChild(winningMessage);
   gameOverScreenContainer.appendChild(playAgainBtn);

   mainScreenContainer.appendChild(gameOverScreenContainer);
}

function displayLosingScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const gameOverScreenContainer = document.createElement("div");
   gameOverScreenContainer.classList.add("gameover-screen-container");

   const losingMessage = document.createElement("p");
   losingMessage.classList.add("game-status-message");
   losingMessage.textContent = "You lose";

   const playAgainBtn = document.createElement("button");
   playAgainBtn.classList.add("play-again-btn");
   playAgainBtn.id = "play-again-btn";
   playAgainBtn.textContent = "Play again";

   gameOverScreenContainer.appendChild(losingMessage);
   gameOverScreenContainer.appendChild(playAgainBtn);

   mainScreenContainer.appendChild(gameOverScreenContainer);
}

function displayShipPlacementSelection(row, col) {
   const shipPlacementBoard = document.getElementById("ship-placement-board");
   let gridSquare = shipPlacementBoard.querySelector(
      `[data-x="${row}"][data-y="${col}"]`
   );

   gridSquare.classList.add("player-ship");
}

export {
   renderGameScreen,
   renderGridSquare,
   markMissedAttack,
   markSuccessfulAttack,
   displayWinningScreen,
   displayLosingScreen,
   displayShipPlacementSelection,
};
