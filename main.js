let startGame = false;
let startImg;
// let gameOver = false
let song;
const game = new Game();
const obstacle = new Obstacles();
const targets = new Targets();
let points = 0
let lives = 3
// ************************************************************************************************** lives


function preload() {
  game.preloadGame();
  startImg = loadImage("./assets/startScreen.png");
  song = loadSound("./assets/song.mp3");
}

function setup() {
  createCanvas(game.width, game.height);
  obstacle.setup();
  // song.play(); ************************* song

}

function draw() {

  if (startGame == true){
  game.drawingGame();
} else {
  image(startImg, 0, 0, width, height);
}
// ******************* remove obstacles that are off the canvas
  // game.obstacles=game.obstacles.filter(ob => {
  //   if (!ob.collides()) {
  //     return true
  //   }
  // })
  // console.log(game.obstacles);

  text("Score: " + points, 90, 20);
  text("lives: " + lives, 10, 20);

  // ************************************************************************************************* lives



  // ***************************************** song
  // if (gameOver = true){
    // song.stop
  // }
}





function keyPressed() {
  // if (game==false){
  //     song.play(); 
  // }
  
  startGame = true;
  game.obstacles=game.obstacles.filter((obs) => {
    if (keyCode === 72 && obs.collides() && obs.type == 1){
      // console.log("please work", obs.type);
      points++;
      let saveImg=targets.imgbell
      targets.imgbell = game.collisionImgs[0].src;
      setTimeout(function(){ targets.imgbell=saveImg}, 700); 
      return false
  
    } else if (keyCode === 74 && obs.collides() && obs.type == 2){
      // console.log("i do work cherry", obs.type);
      points++;
      let saveImg=targets.imgCherry
      targets.imgCherry = game.collisionImgs[1].src;
      setTimeout(function(){targets.imgCherry=saveImg}, 700);
      return false
      
    } else if (keyCode === 75 && obs.collides() && obs.type == 3) {
      // console.log("i work 7", obs.type);
      points++;
      let saveImg=targets.imgSeven
      targets.imgSeven = game.collisionImgs[2].src;
      setTimeout(function(){targets.imgSeven=saveImg}, 700);
      return false

    } else if (keyCode == 76 && obs.collides() && obs.type ==4) {
      // console.log("i work watemelon", obs.type);
      points++;
      let saveImg=targets.imgWatermelon
      targets.imgWatermelon = game.collisionImgs[3].src;
      setTimeout(function(){targets.imgWatermelon=saveImg}, 700);
      return false
    } else {return true}
  
  // ************************************************************************************************* lives
  });

}


// function noCollision(){
//   game.obstacles.forEach((obs) => {
//     if (!obs.this.x <= 0){
//       this.lives --;
//     }
//   });
// }
  // ************************************************************************************************* lives
