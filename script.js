// Get elements
const testSection = document.getElementById('testSection');
const jumpscareSection = document.getElementById('jumpscareSection');
const jumpscareVideo = document.getElementById('jumpscareVideo');
const btnStart = document.getElementById('btnStart');

// Handle "Iniciar Test" button click
btnStart.addEventListener('click', () => {
    // Hide test section immediately
    testSection.classList.remove('active');

    // Show jumpscare and leave it there forever
    jumpscareSection.classList.add('active');

    // Unmute and play the video starting at second 1
    jumpscareVideo.muted = false;
    jumpscareVideo.currentTime = 1;
    jumpscareVideo.play();
});
