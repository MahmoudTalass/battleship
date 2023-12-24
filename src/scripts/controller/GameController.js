import {
   renderGridSquare,
   renderGameScreen,
   markMissedAttack,
   markSuccessfulAttack,
   displayShipPlacementSelection,
} from "../view/renderGame";
import Player from "../model/Player";
import RandomOperations from "../model/RandomOperations";
import {
   attackTargetHandler,
   loadAttackEventListeners,
} from "../view/eventListeners";
import Ship from "../model/Ship";

let player = new Player();
let enemy = null;

function showGameboard(playerBoardElement, playerGrid) {
   for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
         const square = renderGridSquare(x, y);
         if (playerGrid[x][y] === null) {
            square.classList.add("water");
         } else {
            square.classList.add("ship");
            if (playerBoardElement.id == "player-board") {
               square.classList.add("player-ship");
            }
         }
         playerBoardElement.appendChild(square);
      }
   }
}

function placePlayerShip(row, col, shipSize, direction) {
   let isPlacementSuccessful = player.board.placeShip(
      new Ship(shipSize),
      direction,
      row,
      col
   );

   if (isPlacementSuccessful) {
      if (direction === "vertical") {
         for (let i = row; i < row + shipSize; i++) {
            displayShipPlacementSelection(i, col);
         }
      } else {
         for (let i = col; i < col + shipSize; i++) {
            displayShipPlacementSelection(row, i);
         }
      }
   }
   return isPlacementSuccessful;
}

function initiateGame() {
   renderGameScreen();

   const playerBoardElement = document.getElementById("player-board");
   const enemyBoardElement = document.getElementById("enemy-board");

   enemy = new Player();

   RandomOperations.randomizeTurns(player, enemy);

   RandomOperations.placeAllShipsRandomly(enemy.board);

   showGameboard(playerBoardElement, player.board.grid);
   showGameboard(enemyBoardElement, enemy.board.grid);

   if (enemy.isPlayerTurn()) {
      enemyAttack();
   }
   loadAttackEventListeners();
}

function enemyAttack() {
   const randomAttackInfo = RandomOperations.randomAttack(enemy, player.board);

   if (randomAttackInfo.attackMessage == "missed") {
      markMissedAttack(
         randomAttackInfo.row,
         randomAttackInfo.col,
         "playerBoard"
      );
   } else {
      markSuccessfulAttack(
         randomAttackInfo.row,
         randomAttackInfo.col,
         "playerBoard"
      );
   }
   switchPlayerTurns();
}

function resetPlayer() {
   player = new Player();
}

function switchPlayerTurns() {
   player.switchTurn();
   enemy.switchTurn();
}

function getMatchStatus() {
   if (player.hasLostMatch()) {
      return "lost";
   } else if (enemy.hasLostMatch()) {
      return "won";
   }

   return null;
}

function disableAttackEventListeners() {
   const enemyBoard = document.getElementById("enemy-board");

   enemyBoard.removeEventListener("click", attackTargetHandler);
}

export {
   showGameboard,
   initiateGame,
   player,
   enemy,
   enemyAttack,
   switchPlayerTurns,
   getMatchStatus,
   disableAttackEventListeners,
   placePlayerShip,
   resetPlayer,
};
