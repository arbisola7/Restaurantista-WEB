document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailaddress").value.trim(); 
    const newsletter = document.getElementById("newsletter").checked; 


    if (email === "") {
        alert("Please enter a valid email");
        return; 
    }

 
    const data = {
        email: email,
        newsletter: newsletter
    };


    localStorage.setItem('formSubmission', JSON.stringify(data));

  
    alert("Form data has been saved to localStorage.");

   
    $.ajax({
        url: '/submit-form.js',
        type: 'POST',
        data: data,
        success: function(response) {
            showMessage("Thank you!", 'success');
            $('#newsletter-form')[0].reset();
        },
        error: function(xhr, status, error) {
            showMessage("An error occurred", 'error');
            console.log(xhr.responseText);
        }
    });
  });

function showMessage(message, type) {
    let messageContainer = $('#message-container');
    messageContainer.text(message);
    messageContainer.removeClass().addClass(type);

    let countdown = 10;
    let countdownInterval = setInterval(function() {
        messageContainer.html(
            `Page will reload in ${countdown} second${countdown !== 1 ? "s" : ""}`
        );
        countdown--;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            location.reload(); 
        }
    }, 1000); 
}
