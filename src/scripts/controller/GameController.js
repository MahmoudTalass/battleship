import { renderGridSquare } from "../view/render-game";

function showGameboard(playerBoardElement, playerGrid) {
   for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
         const square = renderGridSquare(x, y);
         if (playerGrid[x][y] === null) {
            square.classList.add("water");
         } else {
            square.classList.add("ship");
         }
         playerBoardElement.appendChild(square);
      }
   }
}

export { showGameboard };
