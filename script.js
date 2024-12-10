const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", ()=>{
    // console.log("Moved");
    // console.log(event.offsetX)
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});


// Event listener for touch events
bodyEl.addEventListener("touchstart", (event) => {
    // Prevent default touch behavior
    event.preventDefault();
    // Get the touch position
    const touch = event.touches[0];
    const xPos = touch.clientX;
    const yPos = touch.clientY;
    createSpan(xPos, yPos);
});