document.addEventListener("DOMContentLoaded", function () {
    console.log("Shimeji script loaded!");

    const shimeji = document.createElement("img");
    shimeji.src = "assets/walk1.png"; // Default starting image
    shimeji.style.position = "fixed";
    shimeji.style.left = "50px";
    shimeji.style.bottom = "50px";
    shimeji.style.width = "100px"; // Adjust size if needed
    shimeji.style.zIndex = "1000";
    document.body.appendChild(shimeji);

    let direction = "right"; // Start moving right
    let speed = 5;
    let frame = 1;
    let totalFrames = 2; // Assuming walk1.png and walk2.png exist

    function walk() {
        let currentPos = parseInt(shimeji.style.left) || 50;
        
        if (direction === "right") {
            shimeji.style.transform = "scaleX(1)"; // Face right
            currentPos += speed;
            if (currentPos >= window.innerWidth - 100) {
                direction = "left"; // Turn around
            }
        } else {
            shimeji.style.transform = "scaleX(-1)"; // Face left
            currentPos -= speed;
            if (currentPos <= 0) {
                direction = "right"; // Turn back
            }
        }

        // Update walking animation
        frame = frame % totalFrames + 1;
        shimeji.src = `assets/walk${frame}.png`; // Cycle between walk1.png and walk2.png
        
        shimeji.style.left = `${currentPos}px`;
    }

    setInterval(walk, 200); // Adjust timing for smoother animation

    console.log("Shimeji movement started!");
});
