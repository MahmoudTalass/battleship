function renderGameScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const gameScreenContainer = document.createElement("div");
   gameScreenContainer.classList.add("game-screen-container");
   gameScreenContainer.id = "game-screen-container";

   const playerBoardContainer = document.createElement("div");
   playerBoardContainer.classList.add("player-board-container");
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
   enemyBoardContainer.classList.add("enemy-board-container");
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

export { renderGameScreen, renderGridSquare };
