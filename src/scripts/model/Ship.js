const SHIP_LENGTHS = [2, 3, 3, 4, 5];

class Ship {
   hasSunk = false;
   #shipLength;
   numOfHits;

   constructor(shipLength) {
      this.#shipLength = shipLength;
      this.numOfHits = 0;
   }

   hit() {
      this.numOfHits++;
      if (this.numOfHits === this.#shipLength) {
         this.hasSunk = true;
      }
   }

   isSunk() {
      return this.hasSunk;
   }

   getShipLength() {
      return this.#shipLength;
   }
}

export default Ship;
export { SHIP_LENGTHS };
