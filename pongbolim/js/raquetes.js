//Variáveis da Raquete

let xRaquetes = [85,380,505,220]
let yRaquetes = [175,175,175,175];
let larguraRaquetes = [10,10,10,10];
let alturaRaquetes = [50,50,50,50];
let dimensoesRaquetes = [10,50,10,50];

let larguraRaquete = 10;
let alturaRaquete = 50;


let colidiu = false;
let colidiu2 = false;

const mostrandoRaquetes = () => {
 
  fill(color(77, 255, 77));
  for (let i = 0; i < xRaquetes.length; i++){
    rect(xRaquetes[i],yRaquetes[i], larguraRaquetes[i],         alturaRaquetes[i]);
   if(i == 1 || i == 3){
    fill(color(255, 51, 51));
   }
    
    
  }  
  
};



//Verificando se uma tecla é pressionada e alterando o valor da variável para que o objeto se mov
const movimentaRaquete = () => {
  if(keyIsDown(87)){
    if(yRaquetes[0] > 0 ){
      yRaquetes[0] -= 10;
      yRaquetes[1] -= 10;
    }
    
    
    
  }
  
  if(keyIsDown(83)){
    if(yRaquetes[1] < 350){
      yRaquetes[0] += 10;
      yRaquetes[1] += 10;
    }
    
    
  }
};

const movimentaRaqueteOponente = () => {
  
  
  if(keyIsDown(UP_ARROW)) {
    if(yRaquetes[2] > 0 ){
      yRaquetes[2] -= 10;
      yRaquetes[3] -= 10;
    }
  }
  if(keyIsDown(DOWN_ARROW)) {
  if(yRaquetes[2] < 350){
      yRaquetes[2] += 10;
      yRaquetes[3] += 10;
    }
  }
  
};

//Função reaproveitável
const colisaoRaqueteBiblioteca = () => {
  
  for(let i = 0; i< xRaquetes.length; i++){
    colidiu = collideRectCircle(xRaquetes[i], yRaquetes[i], larguraRaquetes[i], alturaRaquetes[i], xBolinha, yBolinha, raio );
    if(colidiu){
      velocidadeX *= -1;
      raquetada.play();
    
    }
  }
  

 
  
};