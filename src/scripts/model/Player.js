/* eslint-disable no-unused-vars */
export default class Player {
   playerTurn = false;

   isPlayerTurn() {
      return this.playerTurn;
   }

   switchPlayerTurns() {
      this.playerTurn = !this.playerTurn;
   }

   attack(enemyBoard, x, y) {
      return enemyBoard.receiveAttack(x, y);
   }
}
