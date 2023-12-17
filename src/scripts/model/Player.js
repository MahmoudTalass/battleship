import Gameboard from "./Gamebaord";

/* eslint-disable no-unused-vars */
export default class Player {
   playerTurn = false;
   board = new Gameboard();

   isPlayerTurn() {
      return this.playerTurn;
   }

   switchTurn() {
      this.playerTurn = !this.playerTurn;
   }

   attack(enemyBoard, x, y) {
      return enemyBoard.receiveAttack(x, y);
   }
}
