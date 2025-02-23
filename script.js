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

    function walk() {
        let currentPos = parseInt(shimeji.style.left) || 50;

        if (direction === "right") {
            shimeji.style.transform = "scaleX(1)"; // Face right
            currentPos += speed;
            if (currentPos >= window.innerWidth - 100) {
                direction = "left"; // Turn around
            }
        } else {
            currentPos -= speed;
            if (currentPos <= 0) {
                direction = "right"; // Turn back
            }
        }

        // Ensure the flip happens correctly based on direction
        shimeji.style.transform = direction === "right" ? "scaleX(1)" : "scaleX(-1)";
        shimeji.style.left = `${currentPos}px`;
    }

    setInterval(walk, 100); // Adjust timing if needed

    console.log("Shimeji movement started!");
});
