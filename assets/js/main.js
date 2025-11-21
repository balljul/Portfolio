class Portfolio {
    constructor() {
        this.data = window.portfolioData || {};
        this.init();
    }

    async init() {
        this.setupNavigation();
        this.setupAnimations();
        this.setupCVExport();
        this.setupIntersectionObserver();
    }

    setupCVExport() {
        const exportBtn = document.getElementById('export-cv-btn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                // Simple download redirect
                window.location.href = '/download-cv';
            });
        }
    }

    setupNavigation() {
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        const nav = document.querySelector('.nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Mobile navigation
        const navBurger = document.getElementById('nav-burger');
        const navMenu = document.querySelector('.nav-menu');

        navBurger?.addEventListener('click', () => {
            navMenu?.classList.toggle('active');
            navBurger.classList.toggle('active');
        });
    }

    setupAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.skill-category, .project, .achievement-card');
        animateElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(el);
        });
    }

    setupIntersectionObserver() {
        // Add reveal animation to sections
        const sections = document.querySelectorAll('section');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to tech badges
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.tech-badge, .tech-badge-small')) {
            const badge = e.target.closest('.tech-badge, .tech-badge-small');
            badge.style.transform = 'translateY(-2px) scale(1.05)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.tech-badge, .tech-badge-small')) {
            const badge = e.target.closest('.tech-badge, .tech-badge-small');
            badge.style.transform = 'translateY(0) scale(1)';
        }
    });

    // Glossy mouse cursor effect
    let mouseX = 0;
    let mouseY = 0;
    let isMouseActive = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Update CSS custom properties
        document.body.style.setProperty('--mouse-x', `${mouseX}px`);
        document.body.style.setProperty('--mouse-y', `${mouseY}px`);

        // Activate glossy effect
        if (!isMouseActive) {
            document.body.classList.add('mouse-active');
            isMouseActive = true;
        }
    });

    // Hide effect when mouse leaves window
    document.addEventListener('mouseleave', () => {
        document.body.classList.remove('mouse-active');
        isMouseActive = false;
    });
});