// Function to handle form submission
function getFormvalue(event) {
    // Ensure the event object is available
    if (event) {
        event.preventDefault(); // Prevent the default form submission behavior
    }

    // Access the form element
    const form = document.getElementById('form1');

    // Get the values of the input fields
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();

    // Display the values using alert
    alert(`${firstName} ${lastName}`);
}

// Attach the function to the form submit event
document.getElementById('form1').addEventListener('submit', getFormvalue);
