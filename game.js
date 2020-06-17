class Game {
    constructor() {
      this.background = new Background();
      this.obstacles = [];
      this.width = 1500;
      this.height = 800;
      this.frequency = 100;
    }
  
    preloadGame() {
      targets.preload();
      this.backgroundImgs = [
        { src: loadImage("/assets/background0.png"), x: 0, speed: 0},
        { src: loadImage("/assets/background1.png"), x: 0, speed: .5},
        { src: loadImage("/assets/background2.png"), x: 0, speed: 1},
        
      ];
      this.obstacleImages = [
        { src: loadImage("/assets/bell.png"), x: 0, height: 100, type: 1 },
        { src: loadImage("/assets/cherry.png"), x: 0, height: 250, type: 2 },
        { src: loadImage("/assets/seven.png"), x: 0, height: 400, type: 3 },
        { src: loadImage("/assets/watermelon.png"), x: 0, height: 550, type: 4 },
      ];
    }
  
    drawingGame() {
      // console.log("iamdrawing");
      console.log(this.obstacles)
      clear();
      // frameRate(30)
      this.background.drawingBackground();
      // collision.drawingCollisionImg();
      if(frameCount%500==0){
        this.frequency=Math.floor(this.frequency/1.1)
      }
      if (frameCount %this.frequency  == 0) {
    
        let randomElem = this.obstacleImages[
          Math.floor(Math.random() * this.obstacleImages.length)
        ];
        this.obstacles.push(
          new Obstacles(randomElem.height, randomElem.src, randomElem.type)
        );
        // console.log(randomElem);
      }
      this.obstacles.forEach((elem) => {
        elem.drawingObstacles();
      });
  
      targets.drawingTargetsImg();
    }
  }



    