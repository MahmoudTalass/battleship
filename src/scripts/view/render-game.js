function renderGameScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const gameScreenContainer = document.createElement("div");
   gameScreenContainer.classList.add("game-screen-container");
   gameScreenContainer.id = "game-screen-container";

   mainScreenContainer.appendChild(gameScreenContainer);
}

export { renderGameScreen };
