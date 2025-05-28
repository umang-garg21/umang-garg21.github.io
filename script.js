// Contact form handler (client-side only demo)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate form submission success
    document.getElementById('formStatus').textContent = "Thank you! Your message has been sent.";
    // Optionally, reset the form fields
    this.reset();
});