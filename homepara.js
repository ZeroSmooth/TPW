window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrollY = window.scrollY;
    const translateY = scrollY * 0.5; // Adjust the factor for the desired parallax effect
    console.log(translateY); // Add this line to check the value
    parallaxBg.style.transform = `translateY(${translateY}px)`;
});