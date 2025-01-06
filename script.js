function loginSuccess(event) {
    event.preventDefault(); // Prevent form submission reload
    alert("Login Successful!");
    window.location.href = "index.html"; // Redirect to the homepage
}
