const flacy = document.getElementById('flacy');
const map = document.getElementById('map');

document.addEventListener('keydown', function(event) {
  const key = event.key;

  // Move Flacy using arrow keys
  const leftPosition = parseInt(flacy.style.left) || 0;
  const topPosition = parseInt(flacy.style.top) || 0;
  const step = 10;

  if (key === 'ArrowUp') {
    flacy.style.top = Math.max(0, topPosition - step) + 'px';
  } else if (key === 'ArrowDown') {
    flacy.style.top = Math.min(window.innerHeight - 50, topPosition + step) + 'px';
  } else if (key === 'ArrowLeft') {
    flacy.style.left = Math.max(0, leftPosition - step) + 'px';
  } else if (key === 'ArrowRight') {
    flacy.style.left = Math.min(window.innerWidth - 50, leftPosition + step) + 'px';
  }

  // Check for collision with spikes
  const flacyRect = flacy.getBoundingClientRect();
  const spikes = document.querySelectorAll('.spike');

  spikes.forEach(spike => {
    const spikeRect = spike.getBoundingClientRect();
    if (flacyRect.right > spikeRect.left && flacyRect.left < spikeRect.right && flacyRect.bottom > spikeRect.top) {
      alert('Game Over! Flacy touched the spikes.');
      location.reload();
    }
  });
});
