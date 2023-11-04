function renderStartScreen() {
   const mainScreenContainer = document.getElementById("main-screen");

   const startGameBtn = document.createElement("button");
   startGameBtn.classList.add("start-game-btn");
   startGameBtn.id = "start-game-btn";
   startGameBtn.textContent = "Start";

   const startScreenContainer = document.createElement("div");
   startScreenContainer.classList.add("start-screen-container");

   startScreenContainer.appendChild(startGameBtn);
   mainScreenContainer.appendChild(startScreenContainer);
}

export { renderStartScreen };
