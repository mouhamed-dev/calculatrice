const btn = document.querySelectorAll("button");
const inp = document.querySelector(".calculatrice-input");

const clickSound = new Audio("tek.mp3"); // Son pour tous les buttons
clickSound.preload = "auto";
const egalSound = new Audio("egal.mp3"); // Son pour =

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    let boutonValue = btn[i].value;

    if (boutonValue === "=") {
      egalSound.play();
      try {
        inp.value = Function('"use strict"; return (' + inp.value + ')')();
    } catch {
        inp.value = "Erreur";
    }
    } else if (boutonValue === "AC") {
      clickSound.play();
      inp.value = "";
    } else {
      clickSound.play();
      inp.value += boutonValue;
    }
  });
}
