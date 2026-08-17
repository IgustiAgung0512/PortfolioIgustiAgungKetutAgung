// 1. Typing Effect
const textElement = document.getElementById('typing-text');
const myName = "I Gusti Agung Ketut Agung";
let charIndex = 0;

function typeEffect() {
    if (textElement && charIndex < myName.length) {
        textElement.innerHTML += myName.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    }
}

// 2. Navbar & Burger Logic (FIXED)
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.getElementById('main-header');

// Gunakan fungsi terpisah agar lebih rapi
function closeMobileMenu() {
    if (hamburger && mobileMenu) {
        hamburger.classList.remove('hamburger-active');
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 400);
    }
}

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', (e) => {
        // Mencegah bubbling agar tidak langsung tertutup jika ada listener di window
        e.stopPropagation(); 
        
        hamburger.classList.toggle('hamburger-active');
        
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            // Timeout kecil diperlukan agar transisi CSS 'scale-y' berjalan
            setTimeout(() => {
                mobileMenu.classList.add('active');
            }, 10);
        } else {
            mobileMenu.classList.remove('active');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 400);
        }
    });
}

// Menutup menu otomatis saat link mobile diklik
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Efek Scroll pada Header
window.addEventListener('scroll', () => {
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
});

// 3. Photo Interaction (Swap & 3D Tilt)
const photoContainer = document.getElementById('photo-container');
const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
let isFirstImgActive = true;

if (photoContainer) {
    photoContainer.addEventListener('click', () => {
        if (img1 && img2) {
            isFirstImgActive = !isFirstImgActive;
            img1.style.opacity = isFirstImgActive ? '1' : '0';
            img2.style.opacity = isFirstImgActive ? '0' : '1';
        }
    });

    photoContainer.addEventListener('mousemove', (e) => {
        const rect = photoContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = (y - (rect.height / 2)) / 15;
        const rotateY = ((rect.width / 2) - x) / 15;
        photoContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    photoContainer.addEventListener('mouseleave', () => {
        photoContainer.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
}

// 4. Scroll Reveal Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Jalankan Typing Effect
window.onload = typeEffect;