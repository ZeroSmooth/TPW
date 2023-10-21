const parallaxContainer = document.getElementById('parallax-container');
const parallaxContent = document.querySelector('.abgroup');
let isHovering = false;

parallaxContent.addEventListener('mouseenter', () => {
    isHovering = true;
});

parallaxContent.addEventListener('mousemove', (e) => {
    if (!isHovering) return;

    const rect = parallaxContainer.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltAngleX = -y / 10;
    const tiltAngleY = x / 20;

    parallaxContainer.style.transition = 'transform 0.5s ease-out';
    parallaxContainer.style.transform = `perspective(1000px) rotateX(${tiltAngleX}deg) rotateY(${tiltAngleY}deg)`;
});

parallaxContent.addEventListener('mouseleave', () => {
    isHovering = false;

    parallaxContainer.style.transition = 'transform 0.5s ease-out';
    parallaxContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});