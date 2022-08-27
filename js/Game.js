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
      this.vidaImg1 = createDiv('');
      this.vidaImg2 = createDiv('');
      this.vidaImg3 = createDiv('');
      
      this.arrecadaTitle = createElement("h2");
      
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
      
        
        this.vidaImg1.class("scorevida");
        this.vidaImg1.position(width-width/5, (height/2-(height/8),70,70))
        this.vidaImg2.class("scorevida");
        this.vidaImg2.position(width-width/5+70, (height/2-(height/8),70,70))
        this.vidaImg3.class("scorevida");
        this.vidaImg3.position(width-width/5+140, (height/2-(height/8),70,70))


        this.btnlixeira0.position(width/7+190, height/2+30);
        this.btnlixeira0.class("lixeiraButton0");
        this.btnlixeira1.position(width/7+295, height/2+30);
        this.btnlixeira1.class("lixeiraButton1");
        this.btnlixeira2.position(width/7+400, height/2+30);
        this.btnlixeira2.class("lixeiraButton2");
        this.btnlixeira3.position(width/7+505, height/2+30);
        this.btnlixeira3.class("lixeiraButton3");
        this.btnlixeira4.position(width/7+610, height/2+30);
        this.btnlixeira4.class("lixeiraButton4");
        this.btnlixeira5.position(width/7+715, height/2+30);
        this.btnlixeira5.class("lixeiraButton5");
        this.btnlixeira0.hide();
        this.btnlixeira1.hide();
        this.btnlixeira2.hide();
        this.btnlixeira3.hide();
        this.btnlixeira4.hide();
        this.btnlixeira5.hide();

      

    }
    
    showbotoeslixeira(){
      // criando os botoes das lixeiras
    if (estagio===0){
        this.btnlixeira0.show();
        this.btnlixeira1.show();
        this.btnlixeira2.hide();
        this.btnlixeira3.hide();
        this.btnlixeira4.hide();
        this.btnlixeira5.hide();

      }else if(estagio===1){
        this.btnlixeira2.show();      
        this.btnlixeira3.hide();
        this.btnlixeira4.hide();
        this.btnlixeira5.hide();

    }else if(estagio ===2){
        this.btnlixeira3.show();
        this.btnlixeira4.hide();

    }else if(estagio ===3){
        this.btnlixeira4.show();
        this.btnlixeira5.hide();

    }else if(estagio===4){
        this.btnlixeira5.show();
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
              if (totalcoletado<26){
                  if (sujeira<6 && vida>0){
                    this.residuo(tipo);
                    this.showArrecadacao();
                  }else{
                    vida=vida-1;
                    sujeira=0;
                    totalcoletado=0;
                    this.showLife();                  
                    if (vida===0){
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
          }

          this.inicioMousepressed();  
                                  
        }
    }

    inicioMousepressed(){
      this.btninicio.mousePressed(() => {
        if (estagio===0||estagio===5||vida===0){
            vida=3;
            this.vidaImg1.show();
            this.vidaImg2.show();
            this.vidaImg3.show()
        }
        
        this.showLife();
        this.showArrecadacao();
        this.inicializavalores(); 
        this.showbotoeslixeira();
        gameState=1;
      }); 
    };

    saidaMousepressed(){
      this.btnsair.mousePressed(() => {
      

        
        swal({
          title: `${nickname}${"\n"}`,
          text: "Obrigada por jogar!!! Apoie nossas iniciativas",
          icon: "info",
            
        })
        
        setTimeout(() => {
          location.reload()
          this.removeelementos();
          this.reset();
          gameState=2;
          fase=0;
        }, 3000);
      
      
        
        
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
        if (estagio>2){
          lixo.setSpeed( 2.5*estagio,random(90,100));
        }else{
              lixo.setSpeed( 2.5,random(90,100));
        }     
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
      lixojogado = createSprite(width-width/6,height-height/2,90,90);
      lixojogado.addImage(imgsujeira);
      lixojogado.scale=0.3*sujeira
      grupoSolosujo.add(lixojogado);

      if (sujeira>3){
        mosca = createSprite(width/2,height/2-height/4,50,50)
        mosca.velocityY=-3;
        mosca.addImage(imgmosca);
        mosca.lifeTime=100;
        grupoMosca.add(mosca);
      }
      
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
      swal("EDUCA ECO", "Jogo Desenvolvido para potencializar a cultura da coleta seletiva! Desenvolvido em JS.Design feito no Canvas.");
      })
    };

    // arrecadação
    showArrecadacao(){
        coletatotal_lixo = createSprite(width-width/6,height/2-height/5.5,70,70);
        coletatotal_lixo.addImage(imgcoleta);
        coletatotal_lixo.scale=0.8*totalcoletado/10;
        grupoColeta.add(coletatotal_lixo);
        if (totalcoletado%5===0 && grupoSolosujo.length>2){
            grupoSolosujo[grupoSolosujo.length-1].remove();
        }
    }

    // numero de vidas
    showLife() {
    
      if (vida===2){
        this.vidaImg3.hide()
      }else if (vida==1){
        this.vidaImg2.hide()
      }else if (vida===0){
        this.vidaImg1.hide()
        estagio=0;
      }
    }

    mensagemshowLife(){
      swal({
        title: `${nickname}${"\n"}`,
        text: "Não foi dessa vez!!!",
        icon: "info",
          
      })
      setTimeout(() => {
        if (vida>0) {
          gameState=1;
        } else {
        gameState=2;
        }
        this.reset();
      }, 3000);  
    }

    showfase1() {
      swal({
        title: `Muito BEM !${"\n"}${nickname}${"\n"}`,
        text: "Avançamos!!!",
        icon: "info",
        button: true,
        closeOnClickOutside: false,
      })
      if (estagio<=4){
        estagio+=1
        gameState=1;
        // caso não tenha deixado nenhum lixo. Ganha uma vida.
        if (sujeira===0 && vida<3){
            swal({
              title: `Huuuu`,
              text: "VocÊ Ganhou uma vida!!! Lixo = 0",
              button: true,
            });
            vida+=1;
        }
        this.inicializavalores(); 
        this.showbotoeslixeira();
      } 
      this.reset();
    }

    reset(){
      
      grupoResiduos.setLifetimeEach(0);
      grupoSolosujo.setLifetimeEach(0);
      grupoColeta.setLifetimeEach(0);
      grupoResiduos.destroyEach();
      grupoSolosujo.destroyEach();  
      grupoColeta.destroyEach();
      
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
}