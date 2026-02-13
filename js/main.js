document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-white/90', 'bg-white');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-white', 'bg-white/90');
        }
    });

    // Form Submission Mockup
    const form = document.getElementById('orderForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Отправка...';
        btn.disabled = true;
        btn.classList.add('opacity-75');

        // Simulate API call
        setTimeout(() => {
            alert('Спасибо! Ваша заявка принята. Менеджер свяжется с вами в ближайшее время.');
            form.reset();
            btn.innerText = originalText;
            btn.disabled = false;
            btn.classList.remove('opacity-75');
        }, 1500);
    });
});