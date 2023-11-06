import Ship from "./Ship";

export default class RandomOperations {
   static randomAttack(player, enemyBoard) {
      let isSuccessfulAttackMade = false;

      while (!isSuccessfulAttackMade) {
         let { x, y } = this.#getRandomCoord();
         let attackMessage = player.attack(enemyBoard, x, y);

         if (attackMessage == "illegal") {
            continue;
         } else {
            isSuccessfulAttackMade = true;
            return attackMessage;
         }
      }
   }

   static placeShipsRandomly(playerBoard) {
      const SHIP_LENGTHS = [2, 3, 3, 4, 5];
      const SHIP_DIRECTIONS = ["vertical", "horizontal"];

      let numOfPlacedShips = 0;

      while (numOfPlacedShips < 5) {
         const ship = new Ship(SHIP_LENGTHS[numOfPlacedShips]);
         const randomNum = Math.random() > 0.5 ? 1 : 0;
         const shipDirection = SHIP_DIRECTIONS[randomNum];
         const { x, y } = this.#getRandomCoord();

         const isShipPlaced = playerBoard.placeShip(ship, shipDirection, x, y);

         if (isShipPlaced) {
            numOfPlacedShips++;
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
