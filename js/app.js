// app.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Animation Observer (Intersection Observer API)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Uncomment to only animate once:
                // observer.unobserve(entry.target); 
            } else {
                // Remove class to animate repeatedly when scrolling out and back in
                // entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // 2. Smooth Scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 85, // Offset for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Navbar scroll effect
    const navbar = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(18, 18, 18, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(18, 18, 18, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 4. Parallax effect for blobs
    const blobs = document.querySelectorAll('.blob');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        blobs[0].style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
        blobs[1].style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    });
});
