const imageEl = document.querySelector(".main-img");
const overlayEl = document.querySelector(".overlay");
const zoomImageEl = document.querySelector(".zoom-img");

imageEl.addEventListener("mousemove", (e) => {
    const rect = imageEl.getBoundingClientRect();
    let mouseX = e.clientX - rect.left - overlayEl.offsetWidth / 2;
    let mouseY = e.clientY - rect.top - overlayEl.offsetHeight / 2;

    if (mouseX < 0) mouseX = 0;
    if (mouseY < 0) mouseY = 0;
    if (mouseX + overlayEl.offsetWidth > imageEl.offsetWidth) {
        mouseX = imageEl.offsetWidth - overlayEl.offsetWidth;
    }
    if (mouseY + overlayEl.offsetHeight > imageEl.offsetHeight) {
        mouseY = imageEl.offsetHeight - overlayEl.offsetHeight;
    }

    overlayEl.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    overlayEl.style.display = "block";
    zoomImageEl.style.display = "block";
    zoomImageEl.style.backgroundImage = imageEl.style.backgroundImage;
    const zoomX = ((e.clientX - rect.left) / imageEl.offsetWidth) * 100;
    const zoomY = ((e.clientY - rect.top) / imageEl.offsetHeight) * 100;
    zoomImageEl.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
});

imageEl.addEventListener("mouseleave", function () {
    overlayEl.style.display = "none";
    zoomImageEl.style.display = "none";
});
