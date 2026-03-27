// Web3Forms configuration
// Replace this with your actual Web3Forms access key
const WEB3FORMS_KEY = '9e0419b6-cdf6-4290-836a-e1ac6b30f436';   // <-- PUT YOUR KEY HERE

document.addEventListener('DOMContentLoaded', function() {
    // Load company contact details (unchanged)
    const phone = document.getElementById('comp-phone')?.innerText || '';
    const email = document.getElementById('comp-email')?.innerText || '';
    const address = document.getElementById('comp-address')?.innerText || '';

    const displayPhone = document.getElementById('display-phone');
    const displayEmail = document.getElementById('display-email');
    const displayAddress = document.getElementById('display-address');

    if (displayPhone) displayPhone.innerText = phone;
    if (displayEmail) displayEmail.innerText = email;
    if (displayAddress) displayAddress.innerText = address;

    // Setup Web3Forms contact form
    const form = document.getElementById('contact-form');
    if (form) {
        // Set the form action to Web3Forms endpoint
        form.action = 'https://api.web3forms.com/submit';
        form.method = 'POST';

        // Add hidden access key field
        const keyInput = document.createElement('input');
        keyInput.type = 'hidden';
        keyInput.name = 'access_key';
        keyInput.value = WEB3FORMS_KEY;
        form.appendChild(keyInput);

        // Optional: customize email subject
        const subjectInput = document.createElement('input');
        subjectInput.type = 'hidden';
        subjectInput.name = 'subject';
        subjectInput.value = 'New inquiry from FertiSolution website';
        form.appendChild(subjectInput);

        // Optional: disable captcha (remove if you want to use their captcha)
        const captchaInput = document.createElement('input');
        captchaInput.type = 'hidden';
        captchaInput.name = 'from_name';
        captchaInput.value = 'FertiSolution Website';
        form.appendChild(captchaInput);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Explore button scrolls to commodities section
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        document.getElementById('commodities').scrollIntoView({ behavior: 'smooth' });
    });
}