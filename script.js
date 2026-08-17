// მარტივი მუსიკის პლეერი
const tracks = [
  { title: "You Light My Days", src: "music/you-light-my-days.mp3" },
  { title: "New Melody", src: "music/new-melody.mp3" }
];

let currentTrack = 0;
const audio = new Audio(tracks[currentTrack].src);

function playMusic() {
  audio.play();
}

function pauseMusic() {
  audio.pause();
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  audio.src = tracks[currentTrack].src;
  audio.play();
}

// ღილაკების მიბმა
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#playBtn").addEventListener("click", playMusic);
  document.querySelector("#pauseBtn").addEventListener("click", pauseMusic);
  document.querySelector("#nextBtn").addEventListener("click", nextTrack);
});
