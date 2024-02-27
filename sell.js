function calculatePrice() {
    const condition = document.querySelector('input[name="condition"]:checked').value;
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    
    let discountPercentage;

    switch (condition) {
        case 'excellent':
            discountPercentage = 0;
            break;
        case 'good':
            discountPercentage = 10;
            break;
        case 'fair':
            discountPercentage = 20;
            break;
        case 'bad':
            discountPercentage = 30;
            break;
        default:
            discountPercentage = 0;
            break;
    }

    const calculatedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    document.getElementById('calculatedPrice').value = calculatedPrice.toFixed(2);
}
function proceed() {
    // Get UPI ID from the input field
    var upiId = document.getElementById("upiId").value;

    // Display payment banner
    showPaymentBanner();

    // Simulate a delay for 4 seconds
    setTimeout(function () {
        // Redirect to index.html after 4 seconds
        window.location.href = "index.html";
    }, 4000);
}

function showPaymentBanner() {
    var paymentBanner = document.getElementById("paymentBanner");
    
    // Display the banner with a message
    paymentBanner.innerHTML = "Payment will be processed in 3-4 business days. Thank you!";
    
    // Apply styles for the banner
    paymentBanner.style.backgroundColor = "rgba(13, 187, 30)"; // Green color
    paymentBanner.style.color = "#fff"; // White text
    paymentBanner.style.padding = "15px"; // Padding for better visibility
    paymentBanner.style.textAlign = "center"; // Center-align text
    paymentBanner.style.position = "fixed"; // Fixed position at the top
    paymentBanner.style.width = "100%"; // Full width
    paymentBanner.style.top = "0"; // Display at the top
    paymentBanner.style.zIndex = "1"; // Ensure it's above other elements

    // Auto-hide the banner after 4 seconds
    setTimeout(function () {
        paymentBanner.style.display = "none";
    }, 4000);
}


function submitDetails() {
    alert("Details submitted successfully!");
}

