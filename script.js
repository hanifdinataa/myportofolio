/* ============================================
   HANIF DINATA, A.MD.T — Portfolio
   Script: Neobrutalism, Theme Toggle & Project Modal
   ============================================ */

/* --- Project Data --- */
const projects = [
    {
        id: 'smart-snack-box',
        number: '01',
        title: 'SMART SNACK BOX',
        category: 'IoT · Mobile Application · Backend · AI',
        shortHeading: 'Sistem Monitoring Kesehatan & Nutrisi Anak',
        description: 'Sistem Smart Snack Box berbasis Internet of Things untuk membantu monitoring kesehatan anak serta memberikan informasi terkait konsumsi makanan.',
        tech: ['ESP32', 'MQTT', 'Laravel', 'MySQL', 'Flutter', 'AWS', 'Docker', 'XGBoost', 'TensorFlow Lite'],
        cover: './assets/projects/smart-snack-box/snack1.png',
        images: [
            './assets/projects/smart-snack-box/snack1.png',
            './assets/projects/smart-snack-box/2.png',
            './assets/projects/smart-snack-box/3.png',
            './assets/projects/smart-snack-box/4.png',
            './assets/projects/smart-snack-box/image-4.jpg',
            './assets/projects/smart-snack-box/image-5.jpg'
        ]
    },
    {
        id: 'henscare',
        number: '02',
        title: 'HENSCARE',
        category: 'IoT · Web · Automation · Microservices',
        shortHeading: 'Otomatisasi Kandang Ayam & Lingkungan Cerdas',
        description: 'Sistem monitoring dan otomatisasi kandang ayam yang dirancang untuk membantu memantau kondisi lingkungan serta mengendalikan berbagai perangkat secara otomatis.',
        tech: ['IoT', 'ESP32', 'Web', 'Microservices', 'Telegram', 'Sensor'],
        cover: './assets/projects/henscare/37c18d41-5c3e-46c6-bdc9-4a5bdea2d8b6.jpg',
        images: [
            './assets/projects/henscare/37c18d41-5c3e-46c6-bdc9-4a5bdea2d8b6.jpg',
            './assets/projects/henscare/3C53C110-E5DA-4B56-A664-5E19C995C902.jpg',
            './assets/projects/henscare/91531735-BA98-4D03-8702-44E7B2E59F23.jpg',
            './assets/projects/henscare/738EEC98-C862-4AE3-AA0C-A54C81C47A83.jpg',
            './assets/projects/henscare/IMG_1855.PNG',
            './assets/projects/henscare/IMG_1859.PNG'
        ]
    },
    {
        id: 'rfid-door-lock',
        number: '03',
        title: 'RFID DOOR LOCK',
        category: 'Embedded System',
        shortHeading: 'Keamanan Akses Pintu Cerdas',
        description: 'Sistem kunci pintu otomatis menggunakan RFID untuk melakukan autentikasi dan mengontrol akses pintu.',
        tech: ['Arduino Uno', 'RFID', 'Embedded System'],
        cover: './assets/projects/rfid-door-lock/rf.png',
        images: [
            './assets/projects/rfid-door-lock/rf.png',
            './assets/projects/rfid-door-lock/image-1.jpg',
            './assets/projects/rfid-door-lock/image-2.jpg'
        ]
    },
     {
        id: 'kosinaja',
        number: '04',
        title: 'KOSINAJA',
        category: 'Social Media Design · Content Creation',
        shortHeading: 'Social Media Designer & Content Creator (INATECHNO · @kosinaja.id)',
        description: 'Mengelola pembuatan konten visual untuk kebutuhan promosi layanan penitipan barang KOSINAJA, termasuk desain feed Instagram, materi promosi digital, serta editing video untuk mendukung publikasi konten pada media sosial.',
        tech: ['Social Media Design', 'Graphic Design', 'Content Creation'],
        cover: './assets/projects/desain.kosinaja/image.png',
        images: [
            './assets/projects/desain.kosinaja/image.png',
            './assets/projects/desain.kosinaja/848041761_1076501695195914_7815771740181598854_n.jpg',
            './assets/projects/desain.kosinaja/848071892_2629120430853006_3520508092921375270_n.jpg',
            './assets/projects/desain.kosinaja/848696017_1160637132960014_8217107424462516338_n.jpg',
            './assets/projects/desain.kosinaja/849330795_2037622116949969_7290652962413493877_n.jpg',
            './assets/projects/desain.kosinaja/849726034_1102380449432366_8375624879581816847_n.jpg',
            './assets/projects/desain.kosinaja/849890117_1104841262274808_1188765360316918888_n.jpg',
            './assets/projects/desain.kosinaja/850495231_1114857137754170_2063138954571195291_n.jpg',
            './assets/projects/desain.kosinaja/850698377_961240193199201_3352887711474883350_n.jpg',
            './assets/projects/desain.kosinaja/850926209_2583747032143399_461422811481674987_n.jpg'
        ]
    },
    {
        id: 'feed-hari-peringatan-hmj',
        number: '05',
        title: 'Desain Feed Hari Peringatan HMJ Tekinfo',
        category: 'Graphic Design · Social Media Design',
        shortHeading: 'Social Media Feed Designer — HMJ TEKINFO',
        description: 'Membuat desain konten feed Instagram untuk memperingati hari-hari nasional dan momen penting sebagai bagian dari publikasi media sosial @hmjtekinfopnp.',
        tech: ['Graphic Design', 'Instagram Feed'],
        cover: './assets/projects/feed1/847997509_1439956768260416_6998615286397124039_n.jpg',
        images: [
            './assets/projects/feed1/847997509_1439956768260416_6998615286397124039_n.jpg',
            './assets/projects/feed1/847938513_971228336043428_1744005392311063636_n.jpg',
            './assets/projects/feed1/851708923_1459892222912128_5347083625015436639_n.jpg'
        ]
    },
    {
        id: 'volunteer-siti-2024',
        number: '06',
        title: 'Desain Twibbon & Poster Volunteer SITI 2024',
        category: 'Poster Design · Twibbon Design',
        shortHeading: 'Volunteer Recruitment Design - SITI 2024 (SITI 2024)',
        description: 'Membuat desain publikasi untuk kegiatan rekrutmen volunteer SITI 2024, meliputi poster informasi dan twibbon untuk partisipasi calon volunteer.',
        tech: ['Poster Design', 'Twibbon Design'],
        cover: './assets/projects/volunteerTI/851708923_1459892222912128_5347083625015436639_n.jpg',
        images: [
            './assets/projects/volunteerTI/851708923_1459892222912128_5347083625015436639_n.jpg',
            './assets/projects/volunteerTI/848438320_1471193254869227_8588934282909437136_n.jpg'
        ]
    },
    {
        id: 'twibbon-pkkmb-ti-2024',
        number: '07',
        title: 'Desain Twibbon PKKMB TI 2024',
        category: 'Twibbon Design · Event Branding',
        shortHeading: 'PKKMB Teknologi informasi 2024 (PKKMB TI 2024)',
        description: 'Merancang twibbon untuk kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB) Teknologi informasi tahun 2024.',
        tech: ['Twibbon Design', 'Graphic Design'],
        cover: './assets/projects/twibbonPKKMB/851425460_2037720096930924_4614590258809133213_n.jpg',
        images: [
            './assets/projects/twibbonPKKMB/851425460_2037720096930924_4614590258809133213_n.jpg',
            './assets/projects/twibbonPKKMB/848185924_2410623019345875_5619431733268819142_n.jpg'
        ]
    },
    {
        id: 'kepengurusan-hima-2024',
        number: '08',
        title: 'Desain Kepengurusan HIMA 2024',
        category: 'Organizational Design',
        shortHeading: 'HIMA Management Board Design 2024 (HMJ TEKINFO)',
        description: 'Membuat desain publikasi struktur kepengurusan HIMA tahun 2024 yang menampilkan identitas pengurus dan susunan organisasi dalam format visual yang terstruktur.',
        tech: ['Organizational Design', 'Layout Design', 'Digital Publication'],
        cover: './assets/projects/KepengurusanHMJ/848468013_1438327134889150_7861470118046482385_n.jpg',
        images: [
            './assets/projects/KepengurusanHMJ/848468013_1438327134889150_7861470118046482385_n.jpg',
            './assets/projects/KepengurusanHMJ/849016029_4543847739277563_5816519742338089002_n.jpg',
            './assets/projects/KepengurusanHMJ/850871206_4553413831644873_7351133428765668114_n.jpg'
        ]
    }
];

/* --- DOM Elements --- */
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const mobileThemeBtn = document.getElementById('mobile-theme-btn');
const sidebar = document.getElementById('sidebar');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');
const hamburger = document.getElementById('hamburger');
const navLinksList = document.querySelectorAll('.sidebar .nav-link');
const portfolioGrid = document.getElementById('portfolio-grid');

/* Modal Elements */
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalMainImg = document.getElementById('modal-main-img');
const modalThumbs = document.getElementById('modal-thumbs');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDescHeading = document.getElementById('modal-desc-heading');
const modalDesc = document.getElementById('modal-desc');
const modalTech = document.getElementById('modal-tech');

/* Lightbox Elements */
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

/* Year Elements */
const footerYear = document.getElementById('footer-year');
const sidebarYear = document.getElementById('sidebar-year');

/* --- State --- */
let currentLightboxImages = [];
let currentLightboxIndex = 0;

/* --- Dark / Light Theme Logic --- */
function initTheme() {
    const savedTheme = localStorage.getItem('porto_theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        // Detect system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        htmlElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
}

function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('porto_theme', nextTheme);
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}
if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', toggleTheme);
}

initTheme();

/* --- Mobile Drawer Navigation Toggle --- */
function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('active');
    if (hamburger) {
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('nav-open');
}

function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    if (hamburger) {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('nav-open');
}

if (hamburger) {
    hamburger.addEventListener('click', function () {
        if (sidebar && sidebar.classList.contains('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });
}

if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeSidebar);
}

/* Close drawer on clicking nav links or sidebar logo on small screens */
document.querySelectorAll('.sidebar .nav-link, .sidebar-logo').forEach(function (link) {
    link.addEventListener('click', function () {
        if (window.innerWidth <= 991) {
            closeSidebar();
        }
    });
});

/* --- Scroll Spy for Active Navigation Indicator --- */
const trackedSections = document.querySelectorAll('section[id]');

function updateActiveSection() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const offset = window.innerWidth <= 991 ? 85 : 45;

    let currentSectionId = '';

    trackedSections.forEach(function (section) {
        const top = section.offsetTop - offset;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // Check if bottom of page reached
    const scrollBottom = (window.innerHeight + window.pageYOffset) >= (document.documentElement.scrollHeight - 60);
    if (scrollBottom && trackedSections.length > 0) {
        currentSectionId = trackedSections[trackedSections.length - 1].getAttribute('id');
    }

    if (currentSectionId) {
        navLinksList.forEach(function (link) {
            const href = link.getAttribute('href');
            if (href === '#' + currentSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('resize', updateActiveSection, { passive: true });
updateActiveSection();

/* --- Smooth Scrolling for Anchor Links --- */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            e.preventDefault();
            const mobileOffset = window.innerWidth <= 991 ? 70 : 20;
            const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - mobileOffset;

            window.scrollTo({
                top: Math.max(0, targetPos),
                behavior: 'smooth'
            });
        }
    });
});

/* --- Render Portfolio Cards (Single Cover on Main Page) --- */
function renderProjects() {
    if (!portfolioGrid) return;
    let html = '';
    projects.forEach(function (project) {
        html += '<article class="project-card">';
        html += '  <div class="card-image">';
        html += '    <img src="' + project.cover + '" alt="' + project.title + '" loading="lazy" width="400" height="250" onerror="this.parentElement.classList.add(\'img-error\')">';
        html += '  </div>';
        html += '  <div class="card-body">';
        html += '    <h3 class="card-title">' + project.title + '</h3>';
        html += '    <p class="card-category">' + project.category + '</p>';
        html += '    <p class="card-desc">' + project.description + '</p>';
        html += '    <button class="card-btn" data-project="' + project.id + '" aria-label="Lihat detail ' + project.title + '">Lihat Detail →</button>';
        html += '  </div>';
        html += '</article>';
    });
    portfolioGrid.innerHTML = html;
}

renderProjects();

/* --- Open Modal with Multiple Photos & Detail --- */
function openModal(projectId) {
    const project = projects.find(function (p) { return p.id === projectId; });
    if (!project) return;

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalCategory) modalCategory.textContent = project.category;
    
    // Bold small heading + short description
    if (modalDescHeading) modalDescHeading.textContent = project.shortHeading ? project.shortHeading + ':' : 'Ringkasan Proyek:';
    if (modalDesc) modalDesc.textContent = project.description;

    /* Main image */
    if (modalMainImg) {
        modalMainImg.src = project.images[0] || project.cover;
        modalMainImg.alt = project.title;
    }

    /* Multiple Thumbnails (User can upload any number of photos) */
    if (modalThumbs) {
        let thumbsHtml = '';
        project.images.forEach(function (img, i) {
            thumbsHtml += '<img src="' + img + '" alt="' + project.title + ' foto ' + (i + 1) + '" class="' + (i === 0 ? 'active' : '') + '" data-index="' + i + '" onerror="this.style.display=\'none\'">';
        });
        modalThumbs.innerHTML = thumbsHtml;
    }

    /* Tech Tags */
    if (modalTech) {
        let techHtml = '';
        project.tech.forEach(function (t) {
            techHtml += '<span class="tag">' + t + '</span>';
        });
        modalTech.innerHTML = techHtml;
    }

    /* Store images for lightbox */
    currentLightboxImages = project.images;
    currentLightboxIndex = 0;

    /* Show modal */
    if (modalOverlay) {
        modalOverlay.classList.add('open');
        document.body.classList.add('modal-open');
    }
}

/* --- Close Modal --- */
function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('open');
        document.body.classList.remove('modal-open');
    }
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

/* --- Modal Thumbnail Switching --- */
if (modalThumbs) {
    modalThumbs.addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG') {
            const index = parseInt(e.target.getAttribute('data-index'), 10);
            if (modalMainImg && currentLightboxImages[index]) {
                modalMainImg.src = currentLightboxImages[index];
                currentLightboxIndex = index;

                modalThumbs.querySelectorAll('img').forEach(function (img) {
                    img.classList.remove('active');
                });
                e.target.classList.add('active');
            }
        }
    });
}

/* --- Main Image Click -> Lightbox --- */
if (modalMainImg) {
    modalMainImg.addEventListener('click', function () {
        openLightbox(currentLightboxIndex);
    });
}

/* --- Lightbox --- */
function openLightbox(index) {
    if (!lightboxOverlay || !lightboxImg || !currentLightboxImages.length) return;
    currentLightboxIndex = index;
    lightboxImg.src = currentLightboxImages[index];
    lightboxImg.alt = 'Foto Proyek ' + (index + 1);
    lightboxOverlay.classList.add('open');

    updateLightboxNav();
}

function closeLightbox() {
    if (lightboxOverlay) {
        lightboxOverlay.classList.remove('open');
    }
}

function updateLightboxNav() {
    if (lightboxPrev) {
        lightboxPrev.style.display = currentLightboxIndex > 0 ? 'flex' : 'none';
    }
    if (lightboxNext) {
        lightboxNext.style.display = currentLightboxIndex < currentLightboxImages.length - 1 ? 'flex' : 'none';
    }
}

if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', function (e) {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', function (e) {
        e.stopPropagation();
        if (currentLightboxIndex > 0) {
            currentLightboxIndex--;
            lightboxImg.src = currentLightboxImages[currentLightboxIndex];
            updateLightboxNav();
        }
    });
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', function (e) {
        e.stopPropagation();
        if (currentLightboxIndex < currentLightboxImages.length - 1) {
            currentLightboxIndex++;
            lightboxImg.src = currentLightboxImages[currentLightboxIndex];
            updateLightboxNav();
        }
    });
}

/* --- Card Click Delegation --- */
if (portfolioGrid) {
    portfolioGrid.addEventListener('click', function (e) {
        const btn = e.target.closest('.card-btn');
        if (btn) {
            const projectId = btn.getAttribute('data-project');
            openModal(projectId);
        }
    });
}

/* --- ESC Key Handling --- */
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (lightboxOverlay && lightboxOverlay.classList.contains('open')) {
            closeLightbox();
        } else if (modalOverlay && modalOverlay.classList.contains('open')) {
            closeModal();
        } else if (cvModalOverlay && cvModalOverlay.classList.contains('open')) {
            closeCvModal();
        } else if (certLightboxOverlay && certLightboxOverlay.classList.contains('open')) {
            closeCertModal();
        } else if (sidebar && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    }

    if (lightboxOverlay && lightboxOverlay.classList.contains('open')) {
        if (e.key === 'ArrowLeft' && currentLightboxIndex > 0) {
            currentLightboxIndex--;
            lightboxImg.src = currentLightboxImages[currentLightboxIndex];
            updateLightboxNav();
        }
        if (e.key === 'ArrowRight' && currentLightboxIndex < currentLightboxImages.length - 1) {
            currentLightboxIndex++;
            lightboxImg.src = currentLightboxImages[currentLightboxIndex];
            updateLightboxNav();
        }
    }
});

/* --- CV Preview Modal Logic --- */
const btnPreviewCv = document.getElementById('btn-preview-cv');
const cvModalOverlay = document.getElementById('cv-modal-overlay');
const cvModalClose = document.getElementById('cv-modal-close');

function openCvModal() {
    if (cvModalOverlay) {
        cvModalOverlay.classList.add('open');
        document.body.classList.add('modal-open');
        if (btnPreviewCv) btnPreviewCv.setAttribute('aria-expanded', 'true');
    }
}

function closeCvModal() {
    if (cvModalOverlay) {
        cvModalOverlay.classList.remove('open');
        document.body.classList.remove('modal-open');
        if (btnPreviewCv) btnPreviewCv.setAttribute('aria-expanded', 'false');
    }
}

if (btnPreviewCv) {
    btnPreviewCv.addEventListener('click', function (e) {
        e.preventDefault();
        openCvModal();
    });
}

if (cvModalClose) {
    cvModalClose.addEventListener('click', closeCvModal);
}

if (cvModalOverlay) {
    cvModalOverlay.addEventListener('click', function (e) {
        if (e.target === cvModalOverlay) {
            closeCvModal();
        }
    });
}

/* --- Update Years --- */
const currentYear = new Date().getFullYear();
if (footerYear) footerYear.textContent = currentYear;
if (sidebarYear) sidebarYear.textContent = currentYear;

/* ============================================
   CREDENTIALS / SERTIFIKAT DATA & LOGIC
   ============================================ */
const certificates = [
    /* --- Oracle Academy --- */
    {
        id: 'oracle-java-programming-final',
        title: 'Java Programming - Final Exam',
        description: '',
        category: 'oracle',
        categoryLabel: 'Oracle Academy',
        image: './assets/certificates/4.png',
        fallback: './assets/certificates/4.png',
        credentialUrl: 'https://drive.google.com/file/d/1znI6jnz-CpZEnjhsxfZOdlIhQvGnUlit/view?usp=drivesdk'
    },
    {
        id: 'oracle-java-programming-competency',
        title: 'Java Programming - Code Competency',
        description: '',
        category: 'oracle',
        categoryLabel: 'Oracle Academy',
        image: './assets/certificates/3.png',
        fallback: './assets/certificates/3.png',
        credentialUrl: 'https://drive.google.com/file/d/19WNlVqbc49q84pptpDjjVPGIZD1_hjVU/view?usp=drivesdk'
    },
    {
        id: 'oracle-java-fundamentals-final',
        title: 'Java Fundamentals - Final Exam',
        description: '',
        category: 'oracle',
        categoryLabel: 'Oracle Academy',
        image: './assets/certificates/2.png',
        fallback: './assets/certificates/2.png',
        credentialUrl: 'https://drive.google.com/file/d/1fQNXHg3x1XJdBXJnA_rtarTvixOPB0AO/view?usp=drivesdk'
    },
    {
        id: 'oracle-java-fundamentals-competency',
        title: 'Java Fundamentals - Code Competency',
        description: '',
        category: 'oracle',
        categoryLabel: 'Oracle Academy',
        image: './assets/certificates/1.png',
        fallback: './assets/certificates/1.png',
        credentialUrl: ''
    },

    /* --- Red Hat --- */
    {
        id: 'redhat-rh134',
        title: 'Certificate of Attendance (RH134-9.0)',
        description: '',
        category: 'redhat',
        categoryLabel: 'Red Hat',
        image: './assets/certificates/9.png',
        fallback: './assets/certificates/9.png',
        credentialUrl: 'https://drive.google.com/file/d/1ze0ZqETTTUhiy1vbCczj00KqsTyTorg6/view?usp=drivesdk'
    },
    {
        id: 'redhat-rh124',
        title: 'Certificate of Attendance (RH124-9.0)',
        description: '',
        category: 'redhat',
        categoryLabel: 'Red Hat',
        image: './assets/certificates/8.png',
        fallback: './assets/certificates/8.png',
        credentialUrl: 'https://drive.google.com/file/d/1wDFN9tduFKxBXkhLjb2rJIlgHwQJX9ud/view?usp=drivesdk'
    },

    /* --- Sololearn --- */
    {
        id: 'sololearn-sql-intermediate',
        title: 'SQL Intermediate Certificate',
        description: 'Sertifikasi Sololearn untuk penguasaan manipulasi database relasional, join query multi-tabel, agregasi, subqueries, dan optimasi query (ID: CC-LJUVD6TK).',
        category: 'sololearn',
        categoryLabel: 'Sololearn',
        image: './assets/certificates/sololearn-sql-intermediate.png',
        fallback: './assets/certificates/sololearn.svg',
        credentialUrl: 'https://drive.google.com/file/d/154qgkodqvVJKVfEfUePOSHAL8H1_KOiF/view?usp=drivesdk'
    },
    {
        id: 'sololearn-web-development',
        title: 'Web Development Certificate',
        description: 'Sertifikasi dasar rekayasa web oleh Sololearn meliputi semantic HTML, modern styling CSS, dan interaktivitas website (ID: CC-BAECXCUA).',
        category: 'sololearn',
        categoryLabel: 'Sololearn',
        image: './assets/certificates/sololearn-web-development.png',
        fallback: './assets/certificates/sololearn.svg',
        credentialUrl: 'https://drive.google.com/file/d/1V_Tf9rM8RumHIwaD_TaJeV-VU6q71nRa/view?usp=drivesdk'
    },
    {
        id: 'sololearn-c',
        title: 'Introduction to C Certificate',
        description: 'Sertifikasi pemahaman dasar bahasa C oleh Sololearn yang mencakup alokasi memori, manipulasi pointer, array, dan struct (ID: CC-A6FDEXSZ).',
        category: 'sololearn',
        categoryLabel: 'Sololearn',
        image: './assets/certificates/sololearn-c.png',
        fallback: './assets/certificates/sololearn.svg',
        credentialUrl: 'https://drive.google.com/file/d/1e-Oo1_6v9nTrE7YyKsgb6t51GAbVnI0F/view?usp=drivesdk'
    },
    {
        id: 'sololearn-css',
        title: 'Introduction to CSS Certificate',
        description: 'Sertifikasi Sololearn untuk cascading style sheets, tata letak Flexbox dan Grid, tipografi web, dan styling responsif (ID: CC-FML0FPMC).',
        category: 'sololearn',
        categoryLabel: 'Sololearn',
        image: './assets/certificates/sololearn-css.png',
        fallback: './assets/certificates/sololearn.svg',
        credentialUrl: 'https://drive.google.com/file/d/1Znga_V6MhYouKufTVOfkZ57OqSvyEp86/view?usp=drivesdk'
    },
    {
        id: 'sololearn-html',
        title: 'Introduction to HTML Certificate',
        description: 'Sertifikasi Sololearn untuk standar semantic HTML5, formulir web, struktur navigasi dokumen, dan aksesibilitas (ID: CC-DZVLKI9I).',
        category: 'sololearn',
        categoryLabel: 'Sololearn',
        image: './assets/certificates/sololearn-html.png',
        fallback: './assets/certificates/sololearn.svg',
        credentialUrl: 'https://drive.google.com/file/d/1S_ox6ZUWUMEjyfuPx7TjScX7hsmxoEAI/view?usp=drivesdk'
    },

    /* --- Dicoding Indonesia --- */
    {
        id: 'dicoding-prompt-engineering',
        title: 'Prompt Engineering untuk Software Developer',
        description: 'Sertifikasi kompetensi Dicoding Indonesia dalam merancang prompt AI yang presisi, kontekstual, dan efektif guna akselerasi software development (ID: QLZ96L4VMZ5D).',
        category: 'dicoding',
        categoryLabel: 'Dicoding',
        image: './assets/certificates/dicoding-prompt-engineering.png',
        fallback: './assets/certificates/dicoding.svg',
        credentialUrl: 'https://www.dicoding.com/certificates/QLZ96L4VMZ5D'
    },
    {
        id: 'dicoding-dasar-ai',
        title: 'Belajar Dasar AI',
        description: 'Sertifikasi Dicoding Indonesia yang mempelajari fondasi kecerdasan buatan, machine learning, data preparation, serta etika pemanfaatan AI (ID: L4PQ287Q2ZO1).',
        category: 'dicoding',
        categoryLabel: 'Dicoding',
        image: './assets/certificates/dicoding-dasar-ai.png',
        fallback: './assets/certificates/dicoding.svg',
        credentialUrl: 'https://www.dicoding.com/certificates/L4PQ287Q2ZO1'
    },
    {
        id: 'dicoding-solid',
        title: 'Belajar Prinsip Pemrograman SOLID',
        description: 'Sertifikasi Dicoding Indonesia dalam penerapan 5 prinsip arsitektur perangkat lunak SOLID untuk kode yang modular dan scalable (ID: 4EXG3YKRDZRL).',
        category: 'dicoding',
        categoryLabel: 'Dicoding',
        image: './assets/certificates/dicoding-solid.png',
        fallback: './assets/certificates/dicoding.svg',
        credentialUrl: 'https://www.dicoding.com/certificates/4EXG3YKRDZRL'
    },
    {
        id: 'dicoding-java',
        title: 'Memulai Pemrograman Dengan Java',
        description: 'Sertifikasi Dicoding Indonesia yang mempelajari sintaks Java murni, manipulasi array dan string, struktur kontrol, serta pengantar OOP (ID: JMZVVM3N3ZN9).',
        category: 'dicoding',
        categoryLabel: 'Dicoding',
        image: './assets/certificates/dicoding-java.png',
        fallback: './assets/certificates/dicoding.svg',
        credentialUrl: 'https://www.dicoding.com/certificates/JMZVVM3N3ZN9'
    },
    {
        id: 'dicoding-manajemen-proyek',
        title: 'Belajar Dasar Manajemen Proyek',
        description: 'Sertifikasi Dicoding Indonesia mengenai framework Agile, Scrum, estimasi durasi, alokasi sumber daya, dan monitoring milestone proyek (ID: 2VX35NO83PYQ).',
        category: 'dicoding',
        categoryLabel: 'Dicoding',
        image: './assets/certificates/dicoding-manajemen-proyek.png',
        fallback: './assets/certificates/dicoding.svg',
        credentialUrl: 'https://www.dicoding.com/certificates/2VX35NO83PYQ'
    },

    /* --- HackerRank --- */
    {
        id: 'hackerrank-software-engineer',
        title: 'Software Engineer Certificate',
        description: 'Sertifikasi standar kompetensi HackerRank yang menguji pemecahan masalah algoritma, struktur data kompleks, SQL, dan rekayasa software (ID: 4504c743d3c8).',
        category: 'hackerrank',
        categoryLabel: 'HackerRank',
        image: './assets/certificates/hackerrank-software-engineer.png',
        fallback: './assets/certificates/hackerrank.svg',
        credentialUrl: 'https://www.hackerrank.com/certificates/4504c743d3c8'
    },
    {
        id: 'hackerrank-software-engineer-intern',
        title: 'Software Engineer Intern Certificate',
        description: 'Sertifikasi kesiapan magang industri oleh HackerRank yang menguji pemecahan masalah algoritma, integrasi REST API, dan standar clean coding (ID: CA3E5OD8CA69).',
        category: 'hackerrank',
        categoryLabel: 'HackerRank',
        image: './assets/certificates/hackerrank-software-engineer-intern.png',
        fallback: './assets/certificates/hackerrank.svg',
        credentialUrl: 'https://www.hackerrank.com/certificates/iframe/ca3e50d8ca69'
    },
    {
        id: 'hackerrank-go-intermediate',
        title: 'Go (Intermediate) Certificate',
        description: 'Sertifikasi HackerRank yang memvalidasi keahlian tingkat menengah pada bahasa Go meliputi goroutines, concurrency channels, dan struktur data (ID: 63a4f62a6564).',
        category: 'hackerrank',
        categoryLabel: 'HackerRank',
        image: './assets/certificates/hackerrank-go-intermediate.png',
        fallback: './assets/certificates/hackerrank.svg',
        credentialUrl: 'https://www.hackerrank.com/certificates/63a4f62a6564'
    },
    {
        id: 'hackerrank-go-basic',
        title: 'Go (Basic) Certificate',
        description: 'Sertifikasi HackerRank yang memvalidasi pemahaman dasar bahasa Go, kontrol alur pemrograman, slice, maps, fungsi, dan sintaks inti (ID: 15819BDCD217).',
        category: 'hackerrank',
        categoryLabel: 'HackerRank',
        image: './assets/certificates/hackerrank-go-basic.png',
        fallback: './assets/certificates/hackerrank.svg',
        credentialUrl: 'https://www.hackerrank.com/certificates/iframe/15819bdcd217'
    },

    /* --- Cisco --- */
    {
        id: 'cisco-ethical-hacker',
        title: 'Certificate Ethical Hacker',
        description: 'Sertifikasi keamanan siber dari Cisco Networking Academy yang mencakup teknik penetration testing, vulnerability assessment, dan mitigasi ancaman digital.',
        category: 'cisco',
        categoryLabel: 'Cisco',
        image: './assets/certificates/cisco-ethical-hacker.png',
        fallback: './assets/certificates/cisco.svg',
        credentialUrl: 'https://drive.google.com/file/d/1hhcSS_FMzrruraELSHVYaUuj3f9lBRUF/view?usp=drivesdk'
    },
    {
        id: 'cisco-ccna-intro-networks',
        title: 'CCNA: Introduction to Networks',
        description: '',
        category: 'cisco',
        categoryLabel: 'Cisco',
        image: './assets/certificates/7.png',
        fallback: './assets/certificates/7.png',
        credentialUrl: 'https://www.linkedin.com/in/hanif-dinata-536371326/overlay/Certifications/39640192/treasury/?profileId=ACoAAFJHhLoBK32Wr2MSeoN6FuZxrgFilXXK9To'
    },

    /* --- BNSP / DIGIMIND --- */
    {
        id: 'bnsp-digital-marketing-ai',
        title: 'BNSP — Digital Marketing Berbasis AI',
        description: 'Sertifikasi BNSP oleh Asosiasi Digital Marketing Indonesia (DIGIMIND) dengan kompetensi Digital Marketing dan Prompt Engineering (ID Kredensial: 3662).',
        category: 'bnsp',
        categoryLabel: 'BNSP / DIGIMIND',
        image: './assets/certificates/bnsp-digital-marketing-ai.png',
        fallback: './assets/certificates/bnsp.svg',
        credentialUrl: 'https://www.linkedin.com/in/hanif-dinata-536371326/overlay/Certifications/295248970/treasury/?profileId=ACoAAFJHhLoBK32Wr2MSeoN6FuZxrgFilXXK9To'
    },

    /* --- INATECHNO --- */
    {
        id: 'inatechno-pengembangan-diri',
        title: 'Workshop Pengembangan Diri',
        description: 'Sertifikat partisipasi workshop intensif INATECHNO dengan fokus peningkatan soft skills, personal branding, kepemimpinan tim, dan karir IT (ID: 05250303002).',
        category: 'inatechno',
        categoryLabel: 'INATECHNO',
        image: './assets/certificates/inatechno-pengembangan-diri.png',
        fallback: './assets/certificates/inatechno.svg',
        credentialUrl: 'https://drive.google.com/file/d/1_V-e5xD6zwWbIxV1NzDdDhOd_XC24Rao/view?usp=drive_link'
    },

    /* --- Kominfo DTS --- */
    {
        id: 'dts-kominfo-pelatihan',
        title: 'Sertifikat Pelatihan Digital Talent Scholarship',
        description: 'Sertifikat resmi program DTS oleh Kementerian Komunikasi dan Informatika (Kominfo) dalam pengembangan talenta teknologi informasi nasional.',
        category: 'kominfo',
        categoryLabel: 'Kominfo DTS',
        image: './assets/certificates/dts-kominfo-pelatihan.png',
        fallback: './assets/certificates/kominfo.svg',
        credentialUrl: 'https://drive.google.com/file/d/1BYVF_ow0GjXTLXCa4YsBEPVwntZ__XMK/view?usp=drivesdk'
    },

    /* --- HMJ TI & PNP (Organisasi & Kampus) --- */
    {
        id: 'job-fair-pnp-2024',
        title: 'Piagam Penghargaan — Job Fair & Seminar Karir 2024',
        description: 'Piagam penghargaan UPAPKK Politeknik Negeri Padang atas peran aktif sebagai panitia Dokumentasi dan Video Editor pada Job Fair 2024 (ID: 483/PL9.PP.01.07/2024).',
        category: 'organization',
        categoryLabel: 'Job Fair PNP',
        image: './assets/certificates/job-fair-pnp-2024.png',
        fallback: './assets/certificates/organization.svg',
        credentialUrl: 'https://drive.google.com/file/d/10Su0WZftwNFSH47X3_W-TMG5ON1qgG_G/view?usp=drivesdk'
    },
    {
        id: 'panitia-pkm-genap-2024',
        title: 'Sertifikat Koordinator - PKM GENAP 2024 PNP',
        description: '',
        category: 'organization',
        categoryLabel: 'HMJ TI PNP',
        image: './assets/certificates/6.png',
        fallback: './assets/certificates/6.png',
        credentialUrl: 'https://drive.google.com/file/d/13_SLzLSBnhIDMfcyG9kQo4pu-C_vYl5C/view?usp=drivesdk'
    },
    {
        id: 'ngabuburit-it-2024',
        title: 'Sertifikat Koordinator - Ngabuburit IT 2024',
        description: '',
        category: 'organization',
        categoryLabel: 'HMJ TI PNP',
        image: './assets/certificates/5.png',
        fallback: './assets/certificates/5.png',
        credentialUrl: 'https://drive.google.com/file/d/1fHZdjmOhNH-uj7xB6RH6J5J3szlLqYFW/view?usp=drivesdk'
    },
    {
        id: 'cert-org-hmj',
        title: 'Sertifikat Kepengurusan — HMJ TI PNP',
        description: 'Sertifikat dedikasi kepengurusan pada Divisi Komunikasi dan Informasi Himpunan Mahasiswa TI PNP periode 2024–2026 dalam perancangan konten visual.',
        category: 'organization',
        categoryLabel: 'HMJ TI PNP',
        image: './assets/certificates/sertifikat-hmj-ti.png',
        fallback: './assets/certificates/organization.svg',
        credentialUrl: ''
    },
    {
        id: 'cert-workshop-pkkmb',
        title: 'Sertifikat Kontributor — PKKMB TI 2024',
        description: 'Penghargaan atas kontribusi kreatif dalam pembuatan twibbon resmi dan video sambutan mahasiswa baru Jurusan Teknologi Informasi Politeknik Negeri Padang.',
        category: 'organization',
        categoryLabel: 'HMJ TI PNP',
        image: './assets/certificates/sertifikat-pkkmb-ti.png',
        fallback: './assets/certificates/organization.svg',
        credentialUrl: ''
    },
    {
        id: 'pnp-d3-teknik-komputer',
        title: 'Lulusan dengan Pujian — D3 Teknik Komputer',
        description: 'Ijazah kelulusan Politeknik Negeri Padang dengan predikat Lulusan dengan Pujian (IPK 3,58) dengan konsentrasi rekayasa sistem komputer.',
        category: 'organization',
        categoryLabel: 'Politeknik Negeri Padang',
        image: './assets/certificates/sertifikat-kelulusan-pnp.png',
        fallback: './assets/certificates/organization.svg',
        credentialUrl: ''
    },

    /* --- Internship --- */
    {
        id: 'cert-intern-qa',
        title: 'Sertifikat Magang — Quality Assurance Tester',
        description: 'Sertifikat penyelesaian program magang di PT Neuronworks Indonesia dengan fokus pengujian fungsional manual dan otomatisasi menggunakan Cypress.',
        category: 'internship',
        categoryLabel: 'Internship',
        image: './assets/certificates/sertifikat-magang-qa.png',
        fallback: './assets/certificates/internship.svg',
        credentialUrl: ''
    },
    {
        id: 'cert-intern-backend',
        title: 'Sertifikat Magang — Backend Developer',
        description: 'Sertifikat magang di IMEJ Consultant dalam pengembangan RESTful API, perancangan basis data relasional, debugging kode, serta optimasi backend Laravel.',
        category: 'internship',
        categoryLabel: 'Internship',
        image: './assets/certificates/sertifikat-magang-backend.png',
        fallback: './assets/certificates/internship.svg',
        credentialUrl: ''
    }
];

const certGrid = document.getElementById('cert-grid');
const certFilterBtns = document.querySelectorAll('.cert-filter-btn');
const certModalOverlay = document.getElementById('cert-modal-overlay');
const certModalBadge = document.getElementById('cert-modal-badge');
const certModalTitle = document.getElementById('cert-modal-title');
const certModalDesc = document.getElementById('cert-modal-desc');
const certModalImg = document.getElementById('cert-modal-img');
const certModalVerifyBtn = document.getElementById('cert-modal-verify-btn');
const certModalOpenBtn = document.getElementById('cert-modal-open-btn');
const certModalClose = document.getElementById('cert-modal-close');

function renderCertificates(activeFilter) {
    if (!certGrid) return;
    const filter = activeFilter || 'all';

    const filtered = filter === 'all' 
        ? certificates 
        : certificates.filter(function (c) { return c.category === filter; });

    if (filtered.length === 0) {
        certGrid.innerHTML = '<p style="grid-column: 1 / -1; padding: 24px; text-align: center; font-weight: 700; color: var(--muted);">Belum ada sertifikat pada kategori ini.</p>';
        return;
    }

    let html = '';
    filtered.forEach(function (cert) {
        html += '<article class="cert-card" data-category="' + cert.category + '">';
        html += '  <div class="cert-image-wrap" data-cert-id="' + cert.id + '" title="Klik untuk melihat pratinjau sertifikat">';
        html += '    <img src="' + cert.image + '" alt="' + cert.title + '" loading="lazy" class="cert-preview-img" onerror="this.onerror=null;this.src=\'' + cert.fallback + '\'">';
        html += '    <span class="cert-badge">' + cert.categoryLabel + '</span>';
        html += '  </div>';
        html += '  <div class="cert-body">';
        html += '    <h3 class="cert-name">' + cert.title + '</h3>';
        html += '    <p class="cert-desc">' + cert.description + '</p>';
        html += '    <button type="button" class="btn btn-primary btn-block cert-action-btn" data-cert-id="' + cert.id + '">';
        html += '      Lihat Sertifikat';
        html += '    </button>';
        html += '  </div>';
        html += '</article>';
    });

    certGrid.innerHTML = html;
}

renderCertificates('all');

/* Filter Tabs Interaction */
certFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        certFilterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        const filterValue = this.getAttribute('data-filter');
        renderCertificates(filterValue);
    });
});

/* Open Certificate Modal (Styled like CV Preview Modal) */
function openCertModal(certId) {
    const cert = certificates.find(function (c) { return c.id === certId; });
    if (!cert || !certModalOverlay) return;

    if (certModalBadge) certModalBadge.textContent = cert.categoryLabel;
    if (certModalTitle) certModalTitle.textContent = cert.title;
    if (certModalDesc) certModalDesc.textContent = cert.description;

    if (certModalImg) {
        certModalImg.src = cert.image;
        certModalImg.alt = cert.title;
        certModalImg.onerror = function () {
            this.onerror = null;
            this.src = cert.fallback;
            if (certModalOpenBtn) certModalOpenBtn.href = cert.fallback;
        };
    }

    if (certModalOpenBtn) {
        certModalOpenBtn.href = cert.image;
    }

    if (certModalVerifyBtn) {
        if (cert.credentialUrl && cert.credentialUrl.trim() !== '') {
            certModalVerifyBtn.href = cert.credentialUrl;
            certModalVerifyBtn.style.display = 'inline-flex';
        } else {
            certModalVerifyBtn.style.display = 'none';
        }
    }

    certModalOverlay.classList.add('open');
    document.body.classList.add('modal-open');
}

function closeCertModal() {
    if (certModalOverlay) {
        certModalOverlay.classList.remove('open');
        document.body.classList.remove('modal-open');
    }
}

if (certGrid) {
    certGrid.addEventListener('click', function (e) {
        const target = e.target.closest('.cert-action-btn, .cert-image-wrap');
        if (target) {
            const certId = target.getAttribute('data-cert-id');
            if (certId) {
                openCertModal(certId);
            }
        }
    });
}

if (certModalClose) {
    certModalClose.addEventListener('click', closeCertModal);
}

if (certModalOverlay) {
    certModalOverlay.addEventListener('click', function (e) {
        if (e.target === certModalOverlay) {
            closeCertModal();
        }
    });
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeCertModal();
        if (typeof closeCvModal === 'function') closeCvModal();
        if (typeof closeModal === 'function') closeModal();
        if (typeof closeLightbox === 'function') closeLightbox();
    }
});

