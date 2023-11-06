import Gameboard from "../model/Gamebaord";
import Player from "../model/Player";
import RandomOperations from "../model/RandomOperations";
import { renderGameScreen } from "../view/render-game";
import { showGameboard } from "./GameController";

export default function GameLoop() {
   renderGameScreen();

   const playerBoardElement = document.getElementById("player-board");
   const enemyBoardElement = document.getElementById("enemy-board");

   const player = new Player();
   const playerBoard = new Gameboard();

   const enemy = new Player();
   const enemyBoard = new Gameboard();

   RandomOperations.placeAllShipsRandomly(playerBoard);
   RandomOperations.placeAllShipsRandomly(enemyBoard);

   showGameboard(playerBoardElement, playerBoard.grid);
   showGameboard(enemyBoardElement, enemyBoard.grid);
}
