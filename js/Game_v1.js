class Game {
  constructor() {
    
    this.btnlixeira0 = createButton("");
    this.btnlixeira1 = createButton("");
    this.btnlixeira2 = createButton("");
    this.btnlixeira3 = createButton("");
    this.btnlixeira4 = createButton("");
    this.btnlixeira5 = createButton("");

    this.btnTitleInicio=createElement("h2");
    this.btnTitleSair=createElement("h2");
    this.btnTitleInfo=createElement("h2");

    this.btninicio = createButton("");
    // quando desejo continuar minhas vidas. 

    this.btnsair = createButton("");
    this.btnajuda = createButton("");
    this.vidaTitle = createElement("h2");
    this.vidaImg1 = createElement("div");
    this.vidaImg2 = createElement("div");
    this.vidaImg3 = createElement("div");
    
    this.arrecadaTitle = createElement("h2");
//    this.acumulolixoTitle = createElement("h2");
 //   this.arrecadacaototal = createElement("h2");
    
    
   // this.valor0Title = createElement("div");
   // this.valor1Title = createElement("div");
   // this.valor2Title = createElement("div");
   // this.valor3Title = createElement("div");
  //  this.valor4Title = createElement("div");
  //  this.valor5Title = createElement("div");
    
  //  this.valor0 = createElement("h3");
 //   this.valor1 = createElement("h3");
  //  this.valor2 = createElement("h3");
  //  this.valor3 = createElement("h3");
  //  this.valor4 = createElement("h3");
  //  this.valor5 = createElement("h3");
      
   // this.acumulolixo = createElement("h2");
    
  }
  
  start() {
    form = new Form();
    form.display();
  }

  startfase(){
   // Botoes iniciar
    if(telafase1){
      this.btnTitleInicio.html("Play");
      this.btnTitleInfo.html("Info");
      this.btnTitleSair.html("Saida");
      this.btnTitleInicio.class("textopadrao");
      this.btnTitleInfo.class("textopadrao");
      this.btnTitleSair.class("textopadrao");
      this.btnTitleInicio.position(width/2-(width/2.8), height/3-height/4);
      this.btnTitleInfo.position(width/2-(width/2.8), height/3-height/6);
      this.btnTitleSair.position(width/2-(width/2.8), height/3-height/11);

      this.btninicio.position(width/2-(width/2.5),height/3-height/4);
      this.btninicio.class("botaopadrao");
      this.btnajuda.position(width/2-(width/2.5),height/3-height/6);
      this.btnajuda.class("botaoajuda");
      this.btnsair.position(width/2-(width/2.5),height/3-height/11);
      this.btnsair.class("botaosair");

      this.infoMousepressed();  
      this.saidaMousepressed();  
      this.showtitulosfase1();
 
    };
  }

  showtitulosfase1(){
    
      // arrecadação
           
      this.vidaTitle.html("Vidas");
      this.vidaTitle.class("resetText");
      this.vidaTitle.position(width-width/5,height/7-height/8);

      this.arrecadaTitle.html("Coletas Realizadas");
      this.arrecadaTitle.class("resetText");
      this.arrecadaTitle.position(width-width/5,height/6);

      // this.acumulolixoTitle.html("Sujeira");
      // this.acumulolixoTitle.position(width-width/5,height/2-height/4);
      //this.acumulolixoTitle.class("resetText");
      //this.acumulolixo.class("resetText");
      //this.acumulolixo.position(width-width/5,height-height/2.2)
      
      // sujeira
      
      
    //  this.valor0.class("leadersText");
    //  this.valor0.position(width-200, height/6+80);
     // this.arrecadacaototal.class("resetText");
     // this.arrecadacaototal.position(width-200,height/6+80);


    /*  this.valor0Title.class("organico");
      this.valor0Title.position(width-300,height/6+50);
      this.valor0.class("leadersText");
      this.valor0.position(width-200, height/6+50);

      this.valor1Title.class("papel");
      this.valor1Title.position(width-300,height/6+80);
      this.valor1.class("leadersText");
      this.valor1.position(width-200, height/6+80);
      
      this.valor2Title.class("plastico");
      this.valor2Title.position(width-300,height/6+110);
      this.valor2.class("leadersText");
      this.valor2.position(width-200, height/6+110);
      
      this.valor3Title.class("vidro");
      this.valor3Title.position(width-300,height/6+140);
      this.valor3.class("leadersText");
      this.valor3.position(width-200, height/6+140);
          
      this.valor4Title.class("metal");
      this.valor4Title.position(width-300,height/6+170);
      this.valor4.class("leadersText");
      this.valor4.position(width-200, height/6+170);
         
      this.valor5Title.class("eletronico");
      this.valor5Title.position(width-300,height/6+200);
      this.valor5.class("leadersText");
      this.valor5.position(width-200, height/6+200);*/
  }
  
  showbotoeslixeira(){
    // criando os botoes das lixeiras
   if (estagio===0){
      this.btnlixeira0.position(width/7+190, height/2+30);
      this.btnlixeira0.class("lixeiraButton0");
      this.btnlixeira1.position(width/7+295, height/2+30);
      this.btnlixeira1.class("lixeiraButton1");
    }else if(estagio===1){
      this.btnlixeira2.position(width/7+400, height/2+30);
      this.btnlixeira2.class("lixeiraButton2");
   }else if(estagio ===2){
      this.btnlixeira3.position(width/7+505, height/2+30);
      this.btnlixeira3.class("lixeiraButton3");
   }else if(estagio ===3){
      this.btnlixeira4.position(width/7+610, height/2+30);
      this.btnlixeira4.class("lixeiraButton4");
   }else if(estagio===4){
      this.btnlixeira5.position(width/7+715, height/2+30);
      this.btnlixeira5.class("lixeiraButton5");
   }
     
  }

  play(tipo,fase){

     //carregar a imagem do jogo fase 1
     if (fase===1){
        // clique na lixeira de acordo com o tipo de resíduo
        // objetivo : identificação dos tipos de resídous.
        // chamar uma url com nova fase.
        // numero de lixeiras - 6
        // Só inicio o jogo quando clicar no botao iniciar.
       
        if (gameState===1){
            if (totalcoletado<25){
                if (sujeira<5 && vida>0){
                  this.residuo(tipo);
                  this.showArrecadacao();
                }else{

                  vida=vida-1
                  sujeira=0;
                  totalcoletado=0;
                  this.showLife();                  
                  if (vida==0){
                    this.gameOver();                                       gameState=0
                  }else{ 
                    gameState=3;
                    this.reset();
                    this.mensagemshowLife();
                  }  
                }
            }else{
              gameState=3;
              this.showfase1();
            }
        }else{
           this.inicioMousepressed();  
        }                        
      }
  }

  inicioMousepressed(){
    this.btninicio.mousePressed(() => {
      vida=3;
      this.showLife();
      this.inicializavalores(); 
      this.showbotoeslixeira();
      gameState=1;
    }); 
  };

  saidaMousepressed(){
    this.btnsair.mousePressed(() => {
      this.reset();
      gameState=2;
      fase=0;
      swal("SAIR", "saida");
      this.removeelementos();
      setTimeout(location.reload(), 1000);
      
       
    }); 
   
  };
  
  removeelementos(){

    // retirar todos os botoes da fase 1
    this.btnlixeira0.remove()
    this.btnlixeira1.remove()
    this.btnlixeira2.remove()
    this.btnlixeira3.remove()
    this.btnlixeira4.remove()
    this.btnlixeira5.remove()

    this.btnTitleInicio.remove();
    this.btnTitleSair.remove();
    this.btnTitleInfo.remove();

    this.btninicio.remove();;
    // quando desejo continuar minhas vidas. 

    this.btnsair.remove();
    this.btnajuda.remove();
    this.vidaTitle.remove();
    this.vidaImg1.remove();
    this.vidaImg2.remove();
    this.vidaImg3.remove();
    
    this.arrecadaTitle.remove();
   // this.acumulolixoTitle.remove();

    
    
    this.valor0Title.remove();
    this.valor1Title.remove();
    this.valor2Title.remove();
    this.valor3Title.remove();
    this.valor4Title.remove();
    this.valor5Title.remove();
    
    this.valor0.remove();
    this.valor1.remove();
    this.valor2.remove();
    this.valor3.remove();
    this.valor4.remove();
    this.valor5.remove();
      
   // this.acumulolixo.remove();

  }

  
  //
  // Os case são selecionados de forma aleatório (0,5)
  // de acordo com as lixeiras(no caso 6 - organica,papel,metal,plástico,vidro,eletronico )
  // na criação de cada sprite serão adicionadas posicões aleatórias
  // e as imagens serão atribuidas de forma aleatória dentro de cada grupo de resíduos correspondente as lixeiras. Foram feitos os uploads para as matrizes.
  // matriz[0][1] - do grupo um - resido 1
  // matriz[0][2] - do grupo um - resido 2
  //

  residuo(tipo){
   
    if (frameCount%60===0){
       lixo = createSprite(random(width/2-300,width/2+50),height/3);
       lixo.addImage(imgResiduo[tipo][Math.round(random(0,9))]);
       lixo.setSpeed( 2.5,random(90,100));
       grupoResiduos.add(lixo);
       tipo_lixeira=tipo;   
      // Verificar se o mouse foi pressionado
       this.lixeiraMousePressed();
    }
    // manter o lixo no solo
    grupoResiduos.collide(solo,this.toksolo)
  }   
  
  //
  // Seleção do residuo
  //
  lixeiraMousePressed(){
  
 console.log("GRUPO TOTAL"+grupoResiduos.length)

  // quando eu clicar no sprite.
    this.btnlixeira0.mousePressed(() => {
    if (tipo_lixeira===0){
       moeda0+=1;
       totalcoletado+=1;
      // grupoResiduos[residuos.length-1].destroy();
       grupoResiduos[grupoResiduos.length-1].remove();
    }
    });

    this.btnlixeira1.mousePressed(() => {
      if (tipo_lixeira===1){
        moeda1+=1;
        totalcoletado+=1;
        grupoResiduos[grupoResiduos.length-1].remove();
      }
    });

    this.btnlixeira2.mousePressed(() => {
     if (tipo_lixeira===2){
          moeda2+=1;
          totalcoletado+=1;
          grupoResiduos[grupoResiduos.length-1].remove();
      }
    });

    this.btnlixeira3.mousePressed(() => {
     if (tipo_lixeira===3){
        moeda3+=1;
        totalcoletado+=1;
        grupoResiduos[grupoResiduos.length-1].remove();
      }
    });

    this.btnlixeira4.mousePressed(() => {
      if (tipo_lixeira===4){
          moeda4+=1;
          totalcoletado+=1;
          grupoResiduos[grupoResiduos.length-1].remove();
      }
    });

    this.btnlixeira5.mousePressed(() => {
      if (tipo_lixeira===5){
          moeda5+=1;
          totalcoletado+=1;
          grupoResiduos[grupoResiduos.length-1].remove();
      }
    });
  }

  toksolo(lixonaocoletado){
    lixonaocoletado.velocityY=0;
    lixonaocoletado.velocityX=0;
    
    if(lixonaocoletado.isTouching(grupoResiduos)){
      lixonaocoletado.depth=grupoResiduos.maxDepth()+1      
    }
    sujeira+=1;
    lixojogado = createSprite(width-width/6,height/2-height/12,70,70);
    lixojogado.addImage(imgsujeira);
    lixojogado.scale=0.3*sujeira
    grupoSolosujo.add(lixojogado);
    

  }
    

 inicializavalores(){
  sujeira=0;
  moeda0=0;
  moeda1=0;
  moeda2=0;
  moeda3=0;
  moeda4=0;
  moeda5=0;
  totalcoletado=0;
 }

 infoMousepressed(){
  this.btnajuda.mousePressed(() => {
  swal("EDUCA ECO", "Jogo Desenvolvido para potencializar a cultura da coleta seletiva!");
  })
};

 

// arrecadação
showArrecadacao(){
 // this.acumulolixo.html(sujeira);
 // this.valor0.html(totalcoletado);
 // this.valor1.html(moeda1);
 // this.valor2.html(moeda2);
 // this.valor3.html(moeda3);
 // this.valor4.html(moeda4);
 // this.valor5.html(moeda5);
    coletatotal_lixo = createSprite(width-width/6,height/2-height/5,70,70);
    coletatotal_lixo.addImage(imgcoleta);
    coletatotal_lixo.scale=0.5*totalcoletado/10;
    grupoColeta.add(coletatotal_lixo);
    if (totalcoletado%5===0 && grupoSolosujo.length>3){
        grupoSolosujo[grupoSolosujo.length-1].remove();
    }
}

// numero de vidas
showLife() {
 
  

  if (vida==3){
     this.vidaImg1.class("scorevida");
     this.vidaImg1.position(width-width/5, (height/2-(height/8),70,70))
     this.vidaImg2.class("scorevida");
     this.vidaImg2.position(width-width/5+70, (height/2-(height/8),70,70))
     this.vidaImg3.class("scorevida");
     this.vidaImg3.position(width-width/5+140, (height/2-(height/8),70,70))
  }else if (vida==2){
     this.vidaImg3.remove()
     this.vidaImg1.class("scorevida");
     this.vidaImg1.position(width-width/5, (height/2-(height/8),70,70))
     this.vidaImg2.class("scorevida");
     this.vidaImg2.position(width-width/5+70, (height/2-(height/8),70,70))
  }else if (vida==1){
    this.vidaImg2.remove()
     this.vidaImg1.class("scorevida");
     this.vidaImg1.position(width-width/5, (height/2-(height/8),70,70))
  }else{
    this.vidaImg3.remove()
  }
}

mensagemshowLife(){
  swal({
    title: `${nickname}${"\n"}Você ainda tem${"\n"}${vida} VIDAS `,
    text: "Vamos Continuar nossa Jornada!",
    icon: "info",
    buttons:  ["Para", "Continua!"],
    closeOnClickOutside: false,
    dangerMode: true,
  })
  .then((willStop) => {
    if (willStop) {
     
        gameState=1;
     
    } else {
     
      gameState=2;
    }
  });
  this.reset();
}

showfase1() {
  swal({
    title: `Muito BEM !   ${"\n"}${nickname}${"\n"}Você Coletou${"\n"}${totalcoletado}`,
    text: "PARABÉNS!!!",
    icon: "info",
    buttons:  ["Repete", "Continua!"],
    closeOnClickOutside: false,
    dangerMode: true,
  })
  .then((proximo) => {
    if (proximo) {
     
        gameState=1;
        if (estagio<=4){
          estagio+=1
        }
        this.arrecadacaototal.html(totalcoletado*estagio);
        this.inicializavalores(); 
        this.showbotoeslixeira();
    } else {
      swal(`Clique em iniciar`);
    }
  });
  this.reset();
}

reset(){
  grupoResiduos.destroyEach();
  grupoSolosujo.destroyEach();  
  grupoColeta.destroyEach();
  grupoResiduos.setLifetimeEach(0);
  grupoSolosujo.setLifetimeEach(0);
  grupoColeta.setLifetimeEach(0);
  this.inicializavalores;  
 }
gameOver() {
  swal({
    title: `Fim de Jogo`,
    text: "Ops, Não desista. A natureza agradece!!!",
    button: true,
  });
  gameState=0;
  if (estagio>0){
     estagio=estagio-1 
  }   
  this.inicializavalores;
  this.showArrecadacao; 
  this.reset()
 
}

end() {
   swal({
    title: `Fim de Jogo`,
    text: "VocÊ venceu!!!",
    button: true,
  });
}

// chave da classe
}