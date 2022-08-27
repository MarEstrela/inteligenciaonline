// Projeto Game : Residuos - Meio-Ambiente
// Julho - 2022

var canvas;
var backgroundfase0,backgroundImage0,backgroundfase1,backgroundInicio; // fundo de telas das fases
var form;// formulário
var cara; // imagem do avatar
var agente; // jogador agente
var nickname;
var solo;
var imgAvatar0,imgAvatar1,imgAvatar2,imgAvatar3,imgAvatar4,imgAvatar5,imgAvatar6,imgAvatar7,imgAvatar8,imgAvatar9,imgAvatar10;
var avatarjogo;
var img_avar;

var fase; // fases do jogo ou momentos do jogo.
var lixeira;
var lixo;
var imgsujeira
var lixPlast,imglixPlast;// lixeira plastica
var estagio; // estágiário(1 lixeira),iniciante(2 lixeiras),trainee(3 lixeiras),junior(4 lixeiras),pleno( 5 lixeiras) e senior(6 lixeiras)

var grupoResiduos; // grupo de sprites de vários residuos.
var residuos=[];// matriz de sprites de resídous
var moeda0,moeda1,moeda2,moeda3,moeda4,moeda5; // total de moedas com a coleta seletiva do lixo.
var sujeira; // acumulo de lixo.
var lixojogado;
var grupoSolosujo;

var imgsujeira;
var imgmosca,mosca;
var grupoMosca
var grupoColeta;
var coletatotal_lixo
var imgcoleta

var vida,imgvida;
var cara = 0;
var totalcoletado = 0
var gameState=0;

var tipo_residuo
var tipo_lixeira

// Inicializei as matrizes 
var imgResiduo=[[],[]];// imagens de vários resídous
var linhas = 10; 
var colunas = 6; 
var telafase1=false;

// inicializando array imgResidou;
var imgResiduo = new Array(colunas); 
for (var i = 0; i < colunas; i++) 
imgResiduo[i] = new Array(linhas); 



// Carregar as Imagens

function preload() {
  backgroundInicio = loadImage("./img/login.png");
  backgroundfase1 = loadImage("./img/apoio.png");
  //img sujeira
  imgsujeira=loadImage("./img/sujeira_1.png");
  imgmosca = loadImage("./img/mosca.png")
  // img arrecadacao
  imgcoleta = loadImage("./img/coleta_lixo.png");
  // imgAvatar
  imgsemAvatar = loadImage("./img/avatar/avatarsemimagem.png");
  imgAvatar0 = loadImage("./img/avatar/0.png");
  imgAvatar1 = loadImage("./img/avatar/1.png");
  imgAvatar2 = loadImage("./img/avatar/2.png");
  imgAvatar3 = loadImage("./img/avatar/3.png");
  imgAvatar4 = loadImage("./img/avatar/4.png");
  imgAvatar5 = loadImage("./img/avatar/5.png");
  imgAvatar6 = loadImage("./img/avatar/6.png");
  imgAvatar7 = loadImage("./img/avatar/7.png");
  imgAvatar8 = loadImage("./img/avatar/8.png");
  imgAvatar9 = loadImage("./img/avatar/9.png");;
  imgAvatar10 = loadImage("./img/avatar/10.png");
  imgAvatar11 = loadImage("./img/avatar/11.png");
  imgAvatar12 = loadImage("./img/avatar/12.png");
  imgAvatar13 = loadImage("./img/avatar/13.png");
  imgAvatar14 = loadImage("./img/avatar/14.png");
  imgAvatar15 = loadImage("./img/avatar/15.png");
  imgAvatar16 = loadImage("./img/avatar/16.png");
  imgAvatar17 = loadImage("./img/avatar/17.png");
  imgAvatar18 = loadImage("./img/avatar/18.png");
  imgAvatar19 = loadImage("./img/avatar/19.png");
  imgAvatar20 = loadImage("./img/avatar/20.png");
  imgAvatar21 = loadImage("./img/avatar/21.png");

  // 0 - organica
  // 1 - papel
  // 2 - plastico
  // 3 - eletronica
  // 4 - metal
  // 5 - vidro
  
  // residuo - organico
  imgResiduo[0][0]=loadImage("./img/organico/1.png");
  imgResiduo[0][1]=loadImage("./img/organico/2.png");
  imgResiduo[0][2]=loadImage("./img/organico/3.png");
  imgResiduo[0][3]=loadImage("./img/organico/4.png");
  imgResiduo[0][4]=loadImage("./img/organico/5.png");
  imgResiduo[0][5]=loadImage("./img/organico/6.png");
  imgResiduo[0][6]=loadImage("./img/organico/7.png");
  imgResiduo[0][7]=loadImage("./img/organico/8.png");
  imgResiduo[0][8]=loadImage("./img/organico/9.png");
  imgResiduo[0][9]=loadImage("./img/organico/10.png");
  
  // papel 
  imgResiduo[1][0]=loadImage("./img/papel/1.png");
  imgResiduo[1][1]=loadImage("./img/papel/2.png");
  imgResiduo[1][2]=loadImage("./img/papel/3.png");
  imgResiduo[1][3]=loadImage("./img/papel/4.png");
  imgResiduo[1][4]=loadImage("./img/papel/5.png");
  imgResiduo[1][5]=loadImage("./img/papel/6.png");
  imgResiduo[1][6]=loadImage("./img/papel/7.png");
  imgResiduo[1][7]=loadImage("./img/papel/8.png");
  imgResiduo[1][8]=loadImage("./img/papel/9.png");
  imgResiduo[1][9]=loadImage("./img/papel/10.png");

// plastico 
  imgResiduo[2][0]=loadImage("./img/plasticos/1.png");
  imgResiduo[2][1]=loadImage("./img/plasticos/2.png");
  imgResiduo[2][2]=loadImage("./img/plasticos/3.png");
  imgResiduo[2][3]=loadImage("./img/plasticos/4.png");
  imgResiduo[2][4]=loadImage("./img/plasticos/5.png");
  imgResiduo[2][5]=loadImage("./img/plasticos/6.png");
  imgResiduo[2][6]=loadImage("./img/plasticos/7.png");
  imgResiduo[2][7]=loadImage("./img/plasticos/8.png");
  imgResiduo[2][8]=loadImage("./img/plasticos/9.png");
  imgResiduo[2][9]=loadImage("./img/plasticos/10.png");

  // eletronicos 
  imgResiduo[3][0]=loadImage("./img/eletronico/1.png");
  imgResiduo[3][1]=loadImage("./img/eletronico/2.png");
  imgResiduo[3][2]=loadImage("./img/eletronico/3.png");
  imgResiduo[3][3]=loadImage("./img/eletronico/4.png");
  imgResiduo[3][4]=loadImage("./img/eletronico/5.png");
  imgResiduo[3][5]=loadImage("./img/eletronico/6.png");
  imgResiduo[3][6]=loadImage("./img/eletronico/7.png");
  imgResiduo[3][7]=loadImage("./img/eletronico/8.png");
  imgResiduo[3][8]=loadImage("./img/eletronico/9.png");
  imgResiduo[3][9]=loadImage("./img/eletronico/10.png");
  // metal 
  imgResiduo[4][0]=loadImage("./img/metal/1.png");
  imgResiduo[4][1]=loadImage("./img/metal/2.png");
  imgResiduo[4][2]=loadImage("./img/metal/3.png");
  imgResiduo[4][3]=loadImage("./img/metal/4.png");
  imgResiduo[4][4]=loadImage("./img/metal/5.png");
  imgResiduo[4][5]=loadImage("./img/metal/6.png");
  imgResiduo[4][6]=loadImage("./img/metal/7.png");   
  imgResiduo[4][7]=loadImage("./img/metal/8.png");
  imgResiduo[4][8]=loadImage("./img/metal/9.png");
  imgResiduo[4][9]=loadImage("./img/metal/10.png");
// vidro 
  imgResiduo[5][0]=loadImage("./img/vidro/1.png");
  imgResiduo[5][1]=loadImage("./img/vidro/2.png");
  imgResiduo[5][2]=loadImage("./img/vidro/3.png");
  imgResiduo[5][3]=loadImage("./img/vidro/4.png");
  imgResiduo[5][4]=loadImage("./img/vidro/5.png");
  imgResiduo[5][5]=loadImage("./img/vidro/6.png");
  imgResiduo[5][6]=loadImage("./img/vidro/7.png");
  imgResiduo[5][7]=loadImage("./img/vidro/8.png");
  imgResiduo[5][8]=loadImage("./img/vidro/9.png");
  imgResiduo[5][9]=loadImage("./img/vidro/10.png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
//  background("black");
  image( backgroundInicio,0,0,windowWidth,windowHeight);
     
  tipo_residuo=0;
  // inicialização de variavéis
  sujeira=0;
  vida   =3;
 
  moeda0=0;
  moeda1=0;
  moeda2=0;
  moeda3=0;
  moeda4=0;
  moeda5=0;

  // Solo invisivel  
  solo = createSprite(width/2,height-height/5,width,20)
  solo.visible = false

  // Criação do grupo.
  grupoResiduos=new Group();
  grupoSolosujo= new Group();
  grupoColeta= new Group();
  grupoMosca= new Group();

  // estágio
  estagio = 0;

  // inicio do jogo.
  game = new Game();
  game.start();
  
}

function draw() {
  
  if (fase===1){
    image(backgroundfase1,0,0,windowWidth,windowHeight);
    if (telafase1){
       game.startfase(1)
      // Identificação do Jogador.
      // avatar
      if (cara===0){
        image(imgsemAvatar,width-width/3.5,height/2-400,100,100);
        img_avar="./img/avatar/avatarsemimagem.png";
      }else{
        img_avar="./img/avatar/"+cara+"a.png"
      }
      jogador = createImg(img_avar,nickname,70,70 );
      jogador.position(width-width/3.3,height/2-400,100,100)
      
      identifica = createElement("h2");
      identifica.position(width/2-(width/2.5), height/8-height/9);
      identifica.class("identificafase");
      identifica.html("FASE 1");
  
      //text("DEFENSOR DA NATUREZA: " ,width-250,height/2-430)
      //text(nickname,width-300,height/2-410)
      //sujeira
       telafase1=false
      
    } 
    // tipo de residuo - de acordo com o número de  lixeiras coletoras
    // fase = 1
    // 

    if (estagio===0){
       tipo_residuo =Math.round(random(0,1));
    }else if(estagio===1){
      tipo_residuo = Math.round(random(0,2));
    
    }else if(estagio ===2){
      tipo_residuo = Math.round(random(0,3));
    
    }else if(estagio ===3){
      tipo_residuo = Math.round(random(0,4));
    
    }else if(estagio===4){
      tipo_residuo = Math.round(random(0,5));
    }
    game.play(tipo_residuo,1);

  }


  
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

