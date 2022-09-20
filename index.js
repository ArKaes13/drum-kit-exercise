window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing');
    setTimeout( () => {
        key.classList.toggle('playing');}, 70);
});