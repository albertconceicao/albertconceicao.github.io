//Desenhando o campo

const mostraCampo = () => {
  fill(color(255));
  noFill();
  
  //Meio campo
  circle(300,200,120);
  fill(255);
  circle(300,200,5);
  line(300,141,300,259);
  line(300,10,300,390);
  
  //Campo
  line(10,10,590,10);
  line(10,390,590,390);
  line(10,10,10,390);
  line(590,10,590,390);
  
  //Pequena área esquerda
  
  line(10,140, 40, 140);
  line(40,140, 40, 270);
  line(10,270, 40, 270);
  
  //Grande área esquerda
  
  line(10,90, 70, 90);
  line(70,90, 70, 310);
  line(10,310, 70, 310);
  
  circle(55,200,5);
  
  //Pequena área direita
  
  line(560,140, 590, 140);
  line(560,140, 560, 270);
  line(560,270, 590, 270);
  
   //Grande área direita
  
  line(530,90, 590, 90);
  line(530,90, 530, 310);
  line(530,310, 590, 310);
  
  circle(545,200,5);
  
  // Marcas do escanteio
  noFill();
  arc(10, 10, 40, 40, 0, HALF_PI);
  
  arc(590, 10, 40, 40, HALF_PI, PI);
  
  arc(590, 390, 40, 40, PI, PI + HALF_PI);
  
  arc(10, 390, 40, 40, PI + HALF_PI, TWO_PI);
  
  //Marcas da meia-lua da Grande Área
  
  arc(530, 200,20,70,  PI/2, (3*PI)/2); 
  
  arc(70, 200,20,70, (3*PI)/2, PI/2 ); 
  
  
  fill(255);
  
};