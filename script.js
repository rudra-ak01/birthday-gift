// Countdown Timer
const countdownDate = new Date("May 01, 2025 00:00:00").getTime();
let countdownInterval = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Happy Birthday, Tinu!";
    }
}, 1000);

function createBalloons(count = 30) {
    const container = document.getElementById("balloon-container");
    const colors = ["#e74c3c", "#3498db", "#f1c40f", "#2ecc71", "#ff69b4", "#9b59b6", "#1abc9c"];
  
    for (let i = 0; i < count; i++) {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");
  
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = 4 + Math.random() * 4;
      const size = 30 + Math.random() * 30;
  
      balloon.style.backgroundColor = color;
      balloon.style.left = `${left}%`;
      balloon.style.animationDelay = `${delay}s`;
      balloon.style.animationDuration = `${duration}s`;
      balloon.style.width = `${size}px`;
      balloon.style.height = `${size * 1.5}px`;
  
      container.appendChild(balloon);
    }
  }
  
  createBalloons(20); // Increase to 40 or more balloons
  