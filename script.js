document.addEventListener("DOMContentLoaded", () => {
  const shimeji = document.createElement("img");
  shimeji.src = "stand1.png"; // Default standing/sitting image
  shimeji.style.position = "absolute";
  shimeji.style.bottom = "0";
  shimeji.style.left = "50px";
  shimeji.style.width = "100px"; // Adjust the size of the shimeji
  shimeji.style.transition = "transform 0.2s ease"; // Smooth flipping
  document.body.appendChild(shimeji);

  const behaviors = ["walk", "sit"];
  let currentBehavior = "sit";
  let isFacingRight = true;
  let positionX = 50;

  const walkFrames = ["walk1.png", "walk2.png"];
  let currentFrame = 0;

  function updateFrame() {
    shimeji.src = walkFrames[currentFrame];
    currentFrame = (currentFrame + 1) % walkFrames.length;
  }

  function walk() {
    if (currentBehavior === "walk") {
      updateFrame();

      // Adjust walking speed
      const speed = 5; // Increase to make it faster
      positionX += isFacingRight ? speed : -speed;

      // Boundary check (screen edges)
      if (positionX <= 0) {
        isFacingRight = true;
        shimeji.style.transform = "scaleX(1)";
      } else if (positionX >= window.innerWidth - 100) {
        isFacingRight = false;
        shimeji.style.transform = "scaleX(-1)";
      }

      shimeji.style.left = positionX + "px";
    }
  }

  function switchBehavior() {
    currentBehavior = behaviors[Math.floor(Math.random() * behaviors.length)];

    if (currentBehavior === "sit") {
      shimeji.src = "sit.png"; // Replace 'sit.png' with your sitting image
    } else if (currentBehavior === "walk") {
      isFacingRight = Math.random() > 0.5;
      shimeji.style.transform = isFacingRight ? "scaleX(1)" : "scaleX(-1)";
    }
  }

  setInterval(walk, 100); // Walking animation (adjust for speed)
  setInterval(switchBehavior, 5000); // Switch behavior every 5 seconds
});