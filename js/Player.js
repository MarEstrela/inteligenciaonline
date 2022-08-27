class Player{
    constructor(jogador,avatar){
       this.name = jogador;
       this.avatar ="imgAvatar"+ avatar;
    }
    show(){
        text(this.name,width-40,height-80);
        image(this.imgavatar,width/2-40,height/2-40);
    } 
}