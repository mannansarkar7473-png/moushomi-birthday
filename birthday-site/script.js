function checkPassword() {
    let inputVal = document.getElementById("passcode").value.trim();
    let cleanInput = inputVal.replace(/[\/\-\.\s]/g, "");
    
    const validPasswords = ["08112004", "8112004"];

    if (validPasswords.includes(cleanInput)) {
        document.getElementById("lock-screen").classList.add("hidden");
        document.getElementById("main-content").classList.remove("hidden");
        
        startTimer();
        startFloatingDecor();
        
        const music = document.getElementById("bg-music");
        music.play().catch(() => {});
    } else {
        document.getElementById("error-msg").innerText = "Sahi Janam-Tithi daalein (e.g., 08/11/2004)";
    }
}

function startFloatingDecor() {
    const container = document.getElementById("floating-decor-container");
    const icons = ['🎈', '🍫', '❤️', '💖', '🍬', '🎈', '🍫', '🌹'];

    setInterval(() => {
        const item = document.createElement("div");
        item.classList.add("floating-item");
        item.innerText = icons[Math.floor(Math.random() * icons.length)];
        item.style.left = `${Math.random() * 95}vw`;
        
        const duration = 5 + Math.random() * 5;
        item.style.animationDuration = `${duration}s`;
        
        const size = 1.5 + Math.random() * 1.5;
        item.style.fontSize = `${size}rem`;

        container.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, duration * 1000);
    }, 400);
}

function nextFlow(stepNumber) {
    const steps = document.querySelectorAll(".flow-step");
    steps.forEach(step => step.classList.add("hidden"));
    document.getElementById(`flow-${stepNumber}`).classList.remove("hidden");
}

function startTimer() {
    const startDate = new Date("2023-02-14T00:00:00");

    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const timerEl = document.getElementById("timer");
        if (timerEl) {
            timerEl.innerHTML = `
                <div>${days}<br><span style="font-size:0.75rem; color:#ccc;">Days</span></div>
                <div>${hours}<br><span style="font-size:0.75rem; color:#ccc;">Hours</span></div>
                <div>${minutes}<br><span style="font-size:0.75rem; color:#ccc;">Mins</span></div>
                <div>${seconds}<br><span style="font-size:0.75rem; color:#ccc;">Secs</span></div>
            `;
        }
    }, 1000);
}

function cutTheCake() {
    const cakeContainer = document.getElementById("cake-container");
    const proposalBox = document.getElementById("proposal-box");
    
    cakeContainer.style.transform = "scale(0.8) rotate(-10deg)";
    cakeContainer.style.opacity = "0";
    
    setTimeout(() => {
        cakeContainer.classList.add("hidden");
        proposalBox.classList.remove("hidden");
    }, 400);
}

function sayYes() {
    alert("Yay! Moushomi said YES! ❤️💍 Tumhari zindagi ki sabse haseen shuruaat!");
}

let isPlaying = true;
function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (isPlaying) {
        music.pause();
        isPlaying = false;
    } else {
        music.play();
        isPlaying = true;
    }
}