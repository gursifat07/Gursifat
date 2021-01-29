class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      car1=createSprite(100,200);
      car2=createSprite(300,200)
      car3=createSprite(500,200)
      car4=createSprite(700,200)
      cars=[car1,car2,car3,car4];

    }
    //allPlayers["gursifat" 1000]["deepali" 200]["abc" 500]["xyz" 600]
    // index =0 
    play(){
      form.hide();
      Player.getPlayerInfo();
if(allPlayers !== undefined){
  var index = 0;
  var x =200;
  var y;
  //for(var plr = 0; plr< allPlayer.length ; plr++)
  for(var plr in allPlayers){
    index = index +1;
    x = x +200;
    y = displayHeight - allPlayers[plr].distance;
    cars[index-1].x = x;
    cars[index-1].y = y;

    if (index === player.index){ // active player
      cars[index - 1].shapeColor = "red"; // color the active player
      camera.position.x = displayWidth/2; 
      camera.position.y = cars[index-1].y;
    }
    if(keyIsDown(UP_ARROW)&& player.index!==null){
      player.distance=player.distace+10;
      player.update();
    }
    drawSprites();
  }
}

    }
  }
  
  // displayeheight = 1000
  // gursifat = 500

  // 1000 - 500 = 500  (y)

  // deepali = 400
  // 1000 - 400 = 600