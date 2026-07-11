// ==========================================
// FATHER PETER MINISTRY - MAIN SCRIPT
// ==========================================

// ------------- WHATSAPP CONFIG ----------
// Replace with Father Peter's real WhatsApp number (international format, no + or spaces)
const WHATSAPP_NUMBER = '233545129379'; // UPDATED TO FATHER'S NUMBER

// ==========================================
// 1. LOADING SCREEN
// ==========================================
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 600);
    }, 1500);
  }
});

// ==========================================
// 2. MOBILE MENU TOGGLE
// ==========================================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// ==========================================
// 3. WHATSAPP LINKS
// ==========================================
const waLinks = document.querySelectorAll('.wa-link');
waLinks.forEach(link => {
  const message = link.getAttribute('data-message') || 'Peace be with you, Father Peter.';
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  link.setAttribute('href', url);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

// ==========================================
// 4. DYNAMIC YEAR (Ensures dates are current)
// ==========================================
const yearElements = document.querySelectorAll('#current-year');
yearElements.forEach(el => {
  el.textContent = new Date().getFullYear();
});

// ==========================================
// 5. SCROLL ANIMATIONS (Fade-in on scroll)
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-up, .fade-in').forEach(el => {
  observer.observe(el);
});

// ==========================================
// 6. HEADER SCROLL EFFECT
// ==========================================
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
