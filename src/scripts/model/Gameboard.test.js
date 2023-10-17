import Gameboard from "./Gamebaord";
import Ship from "./Ship";
/* eslint-disable no-undef */
describe("Gameboard tests", () => {
   let board;
   beforeEach(() => {
      board = new Gameboard();
   });
   test("Place ship on board vertically", () => {
      const ship = new Ship(5);
      board.placeShip(ship, "vertical", 4, 4);
      expect(board.grid[4][4]).toEqual(ship);
      expect(board.grid[5][4]).toEqual(ship);
      expect(board.grid[6][4]).toEqual(ship);
      expect(board.grid[7][4]).toEqual(ship);
      expect(board.grid[8][4]).toEqual(ship);
   });

   test("Place ship on board horizontally", () => {
      const ship = new Ship(2);
      board.placeShip(ship, "horizontal", 8, 8);

      expect(board.grid[8][8]).toEqual(ship);
      expect(board.grid[8][9]).toEqual(ship);
   });

   test("Ship should not be placed here", () => {
      const ship = new Ship(5);
      const isPlaced = board.placeShip(ship, "vertical", 9, 1);

      expect(board.grid[9][1]).toEqual(null);
      expect(isPlaced).toBe(false);
   });

   test("Ship received hit", () => {
      const ship = new Ship(5);

      board.placeShip(ship, "vertical", 4, 4);
      board.receiveAttack(5, 4);

      expect(ship.numOfHits).toBe(1);
   });

   test("Attack missed. View coordinates of missed attack", () => {
      const ship = new Ship(5);
      board.placeShip(ship, "vertical", 1, 1);
      const wasHit = board.receiveAttack(3, 3);

      expect(wasHit).toBe(false);
      expect(board.getMissedAttackCoords()).toEqual({ x: 3, y: 3 });
   });

   test("Have all ships sunk", () => {
      board.placeShip(new Ship(5), "vertical", 4, 4);
      expect(board.haveAllSunk()).toBe(false);
   });
});
