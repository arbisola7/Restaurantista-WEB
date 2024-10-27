document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Parandalon rifreskimin e faqes

    const email = document.getElementById("email").value.trim(); // Merr emailin e futur nga përdoruesi
    const newsLetter = document.getElementById("newsletter").checked; // Kontrollon nëse kutia e newsletter është shënuar

    // Kontroll i thjeshtë për të siguruar që emaili nuk është bosh
    if (email === "") {
        alert("Please enter a valid email");
        return; // Ndërpret funksionin nëse emaili është bosh
    }

    // Krijon një objekt me të dhënat e formularit
    const data = {
        email: email,
        newsLetter: newsLetter
    };

    // Ruajtja e të dhënave në localStorage si një string JSON
    localStorage.setItem('formSubmission', JSON.stringify(data));

    // Opsionale: Shfaqni një mesazh suksesi
    alert("Form data has been saved to localStorage.");
  });
