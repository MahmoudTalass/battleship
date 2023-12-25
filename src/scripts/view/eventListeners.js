import {
   initiateGame,
   placePlayerShip,
   resetPlayer,
} from "../controller/GameController";
import GameLoop from "../controller/GameLoop";
import { SHIP_LENGTHS } from "../model/Ship";
import { renderStartScreen } from "./startGameScreen";

function loadAttackEventListeners() {
   const enemyBoard = document.getElementById("enemy-board");
   enemyBoard.addEventListener("click", attackTargetHandler);
}

function attackTargetHandler(e) {
   const squareElement = e.target;
   const isTargetSquare = squareElement.classList.contains("grid-square");

   const col = Number(squareElement.getAttribute("data-x"));
   const row = Number(squareElement.getAttribute("data-y"));

   if (isTargetSquare) {
      GameLoop(row, col);
   }
}

class ShipPlacementEvents {
   constructor() {
      this.shipPlacementDirection = "vertical";
      this.indexOfShipBeingProcessed = 0;
   }

   shipPlacementEventListener() {
      const shipPlacementBoard = document.getElementById(
         "ship-placement-board"
      );
      const startScreenContainer = document.getElementById(
         "start-screen-container"
      );
      const mainScreenContainer = document.getElementById("main-screen");

      shipPlacementBoard.addEventListener("click", (e) => {
         const squareElement = e.target;
         const isTargetSquare = squareElement.classList.contains("grid-square");

         if (isTargetSquare) {
            const col = Number(squareElement.getAttribute("data-x"));
            const row = Number(squareElement.getAttribute("data-y"));

            let isPlacementSuccessful = placePlayerShip(
               row,
               col,
               SHIP_LENGTHS[this.indexOfShipBeingProcessed],
               this.shipPlacementDirection
            );

            if (isPlacementSuccessful) {
               this.indexOfShipBeingProcessed++;
               const shipPlacementHighlight = document.getElementById(
                  "ship-placement-highlight"
               );
               if (this.shipPlacementDirection === "horizontal") {
                  shipPlacementHighlight.style.width = `${
                     40 * SHIP_LENGTHS[this.indexOfShipBeingProcessed]
                  }px`;
                  shipPlacementHighlight.style.height = "40px";
               } else {
                  shipPlacementHighlight.style.height = `${
                     40 * SHIP_LENGTHS[this.indexOfShipBeingProcessed]
                  }px`;
                  shipPlacementHighlight.style.width = "40px";
               }
            }
         }
         if (this.indexOfShipBeingProcessed >= SHIP_LENGTHS.length) {
            mainScreenContainer.removeChild(startScreenContainer);
            initiateGame();
         }
      });

      shipPlacementBoard.addEventListener("mousemove", (e) => {
         const shipPlacementHighlight = document.getElementById(
            "ship-placement-highlight"
         );
         shipPlacementHighlight.style.display = "block";

         shipPlacementHighlight.style.left = `${e.clientX}px`;
         shipPlacementHighlight.style.top = `${e.clientY}px`;
      });

      shipPlacementBoard.addEventListener("mouseout", () => {
         const shipPlacementHighlight = document.getElementById(
            "ship-placement-highlight"
         );
         shipPlacementHighlight.style.display = "none";
      });
   }
   changeShipDirectionEventListener() {
      const changeShipDirectionBtn = document.getElementById("direction-btn");

      changeShipDirectionBtn.addEventListener("click", () => {
         this.shipPlacementDirection =
            this.shipPlacementDirection === "vertical"
               ? "horizontal"
               : "vertical";
         changeShipDirectionBtn.textContent = this.shipPlacementDirection;
         const shipPlacementHighlight = document.getElementById(
            "ship-placement-highlight"
         );
         if (this.shipPlacementDirection === "horizontal") {
            shipPlacementHighlight.style.width = `${
               40 * SHIP_LENGTHS[this.indexOfShipBeingProcessed]
            }px`;
            shipPlacementHighlight.style.height = "40px";
         } else {
            shipPlacementHighlight.style.height = `${
               40 * SHIP_LENGTHS[this.indexOfShipBeingProcessed]
            }px`;
            shipPlacementHighlight.style.width = "40px";
         }
      });
   }
}

function loadRestartGameEventListener() {
   const playAgainBtn = document.getElementById("play-again-btn");

   playAgainBtn.addEventListener("click", () => {
      resetPlayer();
      const mainScreenContainer = document.getElementById("main-screen");
      mainScreenContainer.replaceChildren();

      renderStartScreen();
      const shipPlacementEvents = new ShipPlacementEvents();
      shipPlacementEvents.changeShipDirectionEventListener();
      shipPlacementEvents.shipPlacementEventListener();
   });
}

export {
   loadAttackEventListeners,
   ShipPlacementEvents,
   loadRestartGameEventListener,
   attackTargetHandler,
};
