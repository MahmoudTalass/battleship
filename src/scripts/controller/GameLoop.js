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

export default function GameLoop(x, y) {
   if (player.isPlayerTurn()) {
      let attackStatus = player.attack(enemy.board, x, y);

      if (attackStatus == "illegal") {
         return;
      } else if (attackStatus == "missed") {
         markMissedAttack(x, y, "enemyBoard");
      } else if (attackStatus == "received") {
         markSuccessfulAttack(x, y, "enemyBoard");
      }

      if (getMatchStatus() === "lost") {
         displayLosingScreen();
         disableAttackEventListeners();
         return;
      } else if (getMatchStatus() === "won") {
         displayWinningScreen();
         disableAttackEventListeners();
         return;
      }

      switchPlayerTurns();
      setTimeout(enemyAttack, 600);
   } else {
      return;
   }
}
