function preload(){
  campo = loadImage('img_campo.png');
  marta = loadImage('img_jogador.png');
  pele = loadImage('img_pele3.png');
  bola = loadImage('bola.png');
}

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(campo);
  image(bola,300,120);
  image(pele,520,150);
  image(marta,constrain(mouseX -20, 40, 250), constrain(mouseY -40,0, 400));
  marta.resize(0,90);
  pele.resize(0,90);
  
  
  
}