/* =========================================================
   FATHER PETER — Main JavaScript
   Features: loader, mobile menu, fade-in, current year,
             WhatsApp message builder
   ========================================================= */

// ---------- EDIT THIS ----------
// Replace with Father Peter's real WhatsApp number (international format, no + or spaces)
const WHATSAPP_NUMBER = '254700000000';

// ---------- Loading Screen ----------
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1500);
  }
});

// ---------- Mobile Menu Toggle ----------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  // ---------- Fade-in on Scroll ----------
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // ---------- Current Year in Footer ----------
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- WhatsApp Link Builder ----------
  // Any element with class .wa-link and data-message="..." will get a WhatsApp URL
  document.querySelectorAll('.wa-link').forEach(el => {
    const message = el.getAttribute('data-message') || 'Peace be with you, Father Peter.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    el.setAttribute('href', url);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  // ---------- Prayer Request Form ----------
  const prayerForm = document.getElementById('prayer-form');
  if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('prayer-name').value.trim() || 'Someone';
      const request = document.getElementById('prayer-request').value.trim();

      if (!request) {
        alert('Please share your prayer request.');
        return;
      }

      const message =
        `Peace be with you, Father Peter.\n\n` +
        `My name is ${name}.\n\n` +
        `Please pray for me:\n${request}\n\n` +
        `Thank you, and God bless you.`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  }

  // ---------- Children Registration Form ----------
  const childForm = document.getElementById('child-form');
  if (childForm) {
    childForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const parent = document.getElementById('parent-name').value.trim() || 'A parent';
      const child = document.getElementById('child-name').value.trim() || 'my child';
      const age = document.getElementById('child-age').value.trim();

      const message =
        `Peace be with you, Father Peter.\n\n` +
        `I would like to register my child for the Children's Gathering.\n\n` +
        `Parent: ${parent}\n` +
        `Child: ${child}\n` +
        `Age: ${age || '—'}\n\n` +
        `Thank you!`;

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  }

  // ---------- Share Buttons (Reflection Page) ----------
  document.querySelectorAll('.share-reflection').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = btn.dataset.platform;
      const text = encodeURIComponent(
        `"The Lord is my shepherd; I shall not want." — Psalm 23:1\n\n` +
        `Today's reflection from Father Peter. Read more at our ministry website.`
      );
      const url = encodeURIComponent(window.location.href);
      let shareUrl = '';

      if (platform === 'whatsapp') shareUrl = `https://wa.me/?text=${text}%20${url}`;
      else if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      else if (platform === 'x') shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;

      if (shareUrl) window.open(shareUrl, '_blank');
    });
  });
});
