import GameLoop from "../controller/GameLoop";

function loadEventListeners() {
   const enemyBoard = document.getElementById("enemy-board");

   enemyBoard.addEventListener("click", (e) => {
      const square = e.target;
      const isTargetSquare = square.className == "grid-square";

      if (isTargetSquare) {
         GameLoop();
      }
   });
}

export { loadEventListeners };
