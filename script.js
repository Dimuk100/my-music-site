// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Music Player
const audio = new Audio("music/you-light-my-days.mp3");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const timeDisplay = document.getElementById("timeDisplay");

playBtn.addEventListener("click", () => audio.play());
pauseBtn.addEventListener("click", () => audio.pause());
nextBtn.addEventListener("click", () => {
  audio.src = "music/new-melody.mp3";
  audio.play();
});

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  timeDisplay.textContent = `${Math.floor(audio.currentTime/60)}:${Math.floor(audio.currentTime%60)} / ${Math.floor(audio.duration/60)}:${Math.floor(audio.duration%60)}`;
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const email = e.target.querySelector("input[type=email]").value;
  if(!email.includes("@")) {
    alert("Please enter a valid email!");
  } else {
    alert("Message sent successfully!");
  }
});
