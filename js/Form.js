/* o jogador irá colo
 seu nome e escolher o avatar*/

class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "nickname");
    this.playButton = createButton("");
    this.titleform  = createElement("h3");
    this.mensagem=createElement("h5");
  }
  
  
  setElementsPosition() {
    this.titleform.position(width/9, height/5);
    this.input.position(width/2+350, height/2-20);
    this.playButton.position(width/2 +350 , height/2+30);
    this.mensagem.position(width/2+350, height/2+40);
    //configuração padrão do avatar.
   
   
  }

  setElementsStyle() {
    this.titleform.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.mensagem.class("nickname");
    
   
  }


  hide() {
  
    this.playButton.hide();
    this.input.hide();
    this.titleform.hide();
    this.mensagem.hide();

  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
    nickname = this.input.value();
  
    if (nickname!=''){
      this.hide();
      // Escrever o nome do nickname escolhido    
      var $texto = document.querySelector('.nickname'),
      // Pega a string do conteúdo atual
      HTMLTemporario = $texto.innerHTML,
      // Novo HTML que será inserido
      HTMLNovo = agente+'</br>';
   
      // Concatena as strings colocando o novoHTML antes do HTMLTemporario
       HTMLTemporario = HTMLNovo + HTMLTemporario;
   
      // Coloca a nova string(que é o HTML) no DOM
      $texto.innerHTML = HTMLTemporario;
      agente.hide()
      fase=1;
      telafase1=true; 
   
      
      
    }else{
      swal("Informe seu nome!");
    }
      
  });

    

  }

 apresentacao(){
    var titulo = `Desafio : Coleta(s) Seletiva(s)`;
    this.titleform.html(titulo);
  
 }

  display() {

    // avatar no formulário
    agente = new Avatar();
    agente.display();

    this.apresentacao();
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed()
     
  }
}
