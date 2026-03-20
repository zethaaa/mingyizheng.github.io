document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("dark_mode_btn");
    const icon = btn.querySelector("i");

    let theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-bs-theme", theme);

    updateButton(theme);

    btn.addEventListener("click", () => {
        theme = (theme === "dark") ? "light" : "dark";

        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);

        updateButton(theme);
    });

    function updateButton(theme) {
        if (theme === "dark") {
            icon.className = "bi bi-sun";
            btn.classList.remove("btn-outline-dark");
            btn.classList.add("btn-outline-light");
        } else {
            icon.className = "bi bi-moon";
            btn.classList.remove("btn-outline-light");
            btn.classList.add("btn-outline-dark");
        }
    }
});