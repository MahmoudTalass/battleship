export default class Gameboard {
   grid = [];
   missedAttackCoords = [];
   hitsLeftUntilAllSink = 0;

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

   placeShip(ship, direction, row, col) {
      let isValidPlacement = true;

      if (direction === "horizontal") {
         if (col >= 0 && col <= 10 - ship.getShipLength()) {
            let startingCol = col;
            for (let i = 0; i < ship.getShipLength(); i++) {
               if (this.grid[row][startingCol++] !== null) {
                  isValidPlacement = false;
               }
            }
            if (isValidPlacement) {
               startingCol = col;
               for (let i = 0; i < ship.getShipLength(); i++) {
                  this.grid[row][startingCol++] = ship;
               }
               this.hitsLeftUntilAllSink += ship.getShipLength();
               return true;
            }
         }

         return false;
      }

      if (direction === "vertical") {
         if (row >= 0 && row <= 10 - ship.getShipLength()) {
            let startingRow = row;
            for (let i = 0; i < ship.getShipLength(); i++) {
               if (this.grid[startingRow++][col] !== null) {
                  isValidPlacement = false;
               }
            }
            if (isValidPlacement) {
               startingRow = row;
               for (let i = 0; i < ship.getShipLength(); i++) {
                  this.grid[startingRow++][col] = ship;
               }
               this.hitsLeftUntilAllSink += ship.getShipLength();
               return true;
            }
         }

         return false;
      }

      return false;
   }

   receiveAttack(row, col) {
      if (this.grid[row][col] == null) {
         this.missedAttackCoords.push({
            row: row,
            col: col,
         });
         this.grid[row][col] = "X";
         return "missed";
      }

      if (this.grid[row][col] == "X") {
         return "illegal";
      }

      this.grid[row][col].hit();
      this.grid[row][col] = "X";
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
