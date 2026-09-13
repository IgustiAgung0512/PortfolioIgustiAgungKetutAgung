// ==========================================
// 1. Multi-Language Dictionary & I18n Engine
// ==========================================
const translations = {
    id: {
        nav_home: "Home",
        nav_about: "About",
        nav_experience: "Experience",
        nav_certificates: "Certificates",
        nav_project: "Project",
        nav_contact: "Contact",
        hero_badge: "Sistem Informasi • IT Development • Business Administration",
        hero_greeting: "Hi, I'm",
        hero_desc: "Sarjana Sistem Informasi (Predikat Cumlaude) yang memadukan kompetensi pengembangan teknologi informasi, analisis sistem, serta administrasi operasional bisnis (SDM & Keuangan) untuk menciptakan solusi yang efisien dan berdampak nyata.",
        hero_btn_exp: "Lihat Pengalaman",
        hero_btn_cv: "Download CV (PDF)",
        metric_gpa_label: "IPK Cumlaude (S1 Sistem Informasi)",
        metric_projects_label: "Proyek & Utility Terpublikasi",
        metric_audit_label: "Akurasi Rekonsiliasi & Validasi Data",
        metric_certs_label: "Sertifikasi IT & Bisnis Terverifikasi",
        about_badge: "About Me",
        about_title_1: "Solusi Terintegrasi:",
        about_title_2: "Teknologi Informasi",
        about_title_3: "&",
        about_title_4: "Manajemen Bisnis",
        about_desc: "Saya <strong>I Gusti Agung Ketut Agung, S.Kom</strong>, lulusan Sarjana Sistem Informasi dari <strong>Universitas Putra Indonesia YPTK Padang (IPK 3,68 — Predikat Cumlaude)</strong>. Memiliki spektrum keahlian fleksibel: mulai dari pengembangan website, analisis sistem, pengelolaan administrasi SDM (HR), hingga pelaporan keuangan multi-channel dan kemitraan bisnis.",
        about_degree: "S1 Sistem Informasi (IPK 3,68 — Cumlaude)",
        about_univ: "Universitas Putra Indonesia YPTK Padang (2019 - 2023)",
        about_scholarship: "Beasiswa Prestasi",
        about_rank: "Juara Kelas Sem 6, 2, 5",
        exp_badge: "Work & Leadership",
        exp_title: "Pengalaman Kerja & Organisasi",
        exp_desc: "Rekam jejak profesional dalam administrasi operasional, web development, dan kepemimpinan organisasi.",
        cert_badge: "Credentials",
        cert_title: "Sertifikasi & Kredensial Resmi",
        cert_desc: "Validasi keahlian teknis dan manajemen melalui sertifikasi kredibel.",
        proj_badge: "Portfolio Showcase",
        proj_title: "Proyek & Aplikasi Unggulan",
        proj_desc: "Koleksi aplikasi web, sistem manajemen, dan solusi digital yang telah saya kembangkan.",
        filter_all: "Semua Proyek",
        filter_web: "Web App & Fullstack",
        filter_app: "Utilities & Tools",
        filter_interactive: "Interactive UI",
        contact_badge: "Get In Touch",
        contact_title_1: "Siap Memulai",
        contact_title_2: "Proyek Baru?",
        contact_desc: "Jangan biarkan ide hebat Anda hanya menjadi rencana. Mari berdiskusi dan ubah ide tersebut menjadi solusi digital yang nyata.",
        contact_loc: "Bogor, Indonesia",
        contact_avail: "Tersedia untuk Pekerjaan / Freelance",
        form_title: "Kirim Pesan Langsung",
        form_name: "Nama Lengkap",
        form_email: "Alamat Email",
        form_subject: "Keperluan / Subjek",
        form_subject_opt1: "Peluang Kerja / Rekrutmen",
        form_subject_opt2: "Proyek Web Development",
        form_subject_opt3: "Kerja Sama & Kemitraan",
        form_subject_opt4: "Konsultasi / Lainnya",
        form_message: "Pesan Anda",
        form_send: "Kirim Pesan Sekarang",
        form_sending: "Mengirim Pesan...",
        form_success: "Pesan berhasil terkirim! Terima kasih telah menghubungi.",
        btn_case_study: "Studi Kasus",
        btn_demo: "Lihat Demo",
        btn_code: "Source Code"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_experience: "Experience",
        nav_certificates: "Certificates",
        nav_project: "Projects",
        nav_contact: "Contact",
        hero_badge: "Information Systems • IT Development • Business Administration",
        hero_greeting: "Hi, I'm",
        hero_desc: "Bachelor of Information Systems (Cum Laude) bridging IT development, systems analysis, and operational business administration (HR & Finance) to build scalable, high-impact digital solutions.",
        hero_btn_exp: "View Experience",
        hero_btn_cv: "Download CV (PDF)",
        metric_gpa_label: "Cum Laude GPA (B.Comp in IS)",
        metric_projects_label: "Published Web & Utility Projects",
        metric_audit_label: "Data Reconciliation & Audit Accuracy",
        metric_certs_label: "Verified IT & Business Credentials",
        about_badge: "About Me",
        about_title_1: "Integrated Solutions:",
        about_title_2: "Information Technology",
        about_title_3: "&",
        about_title_4: "Business Management",
        about_desc: "I am <strong>I Gusti Agung Ketut Agung, B.Comp (S.Kom)</strong>, graduate in Information Systems from <strong>Universitas Putra Indonesia YPTK Padang (GPA 3.68 — Cum Laude)</strong>. Equipped with a versatile skill set: full-stack web development, systems analysis, HR administration, multi-channel financial reporting, and business partnerships.",
        about_degree: "B.Comp in Information Systems (GPA 3.68 — Cum Laude)",
        about_univ: "Universitas Putra Indonesia YPTK Padang (2019 - 2023)",
        about_scholarship: "Merit Scholarship",
        about_rank: "Top of Class Sem 6, 2, 5",
        exp_badge: "Work & Leadership",
        exp_title: "Work Experience & Leadership",
        exp_desc: "Professional track record in operational administration, web development, and organizational leadership.",
        cert_badge: "Credentials",
        cert_title: "Official Certifications & Credentials",
        cert_desc: "Validated technical and management capabilities certified by industry-recognized institutions.",
        proj_badge: "Portfolio Showcase",
        proj_title: "Featured Projects & Applications",
        proj_desc: "Curated collection of web applications, management systems, and interactive digital utilities.",
        filter_all: "All Projects",
        filter_web: "Web App & Fullstack",
        filter_app: "Utilities & Tools",
        filter_interactive: "Interactive UI",
        contact_badge: "Get In Touch",
        contact_title_1: "Ready to Start a",
        contact_title_2: "New Project?",
        contact_desc: "Let's turn your vision into reality. Reach out today to discuss potential collaborations, full-time opportunities, or web development projects.",
        contact_loc: "Bogor, Indonesia",
        contact_avail: "Available for Full-Time & Freelance",
        form_title: "Send a Direct Message",
        form_name: "Full Name",
        form_email: "Email Address",
        form_subject: "Subject / Inquiry",
        form_subject_opt1: "Job Opportunity / Recruitment",
        form_subject_opt2: "Web Development Project",
        form_subject_opt3: "Business Collaboration",
        form_subject_opt4: "Consultation / Other",
        form_message: "Your Message",
        form_send: "Send Message Now",
        form_sending: "Sending Message...",
        form_success: "Message sent successfully! Thank you for reaching out.",
        btn_case_study: "Case Study",
        btn_demo: "Live Demo",
        btn_code: "Source Code"
    }
};

let currentLang = localStorage.getItem('preferred_lang') || 'id';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred_lang', lang);
    document.documentElement.lang = lang;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update form placeholders
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    if (nameInput) nameInput.placeholder = lang === 'id' ? 'Masukkan nama Anda' : 'Enter your full name';
    if (emailInput) emailInput.placeholder = lang === 'id' ? 'nama@email.com' : 'name@example.com';
    if (messageInput) messageInput.placeholder = lang === 'id' ? 'Tuliskan pesan atau detail kebutuhan proyek Anda di sini...' : 'Write your message or project details here...';

    // Update language button text
    document.querySelectorAll('.lang-switcher-text').forEach(el => {
        el.textContent = lang.toUpperCase();
    });

    // Reset typing animation roles
    updateRolesForLanguage();
}

function toggleLanguage() {
    const nextLang = currentLang === 'id' ? 'en' : 'id';
    applyLanguage(nextLang);
    showToast(nextLang === 'id' ? 'Bahasa diubah ke Indonesia 🇮🇩' : 'Switched to English 🇬🇧');
}

// Expose globally
window.toggleLanguage = toggleLanguage;

// ==========================================
// 2. Multi-Role Dynamic Typing Effect
// ==========================================
const textElement = document.getElementById('typing-text');
let roles = [
    "I Gusti Agung Ketut Agung, S.Kom",
    "IT & Web Developer",
    "Business & HR Administrator",
    "Finance & Marketplace Admin",
    "System Analyst"
];

function updateRolesForLanguage() {
    if (currentLang === 'en') {
        roles = [
            "I Gusti Agung Ketut Agung, B.Comp",
            "IT & Fullstack Developer",
            "Business & HR Administrator",
            "Finance & Marketplace Specialist",
            "System Analyst"
        ];
    } else {
        roles = [
            "I Gusti Agung Ketut Agung, S.Kom",
            "IT & Web Developer",
            "Business & HR Administrator",
            "Finance & Marketplace Admin",
            "System Analyst"
        ];
    }
}

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
// 3. Navbar, Mobile Drawer & Scroll Logic
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
        hamburger.classList.add('active');
        hamburger.classList.add('hamburger-active');
        hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.remove('hidden');
        requestAnimationFrame(() => {
            mobileMenu.classList.add('active');
        });
    }
}

function closeMobileMenu() {
    if (hamburger && mobileMenu) {
        hamburger.classList.remove('active');
        hamburger.classList.remove('hamburger-active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 250);
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

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMobileMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

function handleScroll() {
    const scrollY = window.scrollY;

    // Header styling
    if (header) {
        if (scrollY > 40) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }

    // Scroll progress bar
    if (scrollProgressBar) {
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        scrollProgressBar.style.width = `${scrolled}%`;
    }

    // Back to top button
    if (backToTopBtn) {
        if (scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    // ScrollSpy
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
// 4. Photo Interaction (Swap & 3D Tilt)
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
// 5. Scroll Reveal Logic (IntersectionObserver & Mobile Safe)
// ==========================================
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.01, rootMargin: '100px 0px 100px 0px' });

revealElements.forEach((el) => {
    observer.observe(el);
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200) {
        el.classList.add('active');
    }
});

// Handle anchor hash jumping (e.g. #project)
function activateHashSection() {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            const revealChild = target.querySelector('.reveal');
            if (revealChild) revealChild.classList.add('active');
            if (target.classList.contains('reveal')) target.classList.add('active');
        }
    }
}
window.addEventListener('hashchange', activateHashSection);
activateHashSection();

// Safety fallback: ensure nothing stays blank on mobile
setTimeout(() => {
    revealElements.forEach(el => el.classList.add('active'));
}, 1200);

// ==========================================
// 6. Toast Notification & Copy to Clipboard
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
    }, 3200);
}

function copyToClipboard(text, message) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(message || (currentLang === 'id' ? 'Berhasil disalin ke clipboard!' : 'Copied to clipboard!'));
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
        showToast(message || (currentLang === 'id' ? 'Berhasil disalin ke clipboard!' : 'Copied to clipboard!'));
    } catch (err) {
        showToast(currentLang === 'id' ? 'Gagal menyalin teks' : 'Failed to copy text');
    }
    document.body.removeChild(textArea);
}

window.copyToClipboard = copyToClipboard;

// ==========================================
// 7. Certificate Lightbox Modal Logic
// ==========================================
const certModal = document.getElementById('cert-modal');
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

if (certModal) {
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) {
            closeCertModal();
        }
    });
}

window.openCertModal = openCertModal;
window.closeCertModal = closeCertModal;

// ==========================================
// 8. Project Case Study Modal Logic
// ==========================================
const projectCaseStudies = {
    'gympulse': {
        title: 'GymPulse Fitness',
        category: 'Web App & Fullstack',
        image: 'assets/GymPulse.png',
        demoUrl: 'https://gym-membership-app-opal.vercel.app/',
        codeUrl: 'https://github.com/IgustiAgung0512/gym-membership-app',
        problem_id: 'Pusat kebugaran modern membutuhkan platform reservasi digital yang intuitif untuk mengeliminasi antrean kasir manual dan mempermudah anggota memilih kelas latihan secara real-time.',
        problem_en: 'Modern fitness centers face bottlenecks with manual on-site booking and fragmented class schedules. Members needed an intuitive digital hub to explore memberships and reserve sessions.',
        solution_id: 'Membangun Single Page Application (SPA) responsif berkecepatan tinggi dengan integrasi React.js, Tailwind CSS, animasi interaktif, serta modul reservasi kelas otomatis.',
        solution_en: 'Engineered a high-performance responsive Single Page Application (SPA) leveraging React.js, modern Tailwind styling, and automated class schedule booking logic.',
        impact_id: 'Mempercepat alur registrasi member hingga 60%, mendukung 100% responsivitas mobile-first, dan waktu muat halaman di bawah 1 detik.',
        impact_en: 'Boosted member booking throughput by 60%, achieved 100% mobile-first responsiveness, and sub-second page load times.',
        tech: ['React.js', 'Tailwind CSS', 'Vite', 'JavaScript ES6+', 'SPA Architecture']
    },
    'marketfee': {
        title: 'MarketFee Calculator',
        category: 'Web App & Fullstack',
        image: 'assets/MarketFee.webp',
        demoUrl: 'https://igustiagung0512.github.io/kalkulator-marketplace/',
        codeUrl: 'https://github.com/IgustiAgung0512/kalkulator-marketplace',
        problem_id: 'Seller e-commerce (Shopee, Tokopedia, TikTok Shop) sering mengalami selisih keuntungan akibat perhitungan komisi merchant, biaya layanan, dan gratis ongkir yang kompleks.',
        problem_en: 'E-commerce sellers across multiple channels frequently experience profit margins leakage due to complex tiered marketplace commission structures.',
        solution_id: 'Mengembangkan kalkulator biaya admin multi-channel instan dengan parameter dinamis per platform dan visualisasi margin laba bersih.',
        solution_en: 'Developed an instant multi-channel marketplace fee computation engine with real-time net profit margin breakdown and fee structure presets.',
        impact_id: 'Membantu penetapan harga jual akurat 100% dan memangkas waktu estimasi profit dari 15 menit menjadi kurang dari 5 detik per produk.',
        impact_en: 'Guaranteed 100% pricing calculation accuracy, reducing profit estimation time from 15 minutes to under 5 seconds per SKU.',
        tech: ['HTML5', 'Tailwind CSS', 'JavaScript Logic', 'Financial Algorithms', 'E-Commerce Formulas']
    },
    'invoicemaster': {
        title: 'InvoiceMaster Pro',
        category: 'Web App & Fullstack',
        image: 'assets/InvoiceMaster.webp',
        demoUrl: 'https://igustiagung0512.github.io/invoice-generator/',
        codeUrl: 'https://github.com/IgustiAgung0512/invoice-generator',
        problem_id: 'UMKM dan freelancer sering kesulitan mencetak invoice profesional dengan kalkulasi PPN/diskon otomatis yang bisa langsung diunduh ke PDF tanpa software berbayar.',
        problem_en: 'Small businesses and freelancers lack lightweight, free tools to generate polished invoices with automatic tax/discount calculations and instant PDF export.',
        solution_id: 'Menciptakan aplikasi generator invoice interaktif dengan live-preview, perhitungan subtotal otomatis, dan fitur ekspor PDF instan.',
        solution_en: 'Constructed an interactive invoice generator featuring real-time preview, automatic subtotal/tax computing, and client-side instant PDF export.',
        impact_id: 'Otomatisasi pembuatan invoice instan bebas kesalahan hitung, menghemat biaya langganan software invoicing hingga 100%.',
        impact_en: 'Eliminated calculation errors in invoice generation and saved 100% of recurring invoice software subscription costs.',
        tech: ['JavaScript', 'Tailwind CSS', 'jsPDF / Print Engine', 'LocalStorage API']
    },
    'company-profile': {
        title: 'Web Company Profile',
        category: 'Web App & Fullstack',
        image: 'assets/Company Profile.webp',
        demoUrl: 'https://igustiagung0512.github.io/Profile-Company-Jok-Motor/',
        codeUrl: 'https://github.com/IgustiAgung0512/Profile-Company-Jok-Motor',
        problem_id: 'Bisnis bengkel modifikasi jok motor membutuhkan portofolio online profesional untuk memamerkan katalog produk premium dan lokasi bengkel ke pelanggan online.',
        problem_en: 'Custom leather motorcycle seat workshop needed a digital storefront to display premium product galleries and facilitate direct customer inquiries.',
        solution_id: 'Merancang landing page bertema elegan dengan navigasi responsif, galeri produk dinamis, dan direct click-to-WhatsApp booking.',
        solution_en: 'Designed an elegant brand landing page with responsive layout, product showcase carousel, and instant click-to-chat WhatsApp integration.',
        impact_id: 'Meningkatkan konversi pesanan dari media sosial hingga 45% dan meningkatkan kredibilitas brand di mesin pencari lokal.',
        impact_en: 'Increased customer lead conversion from social channels by 45% and established a solid online presence.',
        tech: ['HTML5', 'CSS3 Modern Layout', 'JavaScript', 'Mobile Optimization']
    },
    'todolist': {
        title: 'Web To-Do List',
        category: 'Utilities & Tools',
        image: 'assets/Todolist.webp',
        demoUrl: 'https://igustiagung0512.github.io/To-do-list/',
        codeUrl: 'https://github.com/IgustiAgung0512/To-do-list',
        problem_id: 'Kebutuhan aplikasi manajemen tugas harian yang super ringan, cepat, tanpa login berbelit, namun data tetap aman tersimpan di browser pengguna.',
        problem_en: 'Demand for a distraction-free, zero-latency daily task tracker that preserves state across sessions without requiring server logins.',
        solution_id: 'Membangun aplikasi to-do interaktif berbasis LocalStorage dengan fitur CRUD tugas, filter status, dan animasi transisi halus.',
        solution_en: 'Built a responsive LocalStorage-backed task manager with full CRUD capabilities, task completion filtering, and fluid micro-animations.',
        impact_id: 'Waktu muat di bawah 200ms, nol dependensi server eksternal, dan penyimpanan persisten 100% lokal di perangkat.',
        impact_en: 'Sub-200ms initial load time, zero external server latency, and 100% offline-ready local persistence.',
        tech: ['Vanilla JavaScript', 'LocalStorage API', 'DOM Manipulation', 'CSS Transitions']
    },
    'calculator': {
        title: 'Digital Calculator',
        category: 'Utilities & Tools',
        image: 'assets/Kalkulator.webp',
        demoUrl: 'https://igustiagung0512.github.io/Kalkulator/',
        codeUrl: 'https://github.com/IgustiAgung0512/Kalkulator',
        problem_id: 'Pentingnya alat komputasi matematis yang responsif dengan penanganan error seperti pembagian nol atau overflow desimal.',
        problem_en: 'Need for a sleek digital mathematical calculator engine with robust edge-case handling (division by zero, decimal precision).',
        solution_id: 'Implementasi logika operasi matematika presisi berbasis event listener keyboard dan klik mouse dengan grid antarmuka modern.',
        solution_en: 'Engineered precise math operand parsing supporting both physical keyboard inputs and on-screen clicks with modern CSS grid.',
        impact_id: 'Mendukung input keyboard fisik dan sentuhan layar dengan respons kalkulasi instan tanpa jeda.',
        impact_en: 'Seamless hybrid physical/touch input support with instantaneous arithmetic execution.',
        tech: ['JavaScript Math Logic', 'CSS Grid', 'Keyboard Event Handling']
    },
    'darkmode': {
        title: 'Dark Mode Switcher',
        category: 'Interactive UI',
        image: 'assets/Darklight.webp',
        demoUrl: 'https://igustiagung0512.github.io/Dark-Light-Mode/',
        codeUrl: 'https://github.com/IgustiAgung0512/Dark-Light-Mode',
        problem_id: 'Kenyamanan visual pengguna di malam hari membutuhkan sistem tema gelap yang persisten dan adaptif terhadap tema OS perangkat.',
        problem_en: 'Enhancing user visual comfort during low-light sessions by providing a seamless theme switcher adhering to OS color preferences.',
        solution_id: 'Membangun arsitektur variabel CSS dinamis yang tersinkronisasi dengan preferensi LocalStorage dan transisi warna halus.',
        solution_en: 'Crafted dynamic CSS Custom Properties architecture synced with LocalStorage state and smooth color-interpolation transitions.',
        impact_id: 'Transisi tema mulus tanpa screen-flickering saat reload halaman.',
        impact_en: 'Flicker-free theme hydration across reloads with high-contrast accessibility compliance.',
        tech: ['CSS Variables', 'LocalStorage', 'Theme Hydration', 'JavaScript']
    }
};

const projectModal = document.getElementById('project-modal');
const projectModalImg = document.getElementById('project-modal-img');
const projectModalTitle = document.getElementById('project-modal-title');
const projectModalCategory = document.getElementById('project-modal-category');
const projectModalProblem = document.getElementById('project-modal-problem');
const projectModalSolution = document.getElementById('project-modal-solution');
const projectModalImpact = document.getElementById('project-modal-impact');
const projectModalTech = document.getElementById('project-modal-tech');
const projectModalDemo = document.getElementById('project-modal-demo');
const projectModalCode = document.getElementById('project-modal-code');

function openProjectModal(projectId) {
    if (!projectModal) return;
    const project = projectCaseStudies[projectId];
    if (!project) return;

    if (projectModalImg) projectModalImg.src = project.image;
    if (projectModalTitle) projectModalTitle.textContent = project.title;
    if (projectModalCategory) projectModalCategory.textContent = project.category;

    if (projectModalProblem) {
        projectModalProblem.textContent = currentLang === 'id' ? project.problem_id : project.problem_en;
    }
    if (projectModalSolution) {
        projectModalSolution.textContent = currentLang === 'id' ? project.solution_id : project.solution_en;
    }
    if (projectModalImpact) {
        projectModalImpact.textContent = currentLang === 'id' ? project.impact_id : project.impact_en;
    }

    if (projectModalTech) {
        projectModalTech.innerHTML = project.tech.map(t => `<span class="project-tech-tag font-bold"><i class="fa-solid fa-code text-blue-500"></i> ${t}</span>`).join('');
    }

    if (projectModalDemo) {
        projectModalDemo.href = project.demoUrl;
        projectModalDemo.innerHTML = `<span>${currentLang === 'id' ? 'Buka Live Demo' : 'Open Live Demo'}</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
    }

    if (projectModalCode) {
        projectModalCode.href = project.codeUrl;
        projectModalCode.innerHTML = `<i class="fa-brands fa-github"></i> <span>GitHub Code</span>`;
    }

    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
        projectModal.classList.add('active');
    });
}

function closeProjectModal() {
    if (!projectModal) return;

    projectModal.classList.remove('active');
    document.body.style.overflow = '';

    setTimeout(() => {
        projectModal.classList.add('hidden');
        if (projectModalImg) projectModalImg.src = '';
    }, 250);
}

if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
        if (certModal && certModal.classList.contains('active')) {
            closeCertModal();
        }
    }
});

window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

// ==========================================
// 9. Project Category Filter
// ==========================================
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card-item');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

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
// 10. Direct Contact Form Submission Handler
// ==========================================
// ==========================================
// 10. Interactive Contact Form with Anti-Spam & Sanitization
// ==========================================
let lastFormSubmitTime = 0;

function sanitizeInput(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/[&<>"']/g, function (m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (!contactForm || !submitBtn) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Anti-Bot Honeypot Validation
        const honeypot = document.getElementById('contact-honeypot')?.value;
        if (honeypot) {
            // Bot detected, silently simulate success
            showToast(currentLang === 'id' ? 'Pesan berhasil terkirim! Terima kasih.' : 'Message sent successfully! Thank you.');
            contactForm.reset();
            return;
        }

        // 2. Rate-Limiting (Minimum 4 seconds between submissions)
        const now = Date.now();
        if (now - lastFormSubmitTime < 4000) {
            showToast(currentLang === 'id' ? 'Mohon tunggu beberapa detik sebelum mengirim pesan kembali.' : 'Please wait a few seconds before submitting again.');
            return;
        }
        lastFormSubmitTime = now;

        const rawName = document.getElementById('contact-name')?.value.trim();
        const rawEmail = document.getElementById('contact-email')?.value.trim();
        const rawSubject = document.getElementById('contact-subject')?.value;
        const rawMessage = document.getElementById('contact-message')?.value.trim();

        // 3. XSS Sanitization
        const name = sanitizeInput(rawName);
        const email = sanitizeInput(rawEmail);
        const subject = sanitizeInput(rawSubject);
        const message = sanitizeInput(rawMessage);

        // Validasi
        if (!name || !email || !message) {
            showToast(currentLang === 'id' ? 'Mohon lengkapi semua kolom form.' : 'Please fill in all required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(rawEmail)) {
            showToast(currentLang === 'id' ? 'Format email tidak valid.' : 'Invalid email format.');
            return;
        }

        // Tampilkan State Loading
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>${currentLang === 'id' ? 'Mengirim...' : 'Sending...'}</span>`;

        try {
            // Kirim request ke endpoint Web3Forms (Public endpoint)
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'c905b4b1-8da1-4475-b6d8-6516a5069411', // Public Portfolio Web3Forms Key
                    name: name,
                    email: email,
                    subject: subject || 'Portfolio Inquiry',
                    message: message,
                    from_name: 'Portfolio Contact Form'
                })
            });

            const result = await response.json();

            if (response.status === 200 || result.success) {
                showToast(currentLang === 'id' ? 'Pesan berhasil terkirim! Terima kasih.' : 'Message sent successfully! Thank you.');
                contactForm.reset();
            } else {
                // Graceful fallback: WhatsApp trigger
                showToast(currentLang === 'id' ? 'Pesan dicatat! Membuka WhatsApp...' : 'Message recorded! Opening WhatsApp...');
                const waUrl = `https://wa.me/6289524254219?text=${encodeURIComponent(`Halo I Gusti Agung,\n\nNama: ${name}\nEmail: ${email}\nKeperluan: ${subject}\n\nPesan:\n${message}`)}`;
                setTimeout(() => window.open(waUrl, '_blank'), 800);
            }
        } catch (error) {
            // Offline / Network Fallback ke WhatsApp
            showToast(currentLang === 'id' ? 'Mengarahkan pesan langsung via WhatsApp...' : 'Redirecting message via WhatsApp...');
            const waUrl = `https://wa.me/6289524254219?text=${encodeURIComponent(`Halo I Gusti Agung,\n\nNama: ${name}\nEmail: ${email}\nKeperluan: ${subject}\n\nPesan:\n${message}`)}`;
            setTimeout(() => window.open(waUrl, '_blank'), 800);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}

// ==========================================
// 11. Security, Anti-Clickjacking & Console Notice
// ==========================================
// Anti-Clickjacking / Framebusting Guard
try {
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }
} catch (e) {
    // Cross-origin iframe blocked
}

// Console Security Warning against Self-XSS
console.log(
    '%c🛡️ Stop! Peringatan Keamanan%c\nJangan tempelkan (paste) script atau perintah apa pun di sini. Area ini khusus untuk pengembang. Menjalankan script yang tidak dikenal dapat membahayakan sesi Anda.\n\n— Portfolio I Gusti Agung Ketut Agung, S.Kom',
    'color: #ef4444; font-size: 18px; font-weight: bold; padding: 4px;',
    'color: #64748b; font-size: 12px;'
);

// ==========================================
// 12. Initialize on DOM Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    updateRolesForLanguage();
    typeEffect();
    handleScroll();
    initProjectFilter();
    initContactForm();
    applyLanguage(currentLang);
});