document.querySelector('.contact-form').addEventListener('submit', function(event) {
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea[name="message"]').value;
    
    if (!name || !email || !message) {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in all fields.');
    }
});
