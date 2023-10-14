import Ship from "../Ship";

/* eslint-disable no-undef */
describe("Ship tests", () => {
   let ship;
   beforeEach(() => {
      ship = new Ship(2);

      return ship;
   });

   test("Ship sunk", () => {
      ship.hit();
      ship.hit();
      expect(ship.isSunk()).toBe(true);
   });
});
