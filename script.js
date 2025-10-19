const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.position = 'absolute';
});

yesBtn.addEventListener("click", () => {
    alert("حتى محمد يحبك 💖");
});