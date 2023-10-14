class Gameboard {
   grid = [];

   constructor() {
      for (let row = 0; row < 10; row++) {
         for (let col = 0; col < 10; col++) {
            this.grid[row][col] = null;
         }
      }
   }

   placeShip(ship, direction, x, y) {
      let xDirection = x;
      let yDirection = y;
      let isValidPlacement = true;

      if (direction === "vertical") {
         if (y >= 0 && y <= 9 - ship.getShipLength()) {
            for (let i = y; y < ship.getShipLength(); i++) {
               if (this.grid[x][i] !== null) {
                  isValidPlacement = false;
               }
            }

            if (isValidPlacement) {
               for (let i = y; y < ship.getShipLength(); i++) {
                  this.grid[x][i] = ship;
               }
            }
         }
      }

      if (direction === "horizontal") {
         if (x >= 0 && x <= 9 - ship.getShipLength()) {
            for (let i = x; x < ship.getShipLength(); i++) {
               if (this.grid[i][y] !== null) {
                  isValidPlacement = false;
               }
            }
         }

         if (isValidPlacement) {
            for (let i = x; x < ship.getShipLength(); i++) {
               if (this.grid[i][y] !== null) {
                  isValidPlacement = false;
               }
            }
         }
      }
   }
}
