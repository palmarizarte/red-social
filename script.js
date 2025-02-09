const darkMode = document.querySelector(".dark-mode");
const body = document.body;

const savedDarkMode = localStorage.getItem("dark-mode") === "true";

if (savedDarkMode) {
    body.classList.add("active");
    darkMode.classList.add("no-transition");
} else {
    darkMode.classList.add("no-transition");
}

darkMode.addEventListener("click", () => {
    body.classList.toggle("active");
    const isDarkMode = body.classList.contains("active");
    localStorage.setItem("dark-mode", isDarkMode);
    darkMode.classList.add("no-transition");
});

window.addEventListener("load", () => {
    darkMode.classList.add("no-transition");
    setTimeout(() => {
        darkMode.classList.remove("no-transition");
    }, 0);
});

