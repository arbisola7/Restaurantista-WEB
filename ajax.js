document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Parandalon rifreskimin e faqes

    const email = document.getElementById("emailaddress").value.trim(); // Merr emailin e futur nga përdoruesi
    const newsletter = document.getElementById("newsletter").checked; // Kontrollon nëse kutia e newsletter është shënuar

    // Kontroll i thjeshtë për të siguruar që emaili nuk është bosh
    if (email === "") {
        alert("Please enter a valid email");
        return; // Ndërpret funksionin nëse emaili është bosh
    }

    // Krijon një objekt me të dhënat e formularit
    const data = {
        email: email,
        newsletter: newsletter
    };

    // Ruajtja e të dhënave në localStorage si një string JSON
    localStorage.setItem('formSubmission', JSON.stringify(data));

    // Opsionale: Shfaqni një mesazh suksesi
    alert("Form data has been saved to localStorage.");

    // Krijon dhe ekzekuton kërkesën AJAX për të dërguar të dhënat
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
            location.reload(); // Rifreskimi i faqes pas përfundimit të numërimit
        }
    }, 1000); // Countdown every second
}
