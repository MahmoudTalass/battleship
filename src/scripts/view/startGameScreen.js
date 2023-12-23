import { renderGridSquare } from "./renderGame";

function renderStartScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const startScreenContainer = document.createElement("div");
   startScreenContainer.classList.add("start-screen-container");
   startScreenContainer.id = "start-screen-container";

   const grid = document.createElement("div");
   grid.classList.add("board");
   grid.id = "ship-placement-board";

   for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
         grid.appendChild(renderGridSquare(x, y));
      }
   }

   const directionBtn = document.createElement("button");
   directionBtn.classList.add("direction-btn");
   directionBtn.id = "direction-btn";
   directionBtn.textContent = "vertical";

   startScreenContainer.appendChild(directionBtn);
   startScreenContainer.appendChild(grid);
   mainScreenContainer.appendChild(startScreenContainer);
}

export { renderStartScreen };
