//Variáveis de pontuação
let meusPontos= 0;
let pontosOponente = 0;



const incluiPlacar = (pontos, x, y, a, b, c, d) => {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0))
  rect(a, b, c, d);
  fill(255);
  text(pontos, x, y);
};

const marcaPontos = () => {
  if(xBolinha > 590 && yBolinha >150 && yBolinha < 250) {
    meusPontos += 1;
    ponto.play();
    
     xBolinha = 300;
  }
  if(xBolinha < 10  && yBolinha > 150 && yBolinha < 250){
    pontosOponente += 1;
    ponto.play();
    xBolinha = 300;
    
  }
};

