import {
   renderGridSquare,
   renderGameScreen,
   markMissedAttack,
   markSuccessfulAttack,
} from "../view/renderGame";
import Player from "../model/Player";
import RandomOperations from "../model/RandomOperations";
import { loadEventListeners } from "../view/eventListeners";

let player = null;
let enemy = null;

function showGameboard(playerBoardElement, playerGrid) {
   for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
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

function initiateGame() {
   renderGameScreen();

   const playerBoardElement = document.getElementById("player-board");
   const enemyBoardElement = document.getElementById("enemy-board");

   player = new Player();
   enemy = new Player();

   RandomOperations.randomizeTurns(player, enemy);

   RandomOperations.placeAllShipsRandomly(player.board);
   RandomOperations.placeAllShipsRandomly(enemy.board);

   showGameboard(playerBoardElement, player.board.grid);
   showGameboard(enemyBoardElement, enemy.board.grid);

   if (enemy.isPlayerTurn()) {
      enemyAttack();
   }
   loadEventListeners();
}

function enemyAttack() {
   const randomAttackInfo = RandomOperations.randomAttack(enemy, player.board);

   if (randomAttackInfo.attackMessage == "missed") {
      markMissedAttack(randomAttackInfo.x, randomAttackInfo.y, "playerBoard");
   } else {
      markSuccessfulAttack(
         randomAttackInfo.x,
         randomAttackInfo.y,
         "playerBoard"
      );
   }
   switchPlayerTurns();
}

function switchPlayerTurns() {
   player.switchTurn();
   enemy.switchTurn();
}

export {
   showGameboard,
   initiateGame,
   player,
   enemy,
   enemyAttack,
   switchPlayerTurns,
};
