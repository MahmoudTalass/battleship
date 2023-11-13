import {
   renderGridSquare,
   renderGameScreen,
   markMissedAttack,
   markSuccessfulAttack,
} from "../view/renderGame";
import Player from "../model/Player";
import RandomOperations from "../model/RandomOperations";

let player = null;
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

function initiateGame() {
   renderGameScreen();

   const playerBoardElement = document.getElementById("player-board");
   const enemyBoardElement = document.getElementById("enemy-board");

   player = new Player();
   enemy = new Player();

   RandomOperations.placeAllShipsRandomly(player.board);
   RandomOperations.placeAllShipsRandomly(enemy.board);

   showGameboard(playerBoardElement, player.board.grid);
   showGameboard(enemyBoardElement, enemy.board.grid);
}

function enemyAttack() {
   const randomAttackInfo = RandomOperations.randomAttack(enemy, player.board);

   if (randomAttackInfo.attackStatus == "missed") {
      markMissedAttack(randomAttackInfo.x, randomAttackInfo.y);
   } else {
      markSuccessfulAttack(randomAttackInfo.x, randomAttackInfo.y);
   }

   enemy.switchPlayerTurns();
}

export { showGameboard, initiateGame, player, enemy, enemyAttack };
