/* Bhavya Sai Mooga - N01651100, Sri Harshini Jilloju - N01649103 Date:27th March,2024*/
// Function to validate email
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate phone number
function validatePhone(phone) {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(phone);
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form elements
    const feedback = document.getElementById('feedback').value;
    const coffeeSelection = document.getElementById('coffeeSelection').value;
    const cleanliness = document.getElementById('cleanliness').value;
    const staffFriendliness = document.getElementById('staffFriendliness').value;
    const performance = document.querySelector('input[name="performance"]:checked').value;
    const additionalFeedback = document.getElementById('additionalFeedback').value;
    const qualityControl = document.getElementById('qualityControl').value;
    const serviceEfficiency = document.getElementById('serviceEfficiency').value;
    const ambianceEnhancement = document.getElementById('ambianceEnhancement').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validation
    if (!feedback || !coffeeSelection || !cleanliness || !staffFriendliness || !performance || !name || !email || !phone) {
        alert('Please fill out all required fields.');
        return;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number in the format 999-999-9999.');
        return;
    }

    // Assuming form submission is successful
    alert('Thank you for your feedback! Your form has been submitted successfully.');

    // Clear form fields after submission
    document.getElementById('feedback').value = '';
    document.getElementById('coffeeSelection').value = '';
    document.getElementById('cleanliness').value = '';
    document.getElementById('staffFriendliness').value = '';
    document.querySelector('input[name="performance"]:checked').checked = false;
    document.getElementById('additionalFeedback').value = '';
    document.getElementById('qualityControl').value = '';
    document.getElementById('serviceEfficiency').value = '';
    document.getElementById('ambianceEnhancement').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

// Add event listener to form submission
document.getElementById('submit').addEventListener('click', submitForm);
