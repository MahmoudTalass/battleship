import { initiateGame, placePlayerShip } from "../controller/GameController";
import GameLoop from "../controller/GameLoop";
import { SHIP_LENGTHS } from "../model/Ship";

function loadAttackEventListeners() {
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

class ShipPlacementEvents {
   static shipPlacementDirection = "vertical";
   static indexOfShipBeingProcessed = 0;

   static shipPlacementEventListener() {
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
            const xCoordinate = Number(squareElement.getAttribute("data-x"));
            const yCoordinate = Number(squareElement.getAttribute("data-y"));

            let isPlacementSuccessful = placePlayerShip(
               xCoordinate,
               yCoordinate,
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
         console.log(this.indexOfShipBeingProcessed);
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
   static changeShipDirectionEventListener() {
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

export { loadAttackEventListeners, ShipPlacementEvents };

/**
 * figure out a way to highlight or show the player what kind of ship they are placing.
 * If you find a way of highlighting or displaying the ship legnth over the mouse as
 * the player is hovering over the board, that would be best.
 *
 *
 *
 * URGENT!!!
 * go back to the ship placement function and inspect what could be wrong. the ships are being placed
 * in the opposite direction, and player isn't able to place ships where they should be able to be placed.
 */
