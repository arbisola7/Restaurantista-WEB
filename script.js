<script>
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            alert("All fields are required. Please fill out all fields.");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

    
        alert("Form submitted successfully!");
        this.submit(); 
    });
</script>
