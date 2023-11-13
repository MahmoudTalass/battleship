import GameLoop from "../controller/GameLoop";

function loadEventListeners() {
   const enemyBoard = document.getElementById("enemy-board");

   enemyBoard.addEventListener("click", (e) => {
      const squareElement = e.target;
      const isTargetSquare = squareElement.className == "grid-square";
      const boardName = squareElement.parentElement.id;

      const xCoordinate = squareElement.getAttribute("data-x");
      const yCoordinate = squareElement.getAttribute("data-y");

      if (boardName == "enemy-board" && isTargetSquare) {
         GameLoop(xCoordinate, yCoordinate);
      }
   });
}

export { loadEventListeners };
