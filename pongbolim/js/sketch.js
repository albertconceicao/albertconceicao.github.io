



function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0, 179, 0);
  mostraCampo();
  mostraBolinha();
  movimentandoBolinha();
  verificandoColisao();
  mostrandoGols();
  mostrandoRaquetes();
  movimentaRaquete();
  movimentaRaqueteOponente();
  colisaoRaqueteBiblioteca();
  incluiPlacar(meusPontos,170,26, 150, 10, 40,20);
  incluiPlacar(pontosOponente,470,26,450,10, 40, 20);
  marcaPontos();
  
}












