function getFormvalue(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Access the form element
    const form = document.getElementById('form1');

    // Get the values of the input fields
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    // Display the values using alert
    alert(`${firstName} ${lastName}`);
}

// Attach the function to the form submit event
document.getElementById('form1').addEventListener('submit', getFormvalue);
