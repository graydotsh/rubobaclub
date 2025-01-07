document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const contentWrapper = document.getElementById('contentWrapper');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetIndex = link.getAttribute('data-target');
            const offset = -targetIndex * 100;

            contentWrapper.style.transform = `translateX(${offset}vw)`;

            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
