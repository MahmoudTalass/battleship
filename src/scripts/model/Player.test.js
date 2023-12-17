import Gameboard from "./Gamebaord";
import Player from "./Player";
import Ship from "./Ship";
import RandomOperations from "./RandomOperations";
/* eslint-disable no-undef */

describe("Player tests", () => {
   let player;
   beforeEach(() => {
      player = new Player();
   });
   test("Should be player turn", () => {
      player.switchTurn();

      expect(player.isPlayerTurn()).toBe(true);
   });

   test("Should be enemy turn", () => {
      player.switchTurn();
      player.switchTurn();

      expect(player.isPlayerTurn()).toBe(false);
   });

   test("Player attack received", () => {
      const enemyBoard = new Gameboard();
      const ship = new Ship(3);
      enemyBoard.placeShip(ship, "vertical", 4, 5);

      expect(player.attack(enemyBoard, 6, 5)).toBe("received");
      expect(ship.numOfHits).toBe(1);
      expect(enemyBoard.grid[6][5]).toBe("X");
   });

   test("Player attack missed", () => {
      const enemyBoard = new Gameboard();
      const ship = new Ship(3);
      enemyBoard.placeShip(ship, "vertical", 4, 5);

      expect(player.attack(enemyBoard, 2, 3)).toBe("missed");
      expect(ship.numOfHits).toBe(0);
      expect(enemyBoard.grid[2][3]).toBe("X");
   });

   test("Random computer attack", () => {
      const enemyBoard = new Gameboard();

      const result = RandomOperations.randomAttack(player, enemyBoard);

      expect(result.attackMessage).toBe("missed");
      expect(enemyBoard.grid[result.x][result.y]).toBe("X");
   });
});
