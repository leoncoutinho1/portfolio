// Initialize Lucide Icons
lucide.createIcons();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effect to tech tags to random colors based on primary
const tags = document.querySelectorAll('.tech-tag');
tags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        const opacity = Math.random() * 0.3 + 0.1;
        tag.style.boxShadow = `0 10px 20px rgba(0, 248, 8, ${opacity})`;
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.boxShadow = 'none';
    });
});
