//Variáveis do Gol

let posicoesXGol = [2,595];
let posicoesYGol = [150,150]
let larguraGols = [2,2];
let alturaGols = [100,100];

const mostrandoGols = () => {
  for(let i = 0; i < posicoesXGol.length; i++){
    rect(posicoesXGol[i],posicoesYGol[i], larguraGols[i], alturaGols[i]);
    }
    
  
};