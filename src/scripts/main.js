class Portfolio {
    constructor() {
        this.data = {
            profile: profile,
            skills: skills,
            projects: projects,
            experience: experience,
            certifications: certifications
        };
        this.init();
    }

    async init() {
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupAnimations();
        this.renderContent();
        this.setupIntersectionObserver();
    }

    renderContent() {
        this.renderHero();
        this.renderAbout();
        this.renderSkills();
        this.renderProjects();
        this.renderContact();
    }

    renderHero() {
        const heroName = document.getElementById('hero-name');
        const heroTagline = document.getElementById('hero-tagline');
        const heroBio = document.getElementById('hero-bio');

        if (heroName) heroName.textContent = this.data.profile.name + '.';
        if (heroTagline) heroTagline.textContent = this.data.profile.tagline;
        if (heroBio) heroBio.textContent = this.data.profile.bio.split('\n\n')[0];
    }

    renderAbout() {
        const aboutBio = document.getElementById('about-bio');
        const aboutSkills = document.getElementById('about-skills');

        if (aboutBio && this.data.profile.bio) {
            const paragraphs = this.data.profile.bio.trim().split('\n\n');
            aboutBio.innerHTML = paragraphs.slice(0, 3).map(p => `<p>${p}</p>`).join('');
        }

        if (aboutSkills && this.data.skills.categories) {
            // Get top skills from different categories
            const topSkills = [];
            this.data.skills.categories.forEach(category => {
                const highLevelSkills = category.skills.filter(skill => skill.level >= 4);
                topSkills.push(...highLevelSkills.slice(0, 2));
            });

            aboutSkills.innerHTML = topSkills.slice(0, 8).map(skill =>
                `<li>${skill.name}</li>`
            ).join('');
        }
    }

    renderSkills() {
        const skillsContent = document.getElementById('skills-content');

        if (skillsContent && this.data.experience.jobs) {
            skillsContent.innerHTML = this.data.experience.jobs.map(job => `
                <div class="skill-category">
                    <h3 class="skill-category-title">${job.title}</h3>
                    <h4 style="color: var(--green); margin-bottom: 10px;">${job.company} • ${job.range}</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${job.description.map(desc => `
                            <li style="margin-bottom: 8px; color: var(--slate);">▹ ${desc}</li>
                        `).join('')}
                    </ul>
                    <div style="margin-top: 15px;">
                        ${job.technologies.map(tech => `
                            <span style="display: inline-block; margin: 2px 8px 2px 0; padding: 4px 8px; background: var(--navy-light); border-radius: 4px; font-size: 12px; color: var(--green);">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');

        if (projectsGrid && this.data.projects.featured) {
            const featuredProjects = this.data.projects.featured;

            projectsGrid.innerHTML = featuredProjects.map((project, index) => `
                <div class="project" data-project="${project.id}">
                    <div class="project-content">
                        <div>
                            <p class="project-overline">Featured Project</p>
                            <h3 class="project-title">
                                ${project.links?.website ?
                                    `<a href="${project.links.website}" target="_blank" rel="noopener">${project.title}</a>` :
                                    project.title
                                }
                            </h3>
                            <div class="project-description">
                                <p>${project.description.split('\n\n').slice(0, 2).join('</p><p>')}</p>
                            </div>
                        </div>
                        <ul class="project-tech-list">
                            ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                        <div class="project-links">
                            ${project.links?.github ?
                                `<a href="${project.links.github}" target="_blank" rel="noopener" aria-label="GitHub">GitHub</a>` : ''
                            }
                            ${project.links?.website ?
                                `<a href="${project.links.website}" target="_blank" rel="noopener" aria-label="External Link">Live Site</a>` : ''
                            }
                        </div>
                    </div>
                    <div class="project-image">
                        <a href="${project.links?.website || '#'}" target="_blank" rel="noopener">
                            <img src="${project.image || 'https://via.placeholder.com/600x400/0a192f/64ffda?text=' + encodeURIComponent(project.title)}"
                                 alt="${project.title}" />
                        </a>
                    </div>
                </div>
            `).join('');
        }
    }

    renderContact() {
        const contactDescription = document.getElementById('contact-description');

        if (contactDescription) {
            contactDescription.textContent = `I'm currently a student at HTL Villach IT, passionate about building exceptional digital experiences. Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!`;
        }
    }

    setupNavigation() {
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-menu a');
        const sections = document.querySelectorAll('section[id]');

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

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle?.querySelector('.theme-icon');

        // Check for saved theme preference or default to 'light'
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        if (themeIcon) {
            themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        }

        themeToggle?.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            if (themeIcon) {
                themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
            }
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
        const animateElements = document.querySelectorAll('.skill-category, .project-card, .contact-item');
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

    animateNumbers() {
        const stats = document.querySelectorAll('.hero-stat-number');

        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                stat.textContent = Math.floor(current);
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, 40);
        });
    }

    setupContactForm() {
        const form = document.getElementById('contact-form');

        form?.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
        }

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroParticles = document.querySelector('.hero-particles');
        if (heroParticles) {
            heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add hover effect to skill items
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.skill-item')) {
            const skillItem = e.target.closest('.skill-item');
            skillItem.style.transform = 'translateY(-2px) scale(1.02)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.skill-item')) {
            const skillItem = e.target.closest('.skill-item');
            skillItem.style.transform = 'translateY(0) scale(1)';
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

    // Show effect when mouse enters window
    document.addEventListener('mouseenter', () => {
        document.body.classList.add('mouse-active');
        isMouseActive = true;
    });
});