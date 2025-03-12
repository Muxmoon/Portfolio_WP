// Language Toggle
const langButton = document.getElementById("lang-toggle");
let currentLang = "en";
langButton.addEventListener("click", () => {
        // Get all elements with data attributes
        document.querySelectorAll("[data-en]").forEach(element => {
            element.textContent = element.getAttribute(currentLang === "en" ? "data-jp" : "data-en");
        });
        // Toggle button text
        langButton.textContent = currentLang === "en" ? "English" : "日本語";
        // Switch language
        currentLang = currentLang === "en" ? "jp" : "en";
    });
// Dark Mode Toggle
const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        formStatus.textContent = "Sending...";

        const response = await fetch("https://script.google.com/macros/s/AKfycby0fT7f_ZWodKjwKas6VZbNnOvHIEOC-A23JLnhzir6EHS9aP-X2Bctuan08BaDNckP/exec", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            formStatus.textContent = "✅ Message sent!";
            form.reset();
        } else {
            formStatus.textContent = "❌ Error sending message!";
        }
    });
}


//
