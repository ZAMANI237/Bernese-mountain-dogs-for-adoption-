// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[placeholder="Your Name"]').value;
            const email = this.querySelector('input[placeholder="Your Email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show success message
            alert(`Thank you ${name}! Your message has been sent. We'll get back to you soon!`);
            
            // Reset form
            this.reset();
        });
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// CTA button click handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        document.querySelector('#dogs').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Adopt button handlers
document.querySelectorAll('.adopt-btn').forEach(button => {
    button.addEventListener('click', function() {
        const dogName = this.parentElement.querySelector('h3').textContent;
        alert(`Great choice! ${dogName} is wonderful. Please contact us to learn more and start the adoption process!`);
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.about-card, .dog-card, .care-card, .step').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Mobile menu toggle (if needed for future expansion)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

console.log('Bernese Mountain Dogs for Adoption website loaded successfully!');