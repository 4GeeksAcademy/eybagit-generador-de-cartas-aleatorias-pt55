// app.js
import "bootstrap";

const valores   = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"],
      palos     = ["heart","diamond","club","spade"],
      simbolos = { heart:"♥", diamond:"♦", club:"♣", spade:"♠" },
      caja      = document.querySelector("#caja-carta"),
      inAncho   = document.querySelector("#ancho-carta"),
      inAlto    = document.querySelector("#alto-carta"),
      btnNueva  = document.querySelector("#boton-nueva-carta"),
      btnTimer  = document.querySelector("#boton-temporizador");
let idTimer;

const mostrarCarta = () => {
  const valorCarta = valores[Math.floor(Math.random()*13)],
        paloCarta  = palos[Math.floor(Math.random()*4)],
        simbolo    = simbolos[paloCarta],
        anchoCarta = parseInt(inAncho.value) || 380,
        altoCarta  = parseInt(inAlto.value)  || 500,
        colorCarta = paloCarta==="heart"||paloCarta==="diamond"
                     ? "text-danger" : "text-dark",
        carta = document.createElement("div");

  carta.className = `card bg-white border shadow ${colorCarta}
    d-flex justify-content-center align-items-center
    position-absolute top-50 start-50 translate-middle carta`;
    carta.style.setProperty("--ancho", `${anchoCarta}px`);
    carta.style.setProperty("--alto",  `${altoCarta}px`);
    carta.innerHTML = `
    <div class="position-absolute simbolo superior">${simbolo}</div>
    <span >${valorCarta}</span>
    <div class="position-absolute simbolo inferior rotate-180 ">${simbolo}</div>
  `;

  caja.innerHTML = "";
  caja.append(carta);
};

window.onload = mostrarCarta;
btnNueva.onclick  = mostrarCarta;
inAncho.oninput   = inAlto.oninput = mostrarCarta;
btnTimer.onclick  = () => idTimer
    ? (clearInterval(idTimer), idTimer = 0, btnTimer.textContent = "⏱ OFF")
    : (idTimer = setInterval(mostrarCarta,10000), btnTimer.textContent = "⏱ ON");
