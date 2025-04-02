document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.id = "theme-toggle";
    toggleButton.innerHTML = "🌞 / 🌙";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "8px 12px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.background = "var(--color-background)";
    toggleButton.style.color = "var(--color-text)";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    
    document.body.appendChild(toggleButton);

    const currentTheme = localStorage.getItem("color-theme") || "auto";

    function applyTheme(theme) {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("color-theme", "dark");
        } else {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("color-theme", "light");
        }
    }

    applyTheme(currentTheme);

    toggleButton.addEventListener("click", function () {
        const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(newTheme);
    });
});
