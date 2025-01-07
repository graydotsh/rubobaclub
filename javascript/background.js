document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('imageContainer');
    const numberOfPearls = 25;

    for (let i = 0; i < numberOfPearls; i++) {
        const pearl = document.createElement('div');
        pearl.classList.add('tapioca-pearl', 'falling');

        const leftPosition = Math.random() * 100;
        pearl.style.left = `${leftPosition}vw`;

        const duration = Math.random() * 10 + 3;
        pearl.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 5;
        pearl.style.animationDelay = `${delay}s`;

        container.appendChild(pearl);
    }
});