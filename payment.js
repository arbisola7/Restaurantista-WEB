
let paymentForm = document.getElementById("payment-form");

paymentForm.addEventListener('submit', function(event){
  event.preventDefault(); 

  let name = document.getElementById("name").value.trim();
  let cardNumber = document.getElementById("card-number").value.trim();
  let cvc = document.getElementById("cvc").value.trim();
  let expirationDate = document.getElementById("expiration-date").value.trim();

  if (name === '' || cardNumber === '' || cvc === '' || expirationDate === ''){
    alert("Please fill in all the required fields.");
    return;
  }


  if (!cardNumber.match(/^\d{16}$/)) {
    alert("Please enter a valid card number (16 digits).");
    return;
  }

  if (!cvc.match(/^\d{3,4}$/)) {
    alert("Please enter a valid CVC number (3 or 4 digits).");
    return;
  }

  if (!expirationDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
    alert("Please enter a valid expiration date in MM/YY format.");
    return;
  }

  document.getElementById("success-message").style.display = "block";


  paymentForm.style.filter = "blur(4px)";

  paymentForm.reset();
});


document.getElementById("expiration-date").addEventListener("input", function(event) {
    let input = event.target.value;

    if (input.length === 2 && !input.includes("/")) {
        event.target.value = input + "/";
    }
});


