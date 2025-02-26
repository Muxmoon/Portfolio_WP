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
