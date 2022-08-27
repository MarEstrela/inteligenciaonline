/* o jogador irá colocar seu nome e escolher o avatar*/

class Avatar {

  constructor() {
    this.btnavatar1 = createButton("");
    this.btnavatar2 = createButton("");
    this.btnavatar3 = createButton("");
    this.btnavatar4 = createButton("");
    this.btnavatar5 = createButton("");
    this.btnavatar6 = createButton("");
    this.btnavatar7 = createButton("");
    this.btnavatar8 = createButton("");
    this.btnavatar9 = createButton("");
    this.btnavatar10 = createButton("");
    this.btnavatar11 = createButton("");
    this.btnavatar12 = createButton("");
    this.btnavatar13 = createButton("");
    this.btnavatar14 = createButton("");
    this.btnavatar15 = createButton("");
    this.btnavatar16 = createButton("");
    this.btnavatar17 = createButton("");
    this.btnavatar18 = createButton("");
    this.btnavatar19 = createButton("");
    this.btnavatar20 = createButton("");
    this.btnavatar21 = createButton("");
  }
  
  setAvatarPosition() {
    this.btnavatar1.position(width/2, height/15 );
    this.btnavatar2.position(width/2+(width/15), height/15 );
    this.btnavatar3.position(width/2+(width/8), height/15 );
    this.btnavatar4.position(width/2+(width/5.3), height/15 );
    this.btnavatar5.position(width/2+(width/4), height/15 );
    this.btnavatar6.position(width/2+(width/3.2), height/15 );
    this.btnavatar7.position(width/2+(width/2.67), height/15 );

    this.btnavatar8.position(width/2, height/5 );
    this.btnavatar9.position(width/2+(width/15), height/5 );
    this.btnavatar10.position(width/2+(width/8), height/5 );
    this.btnavatar11.position(width/2+(width/5.3), height/5 );
    this.btnavatar12.position(width/2+(width/4), height/5 );
    this.btnavatar13.position(width/2+(width/3.2), height/5 );
    this.btnavatar14.position(width/2+(width/2.67), height/5 );
    
     }

  setAvatarStyle() {
    this.btnavatar1.class("avatarButton1");
    this.btnavatar2.class("avatarButton2");
    this.btnavatar3.class("avatarButton3");
    this.btnavatar4.class("avatarButton4");
    this.btnavatar5.class("avatarButton5");
    this.btnavatar6.class("avatarButton6");
    this.btnavatar7.class("avatarButton7");
    this.btnavatar8.class("avatarButton8");
    this.btnavatar9.class("avatarButton9");
    this.btnavatar10.class("avatarButton10");
    this.btnavatar11.class("avatarButton11");
    this.btnavatar12.class("avatarButton12");
    this.btnavatar13.class("avatarButton13");
    this.btnavatar14.class("avatarButton14");
  }

  hide() {
  
    this.btnavatar1.hide();
    this.btnavatar2.hide();
    this.btnavatar3.hide();
    this.btnavatar4.hide();
    this.btnavatar5.hide();
    this.btnavatar6.hide();
    this.btnavatar7.hide();
    this.btnavatar8.hide();
    this.btnavatar9.hide();
    this.btnavatar10.hide();
    this.btnavatar11.hide();
    this.btnavatar12.hide();
    this.btnavatar13.hide();
    this.btnavatar14.hide();


  }
 

  handleAvatarMousePressed() {
   
    this.btnavatar1.mousePressed(() => {
    image(imgAvatar1,width/2+200 , height/2-40,150,150);
    cara=1;
    
    });

    this.btnavatar2.mousePressed(() => {
    image(imgAvatar2,width/2+200 , height/2-40,150,150);
    cara=2;
    });
    this.btnavatar3.mousePressed(() => {
     image(imgAvatar3,width/2+200 , height/2-40,150,150);
     cara=3;
    });
    
    this.btnavatar4.mousePressed(() => {
          image(imgAvatar4,width/2+200 , height/2-40,150,150);
          cara=4;
    });
    
    this.btnavatar5.mousePressed(() => {
      image(imgAvatar5,width/2+200 , height/2-40,150,150);
      cara=5;
    });
    
    this.btnavatar6.mousePressed(() => {
      image(imgAvatar6,width/2+200 , height/2-40,150,150);
      cara=6;
    });
    
    this.btnavatar7.mousePressed(() => {
      image(imgAvatar7,width/2+200 , height/2-40,150,150);
      cara=7;
    });
    
    this.btnavatar8.mousePressed(() => {
      image(imgAvatar8,width/2+200 , height/2-40,150,150);
      cara=8;
    });
    
    this.btnavatar9.mousePressed(() => {
      image(imgAvatar9,width/2+200 , height/2-40,150,150);
      cara=9;
    });

    this.btnavatar10.mousePressed(() => {
      image(imgAvatar10,width/2+200 , height/2-40,150,150);
      cara=10;
    });

    this.btnavatar11.mousePressed(() => {
      image(imgAvatar11,width/2+200 , height/2-40,150,150);
      cara=11;
    });

    this.btnavatar12.mousePressed(() => {
      image(imgAvatar12,width/2+200 , height/2-40,150,150);
      cara=12;
    });

    this.btnavatar13.mousePressed(() => {
      image(imgAvatar13,width/2+200 , height/2-40,150,150);
      cara=13;
    });

    this.btnavatar14.mousePressed(() => {
      image(imgAvatar14,width/2+200 , height/2-40,150,150);
      cara=14;
    });

  }

  display() {
    image(imgAvatar0,width/2+200 , height/2-40,150,150);
    this.setAvatarPosition();
    this.setAvatarStyle();
    this.handleAvatarMousePressed(); 
    
  }
}
