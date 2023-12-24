import Gameboard from "./Gamebaord";
import RandomOperations from "./RandomOperations";
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
      const isPlaced = board.placeShip(ship, "vertical", 1, 9);

      expect(board.grid[1][9]).toEqual(ship);
      expect(isPlaced).toBe(true);
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

      expect(wasHit).toBe("missed");
      expect(board.getMissedAttackCoords()).toEqual({ row: 3, col: 3 });
   });

   test("Have all ships sunk", () => {
      board.placeShip(new Ship(5), "vertical", 4, 4);
      expect(board.haveAllSunk()).toBe(false);
   });

   test("All ship placed randomly", () => {
      const result = RandomOperations.placeAllShipsRandomly(board);
      expect(result).toBe(true);
   });
});

describe("Ship tests", () => {
   test("Ship was hit three times", () => {
      const ship = new Ship(5);

      ship.hit();
      ship.hit();
      ship.hit();

      expect(ship.numOfHits).toBe(3);
   });
});
