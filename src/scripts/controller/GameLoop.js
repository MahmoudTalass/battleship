import { loadRestartGameEventListener } from "../view/eventListeners";
import {
   displayLosingScreen,
   displayWinningScreen,
   markMissedAttack,
   markSuccessfulAttack,
} from "../view/renderGame";
import {
   player,
   enemy,
   enemyAttack,
   switchPlayerTurns,
   getMatchStatus,
   disableAttackEventListeners,
} from "./GameController";

export default function GameLoop(row, col) {
   if (player.isPlayerTurn()) {
      let attackStatus = player.attack(enemy.board, row, col);

      if (attackStatus == "illegal") {
         return;
      } else if (attackStatus == "missed") {
         markMissedAttack(row, col, "enemyBoard");
      } else if (attackStatus == "received") {
         markSuccessfulAttack(row, col, "enemyBoard");
      }

      if (getMatchStatus() === "lost") {
         displayLosingScreen();
         disableAttackEventListeners();
         loadRestartGameEventListener();
         return;
      } else if (getMatchStatus() === "won") {
         displayWinningScreen();
         disableAttackEventListeners();
         loadRestartGameEventListener();
         return;
      }

      switchPlayerTurns();
      setTimeout(enemyAttack, 600);
   } else {
      return;
   }
}
