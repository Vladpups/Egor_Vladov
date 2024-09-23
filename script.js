document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка по якорям
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Эффект появления при прокрутке
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Обработка формы обратной связи
    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Ваше сообщение отправлено!');
        form.reset();
    });
});
