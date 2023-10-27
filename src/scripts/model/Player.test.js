import Player from "./Player";
/* eslint-disable no-undef */

describe("Player tests", () => {
   test("Should be player turn", () => {
      const player = new Player();
      player.switchTurns();

      expect(player.isPlayerTurn()).toBe(true);
   });
});
