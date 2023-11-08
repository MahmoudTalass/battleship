import { renderGridSquare, renderGameScreen } from "../view/render-game";

const playerBoard = null;
const playerBoard = null;

const enemy = null;
const enemyBoard = null;

function showGameboard(playerBoardElement, playerGrid) {
   for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
         const square = renderGridSquare(x, y);
         if (playerGrid[x][y] === null) {
            square.classList.add("water");
         } else {
            square.classList.add("ship");
         }
         playerBoardElement.appendChild(square);
      }
   }
}

function initiateGame() {
   renderGameScreen();

   const playerBoardElement = document.getElementById("player-board");
   const enemyBoardElement = document.getElementById("enemy-board");

   player = new Player();
   playerBoard = new Gameboard();

   enemy = new Player();
   enemyBoard = new Gameboard();

   RandomOperations.placeAllShipsRandomly(playerBoard);
   RandomOperations.placeAllShipsRandomly(enemyBoard);

   showGameboard(playerBoardElement, playerBoard.grid);
   showGameboard(enemyBoardElement, enemyBoard.grid);
}

export { showGameboard, initiateGame };
