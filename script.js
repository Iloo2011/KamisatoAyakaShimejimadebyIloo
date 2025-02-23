document.addEventListener("DOMContentLoaded", function () {
    console.log("Shimeji script loaded!");

    const shimeji = document.createElement("img");
    let facingRight = true; // Track facing direction
    shimeji.src = facingRight ? "assets/walk1.png" : "assets/walk1_mirrored.png"; // Default starting image
    shimeji.style.position = "fixed";
    shimeji.style.left = "50px";
    shimeji.style.bottom = "50px";
    shimeji.style.width = "100px";
    shimeji.style.zIndex = "1000";
    document.body.appendChild(shimeji);

    let direction = "right"; // Start moving right
    let speed = 5;

    function walk() {
        let currentPos = parseInt(shimeji.style.left) || 50;

        if (direction === "right") {
            if (!facingRight) {
                shimeji.src = "assets/walk1.png"; // Switch to right-facing image
                facingRight = true;
            }
            currentPos += speed;
            if (currentPos >= window.innerWidth - 100) {
                direction = "left"; // Turn around
            }
        } else {
            if (facingRight) {
                shimeji.src = "assets/walk1_mirrored.png"; // Switch to left-facing image
                facingRight = false;
            }
            currentPos -= speed;
            if (currentPos <= 0) {
                direction = "right"; // Turn back
            }
        }

        shimeji.style.left = `${currentPos}px`;
    }

    setInterval(walk, 100); // Adjust timing if needed

    console.log("Shimeji movement started!");
});
