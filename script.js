document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');

    // Fade in sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
