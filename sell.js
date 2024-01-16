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
function proceedToDetailsPage() {
    window.location.href ="payment.html";
}

function submitDetails() {
    alert("Details submitted successfully!");
}

