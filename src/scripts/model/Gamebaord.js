export default class Gameboard {
   grid = [];
   missedAttackCoords = [];
   hitsLeftUntilAllSink;

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
            let startingCol = y;
            for (let i = 0; i < ship.getShipLength(); i++) {
               if (this.grid[x][startingCol++] !== null) {
                  isValidPlacement = false;
               }
            }
            if (isValidPlacement) {
               startingCol = y;
               for (let i = 0; i < ship.getShipLength(); i++) {
                  this.grid[x][startingCol++] = ship;
               }
               this.hitsLeftUntilAllSink += ship.getShipLength();
               return true;
            }
         }

         return false;
      }

      if (direction === "vertical") {
         if (x >= 0 && x <= 9 - ship.getShipLength()) {
            let startingRow = x;
            for (let i = 0; i < ship.getShipLength(); i++) {
               if (this.grid[startingRow++][y] !== null) {
                  isValidPlacement = false;
               }
            }
            if (isValidPlacement) {
               startingRow = x;
               for (let i = 0; i < ship.getShipLength(); i++) {
                  this.grid[startingRow++][y] = ship;
               }
               this.hitsLeftUntilAllSink += ship.getShipLength();
               return true;
            }
         }

         return false;
      }

      return false;
   }

   receiveAttack(x, y) {
      if (this.grid[x][y] == null) {
         this.missedAttackCoords.push({
            x: x,
            y: y,
         });
         this.grid[x][y] = "X";
         return "missed";
      }

      if (this.grid[x][y] == "X") {
         return "illegal";
      }

      this.grid[x][y].hit();
      this.grid[x][y] = "X";
      this.hitsLeftUntilAllSink--;

      return "received";
   }

   haveAllSunk() {
      return this.hitsLeftUntilAllSink === 0;
   }

   getMissedAttackCoords() {
      return Object.assign(
         {},
         this.missedAttackCoords[this.missedAttackCoords.length - 1]
      );
   }
}
