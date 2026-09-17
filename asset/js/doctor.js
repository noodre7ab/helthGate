// JavaScript لتفعيل الكارت عند الضغط عليه
const doctorCards = document.querySelectorAll('.doctor-card');

doctorCards.forEach(card => {
    card.addEventListener('click', () => {
        doctorCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});
