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

function renderGridSquare(x, y) {
   const gridSquare = document.createElement("div");
   gridSquare.classList.add("grid-square");
   gridSquare.setAttribute("data-x", x);
   gridSquare.setAttribute("data-y", y);

   return gridSquare;
}

function markMissedAttack(x, y, board) {
   let missedSquareElement;

   if (board === "enemyBoard") {
      const enemyBoard = document.getElementById("enemy-board");
      missedSquareElement = enemyBoard.querySelector(
         `[data-x="${x}"][data-y="${y}"]`
      );
   } else {
      const playerBoard = document.getElementById("player-board");
      missedSquareElement = playerBoard.querySelector(
         `[data-x="${x}"][data-y="${y}"]`
      );
   }

   missedSquareElement.classList.add("missed-attack");
}

function markSuccessfulAttack(x, y, board) {
   let shipSquareElement;

   if (board === "enemyBoard") {
      const enemyBoard = document.getElementById("enemy-board");
      shipSquareElement = enemyBoard.querySelector(
         `[data-x="${x}"][data-y="${y}"]`
      );
   } else {
      const playerBoard = document.getElementById("player-board");
      shipSquareElement = playerBoard.querySelector(
         `[data-x="${x}"][data-y="${y}"]`
      );
   }

   shipSquareElement.style.border = "2px solid red";
}

export {
   renderGameScreen,
   renderGridSquare,
   markMissedAttack,
   markSuccessfulAttack,
};
