import Ship, { SHIP_LENGTHS } from "./Ship";

export default class RandomOperations {
   static randomAttack(player, enemyBoard) {
      let isSuccessfulAttackMade = false;

      while (!isSuccessfulAttackMade) {
         let { row, col } = this.#getRandomCoord();
         let attackMessage = player.attack(enemyBoard, row, col);

         if (attackMessage == "illegal") {
            continue;
         } else {
            isSuccessfulAttackMade = true;
            return { attackMessage, row, col };
         }
      }
   }

   static placeAllShipsRandomly(playerBoard) {
      const SHIP_DIRECTIONS = ["vertical", "horizontal"];

      let numOfPlacedShips = 0;

      while (numOfPlacedShips < 5) {
         const ship = new Ship(SHIP_LENGTHS[numOfPlacedShips]);
         const randomNum = Math.random() > 0.5 ? 1 : 0;
         const shipDirection = SHIP_DIRECTIONS[randomNum];
         const { row, col } = this.#getRandomCoord();

         const isShipPlaced = playerBoard.placeShip(
            ship,
            shipDirection,
            row,
            col
         );

         if (isShipPlaced) {
            numOfPlacedShips++;
         }
      }

      return numOfPlacedShips == 5;
   }

   static #getRandomCoord() {
      return {
         row: Math.floor(Math.random() * 10),
         col: Math.floor(Math.random() * 10),
      };
   }

   static randomizeTurns(player1, player2) {
      const randomNum = Math.floor(Math.random() * 100);

      if (randomNum % 2 == 0) {
         player1.switchTurn();
      } else {
         player2.switchTurn();
      }
   }
}
