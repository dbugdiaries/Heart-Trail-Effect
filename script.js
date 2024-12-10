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
let isGeneratingHearts = false;

function createHeart(xPos, yPos) {
    const heartEl = document.createElement("div");
    heartEl.classList.add("heart");
    
    // Randomize heart size
    const size = Math.random() * 50 + 30; // Between 30 and 80 pixels
    heartEl.style.width = `${size}px`;
    heartEl.style.height = `${size}px`;
    
    // Position the heart exactly at touch point
    heartEl.style.left = `${xPos}px`;
    heartEl.style.top = `${yPos}px`;
    
    bodyEl.appendChild(heartEl);
    
    // Remove heart after 5 seconds
    setTimeout(() => {
        heartEl.remove();
    }, 5000);
}

function handleTouchMove(event) {
    // Prevent default touch behavior
    event.preventDefault();
    
    // Only generate hearts if touch is active
    if (isGeneratingHearts) {
        const touch = event.touches[0];
        const xPos = touch.clientX;
        const yPos = touch.clientY;
        createHeart(xPos, yPos);
    }
}

function startHeartGeneration(event) {
    // Prevent default touch behavior
    event.preventDefault();
    
    // Mark heart generation as active
    isGeneratingHearts = true;
    
    // Create initial heart at touch point
    const touch = event.touches[0];
    const xPos = touch.clientX;
    const yPos = touch.clientY;
    createHeart(xPos, yPos);
}

function stopHeartGeneration() {
    // Stop generating hearts when touch ends
    isGeneratingHearts = false;
}

// Prevent default scrolling behaviors
document.body.addEventListener('touchmove', handleTouchMove, { passive: false });

// Touch event listeners
bodyEl.addEventListener("touchstart", startHeartGeneration);
bodyEl.addEventListener("touchend", stopHeartGeneration);
bodyEl.addEventListener("touchcancel", stopHeartGeneration);