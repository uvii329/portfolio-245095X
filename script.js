document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle code (already exists)
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Form submission code
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Get form values (optional, for personalized message)
        const name = form.elements["name"].value;

        // Display success message
        alert(`Thank you, ${name}! Your message has been received.`);

        // Optionally, clear the form
        form.reset();
    });
});
