
class Particle {

    constructor() {
      this.x = -100;
      this.y = 1000;
      this.vx = random(-1, 9);
      this.vy = random(-10, -1);
      this.alpha = 355;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= -10;
    }
  
    show() {
      noStroke();
      //stroke(255);
      //150, 220, 250
      fill(177, 250, 300, this.alpha);
      ellipse(this.x, this.y, 20);
    }
  
  }
  
  const particles = [];
  
  function draw() {
    background(177, 242, 237);
    for (let i = 0; i < 2; i++) {
      let p = new Particle();
      particles.push(p);
    }
    for (let i = particles.length - 2; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        // remove this particle
        particles.splice(i, 1);
      }
    }
  }