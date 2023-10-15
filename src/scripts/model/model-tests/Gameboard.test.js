import Gameboard from "../Gamebaord";
import Ship from "../Ship";
/* eslint-disable no-undef */
describe("Gameboard tests", () => {
   let board;
   beforeEach(() => {
      board = new Gameboard();
   });
   test("Place ship on board", () => {
      board.placeShip(new Ship(5), "vertical", 4, 4);
      expect(board.grid[4][4]).toBeFalsy;
      expect(board.grid[5][4]).toBeFalsy;
      expect(board.grid[6][4]).toBeFalsy;
      expect(board.grid[7][4]).toBeFalsy;
      expect(board.grid[8][4]).toBeFalsy;
   });

   test("Ship received hit", () => {
      board.placeShip(new Ship(5), "vertical", 4, 4);
      board.receiveAttack(5, 4);

      expect(board.grid[5][4].numOfHits).toBe(1);
   });

   test("Have all ships sunk", () => {
      board.placeShip(new Ship(5), "vertical", 4, 4);
      expect(board.haveAllSunk()).toBe(false);
   });
});
