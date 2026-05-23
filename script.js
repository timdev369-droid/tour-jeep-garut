// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// PAKET BUTTON CLICK HANDLERS
// ============================================

const paketButtons = document.querySelectorAll('.paket-button');
const ctaButton = document.querySelector('.cta-button');

paketButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const paketName = e.target.closest('.paket-card').querySelector('h3').textContent;
        const paketPrice = e.target.closest('.paket-card').querySelector('.price').textContent;
        alert(`Anda memilih paket: ${paketName}\n${paketPrice}\n\nSilakan hubungi kami untuk melakukan pemesanan.`);
    });
});

if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('Terima kasih! Silakan pilih paket tour yang Anda inginkan di bawah ini.');
        document.querySelector('#paket').scrollIntoView({ behavior: 'smooth' });
    });
}

// ============================================
// GALERI LIGHTBOX
// ============================================

const galeriItems = document.querySelectorAll('.galeri-item');

galeriItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const img = item.querySelector('img');
        const src = img.src;
        openLightbox(src);
    });
});

function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${src}" alt="Galeri">
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.className === 'lightbox-close') {
            lightbox.remove();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.querySelector('.lightbox')) {
            document.querySelector('.lightbox').remove();
        }
    });
}

// ============================================
// CONTACT FORM SUBMISSION
// ============================================

const contactForm = document.querySelector('.kontak-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            nama: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            telepon: contactForm.querySelector('input[type="tel"]').value,
            pesan: contactForm.querySelector('textarea').value
        };
        
        // Validate form
        if (!formData.nama || !formData.email || !formData.telepon || !formData.pesan) {
            alert('Silakan isi semua form dengan benar!');
            return;
        }

        // Log form data
        console.log('Form data:', formData);
        
        // Show success message
        alert('Terima kasih! Pesan Anda telah terkirim.\nNama: ' + formData.nama + '\nKami akan menghubungi Anda segera.');
        
        // Reset form
        contactForm.reset();
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe paket cards
document.querySelectorAll('.paket-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.opacity = '0';
    observer.observe(card);
});

// ============================================
// ADD STYLES FOR ANIMATIONS
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .lightbox-content img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .lightbox-close:hover {
        transform: scale(1.2);
    }
`;

document.head.appendChild(style);

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// ACTIVE NAV LINK
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚙 Tour Jeep Garut website loaded successfully!');
    console.log('Welcome to your adventure booking platform');
});
