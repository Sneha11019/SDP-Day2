// Simple Form Validation Function
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill out all fields.");
        return false;
    }

    alert("Thank you, " + name + "! Your message has been sent successfully.");
    return false; // Prevents page reload for testing
}