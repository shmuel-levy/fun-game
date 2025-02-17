const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton(e) {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.transition = "none";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    if (e.type === "touchstart") {
        e.preventDefault();
    }
}

yesBtn.addEventListener("click", () => {
    const audio = document.getElementById("loveAudio");
    audio.play();
    
    question.innerHTML = "why are you gay";
    question.style.fontSize = "clamp(1.2em, 4vw, 1.8em)";
    gif.src = "https://i.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif";
    addConfetti();
});


function addConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}