// const bodyEl = document.querySelector("body");

// bodyEl.addEventListener("mousemove", ()=>{
//     // console.log("Moved");
//     // console.log(event.offsetX)
//     const xPos = event.offsetX;
//     const yPos = event.offsetY;
//     const spanEl = document.createElement("span");
//     spanEl.style.left = xPos + "px";
//     spanEl.style.top = yPos + "px";
//     const size = Math.random()*100;
//     spanEl.style.width = size + "px";
//     spanEl.style.height = size + "px";
//     bodyEl.appendChild(spanEl);
//     setTimeout(() => {
//         spanEl.remove();
//     }, 3000);
// });


// // Event listener for touch events
// bodyEl.addEventListener("touchstart", (event) => {
//     // Prevent default touch behavior
//     event.preventDefault();
//     // Get the touch position
//     const touch = event.touches[0];
//     const xPos = touch.clientX;
//     const yPos = touch.clientY;
//     createSpan(xPos, yPos);
// });




const bodyEl = document.querySelector("body");
let heartInterval;

function createHeart(xPos, yPos) {
    const heartEl = document.createElement("div");
    heartEl.classList.add("heart");
    
    // Randomize heart size
    const size = Math.random() * 50 + 30; // Between 30 and 80 pixels
    heartEl.style.width = `${size}px`;
    heartEl.style.height = `${size}px`;
    
    // Position the heart
    heartEl.style.left = `${xPos}px`;
    heartEl.style.top = `${yPos}px`;
    
    bodyEl.appendChild(heartEl);
    
    // Remove heart after animation
    setTimeout(() => {
        heartEl.remove();
    }, 3000);
}

function startHeartGeneration(event) {
    // Prevent default touch behavior
    event.preventDefault();
    
    // Get the initial touch position
    const touch = event.touches[0];
    const initialX = touch.clientX;
    const initialY = touch.clientY;
    
    // Generate hearts continuously while touched
    heartInterval = setInterval(() => {
        // Add slight random variation to heart position
        const offsetX = Math.random() * 40 - 20; // -20 to 20
        const offsetY = Math.random() * 40 - 20;
        createHeart(initialX + offsetX, initialY + offsetY);
    }, 100); // Adjust timing as needed
}

function stopHeartGeneration() {
    // Stop generating hearts when touch ends
    clearInterval(heartInterval);
}

// Prevent default scrolling behaviors
document.body.addEventListener('touchmove', (e) => {
    e.preventDefault();
}, { passive: false });

// Touch event listeners
bodyEl.addEventListener("touchstart", startHeartGeneration);
bodyEl.addEventListener("touchend", stopHeartGeneration);
bodyEl.addEventListener("touchcancel", stopHeartGeneration);