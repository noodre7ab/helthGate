// بسيط: تفعيل قائمة الموبايل و تأثير السحب للـ arrow
document.addEventListener('DOMContentLoaded', function () {
    const ham = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    const auth = document.querySelector('.auth');

    ham && ham.addEventListener('click', () => {
        // toggle mobile view: show nav and auth under header
        if (!nav.style.display || nav.style.display === 'none') {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.background = 'linear-gradient(90deg,#5fb08f,#77b79f)';
            nav.style.position = 'absolute';
            nav.style.top = '64px';
            nav.style.right = '20px';
            nav.style.padding = '12px';
            nav.style.borderRadius = '8px';
            auth.style.display = 'flex';
            auth.style.flexDirection = 'column';
            auth.style.marginTop = '10px';
        } else {
            nav.style.display = 'none';
            auth.style.display = 'flex';
        }
    });

    // scroll arrow to about section (smooth)
    const arrow = document.querySelector('.scroll-arrow');
    arrow && arrow.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.about').offsetTop - 20,
            behavior: 'smooth'
        });
    });

    // small show-on-scroll animation for hero cards
    const cards = document.querySelectorAll('.card');
    function reveal() {
        cards.forEach((c) => {
            const r = c.getBoundingClientRect();
            if (r.top < window.innerHeight - 60) {
                c.style.opacity = 1;
                c.style.transform = 'translateY(0)';
            }
        });
    }
    cards.forEach(c => {
        c.style.opacity = 0;
        c.style.transform = 'translateY(12px)';
        c.style.transition = 'all .6s cubic-bezier(.2,.8,.2,1)';
    });
    window.addEventListener('scroll', reveal);
    reveal();
});

// highlight active card on click
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            serviceCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
});

// Handle appointment form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.appointment-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Your appointment request has been sent!');
            form.reset();
        });
    }
});

// Department cards
const deptCards = document.querySelectorAll('.department-card');
deptCards.forEach(card => {
    card.addEventListener('click', () => {
        deptCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// Doctor cards
const doctorCards = document.querySelectorAll('.doctor-card');
doctorCards.forEach(card => {
    card.addEventListener('click', () => {
        doctorCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// ===== FAQ Toggle =====
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        faqItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// ===== Testimonials (بدون مكتبات) =====
const testimonials = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        name: "Jonny Thomas",
        role: "Project Manager",
        img: "images/doctor1.jpg"
    },
    {
        text: "Amazing experience! The team was very professional and caring.",
        name: "Sarah Johnson",
        role: "Anesthesiologist",
        img: "images/doctor2.jpg"
    },
    {
        text: "Highly recommend their services. Truly life-changing care!",
        name: "William Anderson",
        role: "Chief Medical Officer",
        img: "images/doctor3.jpg"
    }
];

let currentIndex = 0;
const testimonialBox = document.querySelector('.testimonial-content');
const prevTestBtn = document.querySelector('.prev');
const nextTestBtn = document.querySelector('.next');

function updateTestimonial() {
    const t = testimonials[currentIndex];
    testimonialBox.querySelector('p').textContent = t.text;
    testimonialBox.querySelector('h3').textContent = t.name;
    testimonialBox.querySelector('span').textContent = t.role;
    testimonialBox.querySelector('img').src = t.img;
}

if (prevTestBtn && nextTestBtn && testimonialBox) {
    prevTestBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

    nextTestBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial();
    });
}

// ===== GALLERY Section =====
const galleryContainer = document.querySelector('.gallery-images');
const prevGalleryBtn = document.getElementById('prevBtn');
const nextGalleryBtn = document.getElementById('nextBtn');

if (galleryContainer && prevGalleryBtn && nextGalleryBtn) {
    nextGalleryBtn.addEventListener('click', () => {
        galleryContainer.scrollBy({ left: 350, behavior: 'smooth' });
    });

    prevGalleryBtn.addEventListener('click', () => {
        galleryContainer.scrollBy({ left: -350, behavior: 'smooth' });
    });
}
// تفعيل التابة الحالية بناءً على اسم الصفحة
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.testimonials-swiper', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.testimonials-swiper .swiper-button-next',
            prevEl: '.testimonials-swiper .swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 600,
    });
});
const track = document.getElementById('galleryTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let index = 0;
const imagesPerView = 3;
const totalImages = track.children.length;

function updateGallery() {
    const imageWidth = track.children[0].offsetWidth + 20; // 20 = gap
    track.style.transform = `translateX(-${index * imageWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < totalImages - imagesPerView) {
        index++;
        updateGallery();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateGallery();
    }
});

window.addEventListener('resize', updateGallery);

