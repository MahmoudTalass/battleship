import GameLoop from "../controller/GameLoop";

function loadEventListeners() {
   const enemyBoard = document.getElementById("enemy-board");

   enemyBoard.addEventListener("click", (e) => {
      const squareElement = e.target;
      const isTargetSquare = squareElement.classList.contains("grid-square");

      const xCoordinate = Number(squareElement.getAttribute("data-x"));
      const yCoordinate = Number(squareElement.getAttribute("data-y"));

      if (isTargetSquare) {
         GameLoop(xCoordinate, yCoordinate);
      }
   });
}

export { loadEventListeners };
