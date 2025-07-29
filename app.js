// countdown.js
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('2026-02-22T13:00:00'); // Feb 22, 2026, 1 PM

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownElement.textContent = "The wedding has started!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.textContent =
    `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);
