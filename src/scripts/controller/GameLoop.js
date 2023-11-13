import { markMissedAttack, markSuccessfulAttack } from "../view/renderGame";
import { player, enemy, enemyAttack } from "./GameController";

export default function GameLoop(x, y) {
   if (player.isPlayerTurn) {
      let attackStatus = player.attack(enemy.board, x, y);

      if (attackStatus == "illegal") {
         return;
      } else if (attackStatus == "missed") {
         markMissedAttack(x, y);
      } else if (attackStatus == "received") {
         markSuccessfulAttack(x, y);
      }
      player.switchPlayerTurns();
      enemyAttack();
   } else {
      return;
   }
}
