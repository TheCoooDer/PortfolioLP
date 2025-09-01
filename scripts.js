      // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                }
            });
        });
        
        // Active nav link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Custom cursor
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorTrail = document.querySelector('.cursor-trail');
        
        document.addEventListener('mousemove', (e) => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
            cursorTrail.style.left = `${e.clientX}px`;
            cursorTrail.style.top = `${e.clientY}px`;
        });
        
        document.addEventListener('mousedown', () => {
            cursorDot.classList.add('active');
            cursorTrail.classList.add('active');
        });
        
        document.addEventListener('mouseup', () => {
            cursorDot.classList.remove('active');
            cursorTrail.classList.remove('active');
        });
        
        // Add hover effect to cards
        document.querySelectorAll('.card-hover').forEach(card => {
            card.addEventListener('mouseenter', () => {
                cursorDot.classList.add('active');
                cursorTrail.classList.add('active');
            });
            
            card.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('active');
                cursorTrail.classList.remove('active');
            });
        });
        
        // Form submission handling
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Simulate form submission
                alert('Thank you for your message! I\'ll get back to you soon.');
                contactForm.reset();
            });
        }