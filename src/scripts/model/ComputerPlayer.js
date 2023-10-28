export default class ComputerPlayer {
   static randomAttack(player, enemyBoard) {
      let isSuccessfulAttackMade = false;

      while (!isSuccessfulAttackMade) {
         let { x, y } = this.#getRandomCoord();
         let attackMessage = player.attack(enemyBoard, x, y);

         if (attackMessage == "illegal") {
            continue;
         } else {
            isSuccessfulAttackMade = true;
         }
      }
   }

   static #getRandomCoord() {
      return {
         x: Math.floor(Math.random() * 10),
         y: Math.floor(Math.random() * 10),
      };
   }
}
