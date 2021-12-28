//Variáveis da Bolinha;

let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let velocidadeX = 6;
let velocidadeY = 6;

const mostraBolinha = () => {
  
  circle(xBolinha, yBolinha, diametro)
};

const movimentandoBolinha = () => {
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
  
};

const verificandoColisao = () => {
  
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeX *= - 1;
  }
  
   if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeY *= - 1;
  }
  
};


const destravandoBolinha = () => {
  if(xBolinha + raio < 2){
    xBolinha = 300;
  }
};
