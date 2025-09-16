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
        this.setupHeroBackground();
        this.setupIntersectionObserver();
        this.setupFixedSectionHeading();
    }

    renderContent() {
        this.renderHero();
        this.renderAbout();
        this.renderSkills();
        this.renderAllSkills();
        this.renderProjects();
        this.renderContact();
    }

    renderHero() {
        const heroName = document.getElementById('hero-name');
        const heroTagline = document.getElementById('hero-tagline');
        const heroBio = document.getElementById('hero-bio');

        if (heroName) heroName.textContent = this.data.profile.name;
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

        if (skillsContent && this.data.experience && this.data.experience.companies) {
            skillsContent.innerHTML = this.data.experience.companies.map(company => `
                <div class="skill-category">
                    <div class="experience-header">
                        ${company.companyLogo ? `
                            <a href="${company.companyUrl || '#'}" target="_blank" rel="noopener">
                                <img src="${company.companyLogo}" alt="${company.company} logo" class="company-logo">
                            </a>
                        ` : ''}
                        <div class="experience-info">
                            <h3 class="skill-category-title">${company.company}</h3>
                            <h4 style="color: var(--slate);">${company.location}</h4>
                        </div>
                    </div>
                    <div class="company-positions">
                        ${company.positions.map(position => `
                            <div class="position">
                                <div class="position-header">
                                    <h4 class="position-title" style="color: var(--green); margin: 0 0 8px 0; font-size: 1.1em;">${position.title}</h4>
                                    <span class="position-range" style="color: var(--slate); font-family: var(--font-mono); font-size: 0.9em;">${position.range}</span>
                                </div>
                                <div class="experience-description">
                                    <ul>
                                        ${position.description.map(desc => `
                                            <li>${desc}</li>
                                        `).join('')}
                                    </ul>
                                </div>
                                <div class="tech-stack">
                                    ${position.technologies.map(tech => `
                                        <span class="tech-badge">
                                            ${techIcons[tech] ? `<img src="${techIcons[tech]}" alt="${tech}">` : ''}
                                            ${tech}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    renderAllSkills() {
        // You could add a dedicated skills section here if needed
        // This method is available for showing all skills with icons
        // For now, skills are shown in the about section
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
                                ${project.liveUrl ?
                                    `<a href="${project.liveUrl}" target="_blank" rel="noopener">${project.title}</a>` :
                                    project.title
                                }
                            </h3>
                            <div class="project-description">
                                <p>${project.description.split('\n\n').slice(0, 2).join('</p><p>')}</p>
                            </div>
                        </div>
                        <ul class="project-tech-list">
                            ${project.technologies.map(tech => `
                                <li style="display: flex; align-items: center;">
                                    ${techIcons[tech] ? `<img src="${techIcons[tech]}" alt="${tech}" style="width: 16px; height: 16px; margin-right: 6px;">` : ''}
                                    ${tech}
                                </li>
                            `).join('')}
                        </ul>
                        <div class="project-links">
                            ${project.githubUrl ?
                                `<a href="${project.githubUrl}" target="_blank" rel="noopener" aria-label="GitHub">GitHub</a>` : ''
                            }
                            ${project.liveUrl ?
                                `<a href="${project.liveUrl}" target="_blank" rel="noopener" aria-label="External Link">Live Site</a>` : ''
                            }
                        </div>
                    </div>
                    <div class="project-image">
                        <a href="${project.liveUrl || '#'}" target="_blank" rel="noopener">
                            <img src="${project.image}"
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

    setupHeroBackground() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection || !backgroundConfig) return;

        // Create background container
        const heroBackground = document.createElement('div');
        heroBackground.className = 'hero-background';
        
        // Add glitch overlay if enabled
        if (backgroundConfig.settings.features.glitchOverlay) {
            const glitchOverlay = document.createElement('div');
            glitchOverlay.className = 'glitch-overlay';
            heroBackground.appendChild(glitchOverlay);
        }

        heroSection.appendChild(heroBackground);

        // Create initial particles
        if (backgroundConfig.settings.features.codeParticles || backgroundConfig.settings.features.binaryParticles) {
            this.createParticles(heroBackground, backgroundConfig.codeSnippets);
        }
        
        // Continuously spawn new particles if enabled
        if (backgroundConfig.settings.features.continuousSpawn) {
            setInterval(() => {
                this.createParticles(heroBackground, backgroundConfig.codeSnippets);
            }, backgroundConfig.settings.spawnInterval);
        }
    }

    createParticles(container, codeSnippets) {
        if (!backgroundConfig) return;

        // Get screen size settings
        const isMobile = window.innerWidth <= 480;
        const isTablet = window.innerWidth <= 768;
        
        let particleSettings;
        if (isMobile) {
            particleSettings = backgroundConfig.settings.mobile;
        } else if (isTablet) {
            particleSettings = backgroundConfig.settings.tablet;
        } else {
            particleSettings = backgroundConfig.settings.desktop;
        }

        // Create code particles if enabled
        if (backgroundConfig.settings.features.codeParticles) {
            for (let i = 0; i < particleSettings.codeParticles; i++) {
                const codeParticle = document.createElement('div');
                codeParticle.className = 'code-particle';
                codeParticle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                codeParticle.style.left = Math.random() * 100 + '%';
                codeParticle.style.animationDelay = Math.random() * 5 + 's';
                
                const duration = backgroundConfig.settings.codeParticle.min + 
                    Math.random() * (backgroundConfig.settings.codeParticle.max - backgroundConfig.settings.codeParticle.min);
                codeParticle.style.animationDuration = duration + 's';
                
                container.appendChild(codeParticle);

                // Remove particle after animation
                setTimeout(() => {
                    if (codeParticle.parentNode) {
                        codeParticle.parentNode.removeChild(codeParticle);
                    }
                }, backgroundConfig.settings.codeTimeout);
            }
        }

        // Create binary particles if enabled
        if (backgroundConfig.settings.features.binaryParticles) {
            for (let i = 0; i < particleSettings.binaryParticles; i++) {
                const binaryParticle = document.createElement('div');
                binaryParticle.className = 'binary-particle';
                binaryParticle.textContent = Math.random() > 0.5 ? '1' : '0';
                binaryParticle.style.left = Math.random() * 100 + '%';
                binaryParticle.style.animationDelay = Math.random() * 3 + 's';
                
                const duration = backgroundConfig.settings.binaryParticle.min + 
                    Math.random() * (backgroundConfig.settings.binaryParticle.max - backgroundConfig.settings.binaryParticle.min);
                binaryParticle.style.animationDuration = duration + 's';
                
                container.appendChild(binaryParticle);

                // Remove particle after animation
                setTimeout(() => {
                    if (binaryParticle.parentNode) {
                        binaryParticle.parentNode.removeChild(binaryParticle);
                    }
                }, backgroundConfig.settings.binaryTimeout);
            }
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
        // Set to dark theme permanently
        document.documentElement.setAttribute('data-theme', 'dark');
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

    setupFixedSectionHeading() {
        // Get all the numbered headings in the sections
        const aboutHeading = document.querySelector('#about .numbered-heading');
        const skillsHeading = document.querySelector('#skills .numbered-heading');
        const projectsHeading = document.querySelector('#projects .numbered-heading');
        const contactHeading = document.querySelector('#contact .numbered-heading');

        // Define section data with heading elements and text
        const sections = [
            { element: document.querySelector('#about'), heading: aboutHeading, text: 'About Me' },
            { element: document.querySelector('#skills'), heading: skillsHeading, text: 'Where I\'ve Worked' },
            { element: document.querySelector('#projects'), heading: projectsHeading, text: 'Some Things I\'ve Built' },
            { element: document.querySelector('#contact'), heading: contactHeading, text: 'Get In Touch' }
        ];

        // Create intersection observer for section detection
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Find the section data for the intersecting element
                    const sectionData = sections.find(section => section.element === entry.target);
                    if (sectionData && sectionData.heading) {
                        // Update all section headings to show the current section
                        sections.forEach(section => {
                            if (section.heading) {
                                section.heading.textContent = sectionData.text;
                                // Re-wrap letters for scramble effect
                                this.wrapLettersInElement(section.heading);
                            }
                        });
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-100px 0px -100px 0px'
        });

        // Observe all sections
        sections.forEach(section => {
            if (section.element) {
                sectionObserver.observe(section.element);
            }
        });
    }

    wrapLettersInElement(element) {
        if (element.dataset.wrapped) {
            // Reset element
            element.innerHTML = element.textContent;
            element.dataset.wrapped = '';
            element.dataset.scrambled = '';
        }

        const text = element.textContent;
        const wrappedText = text.split('').map(char => {
            if (char === ' ') {
                return '&nbsp;';
            } else if (char.match(/[a-zA-Z0-9]/)) {
                return `<span class="letter" data-original="${char}">${char}</span>`;
            } else {
                return char;
            }
        }).join('');

        element.innerHTML = wrappedText;
        element.dataset.wrapped = 'true';
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

    // Individual letter scramble effect
    const wrapLettersInSpans = (element) => {
        if (element.dataset.wrapped) return;

        const text = element.textContent;
        const wrappedText = text.split('').map(char => {
            if (char === ' ') {
                return ' ';
            } else if (char.match(/[a-zA-Z0-9]/)) {
                return `<span class="letter" data-original="${char}">${char}</span>`;
            } else {
                return char;
            }
        }).join('');

        element.innerHTML = wrappedText;
        element.dataset.wrapped = 'true';
    };

    const scrambleLetter = (letterSpan, duration) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const originalChar = letterSpan.dataset.original;
        const scrambleSpeed = 20;
        const totalIterations = Math.ceil(duration / scrambleSpeed);
        let iteration = 0;

        const scrambleInterval = setInterval(() => {
            letterSpan.textContent = chars[Math.floor(Math.random() * chars.length)];
            iteration++;

            if (iteration >= totalIterations) {
                clearInterval(scrambleInterval);
                letterSpan.textContent = originalChar;
            }
        }, scrambleSpeed);
    };

    // Apply letter wrapping and scramble effect to text elements
    const textElements = document.querySelectorAll('h1, h2, h3, p, a, li');

    textElements.forEach(element => {
        // Skip navigation and certain elements
        if (element.closest('.nav') ||
            element.closest('.social-links') ||
            element.closest('.fixed-elements') ||
            element.classList.contains('btn') ||
            element.closest('.footer') ||
            element.closest('.project-image') ||
            element.closest('.hero-background') ||
            element.tagName === 'IMG') {
            return;
        }

        // Wrap letters in spans
        wrapLettersInSpans(element);
    });

    // Create intersection observer for text scramble effect
    const scrambleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.scrambled) {
                const letters = entry.target.querySelectorAll('.letter');
                letters.forEach((letter) => {
                    // Random duration between 20-120ms for each letter
                    const randomDuration = Math.random() * (120 - 20) + 20;
                    scrambleLetter(letter, randomDuration);
                });
                // Mark as scrambled to prevent repeat
                entry.target.dataset.scrambled = 'true';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe text elements for scramble effect
    textElements.forEach(element => {
        if (!element.closest('.nav') &&
            !element.closest('.social-links') &&
            !element.closest('.fixed-elements') &&
            !element.classList.contains('btn') &&
            !element.closest('.footer') &&
            !element.closest('.project-image') &&
            !element.closest('.hero-background') &&
            element.tagName !== 'IMG') {
            scrambleObserver.observe(element);
        }
    });
});