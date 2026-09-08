// ==========================================
// 1. Multi-Role Dynamic Typing Effect
// ==========================================
const textElement = document.getElementById('typing-text');
const roles = [
    "I Gusti Agung Ketut Agung, S.Kom",
    "IT & Web Developer",
    "Business & HR Administrator",
    "Finance & Marketplace Admin",
    "System Analyst"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeEffect() {
    if (!textElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 45;
    } else {
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 95;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        typingDelay = 2200; // Jeda sejenak saat kalimat selesai diketik
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 400; // Jeda sebelum mulai mengetik peran baru
    }

    setTimeout(typeEffect, typingDelay);
}

// ==========================================
// 2. Navbar, Mobile Drawer & Scroll Logic
// ==========================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.getElementById('main-header');
const scrollProgressBar = document.getElementById('scroll-progress');
const backToTopBtn = document.getElementById('back-to-top');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function openMobileMenu() {
    if (hamburger && mobileMenu) {
        hamburger.classList.add('hamburger-active');
        hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.add('active');
        }, 10);
    }
}

function closeMobileMenu() {
    if (hamburger && mobileMenu) {
        hamburger.classList.remove('hamburger-active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
}

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobileMenu.classList.contains('hidden')) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });

    // Tutup menu saat klik di luar area mobile menu
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Tutup menu saat menekan tombol Escape (Aksesibilitas)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

// Tutup menu otomatis saat link mobile diklik
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Scroll Event Handler: Header style, ScrollSpy, Scroll Progress, Back-to-Top
function handleScroll() {
    const scrollY = window.scrollY;

    // 1. Header Glassmorphism styling
    if (header) {
        if (scrollY > 40) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }

    // 2. Scroll Progress Bar
    if (scrollProgressBar) {
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        scrollProgressBar.style.width = `${scrolled}%`;
    }

    // 3. Back to Top Button visibility
    if (backToTopBtn) {
        if (scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    // 4. ScrollSpy: Highlight active navbar item
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (currentSectionId && link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleScroll, { passive: true });

// ==========================================
// 3. Photo Interaction (Swap & 3D Tilt)
// ==========================================
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
        photoContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });

    photoContainer.addEventListener('mouseleave', () => {
        photoContainer.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
}

// ==========================================
// 4. Scroll Reveal Logic (Smooth IntersectionObserver)
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Animasi halus sekali tampil tanpa flickering
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ==========================================
// 5. Toast Notification & Copy to Clipboard
// ==========================================
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (!toast) return;

    if (toastMessage) {
        toastMessage.textContent = message;
    }
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function copyToClipboard(text, message) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(message || 'Berhasil disalin ke clipboard!');
        }).catch(() => {
            fallbackCopyText(text, message);
        });
    } else {
        fallbackCopyText(text, message);
    }
}

function fallbackCopyText(text, message) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showToast(message || 'Berhasil disalin ke clipboard!');
    } catch (err) {
        showToast('Gagal menyalin teks');
    }
    document.body.removeChild(textArea);
}

// ==========================================
// 6. Certificate Lightbox Modal Logic
// ==========================================
const certModal = document.getElementById('cert-modal');
const certModalContent = document.getElementById('cert-modal-content');
const modalCertImg = document.getElementById('modal-cert-img');
const modalCertTitle = document.getElementById('modal-cert-title');
const modalCertIssuer = document.getElementById('modal-cert-issuer');
const modalCertId = document.getElementById('modal-cert-id');
const modalCertOpenTab = document.getElementById('modal-cert-open-tab');
const modalCertDownload = document.getElementById('modal-cert-download');
const modalCertBadgeIcon = document.getElementById('modal-cert-badge-icon');

function openCertModal(imageSrc, title, issuer, credentialId, iconClass, bgClass, pdfSrc) {
    if (!certModal) return;

    const targetDoc = pdfSrc || imageSrc;
    const isPdf = !!pdfSrc;

    if (modalCertImg) modalCertImg.src = imageSrc;
    if (modalCertTitle) modalCertTitle.textContent = title;
    if (modalCertIssuer) modalCertIssuer.textContent = issuer;
    if (modalCertId) modalCertId.textContent = credentialId || 'Kredensial Resmi Terverifikasi';
    
    if (modalCertOpenTab) {
        modalCertOpenTab.href = targetDoc;
        modalCertOpenTab.innerHTML = isPdf 
            ? '<i class="fa-solid fa-file-pdf text-red-500"></i><span class="hidden sm:inline"> Buka PDF Asli</span>' 
            : '<i class="fa-solid fa-arrow-up-right-from-square"></i><span class="hidden sm:inline"> Buka Penuh</span>';
    }
    
    if (modalCertDownload) {
        modalCertDownload.href = targetDoc;
        const cleanName = title.replace(/[^a-zA-Z0-9_-]/g, '_');
        modalCertDownload.download = isPdf ? `${cleanName}.pdf` : `${cleanName}.jpg`;
        modalCertDownload.innerHTML = isPdf 
            ? '<i class="fa-solid fa-download"></i> Unduh PDF' 
            : '<i class="fa-solid fa-download"></i> Unduh File';
    }
    
    if (modalCertBadgeIcon) {
        modalCertBadgeIcon.className = `w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0 ${bgClass || 'bg-blue-600'}`;
        modalCertBadgeIcon.innerHTML = `<i class="${iconClass || 'fa-solid fa-award'} text-lg"></i>`;
    }

    // Tampilkan modal
    certModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
        certModal.classList.add('active');
    });
}

function closeCertModal() {
    if (!certModal) return;

    certModal.classList.remove('active');
    document.body.style.overflow = '';

    setTimeout(() => {
        certModal.classList.add('hidden');
        if (modalCertImg) modalCertImg.src = '';
    }, 250);
}

// Tutup modal saat klik area gelap di luar kotak modal
if (certModal) {
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) {
            closeCertModal();
        }
    });
}

// Tutup modal saat tombol Escape ditekan
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal && certModal.classList.contains('active')) {
        closeCertModal();
    }
});

// Expose globally
window.openCertModal = openCertModal;
window.closeCertModal = closeCertModal;

// ==========================================
// 7. Project Category Filter
// ==========================================
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card-item');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update active button state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter project cards with smooth animation
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const isMatch = filter === 'all' || category === filter || category === 'all';

                if (isMatch) {
                    card.classList.remove('filter-hidden');
                    requestAnimationFrame(() => {
                        card.classList.remove('filter-animating');
                    });
                } else {
                    card.classList.add('filter-animating');
                    setTimeout(() => {
                        if (card.classList.contains('filter-animating')) {
                            card.classList.add('filter-hidden');
                        }
                    }, 250);
                }
            });
        });
    });
}

// ==========================================
// 8. Initialize on DOM Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    handleScroll();
    initProjectFilter();
});