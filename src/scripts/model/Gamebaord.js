export default class Gameboard {
   grid = [];
   missedShotCoords = [];
   numOfHits = 0;

   constructor() {
      for (let row = 0; row < 10; row++) {
         this.grid.push([]);
      }
      for (let row = 0; row < 10; row++) {
         for (let col = 0; col < 10; col++) {
            this.grid[row].push(null);
         }
      }
   }

   placeShip(ship, direction, x, y) {
      let isValidPlacement = true;

      if (direction === "horizontal") {
         if (y >= 0 && y <= 10 - ship.getShipLength()) {
            let startingVal = y;
            for (let i = 0; i < ship.getShipLength(); i++) {
               if (this.grid[x][startingVal++] !== null) {
                  isValidPlacement = false;
               }
            }
            if (isValidPlacement) {
               startingVal = y;
               for (let i = 0; i < ship.getShipLength(); i++) {
                  this.grid[x][startingVal++] = ship;
               }
            }
         }

         return;
      }

      if (direction === "vertical") {
         if (x >= 0 && x <= 9 - ship.getShipLength()) {
            let startingVal = x;
            for (let i = 0; i < ship.getShipLength(); i++) {
               if (this.grid[startingVal++][y] !== null) {
                  isValidPlacement = false;
               }
            }
            if (isValidPlacement) {
               startingVal = x;
               for (let i = 0; i < ship.getShipLength(); i++) {
                  this.grid[startingVal++][y] = ship;
               }
            }
         }

         return;
      }
   }

   receiveAttack(x, y) {
      if (this.grid[x][y] == null) {
         this.missedShotCoords.push({
            x: x,
            y: y,
         });
         return false;
      }

      this.grid[x][y].hit();
      this.grid[x][y] = "hit";
      this.numOfHits++;

      return true;
   }
}
