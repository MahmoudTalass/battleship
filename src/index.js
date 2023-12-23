/* eslint-disable no-unused-vars */
import "./css/reset.css";
import "./css/page-template.css";
import "./css/start-screen.css";
import "./css/game-screen.css";
import { initiateGame } from "./scripts/controller/GameController";
import { ShipPlacementEvents } from "./scripts/view/eventListeners";
import { renderStartScreen } from "./scripts/view/startGameScreen";

renderStartScreen();
const shipPlacementEvents = new ShipPlacementEvents();
shipPlacementEvents.changeShipDirectionEventListener();
shipPlacementEvents.shipPlacementEventListener();
